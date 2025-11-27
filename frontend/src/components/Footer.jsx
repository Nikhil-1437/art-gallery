import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-auto">
            <div className="container mx-auto px-4 py-6 text-center text-gray-600">
                <p>&copy; {new Date().getFullYear()} Art Gallery. All Rights Reserved.</p>
                 <p className="text-sm mt-1">Built with React & Spring Boot</p>
            </div>
        </footer>
    );
};

export default Footer;