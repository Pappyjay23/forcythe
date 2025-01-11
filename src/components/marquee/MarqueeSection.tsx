import React from "react";
import Marquee from "./Marquee";
import SectionHeader from "../SectionHeader";

const MarqueeSection = () => {
	return (
		<section className='lg:mt-[-170px] px-4 py-[3rem] md:p-0 mb-[3rem]'>
			<SectionHeader text="Success in Motion - Our clients’ journey" highlight="Motion" />
			<Marquee />
		</section>
	);
};

export default MarqueeSection;
