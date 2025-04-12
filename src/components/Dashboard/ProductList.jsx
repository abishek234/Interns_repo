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
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    heroimage: '',
    image: []
  });
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      heroimage: product.heroimage,
      image: product.image
    });
    setIsEditing(true);
  };

  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:3000/products/delete/${productId}`);
        setProducts(products.filter(product => product._id !== productId));
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

  const handleImageChange = (e, index) => {
    const newImages = [...formData.image];
    newImages[index] = e.target.value;
    setFormData({
      ...formData,
      image: newImages
    });
  };

  const addImageField = () => {
    setFormData({
      ...formData,
      image: [...formData.image, '']
    });
  };

  const removeImageField = (index) => {
    const newImages = [...formData.image];
    newImages.splice(index, 1);
    setFormData({
      ...formData,
      image: newImages
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/products/update/${editingProduct._id}`, formData);
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
      heroimage: '',
      image: []
    });
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
        
        <div className="p-4 flex-1 overflow-auto">
          <h1 className="text-2xl font-bold mb-6">Products List</h1>
          
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image URL</label>
                    <input
                      type="text"
                      name="heroimage"
                      value={formData.heroimage}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Images</label>
                    {formData.image.map((img, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="text"
                          value={img}
                          onChange={(e) => handleImageChange(e, index)}
                          className="flex-1 p-2 border border-gray-300 rounded"
                        />
                        <button
                          type="button"
                          onClick={() => removeImageField(index)}
                          className="ml-2 p-2 bg-red-100 text-red-600 rounded hover:bg-red-200"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addImageField}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      + Add Another Image
                    </button>
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
                    <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Images</th>
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
                              onClick={() => alert(product.description)}
                            >
                              Read more
                            </button>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">
                        {product.heroimage && (
                          <a 
                            href={product.heroimage} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {truncateText(product.heroimage, 30)}
                          </a>
                        )}
                      </td>
                      <td className="py-4 px-4 text-sm">
                        <div className="flex flex-col space-y-1 max-h-20 overflow-y-auto">
                          {product.image && product.image.map((img, imgIndex) => (
                            <a 
                              key={imgIndex}
                              href={img}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline text-xs"
                            >
                              {truncateText(img, 30)}
                            </a>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm">
                        <div className="flex space-x-2">
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