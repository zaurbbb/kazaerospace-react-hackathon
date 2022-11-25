//импорт библиотек
import React from 'react';

//импорт стилей
import css from './CategoriesNavbar.module.sass';


const CategoriesNavbar = () => {
    return (
        //список основных категориев
        <ul className={css.Container}>
            <li><a href="#">Компьютеры</a></li>
            <li><a href="#">Телефоны</a></li>
            <li><a href="#">Планшеты</a></li>
            <li><a href="#">Аудио</a></li>
            <li><a href="#">Телевизоры</a></li>
            <li><a href="#">Камеры</a></li>
            <li><a href="#">Гаджеты</a></li>
            <li><a href="#">Цифровые продукты</a></li>
        </ul>
    );
};

export default CategoriesNavbar;