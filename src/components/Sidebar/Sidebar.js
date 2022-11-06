import './Sidebar.css';
import { useState } from "react";
import { Link } from 'react-scroll';
import Logo from "../../assets/images/Sidebar/logo.png";

const Sidebar = () => {
    const [show, setShow] = useState(false);

    const openMenu = (e) => {
        e.preventDefault();
        setShow(!show);
        document.body.classList.toggle("offcanvas");
    };

    const closeMenu = (e) => {
        setShow(false);
        document.body.classList.remove("offcanvas");
    };

    return (
        <>
            <a
                href="/"
                onClick={openMenu}
                className={`js-wedding-nav-toggle wedding-nav-toggle${ show ? " active" : "" }`}
            >
                <i></i>
            </a>
            <aside id="wedding-aside">
                <div className="wedding-logo">
                    <a href="/">
                        <img src={Logo} alt="" />
                        <span>Olivia <small>&</small> Enrico</span>
                        <h6>15.11.2021</h6>
                    </a>
                </div>
                <nav className="wedding-main-menu">
                    <ul>
                        <li>
                            <Link onClick={closeMenu} to="home" spy={true} smooth={true} duration={1000}>Home</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="couple" spy={true} smooth={true} offset={50} duration={1000}>Couple</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="story" spy={true} smooth={true} offset={50} duration={1000}>Our Story</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="friends" spy={true} smooth={true} offset={50} duration={1000}>Friends</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="organization" spy={true} smooth={true} offset={50} duration={1000}>Organization</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="gallery" spy={true} smooth={true} offset={50} duration={1000}>Gallery</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="whenwhere" spy={true} smooth={true} offset={50} duration={1000}>When & Where</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="rsvp" spy={true} smooth={true} offset={50} duration={1000}>R.S.V.P</Link>
                        </li>
                        <li>
                            <Link onClick={closeMenu} to="gift" spy={true} smooth={true} offset={50} duration={1000}>Gift Registry</Link>
                        </li>
                    </ul>
                </nav>
                <div className="footer1"> <span className="separator"></span>
                    <p>Olivia & Enrico wedding<br />15 December 2022, New York</p>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
