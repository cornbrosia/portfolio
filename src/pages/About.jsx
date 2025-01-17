import React from 'react';
import projectScreenshot from '../assets/project-screenshot.png';
import pokeShot from '../assets/poke-shot.png';
import movieShot from '../assets/movie-shot.png';


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img src={projectScreenshot} alt="Project Screenshot" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Description/Objective and tech used</h3>
              <p className="text-gray-700 mb-4">
                The Meet App is a serverless, progressive web application (PWA) built using React. It allows users to search for upcoming events in various cities using the Google Calendar API. Users can filter events by location, view event details, and adjust how many events are displayed. The app is fully responsive and can function offline by caching event data for seamless browsing. The goal of this project was to build a dynamic, user-friendly event management application that provides users with a smooth experience, even without an internet connection. This project demonstrates advanced React development skills, API integration, and implementing offline functionality with progressive web app features.
              </p>
              <h2>🛠️ Technologies Used</h2>

              <h3>Frontend:</h3>
              <ul>
                <li><strong>React</strong> – Component-based UI for dynamic rendering.</li>
                <li><strong>JavaScript (ES6+)</strong> – Core programming language.</li>
                <li><strong>HTML5 & CSS3</strong> – Markup and styling.</li>
                <li><strong>Recharts</strong> – Data visualization with pie and scatter charts.</li>
              </ul>

              <h3>Backend/Serverless:</h3>
              <ul>
                <li><strong>Google Calendar API</strong> – Fetching real-time event data.</li>
                <li><strong>OAuth 2.0</strong> – Secure authentication for Google services.</li>
                <li><strong>AWS Lambda</strong> – Serverless backend functions for authentication.</li>
              </ul>

              <h3>Progressive Web App (PWA):</h3>
              <ul>
                <li><strong>Service Workers</strong> – Offline support and caching.</li>
                <li><strong>IndexedDB & localStorage</strong> – Caching event data for offline access.</li>
                <li><strong>Manifest.json</strong> – PWA configuration for installation.</li>
              </ul>

              <h3>Deployment & Development Tools:</h3>
              <ul>
                <li><strong>GitHub Pages</strong> – Hosting the deployed web app.</li>
                <li><strong>Jest & React Testing Library</strong> – Testing components and logic.</li>
                <li><strong>ESLint & Prettier</strong> – Code linting and formatting.</li>
                <li><strong>NProgress</strong> – Loading progress indicators.</li>
              </ul>

              <a href="http://github.com/cornbrosia/meet" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br />
              <a href="https://cornbrosia.github.io/meet/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Pokedex</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img src={pokeShot} alt="Pokédex Screenshot" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Description/Objective and tech used</h3>
              <p className="text-gray-700 mb-4">
                The Pokédex App is a responsive and interactive web application that allows users to browse and discover detailed information about various Pokémon. Built with React and integrated with the PokéAPI for real-time data fetching, it demonstrates effective API integration, responsive design, and user-friendly navigation.
              </p>

              <h2>🛠️ Technologies Used</h2>
              <h3>Frontend:</h3>
              <ul>
                <li><strong>React</strong></li>
                <li><strong>JavaScript (ES6+)</strong></li>
                <li><strong>HTML5 & CSS3</strong></li>
                <li><strong>Axios/Fetch API</strong></li>
              </ul>

              <h3>API Integration:</h3>
              <ul>
                <li><strong>PokéAPI</strong></li>
              </ul>

              <a href="http://github.com/cornbrosia/pokedex" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br />
              <a href="https://cornbrosia.github.io/pokedex/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">MyFlix</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img src={movieShot} alt="MyFlix Screenshot" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Description/Objective and tech used</h3>
              <p className="text-gray-700 mb-4">
                The myFlix web application is a full-stack movie database platform designed to allow users to explore movies, view details, and manage personal user profiles. Built using the MERN stack, it demonstrates RESTful API development, secure data management, and seamless user interaction.
              </p>

              <h2>🛠️ Technologies Used</h2>
              <h3>Frontend:</h3>
              <ul>
                <li><strong>React</strong></li>
                <li><strong>React Router</strong></li>
                <li><strong>Axios</strong></li>
              </ul>

              <h3>Backend:</h3>
              <ul>
                <li><strong>Node.js</strong></li>
                <li><strong>Express.js</strong></li>
                <li><strong>MongoDB</strong></li>
              </ul>

              <a href="https://github.com/cornbrosia/movie_api" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br />
              <a href="https://beautiful-florentine-75952f.netlify.app/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
