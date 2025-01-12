import React from "react";
import Marquee from "./Marquee";
import AnimatedText from "../AnimatedText";

const MarqueeSection = () => {
	return (
		<section className='lg:mt-[-170px] px-4 md:p-0 mb-[3rem]'>
			<AnimatedText
				text='Success in Motion - Our clients’ journey'
				highlight='Motion'
				className='md:w-[85%] lg:w-[70%] mx-auto text-center'
			/>
			<Marquee />
		</section>
	);
};

export default MarqueeSection;
