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
    image: [],
    heroimage: '',
  });

  const [imageUrl, setImageUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleAddImage = (e) => {
    e.preventDefault(); // Prevent form submission
    if (imageUrl.trim()) {
      setProduct({
        ...product,
        image: [...product.image, imageUrl.trim()]
      });
      setImageUrl('');
    } else {
      toast.error("Please enter a valid image URL");
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...product.image];
    updatedImages.splice(index, 1);
    setProduct({
      ...product,
      image: updatedImages
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!validateFormFields()) {
      return; // Exit the function early if validation fails
    }

    try {
      const response = await axios.post('http://localhost:3000/products/createproduct', product);

      toast.success("Product added successfully!");
      
      // Reset the form after successful submission
      setProduct({
        title: '',
        description: '',
        image: [],
        heroimage: '',
      });
      setImageUrl('');
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
      toast.error("Failed to add product");
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const validateFormFields = () => {
    let isValid = true;

    // Check if all fields are filled
    if (!product.title || !product.description || !product.heroimage || product.image.length === 0) {
      toast.error("Please fill all fields");
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

    // Check if hero image is empty
    if (!product.heroimage.trim()) {
      isValid = false;
      toast.error("Hero image URL is required");
    }

    // Check if images array is empty
    if (product.image.length === 0) {
      isValid = false;
      toast.error("At least one product image is required");
    }

    return isValid;
  };

  return (
    <>
      <div className="flex h-screen bg-white">
        <Sidebar menu={menuOpen} />
        <div className="flex-1 flex flex-col">
          <Header toggleMenu={toggleMenu} />
          
          <div className="p-4 max-w-3xl mx-auto w-full flex-1 overflow-auto">
            <div className="mb-6">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Product Title</label>
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
              <label htmlFor="heroimage" className="block mb-2 text-sm font-medium text-gray-900">Hero Image URL</label>
              <input 
                type="text" 
                name="heroimage" 
                id="heroimage" 
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder="Enter hero image URL" 
                value={product.heroimage}
                onChange={handleChange} 
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">Add Product Images</label>
              <div className="flex">
                <input 
                  type="text" 
                  name="imageUrl" 
                  id="imageUrl" 
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                  placeholder="Enter image URL" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)} 
                />
                <button 
                  type="button" 
                  onClick={handleAddImage} 
                  className="ml-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                >
                  Add
                </button>
              </div>
            </div>
            
            {product.image.length > 0 && (
              <div className="mb-10">
                <p className="block mb-2 text-sm font-medium text-gray-900">Product Images:</p>
                <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-3">
                  {product.image.map((img, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="truncate text-sm text-gray-500" style={{ maxWidth: '85%' }}>{img}</span>
                      <button 
                        type="button" 
                        onClick={() => handleRemoveImage(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
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
            
            <div className="flex justify-center mb-16 pb-8">
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