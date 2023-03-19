import Image from "next/image";

export default function CardBlogMain({
  name,
  pos,
  title,
  description,
  image,
  avatarAuthor,
}) {
  return (
    <>
      <div className="relative">
        <Image src={image} width="570" height="400" alt="" />
        <div className="absolute bottom-0 left-0 flex items-center p-4 space-x-3 bg-white">
          <Image src={avatarAuthor} width="50" height="50" alt="" />
          <div>
            <p className="text-[13px] text-primary ">{name}</p>
            <p className="text-[10px] text-secondary">{pos}</p>
          </div>
        </div>
      </div>
      <h3 className="text-2xl text-primary text-medium leading-[36px] mt-6">
        {title}
      </h3>
      <p className="text-secondary text-[16px]">{description}</p>
    </>
  );
}
