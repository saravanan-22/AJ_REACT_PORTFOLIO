import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../images/movie_app_image1.jpg";
import image2 from "../../images/movie_app_image2.jpg";
import image3 from "../../images/movie_app_image3.jpg";
import image4 from "../../images/movie_app_image4.jpg";
import image5 from "../../images/movie_app_image5.jpg";
import image6 from "../../images/movie_app_image6.jpg";
import image7 from "../../images/oqdb_image1.jpg";
import image8 from "../../images/oqdb_image2.jpg";
import image9 from "../../images/oqdb_image3.jpg";
import image10 from "../../images/oqdb_image4.jpg";
import image11 from "../../images/oqdb_image5.jpg";
import image12 from "../../images/oqdb_image6.jpg";
import image13 from "../../images/oqdb_image7.jpg";
import image14 from "../../images/oqdb_image8.jpg";
import image15 from "../../images/oqdb_image9.jpg";
import image16 from "../../images/oqdb_image10.jpg";
import image17 from "../../images/oqdb_image11.jpg";
import image18 from "../../images/oqdb_image12.jpg";
import image19 from "../../images/oqdb_image13.jpg";
import image20 from "../../images/quiz_image1.jpg";
import image21 from "../../images/quiz_image2.jpg";
import image22 from "../../images/quiz_image3.jpg";
import image23 from "../../images/quiz_image4.jpg";
import image24 from "../../images/quiz_image5.jpg";
import image25 from "../../images/quiz_image6.jpg";
import image26 from "../../images/quiz_image7.jpg";
import image27 from "../../images/quiz_image8.jpg";
import "./carousel.css";
import { Link } from "react-scroll";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  // Sample image URLs
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image25,
    image26,
    image27,
  ];

  return (
    <div className="image-carousel Container">
      <Slider {...settings}>
        {imageUrls.map((image, index) => (
          <div key={index}>
            <Link to="projects">
              <img
                src={image}
                alt={`Image ${index}`}
                className="carousel-image"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
