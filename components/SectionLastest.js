import Link from "next/link";
import CardLatest from "./CardLatest";
import Container from "./Container";
import ViewAll from "./ViewAll";

export default function SectionLastest() {
  return (
    <Container>
      <div className="mt-[184px] mb-[50px]">
        <div className="flex items-center">
          <div className="w-6/12">
            <div className="flex space-x-[49px] items-center">
              <h3 className="text-primary font-medium text-[40px]">
                The Lastest
              </h3>
              <div className="flex space-x-[40px]">
                <p className="text-2xl text-orange">For Sale</p>
                <p className="text-2xl text-secondary">To Rent</p>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <div className="flex justify-end">
              <ViewAll />
            </div>
          </div>
        </div>
      </div>
      <div className="flex -mx-[15px]">
        <div className="w-4/12 px-[15px]">
          <CardLatest
            image="/latest-1.png"
            title="Orange House"
            room="3"
            location="Jl Klapanunggal, cileungsi, bogor"
            price="$1,435,000"
          />
        </div>

        <div className="w-4/12 px-[15px]">
          <CardLatest
            image="/latest-2.png"
            title="White House"
            room="2"
            location="Jl Klapanunggal, cileungsi, bogor"
            price="$1,200,500"
          />
        </div>
        <div className="w-4/12 px-[15px]">
          <CardLatest
            image="/latest-3.png"
            title="Green House"
            room="2"
            location="Jl Klapanunggal, cileungsi, bogor"
            price="$2,300,500"
          />
        </div>
      </div>
    </Container>
  );
}
