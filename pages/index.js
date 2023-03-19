import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/omah" className="cursor-default">
      <div className="bg-[#19181D] min-h-screen -z-20 relative ">
        <div className="absolute top-0 left-0  w-[1104px] h-full -z-10 linear-gradient"></div>
        <div className="w-[516px] ml-[103px] py-[233px] text-white">
          <div className="px-8 py-2 text-lg font-medium bg-[#1D34EB] rounded-full inline-block">
            Landing Page
          </div>
          <div className="font-bold text-[128px]">Omah</div>
          <div className=" text-[38px]">
            Web selling/renting houses easily and reliably
          </div>
          <div className="inline-block px-8 py-4 mt-16 text-lg font-medium rounded-full bg-white/30">
            <div className="flex items-center space-x-[8px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 48 48"
              >
                <circle cx="24" cy="24" r="24" fill="#EA4C89"></circle>
                <g clipPath="url(#clip0_917_78)">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M24 12c-6.625 0-12 5.375-12 12s5.375 12 12 12c6.612 0 12-5.375 12-12s-5.388-12-12-12zm7.926 5.531a10.202 10.202 0 012.317 6.378c-.338-.065-3.722-.755-7.133-.326-.078-.169-.143-.351-.221-.533a30.534 30.534 0 00-.677-1.484c3.775-1.536 5.493-3.748 5.714-4.035zm-6.508 2.512c-1.679-3.084-3.54-5.61-3.826-6A10.437 10.437 0 0124 13.77c2.603 0 4.985.976 6.794 2.577-.182.26-1.731 2.33-5.376 3.696zm-5.778-5.31c.273.364 2.095 2.902 3.8 5.922-4.79 1.275-9.02 1.25-9.475 1.25.664-3.176 2.812-5.818 5.675-7.172zM13.744 23.7c.442.013 5.414.078 10.529-1.457.3.572.573 1.158.833 1.744-.13.039-.273.078-.404.117-5.284 1.705-8.095 6.365-8.33 6.755a10.225 10.225 0 01-2.629-6.846l.001-.313zm12.013 1.992c.026-.013.039-.013.065-.026 1.445 3.735 2.031 6.872 2.187 7.77-1.237.534-2.59.82-4.009.82a10.18 10.18 0 01-6.286-2.16c.182-.378 2.264-4.387 8.043-6.404zm3.957 6.807c-.104-.625-.651-3.618-1.991-7.302 3.215-.507 6.026.326 6.377.443a10.163 10.163 0 01-4.386 6.859z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_917_78">
                    <path
                      fill="#fff"
                      d="M0 0H24V24H0z"
                      transform="translate(12 12)"
                    ></path>
                  </clipPath>
                </defs>
              </svg>
              <p>Dzaki Muzhaffar</p>
            </div>
          </div>
        </div>
        <Image
          src="/landing_page.png"
          width="1321"
          height="4060"
          alt=""
          className="absolute top-0 right-0 w-full h-full -z-20"
        />
      </div>
    </Link>
  );
}
