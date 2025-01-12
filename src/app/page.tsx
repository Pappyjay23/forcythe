"use client";

import BlogSection from "@/components/blog/BlogSection";
import CallToActionSection from "@/components/cta/CallToActionSection";
import HeroSection from "@/components/hero/HeroSection";
import MarqueeSection from "@/components/marquee/MarqueeSection";
import Navbar from "@/components/Navbar";
import StatisticsSection from "@/components/statistics/StatisticsSection";
import TestimonialSection from "@/components/testimonials/TestimonialSection";
import React from "react";

const Home = () => {
	return (
		<div className='relative min-h-screen w-full'>
			<Navbar />
			<main className='mt-[110px]'>
				<HeroSection />
				<MarqueeSection />
				<TestimonialSection />
				<CallToActionSection />
				<StatisticsSection />
				<BlogSection />
			</main>
		</div>
	);
};

export default Home;
