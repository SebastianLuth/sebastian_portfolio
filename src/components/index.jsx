/* eslint-disable react/prop-types */
const ButtonElement = ({text}) => {
    const handleGoal = (text) => {
        switch (text) {
          case "See More About Me":
            window.location.href = "/dashboard";
            break;
          case "About Me":
            window.location.href = "/about";
            break;
          case "Projects":
            window.location.href = "/myprojects";
            break;
          case "Work Eperience":
            window.location.href = "/exprience";
            break;
          case "Certificated":
            window.location.href = "/certificated";
            break;
          case "My Blogs":
            window.location.href = "/blogs";
            break;
          default:
            break;
        }
      }
    return (
        <button className="bg-transparent border-2 border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition duration-300"
        onClick={()=>handleGoal(text)}
        >
            {text}      
        </button>
    )
}
export default ButtonElement