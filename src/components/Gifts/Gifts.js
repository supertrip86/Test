import './Gifts.css';
import Logo1 from '../../assets/images/Gifts/1.jpg';
import Logo2 from '../../assets/images/Gifts/2.jpg';
import Logo3 from '../../assets/images/Gifts/3.jpg';
import Logo4 from '../../assets/images/Gifts/4.jpg';
import Logo5 from '../../assets/images/Gifts/5.jpg';
import Logo6 from '../../assets/images/Gifts/6.jpg';

const Gifts = () => {
    return (
        <div id="gift" className="gift-section gift">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mb-30">
                        <br />
                        <span className="wedding-title-meta">Gift</span>
                        <h2 className="wedding-title">Gift Registry</h2>
                    </div>
                    <div className="col-md-9 owl-carousel owl-theme">
                        <div className="client-logo">
                            <a href="#"><img src={Logo1} alt="" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src={Logo2} alt="" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src={Logo3} alt="" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src={Logo4} alt="" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src={Logo5} alt="" /></a>
                        </div>
                        <div className="client-logo">
                            <a href="#"><img src={Logo6} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gifts;