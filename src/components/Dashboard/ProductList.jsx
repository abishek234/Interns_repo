import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar2';
import Header from './Header';

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [viewingProduct, setViewingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    keyPoints: []
  });
  const [heroimage, setHeroimage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [keyPoint, setKeyPoint] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/products/get');
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please try again later.');
      setLoading(false);
    }
  };

  const handleView = (product) => {
    setViewingProduct(product);
    setIsViewing(true);
  };

  const closeView = () => {
    setViewingProduct(null);
    setIsViewing(false);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      keyPoints: product.keyPoints || []
    });
    setImagePreview(product.heroimage);
    setIsEditing(true);
    if (isViewing) closeView();
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:3000/products/delete/${productId}`);
        setProducts(products.filter(product => product._id !== productId));
        if (viewingProduct && viewingProduct._id === productId) {
          closeView();
        }
      } catch (err) {
        console.error('Error deleting product:', err);
        alert('Failed to delete product. Please try again.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeroimage(file);
      // Create preview URL
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleAddKeyPoint = (e) => {
    e.preventDefault();
    if (keyPoint.trim()) {
      setFormData({
        ...formData,
        keyPoints: [...formData.keyPoints, keyPoint.trim()]
      });
      setKeyPoint('');
    }
  };

  const removeKeyPoint = (index) => {
    const newKeyPoints = [...formData.keyPoints];
    newKeyPoints.splice(index, 1);
    setFormData({
      ...formData,
      keyPoints: newKeyPoints
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      
      if (heroimage) {
        formDataToSend.append('heroimage', heroimage);
      }
      
      if (formData.keyPoints.length > 0) {
        formDataToSend.append('keyPoints', JSON.stringify(formData.keyPoints));
      }

      await axios.put(
        `http://localhost:3000/products/update/${editingProduct._id}`, 
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      fetchProducts();
      cancelEdit();
    } catch (err) {
      console.error('Error updating product:', err);
      alert('Failed to update product. Please try again.');
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditingProduct(null);
    setFormData({
      title: '',
      description: '',
      keyPoints: []
    });
    setHeroimage(null);
    setImagePreview('');
    setKeyPoint('');
  };

  // Truncate long text for better display
  const truncateText = (text, maxLength = 70) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };



  return (
    <div className="flex h-screen bg-white">
      <Sidebar menu={menuOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleMenu={toggleMenu} />
        
        <div className="p-4 flex-1">
          <h1 className="text-2xl font-bold mb-6">Products List</h1>
          
          {isViewing && viewingProduct && (
            <div className="mb-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold">{viewingProduct.title}</h2>
                <button 
                  onClick={closeView}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                {viewingProduct.heroimage && (
                  
  <div className="mb-4">
    <img 
      src={`http://localhost:3000${viewingProduct.heroimage}`} 
      alt={viewingProduct.title}
      className="w-full h-64 object-contain rounded border border-gray-200"
      onError={(e) => {
        console.error('Image failed to load:', e.target.src);
        e.target.src = '/placeholder.png'; // Fallback image
        e.target.onerror = null; // Prevent infinite error loop
      }}
    />
  </div>
)}
                  
                  {/* Edit and Delete buttons removed from view card */}
                </div>
                
                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">Description</h3>
                    <p className="text-gray-700 whitespace-pre-line">{viewingProduct.description}</p>
                  </div>
                  
                  {viewingProduct.keyPoints && viewingProduct.keyPoints.length > 0 && (
                    <div>
                      <h3 className="text-lg font-medium mb-2">Key Points</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {viewingProduct.keyPoints.map((point, index) => (
                          <li key={index} className="text-gray-700">{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {isEditing && (
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      rows="3"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image</label>
                    <input
                      type="file"
                      name="heroimage"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
               {imagePreview && (
  <div className="mt-2">
    <p className="text-sm text-gray-600 mb-1">Current image:</p>
    <img 
      src={imagePreview.startsWith('http') 
        ? imagePreview 
        : `http://localhost:3000${imagePreview}`} 
      alt="Product hero" 
      className="h-24 object-contain border border-gray-200 rounded"
      onError={(e) => {
        console.error('Preview image failed to load:', e.target.src);
        // Use an absolute URL for fallback image
        e.target.src = 'https://via.placeholder.com/150?text=No+Image'; 
        e.target.onerror = null;
      }}
    />
  </div>
)}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Points</label>
                    <div className="flex mb-2">
                      <input
                        type="text"
                        value={keyPoint}
                        onChange={(e) => setKeyPoint(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-l"
                        placeholder="Enter key point"
                      />
                      <button
                        type="button"
                        onClick={handleAddKeyPoint}
                        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
                      >
                        Add
                      </button>
                    </div>
                    
                    {formData.keyPoints.length > 0 && (
                      <div className="border border-gray-200 rounded-lg p-2 mt-2 mb-2">
                        {formData.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                            <span className="text-sm text-gray-700">{point}</span>
                            <button
                              type="button"
                              onClick={() => removeKeyPoint(index)}
                              className="text-red-500 hover:text-red-700 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">Loading products...</p>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          ) : products.length === 0 ? (
            <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded">
              No products found. Add some products to see them here.
            </div>
          ) : (
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hero Image</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Points</th>
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product, index) => (
                    <tr key={product._id || index} className="hover:bg-gray-50">
                      <td className="py-4 px-4 text-sm">{product.title}</td>
                      <td className="py-4 px-4 text-sm">
                        <div className="max-w-xs">
                          {truncateText(product.description)}
                          {product.description && product.description.length > 70 && (
                            <button 
                              className="ml-2 text-blue-500 hover:text-blue-700 text-xs"
                              onClick={() => handleView(product)}
                            >
                              Read more
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">
                        {product.heroimage && (
                          <img 
                          src={`http://localhost:3000${product.heroimage}`}  
                            alt={product.title}
                            className="h-12 w-12 object-cover rounded cursor-pointer"
                            onClick={() => handleView(product)}
                            onError={(e) => {
                              console.error('Thumbnail image failed to load:', e.target.src);
                              e.target.src = '/placeholder.png'; // Fallback image
                              e.target.onerror = null;
                            }}
                          />
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm">
                        <div className="flex flex-col space-y-1">
                          {product.keyPoints && product.keyPoints.length > 0 ? (
                            <ul className="list-disc pl-4 text-xs">
                              {product.keyPoints.slice(0, 3).map((point, pointIndex) => (
                                <li key={pointIndex}>{truncateText(point, 30)}</li>
                              ))}
                              {product.keyPoints.length > 3 && (
                                <li className="text-blue-500 cursor-pointer" onClick={() => handleView(product)}>
                                  +{product.keyPoints.length - 3} more
                                </li>
                              )}
                            </ul>
                          ) : (
                            <span className="text-gray-400 italic">No key points</span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleView(product)}
                            className="px-3 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleEdit(product)}
                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded hover:bg-blue-200"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}