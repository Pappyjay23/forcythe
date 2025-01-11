"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/header-background.svg";

const Home = () => {
	return (
		<div className='relative min-h-screen w-full'>
			<Navbar />
			<main className='mt-[110px]'>
				<div className='relative h-[90vh]'>
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
			</main>
		</div>
	);
};

export default Home;
