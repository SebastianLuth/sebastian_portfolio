/* eslint-disable react/prop-types */
const ImageComponent = ({image}) => {
    return (
        <img
        src={image}
        alt={`${image} image`}
        className="rounded-lg border-4 border-white shadow-lg w-72 h-72 object-cover"
      />
    );
}

export default ImageComponent