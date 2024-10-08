import React from 'react'
import NavBarCST from './../components/navbarCST/NavBarCST';
import FooterCST from './../components/footer/FooteCST';
import { Outlet } from 'react-router';

const MainPage = ({children}) => {
  return (
        <div id="bloc-page">
            <NavBarCST/>
                <Outlet />
            <FooterCST />
        </div>
  )
}

export default MainPage
