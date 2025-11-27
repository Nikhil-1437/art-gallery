import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const About = () => (
  <AnimatedPage>
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">About Art Gallery</h1>
      <div className="bg-white rounded-xl shadow p-8 max-w-lg w-full border border-indigo-100">
        <p className="mb-4 text-gray-700">Art Gallery is a platform for artists and buyers to connect, discover, and trade unique artworks. Our mission is to make art accessible and enjoyable for everyone.</p>
        <ul className="mb-4 text-gray-700 list-disc ml-6">
          <li>Discover original art from talented creators</li>
          <li>Secure and easy transactions</li>
          <li>Support independent artists</li>
        </ul>
        <p className="text-gray-500">Join us and explore the world of art!</p>
      </div>
    </div>
  </AnimatedPage>
);

export default About;
