const projectsData = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Chart.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    live: "#", github: "#"
  },
  {
    title: "AI Task Manager",
    description: "A smart to-do application that uses AI to categorize tasks, estimate completion time, and suggest priorities.",
    tech: ["Next.js", "OpenAI API", "TypeScript", "Prisma"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80",
    live: "#", github: "#"
  },
  {
    title: "Weather Forecast App",
    description: "A sleek, location-based weather application providing 7-day forecasts, radar maps, and severe weather alerts.",
    tech: ["React", "OpenWeather API", "Framer Motion", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    live: "#", github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 flex flex-col">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.live} className="flex-1 text-center py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition">Live Demo</a>
                  <a href={project.github} className="flex-1 text-center py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
