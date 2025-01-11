import React from "react";
import Image from "next/image";
import marqueeImg1 from "@/assets/images/marquee-img-1.svg";
import marqueeImg2 from "@/assets/images/marquee-img-2.svg";
import marqueeImg3 from "@/assets/images/marquee-img-3.svg";
import marqueeImg4 from "@/assets/images/marquee-img-4.svg";
import marqueeImg5 from "@/assets/images/marquee-img-5.svg";
import marqueeImg6 from "@/assets/images/marquee-img-6.svg";

const Marquee = () => {
  const images = [
    marqueeImg1,
    marqueeImg2,
    marqueeImg3,
    marqueeImg4,
    marqueeImg5,
    marqueeImg6,
  ];

  return (
    <div
      className="flex flex-col gap-5"
      style={{
        background:
          "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgb(3, 5, 22) 80%)",
      }}
    >
      <div className="marquee-container overflow-hidden">
        <div className="marquee flex items-stretch gap-5">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="relative w-auto h-[340px] flex-shrink-0">
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <Image
                alt={`project-image-${index}`}
                loading="lazy"
                width="340"
                height="340"
                decoding="async"
                className="overflow-hidden w-full h-full"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-container overflow-hidden">
        <div className="marquee-reverse flex items-stretch gap-5">
          {[...images, ...images].map((image, index) => (
            <div key={index} className="relative w-auto h-[340px] flex-shrink-0">
              <div className="bg-accent -z-10 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse"></div>
              <Image
                alt={`project-image-${index}`}
                loading="lazy"
                width="340"
                height="340"
                decoding="async"
                className="overflow-hidden w-full h-full"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
