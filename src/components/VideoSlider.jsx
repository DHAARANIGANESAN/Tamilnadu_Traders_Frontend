// VideoSlider.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './VideoSlider.css'; // Custom styling for the slider

const VideoSlider = ({ videos }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false, // Remove navigation arrows
    adaptiveHeight: true, // Adjust slide height based on content
    centerMode: true, // Center the active slide
  };

  return (
    <div className="video-slider-container">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <iframe
              title={`Video ${index}`}
              src={video.url}
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
