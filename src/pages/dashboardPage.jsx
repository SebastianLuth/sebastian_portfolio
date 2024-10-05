import Navbar from "../components/Layouts/Navbar";
import { FaInfoCircle, FaFolder, FaCertificate, FaBriefcase, FaBlog } from "react-icons/fa";

const DashboardPage = () => {
  const menuItems = [
    { icon: <FaInfoCircle />, label: "About Me" , href: "/about"},
    { icon: <FaFolder />, label: "Projects", href: "/myprojects" },
    { icon: <FaBriefcase />, label: "Work Experience", href: "/exprience" },
    { icon: <FaCertificate />, label: "Certificated", href: "/certificated" },
    { icon: <FaBlog />, label: "My Blogs" },
  ];

  return (
    <>
      <Navbar />
      <div className="dashboard-page flex flex-col text-center items-center justify-center w-full mt-5">
        <p className="text-white mb-8 text-2xl">
          Welcome to my portfolio! Feel free to explore and enjoy learning more about me through the menus below.
        </p>
        {/* Ubah lebar maksimal menjadi lebih besar */}
        <div className="w-full p-8 rounded-lg max-w-3xl bg-gray-800">
          {menuItems.map((item, index) => (
            <a
              key={index}
              className="flex items-center justify-between bg-gray-700 text-white p-4 rounded-lg mb-4 shadow-lg"
              href={item.href}
            >
              <div className="flex items-center">
                <div className="text-2xl mr-4">{item.icon}</div>
                <span>{item.label}</span>
              </div>
              <div className="text-xl">
                <span>➔</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
