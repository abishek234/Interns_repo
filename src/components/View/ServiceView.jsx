import Navbar from "../Navbar";
import service1 from "../assets/Service.png";

export default function ServiceView (){
    return (
        <>
        <Navbar />
        <div className="mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-center gap-5 px-3 pb-28 pt-28 md:flex-row md:pb-[180px] lg:gap-6 lg:px-0 lg:pt-[140px]">
          <div className="flex flex-col items-start gap-4">
            <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
              Services
            </h5>
            <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
              We are driven by values
            </h1>
            <p className="mb-4 max-w-[485px] text-para">
            Our values drive us and set us apart from others in the industry. We truly care about our customers, employees, and community. Providing you with top-notch products <br /> and services that meet and exceed your expectations is <br /> our main priority. Transparency, honesty, and ethics are <br /> the backbone of everything we do.
            </p>
            {/* <Button title="Learn More" Icon={FaWhatsapp} /> */}
          </div>
    
          <div className="max-h-[660px] max-w-[622px]">
            <img
              className="custom-animate size-[85%] object-contain md:size-full"
              src={service1}
              alt="About"
            />
          </div>
          
        </div>
        
        </>
      );
}