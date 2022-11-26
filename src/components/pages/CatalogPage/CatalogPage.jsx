//импорт библиотек
import React from 'react';

//импорт стилей
import css from './CatalogPage.module.sass'
import {Rating} from "@mui/material";
const CatalogPage = () => {
    return (
        <section className={css.Container}>
            <aside>
                <div>
                    <h5>Цена</h5>
                    <input
                        type="text"
                        placeholder="От"
                    />
                    <input
                        type="text"
                        placeholder="До"
                    />
                </div>
                <div>
                    <h5>Состояние продукта</h5>
                    <ul>
                        <li>
                            <input type="checkbox"/> Новый
                        </li>
                        <li>
                            <input type="checkbox"/> Ресейл
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Срок доставки</h5>
                    <ul>
                        <li>
                            <input name='any' type="radio"/> Любой
                        </li>
                        <li>
                            <input name='till_7_days' type="radio"/> до 7 дней
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>Категория продукта</h5>
                    <ul>
                        <li>
                            <input type="checkbox"/> Компьютеры
                        </li>
                        <li>
                            <input type="checkbox"/> Телефоны
                        </li>
                        <li>
                            <input type="checkbox"/> Планшеты
                        </li>
                        <li>
                            <input type="checkbox"/> Аудио
                        </li>
                        <li>
                            <input type="checkbox"/> Телевизоры
                        </li>
                        <li>
                            <input type="checkbox"/> Камеры
                        </li>
                        <li>
                            <input type="checkbox"/> Гаджеты
                        </li>
                        <li>
                            <input type="checkbox"/> Цифр. продукты
                        </li>
                    </ul>
                </div>
                <form>
                    <h5>Сортировать по</h5>
                    <ul>
                        <li>
                            <input type="radio" id="popular" name="popular" value="Популярности"/> <label htmlFor="popular">Популярности</label>
                        </li>
                        <li>
                            <input type="radio" id="rating" name="rating" value="Рейтингу"/> <label htmlFor="rating">Рейтингу</label>
                        </li>
                        <li>
                            <input type="radio" id="discount" name="discount" value="Скидке"/> <label htmlFor="discount">Скидке</label>
                        </li>
                        <li>
                            <input type="radio" id="new" name="new" value="Новизне"/> <label htmlFor="new">Новизне</label>
                        </li>
                        <li>
                            <input type="radio" id="reviews" name="reviews" value="Отзывам"/> <label htmlFor="reviews">Отзывам</label>
                        </li>
                    </ul>
                </form>

            </aside>
            <div className={css.CatalogCards}>
                <div className={css.CardBlock}>
                    <div>
                        <img src="https://i.ibb.co/q5WT6y0/Phone1-eb95663bcfd06ff6786f.webp" alt="iphone"/>
                    </div>
                    <div>
                        <h3>
                            Смартфон Apple iPhone 13 Pro
                        </h3>
                        <div>
                            <Rating
                                name='read-only'
                                value={5}
                                readOnly
                            />
                            <p>
                                4.9
                            </p>
                        </div>

                    </div>
                    <div>
                        <p>485 000₸</p>
                        <button className='button_primary'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={css.CardBlock}>
                    <div>
                        <img src="https://i.ibb.co/q5WT6y0/Phone1-eb95663bcfd06ff6786f.webp" alt="iphone"/>
                    </div>
                    <div>
                        <h3>
                            Смартфон Apple iPhone 13 Pro
                        </h3>
                        <div>
                            <Rating
                                name='read-only'
                                value={5}
                                readOnly
                            />
                            <p>
                                4.9
                            </p>
                        </div>

                    </div>
                    <div>
                        <p>485 000₸</p>
                        <button className='button_primary'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={css.CardBlock}>
                    <div>
                        <img src="https://i.ibb.co/q5WT6y0/Phone1-eb95663bcfd06ff6786f.webp" alt="iphone"/>
                    </div>
                    <div>
                        <h3>
                            Смартфон Apple iPhone 13 Pro
                        </h3>
                        <div>
                            <Rating
                                name='read-only'
                                value={5}
                                readOnly
                            />
                            <p>
                                4.9
                            </p>
                        </div>

                    </div>
                    <div>
                        <p>485 000₸</p>
                        <button className='button_primary'>Добавить в корзину</button>
                    </div>
                </div>
                <div className={css.CardBlock}>
                    <div>
                        <img src="https://i.ibb.co/q5WT6y0/Phone1-eb95663bcfd06ff6786f.webp" alt="iphone"/>
                    </div>
                    <div>
                        <h3>
                            Смартфон Apple iPhone 13 Pro
                        </h3>
                        <div>
                            <Rating
                                name='read-only'
                                value={5}
                                readOnly
                            />
                            <p>
                                4.9
                            </p>
                        </div>

                    </div>
                    <div>
                        <p>485 000₸</p>
                        <button className='button_primary'>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatalogPage;