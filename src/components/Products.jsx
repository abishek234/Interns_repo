import { useState, useEffect } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function ProductPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log("Fetching product data...");
        setLoading(true);
        
        // Use try/catch here to handle potential connection issues
        try {
          const response = await axios.get("http://localhost:3000/products/get");
          console.log("Received data:", response.data);
          
          // Check if response data has the expected format
          if (response.data && typeof response.data === 'object') {
            setProduct(response.data);
            setError(null);
          } else {
            console.error("Invalid data format:", response.data);
            setError("Invalid data format received from server");
            // Use fallback data
            setProduct(mockProduct);
          }
        } catch (fetchErr) {
          console.error("API connection error:", fetchErr);
          setError("Could not connect to the API. Using mock data instead.");
          // Use fallback data
          setProduct(mockProduct);
        }
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product data. Using mock data instead.");
        // Use fallback data
        setProduct(mockProduct);
      } finally {
        setLoading(false);
      }
    };

    // Mock data for testing or as fallback
    const mockProduct = {
      title: "Premium Headphones",
      description: "High-quality wireless headphones with noise-cancellation technology and premium sound quality.",
      heroImage: "/api/placeholder/500/600",
      gallery: [
        "/api/placeholder/800/600",
        "/api/placeholder/800/600",
        "/api/placeholder/800/600"
      ]
    };

    fetchProduct();
  }, []);

  const openGallery = () => {
    setIsGalleryOpen(true);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  const nextImage = () => {
    if (product && product.gallery) {
      setCurrentImageIndex((prev) =>
        prev === product.gallery.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevImage = () => {
    if (product && product.gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.gallery.length - 1 : prev - 1,
      );
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl">Loading product data...</div>
      </div>
    );
  }

  // Error state - now we'll still show the product with an error message
  const errorMessage = error ? (
    <div className="mb-4 rounded bg-red-100 p-3 text-red-600">
      {error}
    </div>
  ) : null;

  // No product data
  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-xl">No product data available</div>
      </div>
    );
  }

  // Ensure gallery is an array
  const gallery = Array.isArray(product.gallery) ? product.gallery : [];

  return (
    <div className="font-sans">
      {/* Error Message (if any) */}
      {errorMessage}
      
      {/* Product Section */}
      <div className="mx-auto max-w-6xl p-6">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Hero Image - Left Side */}
          <div className="md:w-1/2">
            <img
              src={product.heroImage || "/api/placeholder/500/600"}
              alt={product.title || "Product"}
              className="h-full w-full rounded-lg object-cover shadow-lg"
              onError={(e) => {
                e.target.src = "/api/placeholder/500/600";
                console.log("Image failed to load, using placeholder");
              }}
            />
          </div>

          {/* Title and Description - Right Side */}
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="mb-4 text-3xl font-bold">{product.title || "Product Title"}</h1>
            <p className="mb-6 text-gray-600">{product.description || "No description available"}</p>

            {gallery.length > 0 && (
              <div>
                <button
                  onClick={openGallery}
                  className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-2 text-white transition duration-300 hover:bg-blue-700"
                >
                  View Gallery
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Overlay */}
      {isGalleryOpen && gallery.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={closeGallery}
              className="absolute right-4 top-4 z-10 rounded-full bg-black bg-opacity-50 p-1 text-white hover:bg-opacity-70"
            >
              <X size={24} />
            </button>

            {/* Gallery Image */}
            <div className="relative">
              <img
                src={gallery[currentImageIndex] || "/api/placeholder/800/600"}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full rounded-lg"
                onError={(e) => {
                  e.target.src = "/api/placeholder/800/600";
                }}
              />

              {/* Navigation Controls */}
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 transform justify-between px-4">
                <button
                  onClick={prevImage}
                  className="rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="rounded-full bg-black bg-opacity-50 p-2 text-white hover:bg-opacity-70"
                >
                  →
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex justify-center gap-2 overflow-x-auto">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border-2 ${
                    currentImageIndex === index
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/100/100";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}