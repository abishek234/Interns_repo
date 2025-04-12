import { useState, useEffect } from 'react';

export default function AboutPageTransparent() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Define the purple theme color to match the requested #8b52c4
  const purpleTheme = '#8b52c4';

  const bulletPoints = [
    {
      text: "With a focus on the travel industry, our skilled team has been offering businesses efficient business solutions since 2012.",
      icon: <span className="text-xl">💡</span>
    },
    {
      text: "We have developed cutting-edge blockchain and artificial intelligence solutions especially for the travel industry because we understand the particular challenges that travel businesses face.",
      icon: <span className="text-xl">🧬</span>
    },
    {
      text: "With a focus on establishing enduring relationships with our clients based on openness, integrity, and honesty, our team's experience in this industry enables us to offer customized solutions that are useful and efficient.",
      icon: <span className="text-xl">💻</span>
    },
    {
      text: "By keeping abreast of emerging trends and technologies, we are able to deliver superior products and services that precisely align with the needs of our clients.",
      icon: <span className="text-xl">🧠</span>
    },
    {
      text: "Our commitment to our clients' success motivates us to support them in thriving in the cutthroat travel sector.",
      icon: <span className="text-xl">🔬</span>
    }
  ];

  // Add neuron decorative elements
  const NeuronDecoration = () => (
    <>
      <div className="absolute top-0 right-0 z-0 opacity-30">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="none" stroke={purpleTheme} strokeWidth="1.5" d="M0,100 C40,50 60,50 100,100 C140,150 160,150 200,100 C240,50 260,50 300,100" />
          <circle cx="100" cy="100" r="3" fill={purpleTheme} />
          <circle cx="200" cy="100" r="3" fill={purpleTheme} />
          <circle cx="300" cy="100" r="3" fill={purpleTheme} />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 z-0 opacity-30">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="none" stroke={purpleTheme} strokeWidth="1.5" d="M0,100 C40,150 60,150 100,100 C140,50 160,50 200,100 C240,150 260,150 300,100" />
          <circle cx="100" cy="100" r="3" fill={purpleTheme} />
          <circle cx="200" cy="100" r="3" fill={purpleTheme} />
          <circle cx="300" cy="100" r="3" fill={purpleTheme} />
        </svg>
      </div>
      
      {/* Additional neuron connections */}
      <div className="absolute top-1/4 left-1/4 z-0 opacity-20">
        <svg width="300" height="300" viewBox="0 0 150 150">
          <path fill="none" stroke={purpleTheme} strokeWidth="1" d="M0,75 C30,30 45,30 75,75 C105,120 120,120 150,75" />
          <circle cx="75" cy="75" r="2" fill={purpleTheme} />
          <circle cx="30" cy="50" r="2" fill={purpleTheme} />
          <circle cx="120" cy="50" r="2" fill={purpleTheme} />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 z-0 opacity-20">
        <svg width="300" height="300" viewBox="0 0 150 150">
          <path fill="none" stroke={purpleTheme} strokeWidth="1" d="M0,75 C30,120 45,120 75,75 C105,30 120,30 150,75" />
          <circle cx="75" cy="75" r="2" fill={purpleTheme} />
          <circle cx="30" cy="100" r="2" fill={purpleTheme} />
          <circle cx="120" cy="100" r="2" fill={purpleTheme} />
        </svg>
      </div>
    </>
  );

  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden bg-transparent">
      {/* Neuron decorations */}
      <NeuronDecoration />
      
      {/* Content without outer card */}
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h5 className="text-semibold mb-2" style={{ color: purpleTheme }}>About Us</h5>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 relative inline-block pb-2">
            Our Story
            <div
              className={`absolute bottom-0 left-0 h-1 transition-all duration-1000 ease-out ${
                loaded ? 'w-3/5' : 'w-0'
              }`}
              style={{ backgroundColor: purpleTheme }}
            ></div>
          </h1>
        </div>

        {/* Grid with transparent inner cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {bulletPoints.map((point, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 bg-transparent">
                <div className="text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg" 
                     style={{ backgroundColor: purpleTheme }}>
                  {point.icon}
                </div>
                <p className="text-gray-800 text-base">{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            className="relative overflow-hidden px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{
              background: `linear-gradient(90deg, ${purpleTheme} 0%, #9c27b0 100%)`
            }}
          >
            <span className="flex items-center">
              Learn More
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}