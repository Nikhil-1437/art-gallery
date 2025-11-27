import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import { FaTrash } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useAuth } from '../hooks/useAuth';
import api from '../api/axiosConfig';

const Cart = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        if (!isAuthenticated) {
            toast.error("Please log in to place an order.");
            navigate('/login');
            return;
        }

        const orderItems = cart.map(item => ({ artItemId: item.id, quantity: item.quantity }));
        
        try {
            await api.post('/orders', orderItems);
            toast.success("Order placed successfully!");
            clearCart();
            navigate('/buyer-dashboard');
        } catch (error) {
            toast.error("Failed to place order. Please try again.");
            console.error("Order placement failed:", error);
        }
    };

    if (cart.length === 0) {
        return (
            <AnimatedPage>
                <div className="text-center py-10 animate-fade-in">
                    <h1 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">Your Cart is Empty</h1>
                    <Link to="/shop" className="text-bright-yellow hover:underline font-semibold text-lg">Continue Shopping</Link>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <h1 className="text-3xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in">Your Cart</h1>
            <div className="card-bright p-6 animate-slide-up">
                <div className="space-y-4">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-300 pb-4">
                            <div className="flex items-center gap-4">
                                <img src={`${API_BASE_URL}${item.imageUrl}`} alt={item.title} className="w-20 h-20 object-cover rounded shadow-md" />
                                <div>
                                    <h2 className="font-semibold text-gray-800">{item.title}</h2>
                                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    className="w-16 p-1 border border-gray-300 rounded bg-white/50"
                                />
                                <button onClick={() => removeFromCart(item.id)} className="text-bright-pink hover:text-red-700 transition-colors">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 text-right">
                    <h2 className="text-2xl font-bold text-gray-800">Total: <span className="text-bright-purple">${total.toFixed(2)}</span></h2>
                    <button onClick={handleCheckout} className="mt-4 btn-bright">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Cart;