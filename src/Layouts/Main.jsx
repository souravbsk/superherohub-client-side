import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Loader from '../Shared/Loader/Loader';

const Main = () => {
    const navigation = useNavigation();
    
    return (
        <div className='bg-layout' >
            <Header></Header>
            {
                navigation.state === "loading" ? <Loader></Loader> : 
            <Outlet></Outlet>
            }
            <div className='bg-base-300'>
            <Footer></Footer>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;