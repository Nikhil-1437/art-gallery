import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = ({ cartCount }) => {
    const { user, logout, isBuyer, isSeller } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const getDashboardLink = () => {
        if (isBuyer) return "/buyer-dashboard";
        if (isSeller) return "/seller-dashboard";
        return "/";
    };

    return (
        <header className="bg-gradient-to-r from-bright-cyan via-bright-purple to-bright-pink shadow-2xl sticky top-0 z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-white drop-shadow-lg hover:scale-105 transition-transform">
                    Art Gallery
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-bright-yellow font-semibold drop-shadow" : "text-white hover:text-bright-yellow transition-colors"}>Home</NavLink>
                    <NavLink to="/shop" className={({ isActive }) => isActive ? "text-bright-yellow font-semibold drop-shadow" : "text-white hover:text-bright-yellow transition-colors"}>Shop</NavLink>
                    <NavLink to="/orders" className={({ isActive }) => isActive ? "text-bright-yellow font-semibold drop-shadow" : "text-white hover:text-bright-yellow transition-colors"}>Orders</NavLink>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "text-bright-yellow font-semibold drop-shadow" : "text-white hover:text-bright-yellow transition-colors"}>Profile</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-bright-yellow font-semibold drop-shadow" : "text-white hover:text-bright-yellow transition-colors"}>Contact</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-bright-yellow font-semibold drop-shadow" : "text-white hover:text-bright-yellow transition-colors"}>About</NavLink>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link to="/cart" className="relative text-white hover:text-bright-yellow transition-colors">
                        <FaShoppingCart size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-bright-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce-slow">{cartCount}</span>
                        )}
                    </Link>
                    {user ? (
                        <div className="relative group">
                            <button className="flex items-center space-x-2 text-white hover:text-bright-yellow transition-colors">
                                <FaUserCircle size={24} />
                                <span className='hidden sm:inline'>{user.name}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 card-bright py-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <Link to={getDashboardLink()} className="block px-4 py-2 text-sm text-gray-800 hover:bg-bright-cyan/20">Dashboard</Link>
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-800 hover:bg-bright-cyan/20">Profile</Link>
                                <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-gray-800 hover:bg-bright-cyan/20">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="btn-bright">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;