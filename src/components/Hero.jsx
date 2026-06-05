export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl text-center space-y-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I'm <span className="text-teal-600 dark:text-teal-400">Alex Carter</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A passionate Frontend Developer specializing in React, crafting seamless, accessible, and high-performance digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="#projects" className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-semibold rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 transition transform hover:-translate-y-0.5">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
