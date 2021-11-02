import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../Resorce/images/serviceSlider1.png';
import img2 from '../../../Resorce/images/ServiceSlider2.png';
import img3 from '../../../Resorce/images/AdobeStock_90761829-min.png';
import './Service.scss';
const Slicks = () => {
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
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">CONCEPTION 3D/2D </h6>
                    </div>
                </div>
                </div>
                <div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img2} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">IMPRESSION 3D</h6>
                    </div>
                </div>
                </div>
                <div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img3} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text customText">Développement de produit</h6>
                    </div>
                </div>
                </div>
                <div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img1} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">CONCEPTION 3D/2D </h6>
                    </div>
                </div>
                </div>
                <div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img2} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text">IMPRESSION 3D</h6>
                    </div>
                </div>
                </div>
                <div>
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={img3} alt=""/>
                    <div className="card-body">
                        <h6 className="card-text customText">Développement de produit</h6>
                    </div>
                </div>
                </div>
            </Slider>
        </div>
    );
};

export default Slicks;