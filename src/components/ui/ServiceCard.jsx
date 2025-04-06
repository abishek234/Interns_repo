/* eslint-disable react/prop-types */

import img11 from "../assets/11.jpg";


export default function ServiceCard({
  imgSrc,
  title,
  description = (
    
              <ul>
            <li className="flex items-center">➤ Predictive analytics for strategic decision-making</li>
            <br />
            <li className="flex items-center">➤ Real-time data visualization and insights</li>
            <br />
            <li className="flex items-center">➤  AI-driven market trend analysis</li>
          </ul>
    ),  
}) {
  return (
    <>
    <div className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0 group">
    <a href="#" className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
      <img
        src={imgSrc || img11}
        className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-110"
      />
      <div className="absolute gradient transition duration-300 group-hover:bg-white group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
      <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
        <div className="h-1/2 relative">
          <div className="absolute bottom-0">
            <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:text-black group-hover:underline">
              {title}
            </h2>
          </div>
        </div>
        <div className="h-1/2">
          <p className="text-black pb-4 opacity-0 transition duration-300 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </a>
  </div>
  
  </>
  );
}