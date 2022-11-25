//импорт модулей
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

//импорт кастомных компонентов
import Header from "./components/elements/Header/Header";
import Footer from "./components/elements/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";

//импорт стилей
import './app.sass'
import LogoutPage from "./components/pages/LogoutPage/LogoutPage";


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/logout" element={<LogoutPage/>}/>
            </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
