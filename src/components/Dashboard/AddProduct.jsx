import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar2';
import Header from './Header';
import axios from 'axios';

export default function ProductDetails() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    keyPoints: []
  });
  
  const [heroImage, setHeroImage] = useState(null);
  const [keyPoint, setKeyPoint] = useState('');
  const [preview, setPreview] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeroImage(file);
      // Create preview URL
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreview(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleAddKeyPoint = (e) => {
    e.preventDefault();
    if (keyPoint.trim()) {
      setProduct({
        ...product,
        keyPoints: [...product.keyPoints, keyPoint.trim()]
      });
      setKeyPoint('');
    } else {
      toast.error("Please enter a valid key point");
    }
  };

  const handleRemoveKeyPoint = (index) => {
    const updatedKeyPoints = [...product.keyPoints];
    updatedKeyPoints.splice(index, 1);
    setProduct({
      ...product,
      keyPoints: updatedKeyPoints
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!validateFormFields()) {
      return; // Exit the function early if validation fails
    }

    try {
      // Create FormData object to handle file upload
      const formData = new FormData();
      formData.append('title', product.title);
      formData.append('description', product.description);
      formData.append('heroimage', heroImage);
      
      // Add key points as a JSON string or individual entries
      if (product.keyPoints.length > 0) {
        formData.append('keyPoints', JSON.stringify(product.keyPoints));
      }

      const response = await axios.post('http://localhost:3000/products/create-product', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success("Product added successfully!");
      
      // Reset the form after successful submission
      setProduct({
        title: '',
        description: '',
        keyPoints: []
      });
      setHeroImage(null);
      setPreview('');
      setKeyPoint('');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      toast.error("Failed to add product: " + (error.response?.data?.message || error.message));
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const validateFormFields = () => {
    let isValid = true;

    // Check if required fields are filled
    if (!product.title || !product.description || !heroImage) {
      toast.error("Please fill all required fields");
      return false;
    }

    // Check if product title is empty
    if (!product.title.trim()) {
      isValid = false;
      toast.error("Product title is required");
    }

    // Check if product description is empty
    if (!product.description.trim()) {
      isValid = false;
      toast.error("Product description is required");
    }

    // Check if hero image is selected
    if (!heroImage) {
      isValid = false;
      toast.error("Hero image is required");
    }

    return isValid;
  };

  return (
    <>
      <div className="flex h-screen bg-white">
        <Sidebar menu={menuOpen} />
        <div className="flex-1 flex flex-col">
          <Header toggleMenu={toggleMenu} />
          
          {/* Changed to remove overflow-auto class */}
          <div className="p-4 max-w-3xl mx-auto w-full flex-1">
            <h2 className="text-xl font-semibold mb-6">Add New Product</h2>
            
            <div className="mb-6">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Product Title *</label>
              <input 
                type="text" 
                name="title" 
                id="title" 
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Type Product Title" 
                value={product.title}
                onChange={handleChange} 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="heroimage" className="block mb-2 text-sm font-medium text-gray-900">Hero Image *</label>
              <input 
                type="file" 
                name="heroimage" 
                id="heroimage" 
                accept="image/*"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                onChange={handleFileChange} 
              />
              {preview && (
                <div className="mt-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Preview:</p>
                  <img src={preview} alt="Hero image preview" className="max-h-48 rounded-lg border border-gray-200" />
                </div>
              )}
            </div>
            
            <div className="mb-8">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description *</label>
              <textarea 
                id="description" 
                name="description" 
                rows="6" 
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Product description here" 
                value={product.description} 
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Key Points</label>
              <div className="flex">
                <input 
                  type="text" 
                  name="keyPoint" 
                  id="keyPoint" 
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  placeholder="Enter key point" 
                  value={keyPoint}
                  onChange={(e) => setKeyPoint(e.target.value)} 
                />
                <button 
                  type="button" 
                  onClick={handleAddKeyPoint} 
                  className="ml-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                  Add
                </button>
              </div>
            </div>
            
            {product.keyPoints.length > 0 && (
              <div className="mb-10">
                <p className="block mb-2 text-sm font-medium text-gray-900">Product Key Points:</p>
                {/* Modified max-height and removed overflow-y-auto */}
                <div className="border border-gray-200 rounded-lg p-3">
                  {product.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm text-gray-700">{point}</span>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveKeyPoint(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-center mb-8">
              <button 
                type="button" 
                onClick={handleSubmit} 
                className="text-white bg-blue-600 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-40"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}