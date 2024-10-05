import Navbar from "../components/Layouts/Navbar";
import ParticlesJsBackground from "../components/Particle";

const HomePage = () => {
  return (
    <div className="home-page relative">   
      <ParticlesJsBackground />
      <Navbar className="navbar"/>
      <div className="flex flex-col items-center text-center justify-center h-screen relative z-10">
        <h2 className="mb-5 text-3xl text-white">Hi, I’m Sebastian Luth</h2>
        <p className="mb-4 text-white">
          A Passionate Web Developer Crafting Seamless Digital Experiences – Trust Me to Build Your Dream Website!
        </p>
        <div>
          <a
            href="/dashboard"
            className="inline-block text-sm px-4 py-2 rounded text-white border hover:border-white bg-black hover:border-black hover:text-white hover:bg-black mt-4 lg:mt-0"
          >
            See More About Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
