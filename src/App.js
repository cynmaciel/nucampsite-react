import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import React from 'react';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage.js';
import { fetchCampsites } from './features/campsites/campsitesSlice.js';
import { fetchPartners } from './features/partners/partnersSlice.js';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
    }, [dispatch]);


    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage/> }/>
                <Route path='about' element={<AboutPage/> }/>
                <Route path='directory' element={<CampsitesDirectoryPage/> }/>
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;