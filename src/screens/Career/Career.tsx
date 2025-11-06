import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { JobOpportunitiesSection } from "./sections/JobOpportunitiesSection";

export const Career = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] flex flex-col">
      <HeaderSection />

      <section className="relative w-full h-[500px] [background:url(../frame-1000005420.png)_50%_50%_/_cover]">
        <div className="absolute inset-0 bg-[#00000099]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="w-[555px] [font-family:'Montserrat',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[normal]">
            Join the Team That&apos;s Shaping Tomorrow
          </h1>
        </div>
      </section>

      <JobOpportunitiesSection />

      <FooterSection />
    </div>
  );
};
