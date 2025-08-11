import laptopFrame from "../assets/apple-macbookpro16-front.png";

interface LaptopFrameProps {
  image: string;

}

const LaptopFrame = ({ image }: LaptopFrameProps) => {
  return (
    <div className="relative w-[320px] md:w-[670px]">
      <img src={laptopFrame} alt="Laptop" className="w-full h-auto object-contain" />
      <div className="absolute top-[11%] left-[10%] w-[80%] h-[78%] overflow-hidden shadow-md rounded-md">
        <img
          src={image}
          alt="Project on laptop"
          loading="lazy"
          className={`w-full h-full transition-opacity duration-500 `}
        />
      </div>
    </div>
  );
};

export default LaptopFrame;