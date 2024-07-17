import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect, useRef } from "react";

const OurTeamCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slickSlider = sliderRef.current;

    if (slickSlider) {
      slickSlider.slickGoTo(0);
    }
  }, []);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const images = [
    "/ourteams/Lukman.jpg",
    "/ourteams/Fasiha.jpg",
    "/ourteams/Reza.jpg",
    "/ourteams/Annisa.jpg",
    "/ourteams/Husni.jpg",
    "/ourteams/Alfina.jpg",
    "/ourteams/Alvito.jpg",
    "/ourteams/Fadhilah.jpg",
    "/ourteams/Desi.jpg",
    "/ourteams/Dzikri.jpg",
    "/ourteams/Faisal.jpg",
    "/ourteams/Siti.jpg",
    "/ourteams/Ririn.jpg",
    "/ourteams/Hilma.jpg",
  ];

  return (
    <div>
      <Slider {...settings} className="py-3 sm:py-5 flex items-center justify-center" ref={sliderRef}>
        {images.map((src, index) => (
          <div key={index} className="p-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <Image src={src} alt={`Slide ${index}`} width={500} height={500} className="rounded-lg object-cover w-full h-auto" priority />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        @media (max-width: 768px) {
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OurTeamCarousel;
