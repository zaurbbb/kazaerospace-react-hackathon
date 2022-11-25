//импорт модулей
import React from 'react';

//импорт кастомных компонентов
import AboutSection from "./AboutSection/AboutSection";
import PopularReviews from "./PopularReviews/PopularReviews";
import VideoReviews from "./VideoReviews/VideoReviews";

const HomePage = () => {
    return (
        <>
            <VideoReviews/>
            <PopularReviews/>
            <AboutSection/>
        </>
    );
};

export default HomePage;