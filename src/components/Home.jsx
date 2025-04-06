import Navbar from "./Navbar";
import Hero from "./Hero";
// import ListItems from "./components/ListItems";
import About from "./About";
import Services from "./Services";
// import Offers from "./offer";
import Contact from "./Contact";
import ServiceCards from "./ServiceCards";
import Footer from "./ui/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F7FF]">
        <Hero />
      </div>

      <About />

      {/* Add a top margin to create space before the Services section */}
      <div className="mt-10 bg-[#F2F7FF]"> {/* Adjust the value as needed */}
        <Services />
        
      </div>
      <br />
      <br />
      <ServiceCards />

      <Contact />
     
      
      <Footer />
    </>
  );
}

export default Home;
