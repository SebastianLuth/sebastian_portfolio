import Navbar from "../../components/Navbar";
import { Component } from "../../components/Carousel";
import { Label } from "flowbite-react";
import { useParams } from "react-router-dom";
import allData from "../../../allMyData.json";

const DetailProject = () => {
  const { id } = useParams();
  const projects = allData[0].projects.find((project) => project.id === id);
  const image = projects.image;

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden bg-gray-900 min-h-screen flex flex-col items-center justify-center py-12 px-6">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-blue-500 opacity-20 animate-gradient"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 grid grid-cols-3 gap-6 max-w-7xl mx-auto p-8 bg-black bg-opacity-50 backdrop-blur-lg border border-transparent rounded-xl shadow-lg">
          {/* Image Section */}
          <div className="col-span-2">
            <Component image={image} />
          </div>

          {/* Description Section */}
          <div className="relative z-10 p-6 text-white">
            <h1 className="text-4xl font-bold mb-4">{projects.title}</h1>
            <p className="text-gray-400 mb-6">{projects.description}</p>

            <div className="mb-6">
              <Label color="gray">Built With:</Label>
              <p className="text-gray-400 mt-2">{projects.buildWith}</p>
            </div>

            {/* Links */}
            <div className="flex justify-center space-x-6">
              <a
                href={projects.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out shadow-lg"
              >
                Github
              </a>
              <a
                href={projects.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 ease-in-out shadow-lg"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProject;
