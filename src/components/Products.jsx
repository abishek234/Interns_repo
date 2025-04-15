import { useState, useEffect } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import axios from "axios";
import Navbar from './Navbar';
import NeuronBackground from '../../src/components/neurons/neurons';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching product data...");
        setLoading(true);
        
        const response = await axios.get("http://localhost:3000/products/get");
        console.log("Received data:", response.data);
        
        // Handle if response is single product or array
        let productsData = Array.isArray(response.data) ? response.data : [response.data];
        
        // If no products, add sample data
        if (productsData.length === 0) {
          productsData = [
            {
              _id: "product1",
              title: "Premium Headphones",
              description: "High-quality wireless headphones with noise cancellation and premium sound quality. Comfortable for all-day wear with extended battery life.",
              heroimage: "/api/placeholder/500/600",
              keyPoints: [
                "Active noise cancellation",
                "40-hour battery life",
                "Premium sound quality",
                "Comfortable fit"
              ]
            },
            {
              _id: "product2",
              title: "Smart Watch Pro",
              description: "Track your fitness, receive notifications, and more with this premium smartwatch. Water resistant and long battery life make it perfect for any lifestyle.",
              heroimage: "/api/placeholder/500/600",
              keyPoints: [
                "Heart rate monitoring",
                "Water resistant 50m",
                "7-day battery life",
                "GPS tracking"
              ]
            },
            {
              _id: "product3",
              title: "Ultra Slim Laptop",
              description: "Powerful performance in an incredibly thin and light design. Perfect for work or entertainment on the go with stunning display and all-day battery life.",
              heroimage: "/api/placeholder/500/600",
              keyPoints: [
                "Latest processor",
                "16GB RAM",
                "512GB SSD storage",
                "14-hour battery life"
              ]
            }
          ];
        }
        
        // Process all products
        const processedProducts = productsData.map(product => ({
          id: product._id || `product-${Math.random().toString(36).substr(2, 9)}`,
          title: product.title || "Product Title",
          description: product.description || "No description available",
          heroimage: product.heroimage 
            ? `http://localhost:3000${product.heroimage}` 
            : "/api/placeholder/500/600",
          keyPoints: Array.isArray(product.keyPoints) ? product.keyPoints : []
        }));
        
        setProducts(processedProducts);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError(`Failed to load product data: ${err.message}`);
        
        // Set sample data if error
        setProducts([
          {
            id: "product1",
            title: "Premium Headphones",
            description: "High-quality wireless headphones with noise cancellation and premium sound quality. Comfortable for all-day wear with extended battery life.",
            heroimage: "/api/placeholder/500/600",
            keyPoints: [
              "Active noise cancellation",
              "40-hour battery life",
              "Premium sound quality",
              "Comfortable fit"
            ]
          },
          {
            id: "product2",
            title: "Smart Watch Pro",
            description: "Track your fitness, receive notifications, and more with this premium smartwatch. Water resistant and long battery life make it perfect for any lifestyle.",
            heroimage: "/api/placeholder/500/600",
            keyPoints: [
              "Heart rate monitoring",
              "Water resistant 50m",
              "7-day battery life",
              "GPS tracking"
            ]
          },
          {
            id: "product3",
            title: "Ultra Slim Laptop",
            description: "Powerful performance in an incredibly thin and light design. Perfect for work or entertainment on the go with stunning display and all-day battery life.",
            heroimage: "/api/placeholder/500/600",
            keyPoints: [
              "Latest processor",
              "16GB RAM",
              "512GB SSD storage",
              "14-hour battery life"
            ]
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <>
        {/* Fixed neuron background */}
        <div className="fixed inset-0 z-0">
          <NeuronBackground density={0.8} speed={0.6} />
        </div>
        
        <div className="flex h-screen items-center justify-center">
          <div className="flex flex-col items-center z-10">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-300 border-t-blue-500"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Fixed neuron background */}
      <div className="fixed inset-0 z-0">
        <NeuronBackground density={0.8} speed={0.6} />
      </div>
      
      {/* Scrollable content container */}
      <div className="relative min-h-screen">
        {/* Content positioned above the canvas with z-index to ensure it's above the background */}
        <div className="relative z-10">
          <Navbar />
          
          {error && (
            <div className="mx-auto my-4 max-w-6xl rounded-md bg-red-50 p-3 text-red-500">
              {error}
            </div>
          )}

          <div className="mx-auto max-w-6xl py-12 pb-24">
            <h1 className="mb-12 text-center text-4xl font-bold text-gray-800">
              Our Products
            </h1>
            
            <div className="space-y-24">
              {products.map((product, index) => {
                // Alternate layout based on index (even/odd)
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={product.id}
                    className="group"
                  >
                    
                    {/* Section Divider Line */}
                    {index > 0 && (
                      <div className="mb-24 flex justify-center">
                        <div className="h-px w-24 bg-gray-200"></div>
                      </div>
                    )}
                    
                    <div className={`flex flex-col items-center gap-12 md:items-stretch ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Image with subtle animation */}
                      <div className="overflow-hidden rounded-lg shadow-lg md:w-1/2">
                        <div className="relative h-full w-full overflow-hidden">
                          <img
                            src={product.heroimage || "/api/placeholder/500/600"}
                            alt={product.title}
                            className="h-full w-full transform object-cover transition duration-700 ease-in-out group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = "/api/placeholder/500/600";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </div>
                      </div>

                      {/* Content Section with animations */}
                      <div className="flex flex-col justify-center rounded-lg bg-white/80 p-6 shadow-md backdrop-blur-sm md:w-1/2">
                        {/* Title with animation */}
                        <h2 className="mb-4 text-3xl font-bold text-gray-800 transition-all duration-300 group-hover:text-blue-600">
                          {product.title}
                        </h2>
                        
                        {/* Description */}
                        <p className="mb-6 text-gray-600">{product.description}</p>
                        
                        {/* Key Points with subtle animations */}
                        {product.keyPoints && product.keyPoints.length > 0 && (
                          <div className="mb-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-700">Key Features</h3>
                            <div className="grid gap-3">
                              {product.keyPoints.map((point, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start transition duration-300 ease-in-out group-hover:translate-x-1"
                                >
                                  <CheckCircle size={18} className="mr-2 mt-0.5 text-green-500" />
                                  <p className="text-gray-600">{point}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {/* Learn More link with animation */}
                        <div className="mt-4">
                          <a 
                            href={`/product/${product.id}`} 
                            className="inline-flex items-center text-blue-600 transition-all duration-300 hover:text-blue-800"
                          >
                            Learn more
                            <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}