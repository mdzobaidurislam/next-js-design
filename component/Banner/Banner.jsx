import Slider from "react-slick";
import BannerItems from "./BannerItems";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const bannsers = [1, 2, 3, 4];
  return (
    <>
      <div className="banner_container">
        <Slider {...settings}>
          {bannsers.map(() => (
            <BannerItems />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Banner;
