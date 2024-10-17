import Navbar from "../components/Navbar";
import { FaInfoCircle, FaFolder, FaCertificate, FaBriefcase, FaBlog } from "react-icons/fa";

const DashboardPage = () => {
  const menuItems = [
    { icon: <FaInfoCircle />, label: "About Me", href: "/about" },
    { icon: <FaFolder />, label: "Projects", href: "/myprojects" },
    { icon: <FaBriefcase />, label: "Work Experience", href: "/experience" },
    { icon: <FaCertificate />, label: "Certificated", href: "/certificated" },
    { icon: <FaBlog />, label: "My Blogs" , href: "/blogs" },
  ];

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden bg-gray-900 min-h-screen py-12 px-6">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-pink-600 opacity-20 animate-gradient"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Title */}
        <p className="relative z-20 text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 via-blue-400 animate-pulse mb-16">
          Welcome to My Dashboard
        </p>

        {/* Card Container */}
        <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`group relative flex items-center justify-between p-8 rounded-xl bg-black bg-opacity-50 backdrop-blur-lg border-2 border-transparent hover:border-blue-500 transition-all duration-500 ease-in-out shadow-lg 
              transform hover:scale-105 hover:rotate-1 hover:shadow-2xl`}
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-xl opacity-75 transition-transform transform-gpu group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-r from-blue-500 to-transparent blur-3xl"></div>

              <div className="relative z-10 flex items-center justify-between w-full">
                {/* Left Icon */}
                <div className="text-4xl">{item.icon}</div>

                {/* Label in the Center */}
                <h2 className="text-2xl font-bold text-center">{item.label}</h2>

                {/* Right Arrow */}
                <div className="text-xl text-white opacity-70 transition-transform transform group-hover:translate-x-2">
                  ➔
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
