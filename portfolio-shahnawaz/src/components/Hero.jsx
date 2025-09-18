import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900" id="home">
      <img src={profile} alt="profile" className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6" />
      <h1 className="text-4xl font-bold">Mohammed Shahnawaz</h1>
      <p className="text-cyan-400 mt-2">Aspiring SDE | AI & ML Enthusiast</p>
      <div className="mt-4 space-x-4">
        <a href="mailto:mdshahnawaz090605@gmail.com" className="px-4 py-2 bg-cyan-500 rounded">Email</a>
        <a href="https://github.com/Mdshahnawaz9" target="_blank" className="px-4 py-2 bg-gray-700 rounded">GitHub</a>
      </div>
    </section>
  );
};
export default Hero;
