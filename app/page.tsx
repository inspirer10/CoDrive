import About from './Components/About/About';
import AvailableRides from './Components/AvailableRides/AvailableRides';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Navbar from './Components/Navbar/Navbar';
import Stories from './Components/Stories/Stories';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <HowItWorks />
            <AvailableRides />
            <About />
            <Stories />
            <Faq />
            <Footer />
        </>
    );
}
