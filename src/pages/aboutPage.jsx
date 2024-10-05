import Navbar from "../components/Layouts/Navbar";

const AboutPage = () => {

    return (
        <>
        <Navbar />
        <div className="about-page h-screen flex flex-col items-center bg-black text-white mt-10">
            <div className="flex flex-row  rounded-lg w-[90%] items-center justify-between ">
                <div className="w-1/3 ">
                    <img 
                        src="https://www.blibli.com/friends-backend/wp-content/uploads/2022/09/B900267.-cara-pakai-topi-toga.jpg" 
                        alt="Graduation Cap" 
                        className="rounded-lg border-4 border-white shadow-lg"
                    />
                </div>
                <div className="w-2/3 ml-8 mt-20">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationat. Duis aute irure dolor in  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <div className="w-full bg-gray-800 p-4 text-lg font-semibold shadow-2xl mb-4">
                        Who I Am
                    </div>

                    <div className="flex flex-row p-8 rounded-lg w-full items-center justify-between">
                    <button className="bg-transparent border-2 border-white px-8 py-3 mt-4 rounded-md text-white hover:bg-white hover:text-gray-900 transition duration-300">
                        Download CV
                    </button>
                    <div className="flex flex-row space-x-4 mt-6">
                        <a href="#" className="text-white hover:text-gray-500">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Ikon LinkedIn */}
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-2.5v-9h2.5v9zm-1.25-10.286c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm12.25 10.286h-2.5v-4.5c0-1.105-.895-2-2-2s-2 .895-2 2v4.5h-2.5v-9h2.5v1.236c.695-.787 1.705-1.236 2.75-1.236 2.481 0 4.5 2.019 4.5 4.5v4.5z"/>
                            </svg>
                        </a>
                        <a href="#" className="text-white hover:text-gray-500">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Ikon Email */}
                                <path d="M12 12.713l11.954-7.165c-.195-1.945-1.86-3.549-3.854-3.549h-16.2c-2.028 0-3.682 1.655-3.9 3.65l11.936 7.152h.064zm-.064 2.139l-11.935-7.152v10.3c0 2.1 1.854 3.75 3.904 3.75h16.193c2.043 0 3.84-1.639 3.85-3.7v-10.3l-11.936 7.152h-.076z"/>
                            </svg>
                        </a>
                    </div>

                    </div>
        
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutPage;
