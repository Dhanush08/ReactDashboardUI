import './index.css';

const timelineData = [
    {
        date: "February 12, 2024",
        title: "Industrial Production",
        info: "Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year."
    },
    {
        date: "February 05, 2024",
        title: "CPI Inflation",
        info: "India's Inflation eased to 5.1% in Jan, a 60 basis points decrease from the previous month. Consumer Food Price Index (CFPI) declined from 9.5% in Dec'23 to 8.3% in December as compared to 10.4% YoY growth in the same month last year."
    },
    {
        date: "January 18, 2024",
        title: "Stock Prices",
        info: "As Wilson pointed out, 90% of the S&P 500's advance since its October 2022 low has been driven by multiple expansions, meaning investors are paying increasingly high prices for every unit of expected earnings growth over the coming year."
    },
    {
        date: "January 09, 2024",
        title: "AI Revolution",
        info: "Artificial Intelligence or AI is the technology behind the fourth industrial revolution that has brought great changes all around the world. It is usually defined as the study of intelligent systems that could execute tasks and activities that would require human level intelligence."
    }
];

const Timeline = () => {
    return (
        <div className='timeline-container'>
            <div className='timeline-top'>
                <h1 className='timeline-heading'>Recent Releases</h1>
                <select className='timeline-select'>
                    <option>India</option>
                    <option>USA</option>
                    <option>Japan</option>
                </select>
            </div>
            <hr className='h-line' />
            {timelineData.map((item, index) => (
                <div key={index} className='timeline-card'>
                    <div className='timeline-first'>
                        <i class='bx bxs-circle timeline-icon'></i>
                        <hr className='v-line'/>
                    </div>
                    <div className='timeline-second'>
                        <h1 className='event-date'>{item.date}</h1>
                        <h1 className='event-name'>{item.title}</h1>
                        <p className='e-information'>{item.info}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Timeline;