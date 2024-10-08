/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import HomePage from "../views/HomePage";
import MainPage from "../layout/MainPage";
import DepotAnnance from "../views/DepotAnnance";
import { useRoutes } from "react-router";
import Offre from "../views/Offre";
import Boutique from "../views/Boutique";
import Demande from "../views/Demande";
import ConnexionPage from "../views/ConnexionPage";
import { MainWheel } from "../views/MainWheel";


const Router= () => {
  const routes = [
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/bizzime",
      element: <MainPage />,
      children: [
        {
          path: "",
          element: <DepotAnnance />,
        },
        {
          path: "annance",
          element: <DepotAnnance />,
        },
        {
          path: "offre",
          element: <Offre />,
        },
        {
          path: "demande",
          element: <Demande />,
        },
        {
          path: "boutique",
          element: <Boutique />,
        },
        {
          path: "roulette",
          element: <MainWheel />,
        },
        {
          path: "connexion",
          element: <ConnexionPage />,
        },
      ],
    },
    // {
    //   path: "facture",
    //   element: <FactureCmp />,
    // },
    // {
    //   path: "editfact",
    //   element: <MainFacture />,
    // },
    // {
    //   path: "/login",
    //   element: <LoginForm />,
    // },
  ];

  return useRoutes(routes);
};

export default Router;