import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Spouses from "./Spouses/Spouses";
import Counter from "./Counter/Counter";
import OurStory from './OurStory/OurStory';
import SeeYou from './SeeYou/SeeYou';
import Organization from "./Organization/Organization";
import Gallery from "./Gallery/Gallery";
import WhenWhere from "./WhenWhere/WhenWhere";
import RSVP from "./RSVP/RSVP";
import Footer from './Footer/Footer';
import Gifts from "./Gifts/Gifts";

function App() {

    const couple = {
        bride: "Noelle",
        brideSurname: "Turtur",
        groom: "Giovanni",
        groomSurname: "Giunta"
    };
    
    const location = {
        city: "Rome",
        area: "Appia Antica",
        party: "Villa Rosantica"
    };

    const weddingDate = "Jul 01, 2023 18:00:00";

    return (
        <div>
            <Sidebar couple={couple} location={location} weddingDate={weddingDate} />
            <div id="wedding-main">
                <Header couple={couple} location={location} weddingDate={weddingDate} />
                <Spouses couple={couple} location={location} weddingDate={weddingDate} />
                <Counter targetDate={weddingDate} />
                <OurStory />
                <SeeYou weddingDate={weddingDate} />
                <Organization />
                <Gallery />
                <WhenWhere />
                <RSVP />
                <Gifts />
                <Footer couple={couple} location={location} weddingDate={weddingDate} />
            </div>
        </div>
    );
}

export default App;
