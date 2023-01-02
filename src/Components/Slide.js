import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div
      className="slide flex flex-col gap-6 items-start justify-center p-40"
      style={{ backgroundImage: `url(${image.src})` }}
      key={image.id}
    >
      <div className="slide-text container mx-auto flex flex-col items-start justify-center h-full gap-5 text-violet-50">
        <h1 className=" text-7xl uppercase font-semibold">{image.headline}</h1>
        <p className="w-4/5">{image.body}</p>
        <Link className="slide-btn uppercase border-2 py-3 px-8 h-14 w-72 hover:text-orange-50 font-medium duration-300">
          <span className="z-[2] absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full text-center">
            {image.cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;
