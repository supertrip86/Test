import './WhenWhere.css';
import where1 from '../../assets/images/WhenWhere/where-1.jpg'
import where2 from '../../assets/images/WhenWhere/where-2.jpg'
import where3 from '../../assets/images/WhenWhere/where-3.jpg'

const WhereWhere = () => {
    return (
        <div id='whenwhere' className='whenwhere section-padding bg-pink'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mb-30'>
                        <span className='wedding-title-meta'>Questions</span>
                        <h2 className='wedding-title'>When & Where</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='item col-12 col-md-4'>
                        <div className='whenwhere-img'>
                            <img src={where1} alt='' />
                        </div>
                        <div className='content'>
                            <h5>Wedding Ceremony</h5>
                            <p>
                                <i className='ti-location-pin'></i> 175 Broadway, Brooklyn, New
                                York 11244, USA
                            </p>
                            <p>
                                <i className='ti-time'></i> <span>12:00am – 13:00pm</span>
                            </p>
                        </div>
                    </div>
                    <div className='item col-12 col-md-4'>
                        <div className='whenwhere-img'>
                            <img src={where2} alt='' />
                        </div>
                        <div className='content'>
                            <h5>Wedding Party</h5>
                            <p>
                                <i className='ti-location-pin'></i> Fortune Brooklyn restaurant,
                                149 Broadway, Brooklyn, NY, USA
                            </p>
                            <p>
                                <i className='ti-time'></i> <span>14:00pm</span>
                            </p>
                        </div>
                    </div>
                    <div className='item col-12 col-md-4'>
                        <div className='whenwhere-img'>
                            <img src={where3} alt='' />
                        </div>
                        <div className='content'>
                            <h5>Accomodations</h5>
                            <p>
                                <i className='ti-direction-alt'></i> Hotel and distance from
                                wedding party restaurant:
                            </p>
                            <p>
                                <i className='ti-direction'></i> The William Vale (7 min)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhereWhere