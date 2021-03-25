import React from "react";
import './navbar.css';
import logoBlack from "../../assets/images/logo_black.png";
import { Link } from "react-router-dom";

const Navbar = React.memo(() => {
    console.log(logoBlack)
    return (
        <nav className='cf-navbar'>
            <Link to='/'><img src={logoBlack} width={150} height={60} alt='logo' /></Link>
            <Link className='cf-menu__item' to='/'>HOME</Link>
            <Link className='cf-menu__item' to='/teams'>TIMES</Link>
            <Link className='cf-menu__item' to='/calendar'>CALENDÁRIO</Link>
            <Link className='cf-menu__item' to='/team/create'>CRIAR PARTIDA</Link>
            <Link to='/profile'>PROFILE</Link>
        </nav>
    );
});

export default Navbar;