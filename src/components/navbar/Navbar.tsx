import React from "react";
import './navbar.css';
import logoBlack from "../../assets/images/logo_black.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = React.memo(() => {
    const location = useLocation();

    const [currentTab, setCurrentTab] = React.useState(location.pathname);

    React.useEffect(() => {
        setCurrentTab(location.pathname);
    }, [location]);

    const paths = { 
        home: '/',
        teams: '/teams',
        calendar: '/calendar',
        matchCreate: '/match/create',
    }

    console.log(currentTab)
    return (
        <nav className='cf-navbar'>
            <Link to='/'><img src={logoBlack} width={150} height={60} alt='logo' /></Link>
            <Link className={`cf-menu__item ${currentTab === paths.home ? 'cf-menu__item--active' : ''}`} to={paths.home}>HOME</Link>
            <Link className={`cf-menu__item ${currentTab === paths.teams ? 'cf-menu__item--active' : ''}`} to={paths.teams}>TIMES</Link>
            <Link className={`cf-menu__item ${currentTab === paths.calendar ? 'cf-menu__item--active' : ''}`} to={paths.calendar}>CALENDÁRIO</Link>
            <Link className={`cf-menu__item ${currentTab === paths.matchCreate ? 'cf-menu__item--active' : ''}`} to={paths.matchCreate}>CRIAR PARTIDA</Link>
            <Link to='/profile'>PROFILE</Link>
        </nav>
    );
});

export default Navbar;