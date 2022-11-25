//импорт модулей
import React, {useState, useEffect} from 'react';
import {Breadcrumbs, Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {YMaps, Map, ZoomControl, Placemark, Clusterer} from '@pbe/react-yandex-maps';
import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

//импорт кастом компонентов
import PopularModels from "../../elements/PopularModels/PopularModels";
import PopularReviews from "../../elements/PopularReviews/PopularReviews";
import SliderPrevButton from "../HomePage/MainInfo/SliderPrevButton/SliderPrevButton";
import SliderNextButton from "../HomePage/MainInfo/SliderNextButton/SliderNextButton";

//импорт стилей
import css from './ProductPage.module.sass'
import './ProductPageSwiper.sass'

//Импорт изображений
import Phone1 from './images/Phone1.webp';
import Phone2 from './images/Phone2.webp';
import Phone3 from './images/Phone3.webp';
import Phone4 from './images/Phone4.webp';
import Phone5 from './images/Phone5.webp';
import Heart from './images/Heart.svg';

const ProductPage = () => {
    const [lat, setLat] = useState(51.1605);
    const [lng, setLng] = useState(71.4704);

    useEffect(() => {
        async function fetch() {
            try {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setLat(position.coords.latitude);
                        setLng(position.coords.longitude);
                    });
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetch();
    }, []);

    const clusterPoints = [[lat - 0.001, lng - 0.001], [lat - 0.002, lng - 0.002], [lat + 0.001, lng + 0.001],
        [lat - 0.001, lng + 0.001], [lat - 0.004, lng + 0.010]]

    return (
        <>
            <section className={css.Container}>
                <article>
                    <Breadcrumbs separator="→" className={css.Breadcrumbs} styles={{color: 'white'}}
                                 aria-label="breadcrumb">
                        <Link to='/'>
                            OnDuken
                        </Link>
                        <Link to='/'>
                            Телефоны
                        </Link>
                        <Link to='/map'>
                            Смартфоны
                        </Link>
                    </Breadcrumbs>
                </article>
                <article className={css.ProductCard}>
                    <div className={css.ProductDescription}>
                        <div>
                            <h1 className={css.ProductName}>Смартфон Apple iPhone 14 128Gb голубой</h1>
                        </div>
                        <div className={css.ProductDetails}>
                            <div>
                                <Swiper
                                    slidesPerView={1}
                                    loop={true}
                                    pagination={true}
                                    modules={[Pagination, Navigation]}
                                    className='swiper-product'
                                >
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={Phone1} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={Phone2} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={Phone3} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={Phone4} alt="phone pic"/>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-slide-product'>
                                        <img src={Phone5} alt="phone pic"/>
                                    </SwiperSlide>

                                    <div>
                                        <SliderPrevButton/>
                                        <SliderNextButton/>
                                    </div>
                                </Swiper>
                            </div>
                            <div className={css.ProductDetailsInfo}>
                                <div>
                                    <Rating
                                        name='read-only'
                                        value={5}
                                        readOnly
                                    />
                                    <p>4.9</p>
                                    <p>(128 отзывов)</p>
                                </div>
                                <div>
                                    <h1>Цвет</h1>
                                    <div>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                        <button></button>
                                    </div>
                                </div>
                                <div>
                                    <h1>Объем памяти</h1>
                                    <div>
                                        <button className='button_secondary-outline'>128Gb</button>
                                        <button className='button_secondary-outline'>256Gb</button>
                                        <button className='button_secondary-outline'>512Gb</button>
                                        <button className='button_secondary-outline'>1 Tb</button>
                                    </div>
                                </div>
                                <div>
                                    <h1>Описание</h1>
                                    <p>iPhone 14 (и iPhone 14 Plus) — смартфон производства корпорации Apple, работающий на базе операционной системы iOS 16 и процессора Apple A15 Bionic.
                                        iPhone 14 является базовой моделью 16-го поколения; был представлен 7 сентября 2022 года</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={css.ProductInfo}>
                        <div>
                            <button className='button_dark'>Black Friday</button>
                            <button className='button_primary'>-20%</button>
                        </div>
                        <div>
                            <p>
                                <span className={css.HighlightedText}>482 000₸</span>
                                <span className={css.StrikethroughText}>532 000₸</span></p>
                        </div>
                        <div>
                            <p>Доставка <span className={css.HighlightedText}>26 ноября</span> - бесплатно</p>
                            <br/>
                            <p>Самовывоз <span className={css.HighlightedText}>25 ноября</span> сегодня</p>
                        </div>
                        <div>
                            <p>Характеристики</p>
                            <ul>
                                <li>Технология NFC: Да</li>
                                <li>Цвет: голубой</li>
                                <li>Тип экрана: OLED, Super Retina XDR display</li>
                                <li>Диагональ: 6.1 дюйм</li>
                                <li>Размер оперативной памяти: 6 ГБ</li>
                                <li>Процессор: 6-ядерный Apple A15 Bionic</li>
                                <li>Объем встроенной памяти: 128 ГБ</li>
                                <li>Емкость аккумулятора: 3279 мАч</li>
                            </ul>
                        </div>
                        <div>
                            <button className='button_primary'>Добавить в корзину</button>
                            <button className='button_primary-outline'>
                                <img src={Heart} alt='heart'/>
                            </button>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <YMaps className={css.MapBlock}>
                    <Map width="100%" height="700px" defaultState={{center: [lat, lng], zoom: 15}}>
                        <Placemark geometry={[lat, lng]} properties={{iconContent: "Я"}}
                                   options={{preset: "islands#darkGreenIcon"}}/>
                        <ZoomControl/>
                        <Clusterer
                            options={{
                                preset: "islands#invertedVioletClusterIcons",
                                groupByCoordinates: false,
                            }}
                        >
                            {clusterPoints.map((coordinates, index) => (
                                <Placemark key={index} geometry={coordinates}/>
                            ))}
                        </Clusterer>
                    </Map>
                </YMaps>
            </section>
            <PopularReviews text="Отзывы покупателей"/>
            <PopularModels text="С этим товаром покупают"/>
        </>
    );
};

export default ProductPage;