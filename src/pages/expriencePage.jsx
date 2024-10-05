import Navbar from "../components/Layouts/Navbar";

const ExperiencePage = () => {
  return (
    <>
      <Navbar />
      <div className="main p-10 overflow-auto h-screen">
        <div className="mb-10">
          <h1 className="text-3xl text-white font-bold mb-5">Educational</h1>
          <div className="educational text-white p-4 w-1/4 border-2 border-white">
            <h2 className="text-2xl font-semibold">Bachelor Degree</h2>
            <h4 className="text-lg"> Politeknik Negeri Medan</h4>
            <h4>2016 - 2020</h4>
            <p>Computer Science</p>
            <p>CGPA : 3.81</p>
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-white font-bold mb-5">Work Experience</h1>
          <div className="relative text-white">
            <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
            {/* Work 1 */}
            <div className="mb-6 pl-10">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-white rounded-full"></div>
                <h2 className="ml-4 text-xl font-bold">Full Stack Web Developer</h2>
              </div>
              <ul className="ml-8 list-none">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">&gt;</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </li>
                <li className="flex items-start mt-2">
                  <span className="mr-2 mt-1">&gt;</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </li>
                <li className="flex items-start mt-2">
                  <span className="mr-2 mt-1">&gt;</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
