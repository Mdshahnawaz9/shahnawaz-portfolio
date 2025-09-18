const Skills = () => (
  <section id="skills" className="py-20 bg-gray-900 text-center">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {["Java", "Python", "C", "HTML", "CSS", "JavaScript", "MySQL", "Problem Solving"].map((skill) => (
        <span key={skill} className="px-4 py-2 bg-gray-700 rounded-lg">{skill}</span>
      ))}
    </div>
  </section>
);
export default Skills;
