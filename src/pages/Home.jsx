import React from 'react';

const Home = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Ben Watson</h1>
        <p className="text-2xl mb-6">A Passionate Web Developer</p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
