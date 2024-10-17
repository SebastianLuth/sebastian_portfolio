import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const nameLinks = location.pathname.split("/");
  const name = nameLinks.toString().replace(/,/g, " ");

  return (
    <>
      {location.pathname === "/" && (
       <div className="relative w-full h-16 z-20">
       <section className="w-screen mx-auto px-4">
         <nav className="border-gray-200">
           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-transparent">
             <a
               href="/"
               className="flex items-center space-x-3 rtl:space-x-reverse"
             >
               <img
                 src="https://flowbite.com/docs/images/logo.svg"
                 className="h-8"
                 alt="Flowbite Logo"
               />
               <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                 Flowbite
               </span>
             </a>
           </div>
         </nav>
       </section>
     
       {/* Background Animation */}
       <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 pointer-events-none"></div>
       <div className="absolute inset-0 bg-transparent z-10 pointer-events-none"></div>
     </div>
     
      )}
      {location.pathname !== "/" && (
        <div className="relative w-full h-16 z-20">
          <section className="w-screen mx-auto px-4 text-white font-bold">
            <nav className="border-gray-200">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 bg-transparent">
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center space-x-3 rtl:space-x-reverse z-30"
                >
                  Back
                </button>
                <div className="z-30">
                  <p>{name.toUpperCase()}</p>
                </div>

                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse z-30">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725753600&semt=ais_hybrid"
                      alt="user photo"
                    />
                  </button>
                </div>
              </div>
            </nav>
          </section>
          {/* Background Animation */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-blue-500 opacity-20 animate-gradient z-10"></div>
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
      )}
    </>
  );
};

export default Navbar;
