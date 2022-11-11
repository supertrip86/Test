import './Gifts.css';
import Logo1 from '../../assets/images/Gifts/1.jpg';

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
                            <a href="/"><img src={Logo1} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gifts;