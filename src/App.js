//импорт библиотек
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

//импорт кастомных компонентов
import Header from "./components/elements/Header/Header";
import Footer from "./components/elements/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";

//импорт стилей
import './app.sass'


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
