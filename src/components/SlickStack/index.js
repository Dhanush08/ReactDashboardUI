import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const SampleNextArrow = ({className, to, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
            <i className='bx bxs-right-arrow-circle arrow-color' icon={to}></i>
        </button>
        
    );
}

const SamplePrevArrow = ({className, to, onClick}) => {
    return (
        <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={to}>
            <i className='bx bxs-left-arrow-circle arrow-color' icon={to}></i>
        </button>
    );
}

const SlickStack = (props) => {
    const { data } = props;

    var settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow to="next"/>,
        prevArrow: <SamplePrevArrow to="prev"/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((item, index) => (
                <div key={index} className='slick-stack-card'>
                    <div className='slick-stack-card-top'>
                        <img src={item.imgsrc} alt={item.title} />
                    </div>
                    <div className='slick-stack-card-bottom'>
                        <h1 className='slick-stack-card-title'>{item.title}</h1>
                        <p className='slick-stack-card-caption'>{item.caption}</p>
                    </div>
                </div>
            ))}    
          </Slider>
        </div>
      );
}

export default SlickStack;