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
      <div className="about-page min-h-screen flex flex-col items-center bg-black text-white py-16 px-4">
        <div className="flex flex-col md:flex-row rounded-lg w-full max-w-7xl items-center justify-between space-y-10 md:space-y-0">
          <div className="w-full md:w-1/3 flex justify-center">
            <ImageComponent image={aboutMe.image} />
          </div>
          <div className="w-full md:w-2/3 ml-0 md:ml-8 space-y-4 text-justify">
            <h2 className="text-4xl font-bold mb-2">About Me</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              {aboutMe.description}
            </p>
            <div className="bg-gray-800 p-6 rounded-lg shadow-2xl shadow-gray-700">
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
            {/* Download CV and social buttons */}
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
