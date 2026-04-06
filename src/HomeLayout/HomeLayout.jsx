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
import ContactSection from '../components/ContactSection/ContactSection';
import Rewards from '../components/Rewards/Rewards';
import OurTeam from '../components/OurTeam/OurTeam';
import FAQSection from '../components/FAQSection/FAQSection';
import ScrollLine from '../components/ScrollLine/ScrollLine';
import Blog from '../components/Blog/Blog';
import FooterCTA from '../components/FooterCTA/FooterCTA';
import ApproachSection from '../components/ApproachSection/ApproachSection';


const HomeLayout = () => {
    return (
        <div className='min-h-screen w-12/13 mx-auto'>
            <CursorFollower />
            <Navbar />
            <Banner />
            <ApproachSection />
            <Experience />
            <ExperienceSlider />
            <main className='flex flex-col gap-30 my-20'>
                <Portfolio />
                <MotionSection />
                <HappyClient />
                <UserFeedBack />
                <ContactSection />
                <Rewards />
                <OurTeam />
                <FAQSection />
                <ScrollLine />
                <Blog />

            </main>
            <FooterCTA />
            <Footer />
        </div>
    );
};

export default HomeLayout;