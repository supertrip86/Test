import './SeeYou.css';

const Seeyou = ({ weddingDate }) => {
    const date = new Date(weddingDate);

    const day = date.toLocaleString('it-IT', { day: '2-digit' });
    const month = date.toLocaleString('it-IT', { month: '2-digit' });
    const year = date.getFullYear();

    return (
        <div
            id='seeyou'
            className='seeyou section-padding bg-img bg-fixed'
        >
            <div className='container'>
                <div className='row'>
                    <div className='section-head col-md-12 text-center'>
                        <h4>Looking forward to see you!</h4>
                        <h3>{day}.{month}.{year}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Seeyou