import './Counter.css';
import { useCountdown } from '../../hooks/useCountdown';

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds > 0) {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div
            id='countdown'
            className='section-padding bg-img bg-fixed'
            data-background='images/banner-1.jpg'
        >
            <div className='container'>
                <div className='row'>
                    <div className='section-head col-md-12'>
                        <h4>We will become a family in</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <ul>
                            <li>
                                <span id='days'>{days}</span>Days
                            </li>
                            <li>
                                <span id='hours'>{hours}</span>Hours
                            </li>
                            <li>
                                <span id='minutes'>{minutes}</span>Minutes
                            </li>
                            <li>
                                <span id='seconds'>{seconds}</span>Seconds
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer