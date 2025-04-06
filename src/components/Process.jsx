import { FaChartLine } from "react-icons/fa";
import { MdOutlineAssessment } from "react-icons/md";
import { MdOutlineModelTraining } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
export default function Process() {
    return (
    //     <section className="relative">

    //         {/* Section background (needs .relative class on parent and next sibling elements) */}
    //         <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
    //         <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

    //         <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
    //             <div className="py-12 md:py-20">

    //                 {/* Section header */}
    //                 <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
    //                     <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">OUR AI PROCESS</h2>
    //                     <p className="text-xl text-gray-600">From Data to Intelligence: The MyEconics AI Approach</p>
    //                 </div>

    //                 {/* Items */}
    //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    //                     {/* 1st item */}
    //                     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //                         <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    //                             <g fill="none" fillRule="evenodd">
    //                                 <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
    //                                 <g strokeWidth="2">
    //                                     <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
    //                                     <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
    //                                     <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
    //                                     <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
    //                                 </g>
    //                             </g>
    //                         </svg>
    //                         <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Business Objective Analysis</h4>
    //                         <p className="text-gray-600 text-center">We align AI capabilities with your specific business goals.</p>
    //                     </div>

    //                     {/* 2nd item */}
    //                     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //                         <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    //                             <g fill="none" fillRule="evenodd">
    //                                 <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
    //                                 <g strokeWidth="2" transform="translate(19.429 20.571)">
    //                                     <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
    //                                     <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
    //                                     <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
    //                                 </g>
    //                             </g>
    //                         </svg>
    //                         <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Deployment and Monitoring</h4>
    //                         <p className="text-gray-600 text-center">We deploy your AI solution and provide continuous monitoring for optimal performance.</p>
    //                     </div>

    //                     {/* 3rd item */}
    //                     <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //                         <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    //                             <g fill="none" fillRule="evenodd">
    //                                 <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
    //                                 <g strokeLinecap="square" strokeWidth="2">
    //                                     <path className="stroke-current text-blue-300" d="M38.826 22.504a9.128 9.128 0 00-13.291-.398M35.403 25.546a4.543 4.543 0 00-6.635-.207" />
    //                                     <path className="stroke-current text-white" d="M19.429 25.143A6.857 6.857 0 0126.286 32v1.189L28 37.143l-1.714.571V40A2.286 2.286 0 0124 42.286h-2.286v2.285M44.571 25.143A6.857 6.857 0 0037.714 32v1.189L36 37.143l1.714.571V40A2.286 2.286 0 0040 42.286h2.286v2.285" />
    //                                 </g>
    //                             </g>
    //                         </svg>
    //                         <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">AI Model Selection and Design</h4>
    //                         <p className="text-gray-600 text-center"> We choose and customize the most appropriate AI models for your needs.</p>
    //                     </div>
                   

    //                 {/* 4th item */}
    //                 <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //                     <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    //                         <g fill="none" fillRule="evenodd">
    //                             <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
    //                             <g transform="translate(22.857 19.429)" strokeWidth="2">
    //                                 <path className="stroke-current text-white" strokeLinecap="square" d="M12.571 4.571V0H0v25.143h12.571V20.57" />
    //                                 <path className="stroke-current text-white" d="M16 12.571h8" />
    //                                 <path className="stroke-current text-white" strokeLinecap="square" d="M19.429 8L24 12.571l-4.571 4.572" />
    //                                 <circle className="stroke-current text-blue-300" strokeLinecap="square" cx="12.571" cy="12.571" r="3.429" />
    //                             </g>
    //                         </g>
    //                     </svg>
    //                     <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Development and Training</h4>
    //                     <p className="text-gray-600 text-center">Our AI engineers develop and train models using state-of-the-art techniques.</p>
    //                 </div>

    //                 {/* 5th item */}
    //                 <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //                     <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    //                         <g fill="none" fillRule="evenodd">
    //                             <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
    //                             <g strokeLinecap="square" strokeWidth="2">
    //                                 <path className="stroke-current text-white" d="M20.571 20.571h13.714v17.143H20.571z" />
    //                                 <path className="stroke-current text-blue-300" d="M38.858 26.993l6.397 1.73-4.473 16.549-13.24-3.58" />
    //                             </g>
    //                         </g>
    //                     </svg>
    //                     <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Integration and Testing</h4>
    //                     <p className="text-gray-600 text-center"> We seamlessly integrate AI solutions into your existing systems and rigorously test for accuracy and efficiency.</p>
    //                 </div>

    //                 {/* 6th item */}
    //                 <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl transform hover:translate-y-2 hover:shadow-xl transition duration-300">
    //                     <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    //                         <g fill="none" fillRule="evenodd">
    //                             <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
    //                             <g strokeWidth="2">
    //                                 <path className="stroke-current text-white" d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714" />
    //                                 <path className="stroke-current text-white" d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286" />
    //                                 <path className="stroke-current text-white" d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286" />
    //                                 <path className="stroke-current text-blue-300" d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572" strokeLinecap="square" />
    //                             </g>
    //                         </g>
    //                     </svg>
    //                     <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Iterative Improvement</h4>
    //                     <p className="text-gray-600 text-center">Our team constantly refines and updates your AI models to ensure they evolve with your business.</p>
    //                 </div>

    //             </div>

    //         </div>
    //     </div>
    //   </section >

    


<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center ">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">OUR AI PROCESS</h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-base">From Data to Intelligence: The MyEconics AI Approach</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg> */}
            <FaChartLine />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Business Objective Analysis</h2>
          <p className="leading-relaxed text-base">We align AI capabilities with your specific business goals.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg> */}
            <MdOutlineAssessment />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Data Assessment and Preparation</h2>
          <p className="leading-relaxed text-base">Our data scientists evaluate and prepare your data for AI applications.
          </p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg> */}
            <MdOutlineModelTraining />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">AI Model Selection and Design</h2>
          <p className="leading-relaxed text-base">We choose and customize the most appropriate AI models for your needs.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
            </svg> */}
            <MdDeveloperMode />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Development and Training</h2>
          <p className="leading-relaxed text-base">Our AI engineers develop and train models using state-of-the-art techniques.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg> */}
            <SiSpeedtest />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Integration and Testing</h2>
          <p className="leading-relaxed text-base"> We seamlessly integrate AI solutions into your existing systems and rigorously test for accuracy and efficiency.</p>
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg transform hover:translate-y-2 hover:shadow-xl transition duration-300">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg> */}

            <AiOutlineDeploymentUnit />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Deployment and Monitoring</h2>
          <p className="leading-relaxed text-base">We deploy your AI solution and provide continuous monitoring for optimal performance.
          </p>
        </div>
      </div>
    </div>
   
  </div>
