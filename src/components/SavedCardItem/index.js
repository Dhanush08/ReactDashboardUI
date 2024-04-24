import './index.css';

const Card = (props) => { 
    const { giveColor, text } = props;
    return (
        <div className='saved-card'>
            <i className='bx bxs-credit-card-front saved-card-icon' style={{color: giveColor}}></i>
            <h1 className='saved-card-text'>{text}</h1>
            <span className='saved-date-text'>dd-mm-yyyy</span>
        </div>
    );
}

export default Card;