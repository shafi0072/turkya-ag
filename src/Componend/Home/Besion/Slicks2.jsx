import React, { Component }  from 'react';
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
        slidesToScroll: 2,
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
        <div className="container mt-5">
        <Slider {...settings}>
          <div>
            <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" style={{width:'100%'}} src={slick1} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Découpe Laser</h6>
                    </div>
            </div>
          </div>
          <div>
          <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" style={{width:'100%'}} src={slick2} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Usinage</h6>
                    </div>
            </div>
          </div>
          <div>
          <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" style={{width:'100%'}} src={slick3} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Métal en feuille</h6>
                    </div>
            </div>
          </div>
          <div>
            <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" style={{width:'100%'}} src={slick1} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Découpe Laser</h6>
                    </div>
            </div>
          </div>
          <div>
          <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" style={{width:'100%'}} src={slick2} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Usinage</h6>
                    </div>
            </div>
          </div>
          <div>
          <div className="card cardBorder" style={{width: '18rem'}}>
                    <img className="card-img-top" style={{width:'100%'}} src={slick3} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">Métal en feuille</h6>
                    </div>
            </div>
          </div>
        </Slider>
      </div>
    );
};

export default Slicks2;