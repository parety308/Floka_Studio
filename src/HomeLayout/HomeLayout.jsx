import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import UserFeedBack from '../components/UserFeedBack/UserFeedBack';
import Banner from '../components/Banner/Banner';
import Experience from '../components/Experience/Experience';

const HomeLayout = () => {
    return (
        <div className='min-h-screen w-12/13 mx-auto'>
            <Navbar />
            <Banner />
            <Experience />
            <UserFeedBack />
            <Footer />
        </div>
    );
};

export default HomeLayout;