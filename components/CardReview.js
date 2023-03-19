import Image from "next/image";

export default function CardReview({ image, name, msg }) {
  return (
    <div className="">
      <div className="relative">
        <Image src={image} width="570" height="400" alt="" />
        <div className="absolute bottom-0 left-0 px-4 py-4 bg-white text-orange ">
          {name}
        </div>
      </div>
      <p className="text-2xl text-primary w-[428px] mt-8 leading-[36px]">
        {msg}
      </p>
    </div>
  );
}
