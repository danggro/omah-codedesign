import Image from "next/image";

export default function CardBlogSubMain({ title, name, image }) {
  return (
    <div className="flex items-center mb-6">
      <div className="w-6/12">
        <h3 className="pr-10 text-2xl text-primary">{title}</h3>
        <p className="text-secondary text-[16px] mt-8">{name}</p>
      </div>
      <div className="w-6/12">
        <Image src={image} width="286" height="184" alt="" />
      </div>
    </div>
  );
}
