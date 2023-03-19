import Image from "next/image";
import CardLatest from "./CardLatest";
import CardReview from "./CardReview";
import Container from "./Container";
import ViewAll from "./ViewAll";

export default function SectionReview() {
  return (
    <div className="mt-[128px]">
      <Container>
        <div className="flex items-center">
          <div className="w-7/12">
            <h2 className="text-[40px] font-medium pr-16">
              Some people are very satisfied buying a house here
            </h2>
          </div>
          <div className="w-5/12">
            <div className="flex justify-end">
              <ViewAll />
            </div>
          </div>
        </div>
      </Container>
      <div className="flex gap-8 overflow-y-hidden overflow-x-auto snap-x  ml-[135px] mt-[50px]">
        <div className="flex flex-shrink-0 ">
          <CardReview
            image="/review-1.png"
            name="John Doe"
            msg="I am very satisfied buying a house here because it is fast and easy"
          />
        </div>
        <div className="flex flex-shrink-0 ">
          <CardReview
            image="/review-2.png"
            name="Angel Doe"
            msg="Buying a house here is very cheap and high quality"
          />
        </div>
        <div className="flex flex-shrink-0 ">
          <CardReview
            image="/review-2.png"
            name="Angel Doe"
            msg="Buying a house here is very cheap and high quality"
          />
        </div>
      </div>
    </div>
  );
}
