import { Button } from "./ui";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import  about from "./assets/aboutus.jpg";

export default function About() {
  let Navigate = useNavigate(); // Initialize useNavigate hook

  const handleButtonClick = () => {
    Navigate('/about'); // Navigate to the About page
  };
  return (
    <>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
        <div className="max-h-[495px] max-w-[586px]">
          <img
            className="custom-animate size-[85%] object-contain md:size-full"
            src={about}
            alt="About"
          />
        </div>

        <div className="flex flex-col items-start gap-4">
          <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
            About Us
          </h5>
          <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
            Our Story
          </h1>
          <p className="mb-4 max-w-[485px] text-para">
            🡆 With a focus on the travel industry, our skilled team has been offering businesses efficient business solutions since 2012. <br />
            🡆 We have developed cutting-edge blockchain and artificial intelligence solutions especially for the travel industry because we understand the particular challenges that travel businesses face. <br />    
            🡆 With a focus on establishing enduring relationships with our clients based on openness, integrity, and honesty, our teams experience in this industry enables us to offer customized solutions that are useful and efficient. <br />
            🡆 By keeping abreast of emerging trends and technologies, we are able to deliver superior products and services that precisely align with the needs of our clients. We have the expertise to produce results whether we are creating a blockchain-based loyalty program or putting in place an AI-driven recommendation engine. <br />
            🡆 Our commitment to our clients success motivates us to support them in thriving in the cutthroat travel sector. 
          </p>
          <Button title="Learn More" Icon={TbCircleArrowRightFilled} onClick={handleButtonClick} />
        </div>
        
        {/* Add a bottom margin to create space before ListItems */}
        <div className="mb-10"></div> {/* Adjust the value as needed */}
      </div>
    
    </>
  );
}
