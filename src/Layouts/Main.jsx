import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div className='bg-layout' >
            <Header></Header>
            <Outlet></Outlet>
            <div className='bg-base-300 pt:mb-32 pt-12'>
            <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;