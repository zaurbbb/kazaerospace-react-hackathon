//импорт модулей
import React from 'react';

//импорт модулей для свайпера
import {Navigation} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react';

//импорт кастомных компонентов
import Review from "../../../elements/Review/Review";
import SliderPrevButton from "./SliderPrevButton/SliderPrevButton";
import SliderNextButton from "./SliderNextButton/SliderNextButton";

//импорт стилей
import './PopularReviewsSwiper.css';
import css from './PopularReviews.module.sass';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//коллекция данных для слайдера
const DATA_FOR_REVIEWS = [
    {
        'product_title': 'MacBook Air 12',
        'product_icon': 'https://i.ibb.co/dkP7DGy/Group-53.png"',
        'rating_value': 4,
        'review_text': 'Очень довольна покупкой! Спасибо сервису за быструю доставку и приятное обслуживание. Приехал в отличном состоянии.',
        'user_icon': 'https://i.ibb.co/N7gg388/Ellipse-10.png',
        'user_name': 'Мерей Әбдiкарiм',
    },
    {
        'product_title': 'MacBook Air 12',
        'product_icon': 'https://i.ibb.co/dkP7DGy/Group-53.png"',
        'rating_value': 4,
        'review_text': 'Очень довольна покупкой! Спасибо сервису за быструю доставку и приятное обслуживание. Приехал в отличном состоянии.',
        'user_icon': 'https://i.ibb.co/N7gg388/Ellipse-10.png',
        'user_name': 'Мерей Әбдiкарiм',
    },
    {
        'product_title': 'MacBook Air 12',
        'product_icon': 'https://i.ibb.co/dkP7DGy/Group-53.png"',
        'rating_value': 4,
        'review_text': 'Очень довольна покупкой! Спасибо сервису за быструю доставку и приятное обслуживание. Приехал в отличном состоянии.',
        'user_icon': 'https://i.ibb.co/N7gg388/Ellipse-10.png',
        'user_name': 'Мерей Әбдiкарiм',
    },
];

const PopularReviews = () => {
    return (
        <section className={css.Container}>
            <h1>Популярные отзывы</h1>
            <Swiper
                slidesPerView={3}
                a
                loop={true}
                modules={[Navigation]}
                className='swiper-review'
            >
                {DATA_FOR_REVIEWS.map((item) => (
                    <SwiperSlide className='swiper-slide-review'>
                        <Review
                            product_title={item.product_title}
                            product_icon={item.product_icon}
                            review_text={item.review_text}
                            user_icon={item.user_icon}
                            user_name={item.user_name}
                            rating_value={item.rating_value}
                        />
                    </SwiperSlide>
                ))}
                    <SliderPrevButton/>
                    <SliderNextButton/>
            </Swiper>
        </section>
    );
};

export default PopularReviews;