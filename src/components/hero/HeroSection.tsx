import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/header-background.svg";
import HeroCard from "./HeroCard";

const HeroSection = () => {
	return (
		<div className='relative w-full h-[90vh]'>
			<div className='absolute top-0 left-0 w-full h-full z-[1]'>
				<Image
					src={Logo}
					alt='Forcythe logo'
					layout='fill'
					objectFit='cover'
					quality={100}
					decoding='async'
					className='w-full h-full object-cover'
				/>
			</div>
			<div className='container z-[2] relative'>
				<HeroCard />
			</div>
		</div>
	);
};

export default HeroSection;
