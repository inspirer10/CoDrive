import About from './Components/About/About';
import AvailableRides from './Components/AvailableRides/AvailableRides';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <AvailableRides />
            <Faq />
            <Footer />
        </>
    );
}
