const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-800 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Shahnawaz</h1>
        <ul className="flex space-x-6">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
          <li><a href="#achievements" className="hover:text-cyan-400">Achievements</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
