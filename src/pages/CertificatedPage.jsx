import Navbar from "../components/Navbar";
import { FaDownload, FaCertificate } from "react-icons/fa";

export function CertificatedPage() {
    const certificates = [
        {
            title: "Frontend Development",
            issuer: "Udemy",
            date: "January 2024",
            description: "Completed an advanced course on frontend development using React, HTML, CSS, and JavaScript.",
            link: "#",
        },
        {
            title: "Full Stack Web Development",
            issuer: "freeCodeCamp",
            date: "December 2023",
            description: "Completed the full stack web development curriculum with hands-on projects.",
            link: "#",
        },
        {
            title: "Cloud Computing",
            issuer: "Coursera",
            date: "November 2023",
            description: "Learned about cloud infrastructure and deployment on various platforms.",
            link: "#",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="relative overflow-hidden bg-gray-900 min-h-screen py-12 px-6">
                {/* Background Animation */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-pink-600 opacity-20 animate-gradient"></div>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <h1 className="relative z-10 text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 via-blue-400 animate-pulse mb-16">
                    My Certifications
                </h1>

                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-xl bg-black bg-opacity-50 backdrop-blur-lg border-2 border-transparent hover:border-blue-500 transition-all duration-500 ease-in-out shadow-lg 
                            transform hover:scale-105 hover:rotate-1 hover:shadow-2xl`}
                        >
                            {/* Glowing Border */} 
                            <div className="absolute inset-0 rounded-xl opacity-75 transition-transform transform-gpu group-hover:scale-110 group-hover:rotate-6 bg-gradient-to-r from-blue-500 to-transparent blur-3xl"></div>

                            {/* Main Content */}
                            <div className="relative z-10 text-white">
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-3xl font-bold drop-shadow-lg">{cert.title}</h2>
                                    <FaCertificate className="text-5xl text-white opacity-75" />
                                </div>
                                <p className="text-sm mb-2">Issued by: <span className="font-medium">{cert.issuer}</span></p>
                                <p className="text-sm mb-2">Date: {cert.date}</p>
                                <p className="mt-4 text-gray-300">{cert.description}</p>

                                {/* Download Button */}
                                <a
                                    href={cert.link}
                                    className="inline-block mt-6 px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-purple-500 hover:to-blue-500 shadow-xl transform hover:scale-110 transition-all duration-300"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaDownload className="inline-block mr-2" />
                                    Download Certificate
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
