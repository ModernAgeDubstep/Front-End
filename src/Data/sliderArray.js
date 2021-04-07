import ImgContainer from "../components/reuseable/carousel/ImgContainer";

// Carousel Images:
import cyber from "../assets/CarouselImages/cyber.jpg";
import dj from "../assets/CarouselImages/dj.jpg";
import dys1 from "../assets/CarouselImages/dys1.jpg";
import dys2 from "../assets/CarouselImages/dys2.jpg";
import studio from "../assets/CarouselImages/studio.jpg";

export const sliderArr = [
  <ImgContainer src={cyber} alt="cyber punk" />,
  <ImgContainer src={dj} alt="Dj" />,
  <ImgContainer src={dys1} alt="dystopian" />,
  <ImgContainer src={dys2} alt="dystopian" />,
  <ImgContainer src={studio} alt="music studio" />,
];
