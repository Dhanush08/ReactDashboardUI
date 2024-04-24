import Card from '../SavedCardItem';
import './index.css'

const SavedCardSection = () => { 
    const colors = [{
        color: "#3399ff",
        text : "My Saved Library 1"
    },
    {
        color: "#7070db",
        text : "My Saved Library 2"
    },
    {
        color: "#ff0000",
        text : "My Saved Library 3"
    },
    {
        color: "#ff9900",
        text : "My Saved Library 4"
    },
    {
        color: "#00e600",
        text : "My Saved Library 5"
    }];

    return (
        <div className='saved-cards-container'>
            {colors.map((item, index) =>
                <Card key={index} giveColor={item.color} text={item.text} />
            )}
        </div>
    );
}

export default SavedCardSection;