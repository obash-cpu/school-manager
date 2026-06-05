const skillCategories = [
  {
    title: "Frontend Core",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Vite", "Webpack", "REST APIs", "Figma", "Agile/Scrum"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My Tech Stack</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
          With 3 years of professional experience and a strong academic foundation from the University of Nairobi, I leverage modern tools to build scalable web applications.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
