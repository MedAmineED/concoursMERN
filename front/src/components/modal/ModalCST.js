import React, { useState } from 'react'
import './modalCST.css'
const ModalCST = ({ handleClose }) => {


  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <span className="close-btn" onClick={handleClose}>
        &times;
      </span>
      <h2>Vérification de l'e-mail</h2>
      <p>
        Merci de vérifier votre e-mail pour valider votre compte. Un lien de vérification a été envoyé à votre adresse e-mail.
      </p>
      <button className="close-modal-btn" onClick={handleClose}>
        Fermer
      </button>
    </div>
  </div>
  )
}

export default ModalCST
