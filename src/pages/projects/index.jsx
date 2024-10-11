import Navbar from "../../components/Navbar";
import allData from "../../../allMyData.json";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const projects = allData[0].projects;
  const image = projects.map((project) => project.image);
  console.log("ini link gambar",image);
  console.log(projects);
  return (
    <>
      <Navbar />
      <div className="projects-page">
        <div className="flex flex-wrap justify-center bg-black text-white mt-10">
          { projects.map((project) => (
            <div
            key={project.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mr-4"
          >
            <Link to={`/myprojects/${project.id}`}>
              <img
                className="rounded-t-lg"
                src={project.image[0]}
              />
            </Link>
            <div className="p-5">
              <Link to={`/myprojects/${project.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <Link to={`/myprojects/${project.id}`}
                href='#'
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </Link>
            </div>
          </div>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
