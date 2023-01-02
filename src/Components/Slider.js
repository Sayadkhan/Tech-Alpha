import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/206501/pexels-photo-206501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Selective Focus Photography of Black Ricoh Kir-10 Camera",
    headline: "Capture Life's Moments with Our Cameras.",
    body: "Take your photography to the next level with our range of cameras. From sleek point-and-shoot models to advanced DSLRs, we have a camera for every skill level and budget. With top brands like Canon, Nikon, and Sony, you can trust that you're getting the best equipment on the market. Whether you're a beginner or a seasoned pro, our selection of cameras has something for everyone. Shop now and start capturing stunning shots.",
    cta: "  Browes Camera",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/2726370/pexels-photo-2726370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Turned-on Flat Screen Smart Television Ahead",
    headline: "Huge Savings on TVs and Electronics at Our Online Store!",
    body: "Get the best deals on the latest TVs and electronics when you shop at our online store. We have a wide selection of products at unbeatable prices, so you can find exactly what you're looking for. Plus, with fast and free shipping on all orders, it's never been easier to upgrade your home entertainment setup. Don't miss out on these amazing deals - shop now and save!",
    cta: "Shop now",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Top View Photo of Black Wireless Headphones",
    headline: "Experience crystal-clear sound with our premium headphones",
    body: "Looking for high-quality headphones that deliver exceptional sound? Look no further! Our premium headphones offer crisp, clear audio that will enhance your listening experience. Whether you're at home, at the office, or on the go, these headphones are the perfect choice for all your audio needs. Order now and take the first step towards unparalleled sound quality.",
    cta: "buy now!",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/21067/pexels-photo.jpg",
    alt: "Person Holding Sony Ps4 Dualshock 4",
    headline: "",
    body: "",
    cta: "",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Rose Gold Aluminum Case Apple Watch With White Sports Band",
    headline: "",
    body: "",
    cta: "",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute z-[2] text-white text-2xl flex gap-10 bottom-20 w-screen justify-center">
        <button
          onClick={prevSlide}
          className="prev-btn h-12 w-20 bg-white/20 backdrop-blur-xl flex justify-center items-center hover:bg-white/90 hover:text-black duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-12 w-20 bg-white/20 backdrop-blur-xl flex justify-center items-center hover:bg-white/90 hover:text-black duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
