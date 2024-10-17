import Navbar from "../components/Navbar";
import allData from "../../allMyData.json";

const ExperiencePage = () => {
  const education = allData.find((data) => data.education)?.education || [];
  const experience = allData.find((data) => data.experiance)?.experiance || [];

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden bg-gray-900 min-h-screen py-12 px-6">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-blue-500 opacity-20 animate-gradient"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10 main p-10">
          <h1 className="text-5xl text-white font-extrabold mb-12 text-left">Education</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((data, index) => (
              <div
                className="relative p-6 bg-black bg-opacity-50 backdrop-blur-lg border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1"
                key={index}
              >
                {/* Glowing Border */}
                <div className="absolute inset-0 rounded-xl opacity-75 transition-transform transform-gpu group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl"></div>
                
                <div className="relative z-10 text-white">
                  <h2 className="text-3xl font-bold mb-2">{data.title}</h2>
                  <h3 className="text-xl font-semibold">{data.major}</h3>
                  <p className="text-lg">{data.institute}</p>
                  <p>{data.year}</p>
                  <p className="mt-4 text-gray-300">{data.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h1 className="text-5xl text-white font-extrabold mt-16 mb-12 text-left">Work Experience</h1>
          {experience.map((data, index) => (
            <div className="relative text-white mb-10 pl-10" key={index}>
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h2 className="ml-4 text-2xl font-bold">
                  {data.title}, {data.company}
                </h2>
              </div>
              <ul className="ml-8 mt-6 space-y-4">
                {data.task?.length > 0 ? (
                  data.task.map((task, taskIndex) => (
                    <li className="flex items-start" key={taskIndex}>
                      <span className="mr-2 mt-1 text-blue-400">&gt;</span>
                      <p className="text-gray-300">
                        <span className="font-semibold">{task.title}</span> - {task.description}
                      </p>
                    </li>
                  ))
                ) : (
                  <p className="text-gray-300">No tasks available.</p>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
