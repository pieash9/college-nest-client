import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
const Banner = () => {
  return (
    <div className="">
      <Carousel>
        <div className="relative flex justify-center items-center h-[450px] md:max-h-[100vh-3rem]">
          <img src={banner1} className="w-full h-full object-cover" />
          <div className="absolute md:px-20 px-5">
            <div>
              <p className="text-white font-semibold text-4xl md:text-6xl uppercase">
                WELCOME TO <span className="text-orange-500">College Nest</span>
              </p>
              <div className="flex gap-5 items-center justify-center">
                <button className="button-banner">Get Started</button>
                <button className="button-banner2">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[450px] md:max-h-[100vh-3rem]">
          <img src={banner2} className="w-full h-full object-cover" />
          <div className="absolute md:px-20 px-5">
            <p className="text-white font-semibold text-4xl md:text-6xl uppercase">
              EDUCATION <span className="text-orange-500">MASTER</span>
            </p>
            <div className="flex gap-5 items-center justify-center">
              <button className="button-banner">Get Started</button>
              <button className="button-banner2">Get Started</button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[450px] md:max-h-[100vh-3rem]">
          <img src={banner3} className="w-full h-full object-cover" />
          <div className="absolute md:px-20 px-5">
            <p className="text-white font-semibold text-4xl md:text-6xl uppercase">
              ADMISSION OPEN <span className="text-orange-500">2023</span>
            </p>
            <div className="flex gap-5 items-center justify-center">
              <button className="button-banner">Get Started</button>
              <button className="button-banner2">Get Started</button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
