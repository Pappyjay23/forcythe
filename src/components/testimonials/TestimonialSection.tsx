import React, { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import TestimonialNavbar from "./TestimonialNavbar";
import TestimonialCard from "./TestimonialCard";
import starksLogo from "@/assets/images/starks-logo.svg";
import execProsLogo from "@/assets/images/executive-pros-logo.svg";
import johnImage from "@/assets/images/john.svg";
import execProImage from "@/assets/images/executive-pro-ceo.svg";
import stackAiLogo from "@/assets/images/stacai-logo.svg";
import edwinImage from "@/assets/images/edwin.svg";
import iwariaLogo from "@/assets/images/iwaria-logo.svg";
import iwariaImage from "@/assets/images/iwaria-founder.svg";
import beaupreneurLogo from "@/assets/images/beaupreneur-logo.svg";
import christinaImage from "@/assets/images/christina.svg";

const testimonials = [
	{
		id: 1,
		company: "Starks Associate",
		logo: starksLogo,
		logoName: "Starks",
		testimonial:
			"Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
		name: "John",
		position: "Management",
		image: johnImage,
	},
	{
		id: 2,
		company: "ExecutivePros",
		logo: execProsLogo,
		testimonial:
			"The team understood the assignment and delivered very well. one of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web enegagements. Kudos!",
		name: "Testimony",
		position: "Co-founder",
		image: execProImage,
	},
	{
		id: 3,
		company: "Stac AI",
		logo: stackAiLogo,
		testimonial:
			"Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team's committment to our vision was evident every step of the way.",
		name: "Edwin",
		position: "Former CTO",
		image: edwinImage,
	},
	{
		id: 4,
		company: "Iwaria",
		logo: iwariaLogo,
		testimonial:
			"The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand's story, captivating our audience like never before",
		name: "Iwaria",
		position: "Founder",
		image: iwariaImage,
	},
	{
		id: 5,
		company: "Beaupreneur",
		logo: beaupreneurLogo,
		testimonial:
			"I'm beyond impressed with the dedication Forcythe showed. They didn't just deliver-they educated us, invloving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customer's hearts",
		name: "Christiana",
		position: "Founder",
		image: christinaImage,
	},
];

const TestimonialSection = () => {
	const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveTestimonial((prevTestimonial) => {
				const currentIndex = testimonials.indexOf(prevTestimonial);
				const nextIndex = (currentIndex + 1) % testimonials.length;
				return testimonials[nextIndex];
			});
		}, 12000);

		return () => {
			clearInterval(timer);
		};
	}, [testimonials]);

	const handleNavClick = (testimonial: (typeof testimonials)[0]) => {
		setActiveTestimonial(testimonial);
	};

	return (
		<section className='mb-[3rem]'>
			<div className='container'>
				<SectionHeader
					text='Discover the transformative stories of startups that scaled new heights with us'
					highlight='transformative stories'
					className='md:w-[85%] lg:w-[70%] mx-auto text-center'
				/>
				<TestimonialNavbar
					testimonials={testimonials}
					activeTestimonial={activeTestimonial}
					onNavClick={handleNavClick}
				/>
				<TestimonialCard testimonial={activeTestimonial} />
			</div>
		</section>
	);
};

export default TestimonialSection;
