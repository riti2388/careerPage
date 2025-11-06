import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home", active: false },
  { label: "Services", active: false },
  { label: "Industries", active: false },
  { label: "Portfolio", active: false },
  { label: "Career", active: true },
  { label: "Blog", active: false },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex h-[94px] items-center gap-[30px] px-[135px] py-5 w-full bg-white shadow-[0px_4px_14px_#0000000a]">
      <img
        className="w-[98px] h-[54px] object-cover"
        alt="Image"
        src="/image-36-1.png"
      />

      <nav className="flex items-start justify-center gap-[30px] flex-1">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-start justify-center gap-px"
          >
            <div
              className={`flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Nunito_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap ${
                item.active ? "text-[#39b2df]" : "text-neutralgray-700"
              }`}
            >
              {item.label}
            </div>

            {item.active && (
              <div className="w-full h-[1.5px] rounded-[9px] bg-[linear-gradient(153deg,rgba(0,218,255,1)_53%,rgba(251,8,4,1)_100%)]" />
            )}
          </div>
        ))}
      </nav>

      <div className="relative w-[230.15px] h-[54px]">
        <Button
          variant="ghost"
          className="inline-flex h-[54px] items-center justify-center gap-2.5 px-2 py-3.5 absolute top-0 left-[35px] rounded-[50px] hover:bg-transparent"
        >
          <span className="[font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Free Consultation
          </span>
        </Button>

        <img
          className="top-0 left-[187px] absolute w-[43px] h-10"
          alt="Group"
          src="/group-6356305.png"
        />

        <img
          className="top-3.5 left-0 absolute w-[43px] h-10"
          alt="Group"
          src="/group-6356304.png"
        />
      </div>
    </header>
  );
};
