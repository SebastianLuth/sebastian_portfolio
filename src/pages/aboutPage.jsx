import Navbar from "../components/Navbar";
import allData from "../../allMyData.json";
import ButtonElement from "../components";
import SocialButton from "../components/SocialButton";
import ImageComponent from "../components/Image";

const AboutPage = () => {
  const aboutMe = allData[3].aboutMe;
  const personalSkills =
    aboutMe.skills.find((skill) => skill.personalSkill)?.personalSkill || [];
  const tools = aboutMe.skills.find((tool) => tool.tools)?.tools || [];
  const languages =
    aboutMe.skills.find((skill) => skill.language)?.language || [];

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden bg-black text-white min-h-screen flex flex-col items-center py-16 px-6">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800 via-blue-600 to-pink-600 opacity-20 animate-gradient"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl items-center justify-between space-y-10 md:space-y-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <ImageComponent image={aboutMe.image} />
              <div className="absolute inset-0 rounded-lg opacity-75 transition-transform transform-gpu group-hover:scale-110 group-hover:rotate-1"></div>
            </div>
          </div>

          <div className="w-full md:w-2/3 ml-0 md:ml-8 space-y-4 text-justify">
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 via-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              {aboutMe.description}
            </p>

            {/* Skills Section */}
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-2xl border-2 border-transparent hover:border-pink-500 transition-all duration-500 ease-in-out">
              <h4 className="font-semibold text-xl mb-4">Skills</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h5 className="text-lg font-semibold mb-2">Interpersonal</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {personalSkills.map((skill, index) => (
                      <li key={index}>{skill.title}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-2">Tools</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {tools.map((tool, index) => (
                      <li key={index}>{tool.title}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold mb-2">Languages</h5>
                  <ul className="list-disc list-inside text-gray-300">
                    {languages.map((language, index) => (
                      <li key={index}>{language.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Download CV and Social Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-8">
              <ButtonElement text={"Download CV"} />
              <SocialButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
