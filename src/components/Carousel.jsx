/* eslint-disable react/prop-types */

import { Carousel } from "flowbite-react";

export function Component({image}) {
  const imageList = image;
  console.log("ini image link",imageList)
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        {imageList.map((image,index) => (
           <img src={image} alt="..." key={index}/>
        ))}
      </Carousel>
    </div>
  );
}
