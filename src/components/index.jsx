/* eslint-disable react/prop-types */
const ButtonElement = ({text, handleGoal}) => {
    return (
        <button className="bg-transparent border-2 border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition duration-300"
        onClick={()=>handleGoal(text)}
        >
            {text}      
        </button>
    )
}
export default ButtonElement