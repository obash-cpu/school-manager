export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 py-8 px-4 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} Absalom Obala. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/absalomobala" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition">GitHub</a>
          <a href="https://linkedin.com/in/absalomobala" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition">LinkedIn</a>
          <a href="mailto:absalom.obala@example.com" className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition">Email</a>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-500">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
