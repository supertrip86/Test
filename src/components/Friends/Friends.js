import './Friends.css';
import Eleanor from '../../assets/images/Friends/b1.jpg'
import Stefano from '../../assets/images/Friends/w1.jpg'
import Vanessa from '../../assets/images/Friends/b2.jpg'
import Matthew from '../../assets/images/Friends/w2.jpg'
import Fredia from '../../assets/images/Friends/b3.jpg'
import Pablo from '../../assets/images/Friends/w3.jpg'

const Friends = () => {
    return (
        <div id="friends" className="friends section-padding bg-pink">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-30">
                        <span className="wedding-title-meta">Our best friends ever</span>
                        <h2 className="wedding-title mb-30">Thanks for being there</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="img"> <img src={Eleanor} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Eleanor Chris</h6><span>Bridesmaids</span>
                                        <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img"> <img src={Stefano} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Stefano Smiht</h6><span>Groomsmen</span>
                                        <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img"> <img src={Vanessa} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Vanessa Brown</h6><span>Bridesmaids</span>
                                        <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img"> <img src={Matthew} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Matthew Brown</h6><span>Groomsmen</span>
                                        <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img"> <img src={Fredia} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Fredia Halle</h6><span>Bridesmaids</span>
                                        <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img"> <img src={Pablo} alt="" /> </div>
                                <div className="info valign">
                                    <div className="full-width">
                                        <h6>Pablo Dante</h6><span>Groomsmen</span>
                                        <p>Enstibulum eringilla dui athe elitene miss minibus viverra nectar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friends;