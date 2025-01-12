import React from "react";
import Image from "next/image";
import AnimatedText from "../AnimatedText";

interface Testimonial {
	id: number;
	company: string;
	logo: string;
	testimonial: string;
	name: string;
	position: string;
	image: string;
}

interface TestimonialCardProps {
	testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
	const getOffset = () => {
		if (typeof window !== "undefined" && window.innerWidth >= 1024) {
			return testimonial.id === 1 ? 0 : (testimonial.id / 5) * 100;
		}
		return 0;
	};

	return (
		<div
			className='mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0c2645] cursor-pointer'
			style={{
				transform: `translateX(${getOffset()}%)`,
			}}>
			<div className='sm:basis-[58%] pr-3'>
				<div className='mb-4'>
					<AnimatedText
						text={testimonial.company}
						fontClassName='text-base font-bold'
						noSpace
					/>
				</div>
				<div className='mb-8'>
					<AnimatedText
						text={testimonial.testimonial}
						fontClassName='text-base leading-7'
						noSpace
					/>
				</div>
				<div className='mb-4'>
					<AnimatedText
						text={`${testimonial.name}, ${testimonial.position}`}
						fontClassName='text-[15px] font-semibold'
						noSpace
					/>
				</div>
			</div>
			<div className='w-full h-[24rem] sm:w-auto sm:h-[24rem] sm:basis-[42%] relative object-top mt-3 sm:mt-0'>
				<div className='bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl'></div>
				<Image
					alt={testimonial.name}
					loading='lazy'
					decoding='async'
					className='rounded-xl relative object-top'
					src={testimonial.image}
					layout='fill'
					objectFit='cover'
				/>
			</div>
		</div>
	);
};

export default TestimonialCard;
