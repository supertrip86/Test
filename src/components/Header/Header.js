import './Header.css';
import { Animated } from 'react-animated-css';

const Header = () => {
    return (
        <header id="home" className="header valign bg-img parallaxie">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center caption">
                        <Animated animationIn="fadeInUp" animationInDuration={1000}>
                            <h1 className="animate-box">Olivia & Enrico</h1>
                        </Animated>
                        <Animated animationIn="fadeInUp" animationInDuration={1000}>
                            <h5 className="animate-box">15 December, 2022 – New York</h5>
                        </Animated>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;