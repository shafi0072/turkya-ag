import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from '../../../Resorce/images/slick21.png';
import slick2 from '../../../Resorce/images/slick22.png';
import slick3 from '../../../Resorce/images/slick23.png';
import './Besion.scss'
const Slicks2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    };
    return (
        <div className="container mt-5">
        <Slider {...settings}>
          <div>
            <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" src={slick1} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Découpe Laser</h6>
                    </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
};

export default Slicks2;