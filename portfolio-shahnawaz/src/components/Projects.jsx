const Projects = () => (
  <section id="projects" className="py-20 bg-gray-800 text-center">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <div className="p-6 bg-gray-700 rounded-lg">
        <h3 className="text-xl font-semibold">WorkTrackPro</h3>
        <p>Smart employee performance & task management system.</p>
        <a href="https://worktrack-by-shaaz.netlify.app/" target="_blank" className="text-cyan-400">Demo</a>
      </div>
      <div className="p-6 bg-gray-700 rounded-lg">
        <h3 className="text-xl font-semibold">Flood Forecasting</h3>
        <p>Built with Federated Learning, achieved 84% accuracy ensuring data privacy.</p>
      </div>
      <div className="p-6 bg-gray-700 rounded-lg">
        <h3 className="text-xl font-semibold">Pocket Money Tracker</h3>
        <p>Simple and efficient daily expense & budget tracker.</p>
        <a href="https://pocketmoney-tracker-by-shaaz.netlify.app/" target="_blank" className="text-cyan-400">Demo</a>
      </div>
    </div>
  </section>
);
export default Projects;