</section>



    // <div className="text-gray-700 bg-white antialiased" >







    //     <section className="container mx-auto px-6 p-10">
    //       <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">OUR AI PROCESS</h2>
    //       <div className="flex items-center flex-wrap mb-20">
    //         <div className="w-full md:w-1/2 pr-10">
    //           <h4 className="text-3xl text-gray-800 font-bold mb-3">Vortex</h4>
    //           <p className="text-gray-600 mb-8">We align AI capabilities with your specific business goals..</p>
    //         </div>
    //         <div className="w-full md:w-1/2">
    //           <img className="rounded-lg" src="https://cdn.gamma.app/hrp0i8z0una9jzg/generated-images/NH8Ch2hAYLPCmNrHajfS4.jpg" alt="Vortex"  />
    //         </div>
    //       </div>
    //       <div className="flex items-center flex-wrap mb-20">
    //         <div className="w-full md:w-1/2">
    //           <img className="rounded-lg" src="https://cdn.gamma.app/hrp0i8z0una9jzg/generated-images/NH8Ch2hAYLPCmNrHajfS4.jpg" alt="use the force" />
    //         </div>
    //         <div className="w-full md:w-1/2 pl-10">
    //           <h4 className="text-3xl text-gray-800 font-bold mb-3">Use the Force!</h4>
    //           <p className="text-gray-600 mb-8">We will never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different!</p>
    //         </div>
    //       </div>
    //       <div className="flex items-center flex-wrap mb-20">
    //         <div className="w-full md:w-1/2 pr-10">
    //           <h4 className="text-3xl text-gray-800 font-bold mb-3">Life creates it</h4>
    //           <p className="text-gray-600 mb-8">There is no try. I cant. Its too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is.</p>
    //         </div>
    //         <div className="w-full md:w-1/2">
    //           <img className="rounded-lg" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ferikkain%2Ffiles%2F2018%2F01%2FRey-Luke.jpg" alt="Syncing" />
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    )
}