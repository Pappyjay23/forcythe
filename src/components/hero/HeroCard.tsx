import React, { useEffect, useState } from "react";
import Button from "../Button";

const HeroCard = () => {
  const [text, setText] = useState("");
  const [isFadeInTriggered, setIsFadeInTriggered] = useState(false); // Track when to start fade-in
  const fullText = "We build products that shape a better future";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1)); // Add one character at a time
        index++;
        // Trigger fade-in once half of the text is typed
        if (index === Math.floor(fullText.length / 2)) {
          setIsFadeInTriggered(true);
        }
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const splitText = text.split("products");

  // Paragraph text for word fade-in
  const paragraphText =
    "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invoke sector-wide transformation.";
  const words = paragraphText.split(" "); // Split the text into words

  return (
    <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
      <div className="max-w-[56rem]">
        <div className="min-h-[180px]">
          <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7">
            {splitText[0]}
            {splitText.length > 1 && (
              <span className="text-accent text-[3.5rem] sm:text-[4rem] lg:text-[5rem]">
                products
              </span>
            )}
            {splitText[1]}
          </h1>
        </div>
        <div
          className={`mb-8 max-w-3xl ${
            isFadeInTriggered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        >
          <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
            {words.map((word, index) => (
              <span
                key={index}
                className={`inline-block opacity-0 fade-in`}
                style={{
                  animationDelay: `${
                    isFadeInTriggered ? 0.6 + index * 0.35 : 0
                  }s`,
                }}
              >
                {word}&nbsp;
              </span>
            ))}
          </p>
        </div>
        <div className="mb-5">
          <Button showPlayIcon>Book a Call</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
