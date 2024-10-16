import Navbar from "../components/Navbar";
import allData from "../../allMyData.json";

const ExperiencePage = () => {
  // Fix typo from 'experiance' to 'experience'
  const education = allData.find((data) => data.education)?.education || [];
  const experience = allData.find((data) => data.experiance)?.experiance || [];

  return (
    <>
      <Navbar />
      <div className="main p-10 overflow-auto h-screen">
        <h1 className="text-4xl text-white font-bold mb-8">Education</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((data, index) => (
            <div
              className="educational text-white p-6 border-2 border-white rounded-lg shadow-lg"
              key={index}
            >
              <h2 className="text-2xl font-bold mb-2">{data.title}</h2>
              <h3 className="text-xl font-semibold">{data.major}</h3>
              <p className="text-lg">{data.institute}</p>
              <p>{data.year}</p>
              <p className="mt-4">{data.description}</p>
            </div>
          ))}
        </div>

        <h1 className="text-4xl text-white font-bold mt-12 mb-8">Work Experience</h1>
        {experience.map((data, index) => (
          <div className="relative text-white mb-10" key={index}>
            <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
            <div className="pl-10">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-white rounded-full"></div>
                <h2 className="ml-4 text-xl font-bold">
                  {data.title}, {data.company}
                </h2>
              </div>
              <ul className="ml-8 list-none mt-4">
                {data.task?.length > 0 ? (
                  data.task.map((task, taskIndex) => (
                    <li className="flex items-start mb-2" key={taskIndex}>
                      <span className="mr-2 mt-1">&gt;</span>
                      <p>
                        <span className="font-semibold">{task.title}</span> - {task.description}
                      </p>
                    </li>
                  ))
                ) : (
                  <p>No tasks available.</p>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperiencePage;
