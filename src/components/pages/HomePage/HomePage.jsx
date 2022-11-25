//импорт модулей
import React from 'react';

//импорт кастомных компонентов
import AboutSection from "./AboutSection/AboutSection";
import VideoReviews from "./VideoReviews/VideoReviews";
import PopularModels from "../../elements/PopularModels/PopularModels";
import PopularReviews from "../../elements/PopularReviews/PopularReviews";
import MainInfo from "./MainInfo/MainInfo";

const HomePage = () => {
    return (
        <>
            <MainInfo/>
            <PopularModels/>
            <VideoReviews/>
            <PopularReviews/>
            <AboutSection/>
        </>
    );
};

export default HomePage;