import Button from "./Button";

export default function SectionSubscribe() {
  return (
    <div className="ml-[135px] min-w-screen bg-orange mt-[128px] text-white py-[70px] mb-[130px]">
      <div className="w-7/12 mx-auto">
        <h1 className="text-[48px] text-center leading-[75px] font-medium px-10">
          Subscribe to get a discount of 30%
        </h1>
        <div className="p-4 bg-white text-secondary text-[16px] flex mt-16">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5"
          />
          <Button className="px-10 py-8 ">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}
