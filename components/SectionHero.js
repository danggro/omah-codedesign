import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import SectionHeroItem from "./SectionHeroItem";

export default function SectionHero() {
  return (
    <div>
      <Container>
        <div className="flex items-center justify-between my-[50px]">
          <div className="w-7/12">
            <h1 className="text-[64px] font-medium">
              <p>Ready to</p>
              <p>find your new home</p>
            </h1>
          </div>
          <div className="flex justify-end w-5/12">
            <div className=" flex items-start space-x-[21px]">
              <svg
                width="38"
                height="3"
                viewBox="0 0 38 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-2"
              >
                <rect width="38" height="3" fill="#F58634" />
              </svg>
              <div className="w-[375px]">
                <p className="text-xl text-secondary leading-[34px]">
                  looking for a house with a low price and quality here, and
                  sell your house quickly here
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="pr-[135px] ">
        <div className="relative">
          <Image src="/bernard.png" width="1305" height="482" alt="" />
          <div className="absolute right-0 flex items-center pt-4 pb-4 pl-10 pr-4 bg-white -bottom-[56px] shadow-hero space-x-[112px]">
            <SectionHeroItem />
            <Button className="w-[162px] h-[80px]">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
