//импорт модулей
import React from 'react';

//импорт кастомных компонентов
import AboutSection from "./AboutSection/AboutSection";
import PopularReviews from "./PopularReviews/PopularReviews";

const HomePage = () => {
    return (
        <>
            <PopularReviews/>
            <AboutSection/>
        </>
    );
};

export default HomePage;