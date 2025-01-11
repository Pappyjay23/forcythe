"use client";

import HeroSection from "@/components/hero/HeroSection";
import MarqueeSection from "@/components/marquee/MarqueeSection";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const Home = () => {
	return (
		<div className='relative min-h-screen w-full'>
			<Navbar />
			<main className='mt-[110px]'>
				<HeroSection />
				<MarqueeSection />
				<SectionHeader text="Success in Motion - Our clients’ journey" highlight="Motion" />
			</main>
		</div>
	);
};

export default Home;
