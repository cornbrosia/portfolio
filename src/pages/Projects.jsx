import React from 'react';
import projectScreenshot from '../assets/project-screenshot.png';
import pokeShot from '../assets/poke-shot.png';
import movieShot from '../assets/movie-shot.png';
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Progressive App</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <img src={projectScreenshot} alt="Project Screenshot" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Awesome Project</h3>
              <p className="text-gray-700 mb-4">A brief description of this amazing project.</p>
              <a href="http://github.com/cornbrosia/meet" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br></br>
              <a href="https://cornbrosia.github.io/meet/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Pokedex</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <img src={pokeShot} alt="Project Screenshot" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Awesome Project</h3>
              <p className="text-gray-700 mb-4">A brief description of this amazing project.</p>
              <a href="http://github.com/cornbrosia/pokedex" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br></br>
              <a href="https://cornbrosia.github.io/pokedex/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">MyFlix</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <img src={movieShot} alt="Project Screenshot" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Awesome Project</h3>
              <p className="text-gray-700 mb-4">A brief description of this amazing project.</p>
              <a href="http://github.com/cornbrosia/pokedex" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br></br>
              <a href="https://cornbrosia.github.io/pokedex/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Projects;
