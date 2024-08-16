import React from 'react'
import Slider from 'react-slick'
import Card from '../../components/Card'
import { DATA_STACK } from './data'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './styles.scss'

const MainStack: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    className: 'center',
    centerMode: true,
    arrows: false
  }

  return (
    <section id='mainStack' className="mainStackContainer">
      <div className="content">
        <h2>Stack principal</h2>

        <Slider {...settings} className="cardContent">
          {DATA_STACK.map((stack, index) => (
            <Card key={index} {...stack} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default MainStack
