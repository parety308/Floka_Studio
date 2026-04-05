import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import UserFeedBack from '../components/UserFeedBack/UserFeedBack';
import Banner from '../components/Banner/Banner';
import Experience from '../components/Experience/Experience';
import ExperienceSlider from '../components/ExperienceSlider/ExperienceSlider';
import Portfolio from '../components/Portfolio/Portfolio';
import CursorFollower from '../components/CursorFollower/CursorFollower';
import MotionSection from '../components/MotionSection/MotionSection';
import HappyClient from '../components/HappyClient/HappyClient';


const HomeLayout = () => {
    return (
        <div className='min-h-screen w-12/13 mx-auto'>
            <CursorFollower />
            <Navbar />
            <Banner />

            <Experience />
            <ExperienceSlider />

            <main className='flex flex-col gap-30 my-30'>
                <Portfolio />
                <UserFeedBack />
                <MotionSection />
                <HappyClient />
            </main>
            <Footer />
        </div>
    );
};

export default HomeLayout;