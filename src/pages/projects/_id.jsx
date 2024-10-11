import Navbar from "../../components/Navbar";
import { Component } from "../../components/Carousel";
import { Label } from "flowbite-react";
import { useParams } from "react-router-dom";
import allData from "../../../allMyData.json";

const DetailProject = () => {
  const {id}  = useParams();
  const projects = allData[0].projects.find((project) => project.id === id);
  const image = projects.image;
  console.log(projects)
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center"></h1>
      <div className="grid grid-cols-3 gap-4 p-5 m-10 bg-red-900">
        <div className="image col-span-2">
          <Component image={image}/>
        </div>
        <div className="desc col-span-1">
          <div className="flex">
           {projects.title}
          </div>
          {projects.description}
          <p></p>

          <div className="flex">
            <Label color="gray">{projects.buildWith}</Label>
            🙃
          </div>
          <p></p>
          <div className="flex justify-center">
            <a className="mr-10" href={projects.githubLink} target="_blank" >Github</a>
            <a href={projects.liveLink} target="_blank">Live Demo</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProject;
