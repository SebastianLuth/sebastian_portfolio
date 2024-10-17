import Navbar from "../components/Navbar";

export function BlogsPage() {
  const blogs = [
    {
      title: "Understanding React Hooks",
      date: "October 10, 2024",
      excerpt:
        "Learn the basics of React Hooks and how to use them effectively in your React applications.",
    },
    {
      title: "Tailwind CSS Tips and Tricks",
      date: "September 22, 2024",
      excerpt:
        "Explore some useful tips and tricks for using Tailwind CSS to speed up your design process.",
    },
    {
      title: "JavaScript ES6 Features You Should Know",
      date: "August 5, 2024",
      excerpt:
        "A deep dive into the most important ES6 features every JavaScript developer should be familiar with.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative w-full h-screen bg-transparent text-white">
        {/* Background Animation */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800 via-purple-600 to-pink-600 opacity-20 animate-gradient z-10"></div>
        <div className="absolute inset-0 bg-transparent z-10"></div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col justify-center items-center h-full px-6">
          <h1 className="text-4xl font-extrabold mb-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-600 to-blue-500 animate-pulse leading-tight">
            Blogs Page
          </h1>

          <div className="max-w-3xl w-full space-y-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-lg bg-black bg-opacity-50 backdrop-blur-lg shadow-xl border-2 border-transparent hover:border-blue-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-bold">{blog.title}</h2>
                <p className="text-sm text-gray-400">{blog.date}</p>
                <p className="mt-4 text-gray-300">{blog.excerpt}</p>

                {/* Glowing Effect */}
                <div className="absolute inset-0 rounded-lg opacity-75 transition-transform transform-gpu group-hover:scale-110 group-hover:rotate-1 bg-gradient-to-r from-blue-500 to-transparent blur-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
