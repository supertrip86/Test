import './Sidebar.css';
import { useState } from "react";
import { Link } from 'react-scroll';
import Logo from "../../assets/images/Sidebar/logo.png";

const Sidebar = ({ couple, location, weddingDate }) => {
    const [show, setShow] = useState(false);

    const date = new Date(weddingDate);

    const day = date.toLocaleString('it-IT', { day: '2-digit' });
    const monthShort = date.toLocaleString('it-IT', { month: '2-digit' });
    const monthLong = date.toLocaleString('it-IT', { month: 'long' });
    const year = date.getFullYear();

    const openMenu = (e) => {
        e.preventDefault();
        setShow(!show);
        document.body.classList.toggle("offcanvas");
    };

    const closeMenu = () => {
        setShow(false);
        document.body.classList.remove("offcanvas");
    };

    return (
        <>
            <a
                href="/"
                onClick={openMenu}
                className={`js-wedding-nav-toggle wedding-nav-toggle${show ? " active" : ""}`}
            >
            </a>
            <aside id="wedding-aside">
                <div className="wedding-logo">
                    <a href="/">
                        <img src={Logo} alt="" />
                        <span>{couple.bride} <small>&</small> {couple.groom}</span>
                        <h6>{day}.{monthShort}.{year}</h6>
                    </a>
                </div>
                <nav className="wedding-main-menu">
                    <ul>
                        <li>
                            <Link onClick={closeMenu} to="home" spy={true} smooth={true} duration={1000}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="couple" spy={true} smooth={true} duration={1000}>Couple</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="story" spy={true} smooth={true} duration={1000}>Our Story</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="seeyou" spy={true} smooth={true} duration={1000}>The Date</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="organization" spy={true} smooth={true} duration={1000}>Organization</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="gallery" spy={true} smooth={true} duration={1000}>Gallery</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="whenwhere" spy={true} smooth={true} duration={1000}>When & Where</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="rsvp" spy={true} smooth={true} duration={1000}>R.S.V.P</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="gift" spy={true} smooth={true} duration={1000}>Gift Registry</Link>
                        </li>
                    </ul>
                </nav>
                <div className="footer1"> <span className="separator"></span>
                    <p>{couple.bride} & {couple.groom}<br />{day} {monthLong} {year}, {location.city}</p>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
