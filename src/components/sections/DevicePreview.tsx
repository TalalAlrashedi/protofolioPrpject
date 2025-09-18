import { useEffect, useState } from "react";
import LaptopFrame from "../../utils/LaptopFrame";
import PhoneFrame from "../../utils/PhoneFrame";

const allImages = [
  "/project/castleofwallpaper.jpeg",
  "/project/castleofwallpaperResponsive.png",
  "/project/IntelliCite.png",
  "/project/intellciteResponsive.jpeg",
  "/project/AttendanceProject.png",
  "/project/studentManagmentResponsive.jpeg",
  "/project/ActivationClone.png",
  "/project/activationResponsive.jpeg",
  "/project/unitedairlinesClone.png",
  "/project/unitedAirlinesResponsive.jpeg",
  "/project/RiyadhSeasonClone.png",
  "/project/riyadhResponsive.jpeg",
  "/project/Todolist.png",
  "/project/todolistResponsive.jpeg",
];

const laptopImages = allImages.filter(
  (img) => !img.toLowerCase().includes("responsive")
);
const phoneImages = allImages.filter((img) =>
  img.toLowerCase().includes("responsive")
);

const DevicePreview = () => {
  const [laptopIndex, setLaptopIndex] = useState(0);
  const [phoneIndex, setPhoneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setLaptopIndex((prev) => (prev + 1) % laptopImages.length);
        setPhoneIndex((prev) => (prev + 1) % phoneImages.length);
      }, 500); //
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center mt-4">
      <LaptopFrame image={laptopImages[laptopIndex]} />
      <PhoneFrame image={phoneImages[phoneIndex]} />
    </div>
  );
};

export default DevicePreview;
