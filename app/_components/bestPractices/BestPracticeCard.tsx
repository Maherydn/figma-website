import React, { ReactNode } from "react";

interface BestPracticeCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const BestPracticeCard: React.FC<BestPracticeCardProps> = ({ icon, title, description }) => {
  return (
    <div className="lg:h-60 h-72 basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-1rem)] bg-[#171C1F] rounded-4xl flex flex-col px-4 py-4 justify-center gap-2 lg:gap-4 hover:scale-105 duration-300 cursor-pointer">
      
      <div className="h-10 w-10 ml-4 text-white rounded-2xl flex items-center justify-center">
        {icon}
      </div>

      <div className="flex flex-col justify-center items-start text-sm lg:text-base font-semibold">
        <h3 className="text-white/80">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
      
    </div>
  );
};

export default BestPracticeCard;
