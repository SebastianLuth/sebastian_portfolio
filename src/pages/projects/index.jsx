import Navbar from "../../components/Navbar";
import allData from "../../../allMyData.json";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = allData[0].projects;

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-6">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-blue-500 opacity-20 animate-gradient"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-wrap justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative max-w-sm bg-black bg-opacity-50 backdrop-blur-lg border border-transparent rounded-lg shadow-lg m-4 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
            >
              {/* Glowing Neon Border */}
              <div className="absolute inset-0 rounded-lg opacity-75 transition-transform transform-gpu group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl"></div>

              <Link to={`/myprojects/${project.id}`}>
                <img
                  className="relative z-10 rounded-t-lg transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out"
                  src={project.image[0]}
                  alt={project.title}
                />
              </Link>
              <div className="relative z-10 p-5">
                <Link to={`/myprojects/${project.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-400">{project.description}</p>
                <Link
                  to={`/myprojects/${project.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
