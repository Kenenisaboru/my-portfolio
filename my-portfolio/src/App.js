import React, { useState, useEffect } from 'react';
import './App.css';
import tlgImage from './images/tlg.jpg';
import { FaEnvelope, FaFacebookF, FaInstagram, FaGithub, FaPhone } from 'react-icons/fa';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const tagline = 'Passionate Full-Stack Developer experienced in React, Node.js, and modern web technologies. Open to collaborations — contact me if you have a real project, and let’s build something amazing together!';

  const skills = [
    { name: 'React', level: '75%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'Node.js', level: '70%' },
    { name: 'Express', level: '75%' },
    { name: 'MongoDB', level: '50%' },
    { name: 'MySQL', level: '80%' },
    { name: 'Git/GitHub', level: '65%' },
    { name: 'TailwindCSS', level: '60%' },
    { name: 'Python', level: '45%' },
    { name: 'C++', level: '65%' },
    { name: 'HTML', level: '95%' },
    { name: 'CSS', level: '90%' },
  ];

  const projects = [
    { title: 'Data Structure & Algorithm', desc: 'C++ project solving algorithmic challenges.', link: 'https://github.com/Kenenisaboru/Data-structure-and-Algorithm' },
    { title: 'Game', desc: 'HTML, CSS, JS game with DOM interactivity.', link: 'https://github.com/Kenenisaboru/game' },
    { title: 'Ecommerce Management System', desc: 'MySQL backend & database project.', link: 'https://github.com/Kenenisaboru/Ecommerce-Management-System' },
    { title: 'Web-based Code Editor & AI Assistant', desc: 'Modern code editor with AI integration.', link: 'https://github.com/Kenenisaboru/Web-based-code-editor-and-AI-frontend-Assistance' },
    { title: 'Dynaconf (Python)', desc: 'Python configuration management project.', link: 'https://github.com/Kenenisaboru/dynaconf' },
    { title: 'Quiz App', desc: 'Interactive JS quiz app.', link: 'https://github.com/Kenenisaboru/quiz-app' },
  ];

  const testimonials = [
    { name: 'Abel Tadesse', feedback: 'Kenenisa is an outstanding developer with great communication and dedication during internship program.', role: 'Project Manager, software Engener', photo: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Sami Mohammed', feedback: 'Very professional and proactive. Delivered clean, optimized code on time.', role: 'fullstack-developer', photo: 'https://randomuser.me/api/portraits/men/45.jpg' },
    { name: 'Liya Daniel', feedback: 'Creative, hardworking, and passionate about technology.', role: 'UI/UX Designer', photo: 'https://randomuser.me/api/portraits/women/28.jpg' },
  ];

  const awards = [
    { title: 'Best in Introduction to Web Development', org: 'HUCCISA — 2024', desc: 'Honored for exceptional performance and innovation in frontend web development.' },
    { title: 'Certified Frontend Web Developer', org: 'freeCodeCamp — 2024', desc: 'Successfully completed the Frontend Web Development Certification program.' },
  ];

  const rainbowGradients = [
    'linear-gradient(270deg,#ff4d4d,#ffad33,#33ff57,#33ffd7,#3399ff,#9933ff,#ff33d4)',
    'linear-gradient(270deg,#ffad33,#ffe933,#33ff57,#33ffd7,#3399ff,#9933ff,#ff33d4,#ff4d4d)',
    'linear-gradient(270deg,#ffe933,#33ff57,#33ffd7,#3399ff,#9933ff,#ff33d4,#ff4d4d,#ffad33)',
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(tagline.slice(0, index + 1));
      index++;
      if (index === tagline.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const staggerContainers = [
      { container: '.skills-list', item: '.skill-item' },
      { container: '.projects-list', item: '.project-item' },
      { container: '.testimonials-list', item: '.testimonial-item' },
      { container: '.awards-list', item: '.award-item' },
    ];

    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.2 }
    );

    document.querySelectorAll('.section, #about, .profile-footer').forEach(el => observer.observe(el));

    staggerContainers.forEach(({ container, item }) => {
      const parent = document.querySelector(container);
      if (!parent) return;
      parent.querySelectorAll(item).forEach((child, i) => {
        child.style.setProperty('--delay', `${i * 0.15}s`);
        observer.observe(child);
      });
    });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Kenenisa Boru</h1>
        <nav className="nav">
          {['about','skills','projects','awards','testimonials','contact'].map(section => (
            <a key={section} href={`#${section}`} className="nav-link">{section.charAt(0).toUpperCase()+section.slice(1)}</a>
          ))}
        </nav>
      </header>

      {/* Profile Footer */}
      <section className="profile-footer">
        <img src={tlgImage} alt="Kenenisa" className="profile-photo" />
        <h3>Hi, I’m Kenenisa!</h3>
        <p>{typedText}</p>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-description">
          I am a self-taught Full-Stack Developer building scalable web applications with interactive, modern user experiences. Passionate about solving real-world problems and collaborating on meaningful projects.
          see my what im doing on the last more than one  years in github in my project section
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item" style={{ background: rainbowGradients[i % rainbowGradients.length] }}>
              <span>{skill.name}</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map((p, i) => (
            <div key={i} className="project-item" style={{ background: rainbowGradients[i % rainbowGradients.length] }}>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-description">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="cta-button mt-4">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="section awards">
        <h2 className="section-title">🏆 Awards & Achievements</h2>
        <div className="awards-list">
          {awards.map((a, i) => (
            <div key={i} className="award-item">
              <h3>{a.title}</h3>
              <p>{a.org}</p>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-item">
              <img src={t.photo} alt={t.name} className="testimonial-photo" />
              <p>“{t.feedback}”</p>
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">Reach out via email, phone, or social media:</p>
        <div className="contact-links">
          <a href="mailto:kenenisaboru998@gmail.com" className="cta-button contact-btn"><FaEnvelope /> Email</a>
          <a href="https://web.facebook.com/kanuwiz.jah" target="_blank" rel="noopener noreferrer" className="cta-button contact-btn"><FaFacebookF /> Facebook</a>
          <a href="https://www.instagram.com/kenenii4/" target="_blank" rel="noopener noreferrer" className="cta-button contact-btn"><FaInstagram /> Instagram</a>
          <a href="https://github.com/Kenenisaboru" target="_blank" rel="noopener noreferrer" className="cta-button contact-btn"><FaGithub /> GitHub</a>
          <a href="tel:+251983701428" className="cta-button contact-btn"><FaPhone /> +251-983701428</a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Kenenisa Boru. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
