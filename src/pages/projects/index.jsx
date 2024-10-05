import { Link } from "react-router-dom";
import Navbar from "../../components/Layouts/Navbar";
import { useEffect, useState } from "react";

const ProjectsPage = () => {
   const [projectsData, setProjectsData] = useState([]);

   useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then(({data}) => {
        const processedProjects = data.projects.map((project) => ({
          ...project,
          imgUrl: project.imgUrl.split(', ')
        }));
        console.log(processedProjects);
        setProjectsData(processedProjects);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <Navbar />
      <div className="projects-page">
        <div className="container flex d-flex items-center justify-center bg-black text-white mt-10">
          {projectsData.length === 0 ? (
            <p>No projects found</p>
          ):
          (projectsData.map((project) => (
            <div
              key={project.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mr-4"
            >
              <Link to={`/myprojects/${project.id}`}>
                <img
                  className="rounded-t-lg"
                  src={"http://localhost:3000/images/" + project.imgUrl[0]}
                  alt={project.name}
                />
              </Link>
              <div className="p-5">
                <Link to={`/myprojects/${project.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {project.name}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {project.deskripsi}
                </p>
                <Link
                  to={`/myprojects/${project.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
