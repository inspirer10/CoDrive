import About from './Components/About/About';
import AvailableRides from './Components/AvailableRides/AvailableRides';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Highlights from './Components/Highlights/Highlights';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Navbar from './Components/Navbar/Navbar';
import Stories from './Components/Stories/Stories';
import WhyUs from './Components/WhyUs/WhyUs';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <WhyUs />
            <Highlights />
            <HowItWorks />
            <AvailableRides />
            <About />
            <Stories />
            <Faq />
            <Footer />
        </>
    );
}
