import { BriefcaseIcon, FileTextIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const jobOpportunities = [
  {
    id: 1,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 2,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 3,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 4,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 5,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 6,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 7,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 8,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 9,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 10,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 11,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 12,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 13,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
  {
    id: 14,
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
  },
];

export const JobOpportunitiesSection = (): JSX.Element => {
  return (
    <section className="w-full py-[100px] px-4">
      <div className="max-w-[1064px] mx-auto">
        <div className="flex flex-col items-center gap-[18px] mb-[62px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-primary-500 text-5xl text-center tracking-[0] leading-[normal]">
            Job Opportunities
          </h2>
          <p className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-500 text-lg text-center tracking-[0] leading-[normal] max-w-[546px]">
            Discover roles that match your passion and skills, and grow with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {jobOpportunities.map((job) => (
            <Card
              key={job.id}
              className="bg-white rounded-lg overflow-hidden shadow-[0px_2px_10px_#00000024] border-0"
            >
              <CardContent className="flex flex-col items-center gap-10 px-10 py-[49px]">
                <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralgray-700 text-xl text-center tracking-[0] leading-[normal] w-full">
                  {job.title}
                </h3>

                <div className="flex items-center gap-10 w-full">
                  <div className="flex items-center justify-center gap-2 flex-1">
                    <BriefcaseIcon className="w-6 h-6 text-neutralgray-600" />
                    <span className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-[normal]">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-1">
                    <MapPinIcon className="w-6 h-6 text-neutralgray-600" />
                    <span className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-[normal]">
                      {job.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-1">
                    <FileTextIcon className="w-6 h-6 text-neutralgray-600" />
                    <span className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-[normal]">
                      {job.experience}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
