import Image from "next/image";
import React from "react";

type HeroesProps = {};

const Heroes: React.FC<HeroesProps> = () => {
  return (
    <div className="flex items-center justify-between max-w-5xl">
      <div className="relative flex items-center h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src="/documents.png"
          alt="document"
          fill
          className="object-contain dark:hidden"
        />
        <Image
          src="/documents-dark.png"
          alt="document"
          fill
          className="object-contain hidden dark:block"
        />
      </div>
      <div className="relative hidden md:block h-[400px] w-[400px]">
        <Image
          src="/reading.png"
          alt="document"
          fill
          className="object-contain dark:hidden"
        />
        <Image
          src="/reading-dark.png"
          alt="document"
          fill
          className="object-contain hidden dark:block"
        />
      </div>
    </div>
  );
};
export default Heroes;
