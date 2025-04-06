
// import ListItems from "../ListItems";
import Navbar from "../Navbar";
import Footer from "../ui/Footer";
import Process from "../Process";
import aboutus from "../assets/aboutus.jpg";
export default function Aboutview() {
  return (
    <>
       <Navbar />
       <div className="h-24 md:h-32 lg:h-48 w-full"></div>
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 -mt-12 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
        <div className="max-h-[495px] max-w-[586px]">
          <img
            className="custom-animate size-[85%] object-contain md:size-full"
            src={aboutus}
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
          
        </div>
        
        {/* No change needed here */}
      </div>
      <div className="mb-10">
      {/* <ListItems /> */}
      <Process />
      </div>
      <Footer />
    </>
  );
}
