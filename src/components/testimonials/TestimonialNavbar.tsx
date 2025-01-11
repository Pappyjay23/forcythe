import React from "react";
import Image from "next/image";

interface Testimonial {
	id: number;
	company: string;
	logo: string;
    logoName?: string;
	testimonial: string;
	name: string;
	position: string;
	image: string;
}

interface TestimonialNavbarProps {
	testimonials: Testimonial[];
	activeTestimonial: Testimonial;
	onNavClick: (testimonial: Testimonial, index: number) => void;
}

const TestimonialNavbar: React.FC<TestimonialNavbarProps> = ({ testimonials, activeTestimonial, onNavClick }) => {
	return (
		<div className="w-full overflow-x-scroll hide-scrollbar mt-12">
			<div className="w-full border-[1px] border-[#06438C]  overflow-hidden rounded-full grid grid-cols-5 min-w-[750px]">
				{testimonials.map((testimonial, index) => (
					<div
						key={testimonial.id}
						className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 flex justify-center items-center ${
							activeTestimonial.id === testimonial.id ? "bg-[#0c2645]" : ""
						}`}
						onClick={() => onNavClick(testimonial, index)}
					>
						<div className="w-auto h-[25px] mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
							<Image
								alt={testimonial.company}
								loading="lazy"
								width="20"
								height="20"
								decoding="async"
								className="w-full h-full"
								src={testimonial.logo}
							/>
							{testimonial.logoName}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default TestimonialNavbar;
