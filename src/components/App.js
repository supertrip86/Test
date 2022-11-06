import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Spouses from "./Spouses/Spouses";
import Counter from "./Counter/Counter";
import OurStory from './OurStory/OurStory';
import Friends from "./Friends/Friends";
import SeeYou from './SeeYou/SeeYou';
import Organization from "./Organization/Organization";
import Gallery from "./Gallery/Gallery";
import WhenWhere from "./WhenWhere/WhenWhere";
import RSVP from "./RSVP/RSVP";
import Footer from './Footer/Footer';
import Gifts from "./Gifts/Gifts";

function App() {
    const weddingDate = "Dec 15, 2022 00:00:00";

    return (
        <div>
            <Sidebar />
            <div id="wedding-main">
                <Header />
                <Spouses />
                <Counter targetDate={weddingDate} />
                <OurStory />
                <Friends />
                <SeeYou />
                <Organization />
                <Gallery />
                <WhenWhere />
                <RSVP />
                <Gifts />
                <Footer />
            </div>
        </div>
    );
}

export default App;
