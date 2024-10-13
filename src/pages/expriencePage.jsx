import Navbar from "../components/Navbar";
import allData from "../../allMyData.json";

const ExperiencePage = () => {
  const education = allData.find((data) => data.education)?.education || [];
  const work = allData.find((data) => data.work)?.work || [];
  console.log("ini Work",work);
  return (
    <>
      <Navbar />
      <div className="main p-10 overflow-auto h-screen">
        <h1 className="text-3xl text-white font-bold mb-5">Education</h1>
        <div className="flex">
        { 
          education.map((data, index) => (
            <div className="mb-10 educational text-white p-4 border-2 border-white mr-5" key={index}>
                <h1 className="text-3xl text-white font-bold mb-5">{data.title}</h1>
                <h2 className="text-2xl font-semibold">{data.major}</h2>
                <h4 className="text-lg">{data.institute}</h4>
                <h4>{data.year}</h4>
                <p>{data.description}</p>
            </div>
          ))
        }
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
