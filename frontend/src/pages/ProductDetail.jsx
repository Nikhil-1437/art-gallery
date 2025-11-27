import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';
import Spinner from '../components/Spinner';
import AnimatedPage from '../components/AnimatedPage';
import toast from 'react-hot-toast';

const ProductDetail = ({ addToCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const response = await api.get(`/art/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Failed to fetch product details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);
    
    const handleAddToCart = () => {
      addToCart(product);
      toast.success(`${product.title} added to cart!`);
    }

    if (loading) {
        return <Spinner />;
    }

    if (!product) {
        return <div className="text-center text-xl">Product not found.</div>;
    }

    return (
        <AnimatedPage>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <img
                            src={`${API_BASE_URL}${product.imageUrl}`}
                            alt={product.title}
                            className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
                        <p className="text-lg text-gray-500 mb-4">By {product.sellerName}</p>
                        <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 py-1 px-3 rounded-full">{product.category}</span>
                        <p className="text-3xl font-bold text-gray-800 my-6">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                        <button onClick={handleAddToCart} className="mt-8 w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ProductDetail;