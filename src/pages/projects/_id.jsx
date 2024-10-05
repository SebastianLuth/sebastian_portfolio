import Navbar from "../../components/Layouts/Navbar";
import { Component } from "../../components/Carousel";
import { Label } from "flowbite-react";
import projects from "../../../projects.json";

const DetailProject = () => {
  const project = projects.find((project) => project.id);

  if (!project) {
    return <div>Project not found</div>;
  }
  console.log(project.image);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold text-center">{project.description}</h1>
      <div className="grid grid-cols-3 gap-4 p-5 m-10 bg-red-900">
        <div className="image col-span-2">
          <Component />
        </div>
        <div className="desc col-span-1">
          <div className="flex">
            <Label color="gray">Project Name</Label>
            🙃
          </div>
          <p>{project.title}</p>

          <div className="flex">
            <Label color="gray">Build With</Label>
            🙃
          </div>
          <p>{project.buildWith ? project.buildWith: "No build with"}</p>
          <div className="flex justify-center">
            <button className="mr-10">Github</button>
            <button>Live Demo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailProject;
