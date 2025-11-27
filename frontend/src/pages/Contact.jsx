import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Contact = () => (
  <AnimatedPage>
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Contact Us</h1>
      <div className="bg-white rounded-xl shadow p-8 max-w-lg w-full border border-indigo-100">
        <p className="mb-4 text-gray-700">For any queries, feedback, or support, please reach out to us:</p>
        <ul className="mb-4 text-gray-700">
          <li>Email: <a href="mailto:Salannikhil7@gmail.com" className="text-indigo-600 hover:underline">salananikhil7@gmail.com</a></li>
          <li>Phone: <span className="text-indigo-600">+91 9182578102</span></li>
        </ul>
        <p className="text-gray-500">We aim to respond within 24 hours.</p>
      </div>
    </div>
  </AnimatedPage>
);

export default Contact;
