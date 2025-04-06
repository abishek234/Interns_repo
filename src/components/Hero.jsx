import { Button } from "./ui";
import { useNavigate } from "react-router-dom";
import hero from "./assets/hero.png";
export default function Hero() {
  let Navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    Navigate('/about'); // Navigate to the About page
  };
  return (
    <div className="pd:pb-[90px] mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between gap-4 px-3 pb-10 pt-[80px] md:flex-row lg:gap-[72px] lg:px-0 lg:pt-[108px]">
      <div className="mt-10 flex flex-col items-start gap-6 md:mt-0">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          MyEconics
        </h5>
        <h1 className="font-poppins text-4xl font-bold text-[#031432] md:text-5xl md:leading-[120%]">
        Welcome to MyEconics: Pioneering AI-Driven Business Solutions
        </h1>
        <p className="max-w-[452px] text-para">
        At MyEconics, we harness the power of Artificial Intelligence to revolutionize your business. Our global team of AI experts and tech visionaries is dedicated to creating intelligent, scalable solutions that drive unprecedented growth and efficiency.

        </p>
        <Button title="Learn More" onClick={handleButtonClick} />
      </div>

      <div className="max-h-[506px] max-w-[678px]">
        <img
          className="custom-animate size-full object-contain"
          src={hero}
          alt="Hero"
        />
      </div>
    </div>
  );
}
