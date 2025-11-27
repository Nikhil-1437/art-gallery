
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';


const featuredArt = {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80',
    title: 'Dreamscape',
    artist: 'Unsplash Artist',
};

const artPieces = [
    { image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', title: 'Golden Fields', artist: 'Unsplash Artist' },
    { image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', title: 'Urban Canvas', artist: 'Unsplash Artist' },
    { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', title: 'Serenity', artist: 'Unsplash Artist' },
    { image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80', title: 'Abstract Flow', artist: 'Unsplash Artist' },
    { image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80', title: 'Color Burst', artist: 'Unsplash Artist' },
    { image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', title: 'Tranquility', artist: 'Unsplash Artist' },
];

const duplicatedArt = [...artPieces, ...artPieces];

const Home = () => {
        return (
            <AnimatedPage>

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center min-h-[60vh] mb-12 animate-fade-in">
                <img src={featuredArt.image} alt={featuredArt.title} className="w-full max-h-[400px] object-cover rounded-xl shadow-2xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hero-bg px-8 py-6 rounded-xl shadow-2xl text-center border border-white/30">
                    <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg" style={{ fontFamily: 'Inter, serif' }}>Welcome to Art Gallery</h1>
                    <Link to="/shop" className="inline-block btn-bright">View Gallery</Link>
                </div>
            </section>

            {/* Animated Art Gallery */}
            <section className="max-w-6xl mx-auto px-4 pb-16 animate-slide-up">
                <h2 className="text-3xl font-semibold text-white mb-8 text-center drop-shadow-lg" style={{ fontFamily: 'Inter, serif' }}>Featured Art Gallery</h2>
                <div className="overflow-hidden rounded-xl shadow-2xl">
                    <div className="flex animate-slide-gallery hover:animation-play-state-paused">
                        {duplicatedArt.map((piece, idx) => (
                            <div key={idx} className="flex-shrink-0 w-80 mx-2 group">
                                <div className="card-bright overflow-hidden transition-all transform hover:scale-105 hover:shadow-xl">
                                    <img src={piece.image} alt={piece.title} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
                                    <div className="p-4 text-center">
                                        <h3 className="text-xl font-bold text-gray-800 text-bright" style={{ fontFamily: 'Inter, serif' }}>{piece.title}</h3>
                                        <p className="text-gray-600 text-sm">{piece.artist}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="max-w-5xl mx-auto px-4 py-16 mb-12 animate-slide-up">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'Inter, serif' }}>About Art Gallery</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-bright-pink to-bright-purple mx-auto rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="card-bright p-8 rounded-2xl shadow-2xl">
                        <div className="text-6xl mb-6 text-center">🎨</div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Art Gallery is a curated online destination for discovering and celebrating exceptional artwork from around the world. Our platform connects art lovers, collectors, and creators, offering a sophisticated experience to explore, appreciate, and acquire unique pieces.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">🌍 Global Art</span>
                            <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">🤝 Community</span>
                            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">✨ Inspiration</span>
                        </div>
                    </div>
                    <div className="card-bright p-8 rounded-2xl shadow-2xl">
                        <div className="text-6xl mb-6 text-center">🏛️</div>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            We believe in the power of art to inspire, elevate spaces, and foster meaningful connections. Whether you are seeking a masterpiece for your collection or simply wish to immerse yourself in creativity, Art Gallery is your gateway to the world of fine art.
                        </p>
                        <div className="mt-6 text-center">
                            <Link to="/shop" className="inline-block btn-bright text-lg px-8 py-3">Explore Collection</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-5xl mx-auto px-4 py-16 mb-16 animate-slide-up">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-lg" style={{ fontFamily: 'Inter, serif' }}>Get In Touch</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-bright-pink to-bright-purple mx-auto rounded-full"></div>
                </div>
                <div className="card-bright p-10 rounded-3xl shadow-2xl">
                    <p className="text-xl text-gray-700 text-center leading-relaxed mb-10">
                        Have questions, feedback, or want to collaborate? Reach out to our team and we'll be happy to assist you.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-2xl">📧</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
                            <a href="salananikhil7@gmail.com" className="text-bright-pink hover:underline font-semibold text-lg">salananikhil7@gmail.com</a>
                        </div>
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                            <a href="tel:+1234567890" className="text-bright-pink hover:underline font-semibold text-lg">+91 9182578102</a>
                        </div>
                        <div className="text-center group">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                <span className="text-2xl">📍</span>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Visit Us</h3>
                            <span className="text-gray-700 font-semibold text-lg">KL University, Vijayawada</span>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedPage>
    );
};

export default Home;