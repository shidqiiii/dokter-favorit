import React from 'react'
import '../CSS/Landing Page/LandingPage.css';
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer';
import Newsletter from '../Components/Landing Page/Newsletter';
import Header from '../Components/Header';
import Features from '../Components/Landing Page/Features';
import Faq from '../Components/Landing Page/Faq';
import Feedback from '../Components/Landing Page/Feedback';


export default function LandingPage() {
    return (
        <>
            <NavigationBar />
            <Header />
            <Features />
            <Feedback />
            <Faq />
            <Newsletter />
            <Footer />
        </>
    )
}
