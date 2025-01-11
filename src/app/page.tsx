"use client";

import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
	return (
		<div className='relative min-h-screen w-full'>
			<Navbar />
			<main className='mt-[110px]'>
				<HeroSection />
			</main>
		</div>
	);
};

export default Home;
