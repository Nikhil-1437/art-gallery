import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden group"
            whileHover={{ y: -5, boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
            transition={{ duration: 0.2 }}
        >
            <Link to={`/product/${product.id}`} className="block">
                <div className="w-full h-48 overflow-hidden border-2 border-gray-200 rounded-t-lg">
                    <img
                        src={`${API_BASE_URL}${product.imageUrl}`}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{product.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                    <p className="text-lg font-bold text-indigo-600 mt-2">${product.price.toFixed(2)}</p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;