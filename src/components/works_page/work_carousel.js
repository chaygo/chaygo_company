import Slider from 'react-slick'
import React , {useState} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import image1 from '../../images/image1.jpg'

const Work_carousel = ({work}) => {
  const [sliderRef, setSliderRef] = useState(null)
  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  }
  const hotelCards = [
    {
      image_url:
        image1,
      title: 'Studio Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 50/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
        image_url:
        image1,  
    title: 'Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 80/Day',
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
        image_url:
        image1,
        title: 'King Deluxe Room',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 150/Day',
      features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
    },
    {
        image_url:
        image1,
         title: 'Royal Suite',
      description: 'Lorem ipsum dolor sit amet, consectur dolori',
      pricingText: 'USD 299/Day',
      features: [
        'Free Wifi',
        'Free breakfast',
        'Discounted Meals',
        "MacBook for work use (hotel's property)",
      ],
    },
  ]

  return (
    <div className='content'>
      <div className='controls'>
      <button onClick={sliderRef?.slickPrev}>
        <FaChevronLeft />
      </button>
      <button onClick={sliderRef?.slickNext}>
        <FaChevronRight />
      </button>
      </div>
      <Slider ref={setSliderRef} {...sliderSettings}>
      {hotelCards.map((card, index) => (
          <div key={index} className="card">
            <h2 className='card-header'>{card.title}</h2>
            <img alt={card.title} src={card.image_url} width="100" height="100" className='card-image' />
            <p className='text-info mb-5'>{card.description}</p>
            
            <button className='btn'>Buy Now</button>
          </div>
        ))}
    
    </Slider>
  </div>


  )

}
export default Work_carousel