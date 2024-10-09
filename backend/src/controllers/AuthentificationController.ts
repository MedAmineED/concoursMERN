import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer'; 
import dotenv from 'dotenv';
const path = require('path');

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const AuthentificationController = {
    register: async (req: Request, res: Response) => {
        const { email, pwd } = req.body;

        try {
            const userExist = await User.findOne({ where: { email } });
            if(!userExist){
                const user = await User.create({ email, pwd, confirmed: 0 });
                
                // Generate verification token
                const verificationToken = jwt.sign(
                    { userId: user.id },
                    process.env.JWT_SECRET || 'fallback_secret',
                    { expiresIn: '1d' }
                );

                // Send verification email
                await AuthentificationController.sendVerificationEmail(email, verificationToken);

                res.status(201).json({ message: 'Utilisateur créé. Veuillez vérifier votre email pour confirmer votre compte.', user });
            }else {
                res.status(409).json({  message : 'Deja existe'})
            }
        } catch (error) {
            res.status(400).json({ message: 'Erreur lors de la création de l\'utilisateur', error });
        }
    },

    login: async (req: Request, res: Response) => {
        const { email, pwd } = req.body;

        try {
            const user = await User.findOne({ where: { email } });

            if (user && await user.comparePassword(pwd)) {
                if (!user.confirmed) {
                    return res.status(401).json({ message: 'Veuillez confirmer votre email avant de vous connecter.' });
                }

                const secret = process.env.JWT_SECRET;

                if (!secret) {
                    return res.status(500).json({ message: 'Secret JWT manquant' });
                }

                const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
                return res.json({ token });
            }

            res.status(401).json({ message: 'Identifiants invalides' });
        } catch (error) {
            res.status(500).json({ message: 'Erreur serveur', error });
        }
    },

    sendVerificationEmail: async (email: string, token: string) => {
        const verificationUrl = `http://localhost:5055/api/verify-email?token=${token}`;

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: 'Vérifiez votre adresse email',
            html: `
                <p>Cliquez sur le lien suivant pour vérifier votre adresse email:</p>
                <a href="${verificationUrl}">${verificationUrl}</a>
            `
        };

        await transporter.sendMail(mailOptions);
    },

    verifyEmail: async (req: Request, res: Response) => {
        const { token } = req.query;

        if (!token) {
            return res.status(400).json({ message: 'Token manquant' });
        }

        try {
            const decoded = jwt.verify(token as string, process.env.JWT_SECRET || 'fallback_secret') as { userId: number };
            const user = await User.findByPk(decoded.userId);

            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }

            user.confirmed = 1;
            await user.save();
            const myPath = __dirname.split('\\');
            const lastItm = myPath.pop();
            const pathJoined =  myPath.join('/');
            res.sendFile(path.join(pathJoined, 'html/verif.html'));
        } catch (error) {
            res.status(400).json({ message: 'Token invalide ou expiré' });
        }
    }
};

export default AuthentificationController;