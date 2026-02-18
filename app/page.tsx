import About from './Components/About/About';
import AvailableRides from './Components/AvailableRides/AvailableRides';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Highlights from './Components/Highlights/Highlights';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Navbar from './Components/Navbar/Navbar';
import OurImpact from './Components/OurImpact/OurImpact';
import Stories from './Components/Stories/Stories';
import Testimonials from './Components/Testimonials/Testimonials';
import WhyUs from './Components/WhyUs/WhyUs';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Highlights />
            <OurImpact />
            <WhyUs />
            <HowItWorks />
            <AvailableRides />
            <About />
            <Testimonials />
            <Stories />
            <Faq />
            <Footer />
        </>
    );
}
