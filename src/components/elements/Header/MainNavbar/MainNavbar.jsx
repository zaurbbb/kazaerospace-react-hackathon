//импорт библиотек
import React from 'react';

//импорт стилей
import css from './MainNavbar.module.sass';

//импорт изображений
import OnDukenLogo from './images/onduken_logo.svg';
import CatalogIcon from './images/katalog_icon.svg';
import SearchIcon from './images/search_icon.svg';
import ArrowIcon from './images/arrow_icon.svg';
import HeartIcon from './images/heart_icon.svg';
import BasketIcon from './images/basket_icon.svg';
import ProfileIcon from './images/profile_icon.svg';


const MainNavbar = () => {
    return (
        <div className={css.Container}>
            <div className={css.LogoBlock}>
                <img src={OnDukenLogo} alt="site's logo"/>
            </div>
            <div className={css.CatalogBlock}>
                <button className='button button_danger'>
                    <img src={CatalogIcon} alt="icon"/> Каталог
                </button>
            </div>
            <div className={css.InputBlock}>
                <div className={css.SearchElement}>
                    <img src={SearchIcon} alt="search icon"/>
                </div>
                <input
                    type="text"
                    placeholder="Я хочу найти"
                />
            </div>
            <div className={css.ButtonsBlock}>
                <div>
                    <img src={ArrowIcon} alt="ArrowIcon"/>
                    <p>Заказы</p>
                </div>
                <div>
                    <img src={HeartIcon} alt="HeartIcon"/>
                    <p>Избранное</p>
                </div>
                <div>
                    <img src={BasketIcon} alt="BasketIcon"/>
                    <p>Корзина</p>
                </div>
                <div>
                    <img src={ProfileIcon} alt="ProfileIcon"/>
                    <p>Профиль</p>
                </div>
            </div>
        </div>
    );
};

export default MainNavbar;