import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Task1 = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resp = await axios.get('https://fakestoreapi.com/products');
        setProducts(resp.data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-indigo-800 text-white">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Fake Store Products</h1>
        <p className="text-xl opacity-80">Explore our amazing collection of products!</p>
      </header>

      <main className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">Our Top Picks for You</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        {products.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <li key={product.id} className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-200 text-gray-800">
                <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4 rounded-lg" />
                <h3 className="text-xl font-bold mb-2 text-indigo-600 truncate">{product.title}</h3>
                <p className="text-lg font-semibold text-gray-600">${product.price}</p>
                <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-300">Loading products...</p>
        )}

       
      <button
          onClick={() => navigate('/')}
          className="fixed bottom-5 right-5 bg-slate-950 text-white py-2 px-4 rounded-full shadow-lg hover:bg-slate-800 transition-colors duration-300"
        >
          Back to Home
        </button>
      </main>
    </div>
  );
};

export default Task1;
