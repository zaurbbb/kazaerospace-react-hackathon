//импорт модулей
import React from 'react';

//импорт кастомных компонентов
import AboutSection from "./AboutSection/AboutSection";
import PopularReviews from "./PopularReviews/PopularReviews";
import VideoReviews from "./VideoReviews/VideoReviews";
import PopularModels from "./PopularModels/PopularModels";

const HomePage = () => {
    return (
        <>
            <PopularModels/>
            <VideoReviews/>
            <PopularReviews/>
            <AboutSection/>
        </>
    );
};

export default HomePage;