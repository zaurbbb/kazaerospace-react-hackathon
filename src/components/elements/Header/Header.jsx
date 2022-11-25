//импорт модулей
import React from 'react';

//импорт кастомных компонентов
import CategoriesNavbar from "./CategoriesNavbar/CategoriesNavbar";
import SecondaryNavbar from "./SecondaryNavbar/SecondaryNavbar";
import MainNavbar from "./MainNavbar/MainNavbar";

const Header = () => {
    return (
        <>
            {/*навбар с кнопками смены языка, выбора региона и смены темы*/}
            <SecondaryNavbar/>
            {/*навбар с кнопкой каталога, полем поиска, ссылками на страницы заказов, избранных, корзины и профиля*/}
            <MainNavbar/>
            {/*навбра с основными категриями товаров на сайте*/}
            <CategoriesNavbar/>
        </>
    );
};

export default Header;