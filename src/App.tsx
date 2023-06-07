import React from 'react';
import Counter from './components/Counter';
import './App.scss'
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import About from './pages/AboutPage/About';
import Main_page from './pages/MainPage/Main_page';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './Theme/useTheme';
import className from './helpers/classname';

function App() {
    const {theme, toggleTheme}=useTheme()
    return (
        <div className={className('app',{test:false},[theme])}>
                 <button onClick={toggleTheme}>TOGGLE</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/about' element={<AboutPageAsync/>}/>
            <Route path='/' element={<MainPageAsync/>}/>
          </Routes>
      </Suspense>
        
        </div>
    );
}

export default App;