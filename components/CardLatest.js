import Image from "next/image";
import { useState } from "react";

export default function CardLatest({ room, title, location, price, image }) {
  const [like, setLike] = useState(false);
  const [fill, setFill] = useState("none");
  const [stroke, setStroke] = useState("#F58634");

  const click = function () {
    if (like) {
      setLike(false);
      setFill("red");
      setStroke("none");
    } else {
      setLike(true);
      setFill("none");
      setStroke("#F58634");
    }
  };
  return (
    <div className="">
      <div className="relative mb-6">
        <Image src={image} width="370" height="351" alt="" />
        <div className="absolute bottom-0 left-0 px-4 py-4 bg-white text-orange ">
          {`${room} room`}
        </div>
        <div onClick={click}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            fill={fill}
            viewBox="0 0 42 42"
            className="absolute top-6 right-6"
          >
            <circle cx="21" cy="21" r="21" fill="#fff"></circle>
            <path
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M30.291 13.612a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06 7.78 7.78 7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            ></path>
          </svg>
        </div>
      </div>
      <h3 className="font-medium text-[32px] text-primary leading-[48px] mb-1">
        {title}
      </h3>
      <p className="mb-4 text-16 text-secondary leading-[24px]">{location}</p>
      <h3 className="text-2xl font-medium text-orange">{price}</h3>
    </div>
  );
}
