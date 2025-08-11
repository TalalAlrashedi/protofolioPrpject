import iphoneFrame from "../assets/apple-iphone-15-plus-black-portrait.png";
interface PhoneFrameProps {
  image: string;

}

const PhoneFrame = ({ image }: PhoneFrameProps) => {
  return (
    <div className="relative w-[100px] md:ml-3 md:w-[170px] md:mt-1 z-10 mt-5">
      <img src={iphoneFrame} alt="Phone" className="relative md:-left-[20px] md:top-[45px] z-10" />
      <div className="absolute top-[3.6%] left-[6%] md:top-[17%] md:-left-2 w-[90%] h-[100%] md:w-[85%] md:h-[100%] overflow-hidden">
        <img
          src={image}
          alt="Project on phone"
          loading="lazy"
          className={`w-100 h-[92.5%] rounded-xl md:rounded-2xl transition-opacity`}
        />
      </div>
    </div>
  );
};

export default PhoneFrame;