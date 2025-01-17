import React from 'react';
import Resume from '../files/Ben_Watson_Resume_Fixed.pdf'; 
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Hi, I'm Ben Watson, a passionate and dedicated full-stack web developer with a strong foundation in modern web technologies.
          I specialize in building responsive and user-friendly applications that solve real-world problems and deliver seamless user experiences.

          My journey in web development began with a fascination for how technology can simplify complex tasks and create engaging digital experiences.
          Over time, I’ve honed my skills in JavaScript, React, Node.js, and MongoDB, allowing me to develop robust full-stack applications.
          I love working with APIs, exploring new frameworks, and constantly improving my coding practices.

          Some of my recent projects include the myFlix app, a dynamic movie database with user authentication and interactive features, 
          and the Pokédex app, which delivers real-time Pokémon data through API integration. Each project has helped me grow as a developer 
          and sharpen my problem-solving skills.

          When I’m not coding, you’ll find me exploring new music, collecting guitars, bouldering, or experimenting with superhot peppers in my garden.
          I believe in continuous learning and enjoy collaborating with others to bring innovative ideas to life.

          I'm currently seeking exciting opportunities to contribute my skills and grow as a developer. Let’s connect and build something amazing together!
        </p>

        {/* ✅ Corrected Download Link */}
        <div className="flex justify-center mt-6">
          <a
            href={Resume}
            download
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
