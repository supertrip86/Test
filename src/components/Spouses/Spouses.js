import './Spouses.css';
import Bride from "../../assets/images/Spouses/bride.jpg";
import Groom from "../../assets/images/Spouses/groom.jpg";

const Spouses = ({ couple, location, weddingDate }) => {
    const date = new Date(weddingDate);

    const day = date.toLocaleString('it-IT', { day: '2-digit' });
    const month = date.toLocaleString('it-IT', { month: 'long' });
    const monthCapitalized = `${month.charAt(0).toUpperCase()}${month.slice(1)}`;
    const year = date.getFullYear();

    return (
        <div id="couple" className="bridegroom clear section-padding bg-pink">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-md-6">
                        <div className="item toright mb-30">
                            <div className="img"> <img src={Bride} alt="" /> </div>
                            <div className="info valign">
                                <div className="full-width">
                                    <h6>{couple.bride} {couple.brideSurname} </h6> <span>The Bride</span>
                                    <p>Noelle fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane semper non the fermen.</p>
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
                    </div>
                    <div className="col-md-6">
                        <div className="item mb-30">
                            <div className="img"> <img src={Groom} alt="" /> </div>
                            <div className="info valign">
                                <div className="full-width">
                                    <h6>{couple.groom} {couple.groomSurname} </h6> <span>The Groom</span>
                                    <p>Giovanni fringilla dui at elit finibus viverra thenec a lacus seda themo the miss druane semper non the fermen.</p>
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
                    </div>
                </div>
                <div className="text-center">
                    <h3 className="wedding-couple-title">Are getting married!</h3>
                    <h4 className="wedding-couple-subtitle">{monthCapitalized} {day}, {year} – {location.city}, {location.area}</h4>
                </div>
            </div>
        </div>
    );
}

export default Spouses;
