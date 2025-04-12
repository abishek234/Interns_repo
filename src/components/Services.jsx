import { useState, useEffect } from 'react';

export default function Services() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleButtonClick = () => {
    console.log("Navigate to /services");
    // Navigation would happen here in a real app with React Router
  };
  
  // Using the #8b52c4 purple color theme
  const purpleTheme = {
    primary: '#8b52c4',
    light: '#ac7dd6',
    lighter: '#dbc6ee',
    dark: '#6a3e96'
  };
  
  return (
    <div className="bg-transparent py-20 relative">
      {/* Decorative background elements - neurons */}
      <div className="absolute top-0 right-0 z-0 opacity-20">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="none" stroke={purpleTheme.primary} strokeWidth="1" d="M0,100 C40,50 60,50 100,100 C140,150 160,150 200,100 C240,50 260,50 300,100" />
          <circle cx="100" cy="100" r="3" fill={purpleTheme.primary} />
          <circle cx="200" cy="100" r="3" fill={purpleTheme.primary} />
          <circle cx="300" cy="100" r="3" fill={purpleTheme.primary} />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 z-0 opacity-20">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path fill="none" stroke={purpleTheme.primary} strokeWidth="1" d="M0,100 C40,150 60,150 100,100 C140,50 160,50 200,100 C240,150 260,150 300,100" />
          <circle cx="100" cy="100" r="3" fill={purpleTheme.primary} />
          <circle cx="200" cy="100" r="3" fill={purpleTheme.primary} />
          <circle cx="300" cy="100" r="3" fill={purpleTheme.primary} />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Animated subtitle */}
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
            <h5 className="text-xl font-medium mb-2" style={{ color: purpleTheme.primary }}>
              Services
            </h5>
          </div>
          
          {/* Animated title */}
          <div className={`transition-all duration-700 delay-100 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              We are driven by values
            </h1>
          </div>
          
          {/* Value cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 w-full">
            {[
              {
                title: "Customer Focus",
                description: "We truly care about our customers and their needs, putting them at the center of everything we do.",
                color: "bg-opacity-30"
              },
              {
                title: "Excellence",
                description: "Providing top-notch products and services that meet and exceed your expectations is our main priority.",
                color: "bg-opacity-30"
              },
              {
                title: "Transparency",
                description: "Transparency, honesty, and ethics are the backbone of everything we do in our business operations.",
                color: "bg-opacity-30"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-6 shadow-sm backdrop-blur-sm transition-all duration-700 ${value.color} ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                  backgroundColor: `${purpleTheme.lighter}30` // 30 is hex for low opacity
                }}
              >
                <div className="h-12 w-12 rounded-full flex items-center justify-center mb-4 shadow-md" 
                     style={{ backgroundColor: `${purpleTheme.lighter}80` }}> {/* 80 is hex for medium opacity */}
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={purpleTheme.primary}>
                    {index === 0 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    ) : index === 1 ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: purpleTheme.dark }}>{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
          
          {/* Description paragraph */}
          <div className={`max-w-2xl mb-8 text-gray-600 transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
            <p>
              Our values drive us and set us apart from others in the industry. We truly care about our customers, employees, and community. Providing you with top-notch products and services that meet and exceed your expectations is our main priority. Transparency, honesty, and ethics are the backbone of everything we do.
            </p>
          </div>
          
          {/* Button */}
          <div className={`transition-all duration-700 delay-700 ${loaded ? 'opacity-100' : 'opacity-0 transform translate-y-4'}`}>
            <button
              onClick={handleButtonClick}
              className="text-white font-medium py-3 px-6 rounded-full flex items-center transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ 
                backgroundColor: purpleTheme.primary,
                ':hover': {
                  backgroundColor: purpleTheme.dark
                }
              }}
            >
              Learn More
              <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.59-13.41L17 12l-3.41 3.41L12 13.83 14.17 12 12 10.17l1.59-1.58z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}