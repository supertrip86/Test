import './Spouses.css';
import { Animated } from 'react-animated-css';
import Bride from "../../assets/images/Spouses/bride.jpg";
import Groom from "../../assets/images/Spouses/groom.jpg";

const Spouses = () => {
    return (
        <div id="couple" className="bridegroom clear section-padding bg-pink">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-md-6">
                        <Animated animationIn="fadeInLeft" isVisible={true} animationInDuration={1000}>
                            <div className="item toright mb-30 animate-box">
                                <div className="img"> <img src={Bride} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Olivia Martin <i className="ti-heart"></i></h6> <span>The Bride</span>
                                        <p>Olivia fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane semper non the fermen.</p>
                                        <div className="social">
                                            <div className="full-width">
                                                <a href="#0" className="icon"> <i className="ti-facebook"></i> </a>
                                                <a href="#0" className="icon"> <i className="ti-twitter"></i> </a>
                                                <a href="#0" className="icon"> <i className="ti-instagram"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </div>
                    <div className="col-md-6">
                        <Animated animationIn="fadeInRight" animationInDuration={1000}>
                            <div className="item mb-30 animate-box">
                                <div className="img"> <img src={Groom} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Enrico Danilo <i className="ti-heart"></i></h6> <span>The Groom</span>
                                        <p>Enrico fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane semper non the fermen.</p>
                                        <div className="social">
                                            <div className="full-width">
                                                <a href="#0" className="icon"> <i className="ti-facebook"></i> </a>
                                                <a href="#0" className="icon"> <i className="ti-twitter"></i> </a>
                                                <a href="#0" className="icon"> <i className="ti-instagram"></i> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    </div>
                </div>
                <div className="row">
                    <Animated className="col-md-12 text-center" animationIn="fadeInUp" animationInDuration={1000}>
                        <h3 className="wedding-couple-title">Are getting married!</h3>
                        <h4 className="wedding-couple-subtitle">December 15, 2022 — New York, Brooklyn</h4>
                    </Animated>
                </div>
            </div>
        </div>
    );
}

export default Spouses;
