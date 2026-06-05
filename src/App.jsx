import React, { useState, useEffect, createContext, useContext } from 'react';

// --- THEME CONTEXT ---
const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  // Defaulting to dark mode for a premium developer look
  const [theme, setTheme] = useState('dark'); 
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// --- MAIN APP ---
function App() {
  return (
    <ThemeProvider>
      {/* Injecting custom CSS for premium animations and gradients */}
      <style>{`
        .gradient-text {
          background: linear-gradient(to right, #38bdf8, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .dark .glass {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glow-button {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
          transition: all 0.3s ease;
        }
        .glow-button:hover {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
          transform: translateY(-2px);
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          z-index: -1;
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>

      <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500 min-h-screen overflow-x-hidden font-sans">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

// --- NAVBAR ---
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="fixed w-full top-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          <span className="gradient-text">Absalom</span><span className="text-slate-400">.dev</span>
        </a>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-indigo-500 transition">About</a>
            <a href="#skills" className="hover:text-indigo-500 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-500 transition">Projects</a>
            <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full glass hover:bg-slate-200 dark:hover:bg-slate-800 transition">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

// --- HERO SECTION ---
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="blob bg-indigo-600 w-96 h-96 top-20 -left-20"></div>
      <div className="blob bg-purple-600 w-96 h-96 bottom-20 -right-20" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl text-center space-y-8 z-10">
        <div className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-indigo-400 mb-4">
          👋 Welcome to my digital workspace
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I'm <span className="gradient-text">Absalom Obala</span>
          <br />
          <span className="text-slate-600 dark:text-slate-300 text-3xl md:text-5xl font-medium">Frontend Engineer & UI Craftsperson</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          I build pixel-perfect, accessible, and high-performance web applications. 
          3 years of experience transforming complex problems into elegant digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#projects" className="px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl glow-button">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3.5 glass font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

// --- ABOUT SECTION ---
function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About <span className="gradient-text">Me</span></h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto">A brief look at my journey and what drives me.</p>
        
        <div className="glass rounded-2xl p-8 md:p-12 space-y-6">
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            I am a passionate Frontend Developer who graduated from the <span className="text-indigo-500 font-semibold">University of Nairobi</span>. Over the past 3 years, I have immersed myself in the React ecosystem, mastering the art of building responsive, user-centric web applications.
          </p>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            My philosophy is simple: code should be clean, and interfaces should be delightful. Whether I'm architecting a healthcare booking system or an interactive educational platform, I focus on performance, accessibility, and modern UI/UX principles.
          </p>
        </div>
      </div>
    </section>
  );
}

// --- SKILLS SECTION ---
function Skills() {
  const skills = [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "HTML5 / CSS3", level: "Expert" },
    { name: "REST APIs", level: "Advanced" },
    { name: "Git & GitHub", level: "Advanced" },
    { name: "UI/UX Design", level: "Intermediate" }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tech <span className="gradient-text">Arsenal</span></h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto">The tools and technologies I use to bring products to life.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <div key={i} className="glass rounded-xl p-5 text-center hover:scale-105 hover:border-indigo-500/50 transition-all duration-300 cursor-default group">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-indigo-400 transition">{skill.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PROJECTS SECTION ---
function Projects() {
  const projectsData = [
    {
      title: "JSAP - Doctor Booking System",
      description: "A comprehensive healthcare platform streamlining patient experiences. Features real-time doctor availability, secure scheduling, and automated notifications.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "REST APIs"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Online Quiz Master",
      description: "An interactive educational application for dynamic assessments. Includes timed quizzes, real-time score tracking, and a detailed performance analytics dashboard.",
      tech: ["React.js", "JavaScript", "CSS Modules", "Local Storage"],
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured <span className="gradient-text">Projects</span></h2>
        <p className="text-center text-slate-500 dark:text-slate-400 mb-16 max-w-xl mx-auto">A selection of applications I've engineered over the last 3 years.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-500">
              <div className="relative h-56 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="flex-1 text-center py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium text-sm">
                    Live Demo
                  </a>
                  <a href="#" className="flex-1 text-center py-2.5 glass rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition font-medium text-sm">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- CONTACT SECTION ---
function Contact() {
  // Explicit width and height attributes force the browser to keep them tiny (12px)
  const GithubIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
  
  const LinkedInIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  
  const EmailIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="flex-shrink-0" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );

  const contactLinks = [
    { name: "GitHub", href: "https://github.com/absalomobala", icon: <GithubIcon /> },
    { name: "LinkedIn", href: "https://linkedin.com/in/absalomobala", icon: <LinkedInIcon /> },
    { name: "Email Me", href: "mailto:absalom.obala@example.com", icon: <EmailIcon /> }
  ];

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="blob bg-purple-600 w-96 h-96 bottom-0 left-1/4 opacity-20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Let's Build Something <br/>
          <span className="gradient-text">Amazing Together</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to new opportunities, freelance projects, or just a friendly chat about web development. Drop a message or connect with me below.
        </p>
        
        <a href="mailto:absalom.obala@example.com" className="inline-block px-10 py-4 bg-indigo-600 text-white font-bold rounded-xl glow-button text-lg mb-16">
          Send a Message
        </a>

        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target={link.name !== "Email Me" ? "_blank" : undefined}
              rel="noopener noreferrer" 
              className="glass flex items-center gap-2 px-5 py-3 rounded-lg hover:border-indigo-500/50 hover:scale-[1.02] hover:bg-indigo-500/5 transition-all duration-300 group min-w-[160px] justify-center"
            >
              <span className="text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 transition-colors duration-300">
                {link.icon}
              </span>
              <span className="font-medium text-sm text-slate-700 dark:text-slate-200 group-hover:text-indigo-500 transition-colors duration-300">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- FOOTER ---
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-800/50 text-center">
      <p className="text-slate-500 dark:text-slate-500 text-sm">
        © {new Date().getFullYear()} Absalom Obala. Engineered with React & Tailwind CSS.
      </p>
    </footer>
  );
}

export default App;
