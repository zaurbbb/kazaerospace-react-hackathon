//импорт библиотек
import React from 'react';

//импорт кастомных компонентов
import CategoriesNavbar from "./CategoriesNavbar/CategoriesNavbar";
import SecondaryNavbar from "./SecondaryNavbar/SecondaryNavbar";
import MainNavbar from "./MainNavbar/MainNavbar";

const Header = () => {
    return (
        <>
            <SecondaryNavbar/>
            <MainNavbar/>
            <CategoriesNavbar/>
        </>
    );
};

export default Header;