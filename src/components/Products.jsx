import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [debug, setDebug] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product data...");
        setLoading(true);
        
        const response = await axios.get("http://localhost:3000/products/get");
        console.log("Received data:", response.data);
        setDebug({ rawData: response.data });
        
        // Check if response.data is an array and take the first item if it is
        let productData = response.data;
        if (Array.isArray(response.data) && response.data.length > 0) {
          productData = response.data[0]; // Use the first product in the array
          console.log("Using first item from array:", productData);
        }
        
        if (productData && typeof productData === 'object') {
          // Map the API field names to our component's expected field names
          const processedProduct = {
            id: productData._id,
            title: productData.title || "Product Title",
            description: productData.description || "No description available",
            // Format the hero image URL correctly for local files
            heroimage: productData.heroimage 
              ? `http://localhost:3000${productData.heroimage}` 
              : "/api/placeholder/500/600",
            // Make sure keyPoints is an array
            keyPoints: Array.isArray(productData.keyPoints) 
              ? productData.keyPoints 
              : []
          };
          
          setProduct(processedProduct);
          setError(null);
        } else {
          console.error("Invalid data format:", productData);
          setError("Invalid data format received from server");
          setProduct({
            title: "Product Title",
            description: "No description available",
            heroimage: "/api/placeholder/500/600",
            keyPoints: []
          });
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError(`Failed to load product data: ${err.message}`);
        setProduct({
          title: "Product Title",
          description: "No description available",
          heroimage: "/api/placeholder/500/600",
          keyPoints: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl"
        >
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-t-2 border-blue-600"></div>
            <span>Loading product data...</span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      {/* Error Message (if any) */}
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 rounded bg-red-100 p-3 text-red-600"
        >
          {error}
        </motion.div>
      )}

      
      {/* Product Section */}
      <div className="mx-auto max-w-6xl p-6">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Hero Image - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <img
              src={product?.heroimage || "/api/placeholder/500/600"}
              alt={product?.title || "Product"}
              className="h-full w-full rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                console.log("Image failed to load, using placeholder");
                e.target.src = "/api/placeholder/500/600";
              }}
            />
          </motion.div>

          {/* Title and Description - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center md:w-1/2"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 text-3xl font-bold"
            >
              {product?.title || "Product Title"}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-6 text-gray-600"
            >
              {product?.description || "No description available"}
            </motion.p>

            {/* Key Points Section */}
            {product?.keyPoints && product.keyPoints.length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6"
              >
                <h3 className="mb-3 text-xl font-semibold">Key Features</h3>
                <div className="space-y-2">
                  {product.keyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle size={18} className="mr-2 mt-1 text-green-500" />
                      <p className="text-gray-700">{point}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            
            {/* Add to Cart Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <button className="rounded-md bg-blue-600 px-6 py-3 text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg">
                Add to Cart
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}