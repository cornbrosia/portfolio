import React from 'react';
import projectScreenshot from '/assets/project-screenshot.png';
import pokeShot from '/assets/poke-shot.png';
import movieShot from '/assets/movie-shot.png';
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <img src={projectScreenshot} alt="Project Screenshot" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Description/Objective and tech used</h3>
              <p className="text-gray-700 mb-4">The Meet App is a serverless, progressive web application (PWA) built using React. It allows users to search for upcoming events in various cities using the Google Calendar API. Users can filter events by location, view event details, and adjust how many events are displayed. The app is fully responsive and can function offline by caching event data for seamless browsing. The goal of this project was to build a dynamic, user-friendly event management application that provides users with a smooth experience, even without an internet connection. This project demonstrates advanced React development skills, API integration, and implementing offline functionality with progressive web app features.</p>
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
              <h3 className="text-xl font-semibold mb-2">Description/Objective and tech used</h3>
              <p className="text-gray-700 mb-4">The Pokédex App is a responsive and interactive web application that allows users to browse and discover detailed information about various Pokémon, including their types, abilities, and stats. Built with React for a dynamic user interface and integrated with the PokéAPI for real-time data fetching, the app provides a seamless user experience with features like search functionality and dynamic filtering by Pokémon type. The primary objective of this project was to apply modern front-end development skills to create an intuitive and engaging platform, demonstrating effective API integration, responsive design, and user-friendly navigation across both desktop and mobile devices.</p>
              <h2>🛠️ Technologies Used</h2>

                <h3>Frontend:</h3>
                <ul>
                <li><strong>React</strong> – For building a dynamic and responsive user interface.</li>
                <li><strong>JavaScript (ES6+)</strong> – Core programming language for interactive features.</li>
                <li><strong>HTML5 & CSS3</strong> – Markup and styling for structure and design.</li>
                <li><strong>Axios/Fetch API</strong> – For fetching data from external APIs.</li>
                <li><strong>React Router</strong> – For seamless client-side navigation.</li>
                </ul>

                <h3>API Integration:</h3>
                <ul>
                <li><strong>PokéAPI</strong> – Public Pokémon API for real-time data on Pokémon, abilities, and types.</li>
                </ul>

                <h3>Styling & Design:</h3>
                <ul>
                <li><strong>Bootstrap/Material-UI</strong> – For consistent and responsive UI components.</li>
                <li><strong>Flexbox/Grid</strong> – For modern and responsive layouts.</li>
                </ul>

                <h3>Deployment & Development Tools:</h3>
                <ul>
                <li><strong>GitHub Pages</strong> – For hosting the live version of the app.</li>
                <li><strong>Netlify/Vercel</strong> – Alternative platforms for seamless deployment.</li>
                <li><strong>Visual Studio Code (VS Code)</strong> – Code editor for development.</li>
                <li><strong>ESLint & Prettier</strong> – Code quality tools for linting and formatting.</li>
                </ul>

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
              <h3 className="text-xl font-semibold mb-2">Description/Objective and tech used</h3>
              <p className="text-gray-700 mb-4">The myFlix web application is a full-stack movie database platform designed to allow users to explore and discover movies, view detailed information about films, and manage personal user profiles. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), the app provides secure user authentication, interactive browsing of movies by genre, director, and title, and the ability to create a personalized list of favorite movies. The main objective of the project was to develop a responsive, user-friendly full-stack application that demonstrates RESTful API development, secure data management, and seamless user interaction across desktop and mobile devices, while following best practices in scalability, security, and modern web development.</p>
              <h2>🛠️ Technologies Used</h2>

                <h3>Frontend:</h3>
                <ul>
                <li><strong>React</strong> – For building a dynamic and responsive UI.</li>
                <li><strong>React Router</strong> – For seamless client-side routing.</li>
                <li><strong>Axios</strong> – For handling HTTP requests to the API.</li>
                <li><strong>Bootstrap/Material-UI</strong> – For consistent and modern styling.</li>
                <li><strong>Parcel/Webpack</strong> – For module bundling and fast builds.</li>
                </ul>

                <h3>Backend:</h3>
                <ul>
                <li><strong>Node.js</strong> – JavaScript runtime for backend development.</li>
                <li><strong>Express.js</strong> – Framework for building the RESTful API.</li>
                <li><strong>MongoDB</strong> – NoSQL database for storing user and movie data.</li>
                <li><strong>Mongoose</strong> – ORM for interacting with MongoDB.</li>
                </ul>

                <h3>Authentication & Security:</h3>
                <ul>
                <li><strong>JWT (JSON Web Tokens)</strong> – For secure user authentication.</li>
                <li><strong>bcrypt</strong> – For password hashing and security.</li>
                </ul>

                <h3>Testing & Validation:</h3>
                <ul>
                <li><strong>Postman</strong> – For testing API endpoints.</li>
                <li><strong>Joi</strong> – For data validation.</li>
                </ul>

                <h3>Deployment:</h3>
                <ul>
                <li><strong>Heroku</strong> – Hosting the backend server.</li>
                <li><strong>MongoDB Atlas</strong> – Cloud-hosted database.</li>
                <li><strong>Netlify/GitHub Pages</strong> – Hosting the client-side application.</li>
                </ul>

              <a href="https://github.com/cornbrosia/movie_api" target="_blank" className="text-blue-500 hover:underline">View on GitHub</a>
              <br></br>
              <a href="https://beautiful-florentine-75952f.netlify.app/" target="_blank" className="text-blue-500 hover:underline">Visit Site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Projects;
