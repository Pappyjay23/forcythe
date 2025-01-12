import React, { useState, useEffect } from "react";
import AnimatedText from "../AnimatedText";
import Button from "../Button";
import Image1 from "@/assets/images/camera-man.svg";
import Image2 from "@/assets/images/plan-design.svg";
import Image3 from "@/assets/images/plan-develop.svg";
import Image4 from "@/assets/images/plan-launch.svg";
import Image from "next/image";

const ctaItems = [
	{
		id: 1,
		title: "Idea",
		subtitle: "Your vision is unique",
		description:
			"Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s shape it.",
		image: Image1,
	},
	{
		id: 2,
		title: "Design",
		subtitle: "Crafting the blueprint for success",
		description:
			"Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
		image: Image2,
	},
	{
		id: 3,
		title: "Develop",
		subtitle: "Turning blueprints into reality.",
		description:
			"We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
		image: Image3,
	},
	{
		id: 4,
		title: "Launch",
		subtitle: "Your launchpad to the market.",
		description:
			"Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
		image: Image4,
	},
];

const CallToActionSection = () => {
	const [activeItem, setActiveItem] = useState(ctaItems[0]);
	const [subtitle, setSubtitle] = useState("");
	const [description, setDescription] = useState("");
	const [isFadeInTriggered, setIsFadeInTriggered] = useState(false);

	useEffect(() => {
		let subtitleIndex = 0;
		let descriptionIndex = 0;
		const fullSubtitle = activeItem.subtitle;
		const fullDescription = activeItem.description;

		const subtitleInterval = setInterval(() => {
			if (subtitleIndex < fullSubtitle.length) {
				setSubtitle(fullSubtitle.slice(0, subtitleIndex + 1));
				subtitleIndex++;
			} else {
				clearInterval(subtitleInterval);
			}
		}, 100);

		const descriptionInterval = setInterval(() => {
			if (descriptionIndex < fullDescription.length) {
				setDescription(fullDescription.slice(0, descriptionIndex + 1));
				descriptionIndex++;
				if (descriptionIndex === Math.floor(fullDescription.length / 6)) {
					setIsFadeInTriggered(true);
				}
			} else {
				clearInterval(descriptionInterval);
			}
		}, 50);

		return () => {
			clearInterval(subtitleInterval);
			clearInterval(descriptionInterval);
		};
	}, [activeItem]);

	const handleNavClick = (item: (typeof ctaItems)[0]) => {
		setActiveItem(item);
		setSubtitle("");
		setDescription("");
		setIsFadeInTriggered(false);
	};

	return (
		<div>
			<div className='container pb-[3rem]'>
				<AnimatedText
					text='From Spark to Spotlight: we take you every step of the way to success.'
					highlight='Spark Spotlight:'
					className='md:w-[85%] lg:w-[60%] text-left'
				/>
				<div className='flex lg:items-end flex-col md:flex-row'>
					<div className='basis-1/2 flex mb-8 md:mb-0'>
						<div className='md:pr-10 w-full'>
							<div className='border-2 border-[#b3d0f2] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5 w-full'>
								{ctaItems.map((item) => (
									<div
										key={item.id}
										onClick={() => handleNavClick(item)}
										className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${
											activeItem.id === item.id
												? "bg-[#b3d0f2] text-black"
												: "bg-transparent text-white"
										}`}>
										{item.title}
									</div>
								))}
							</div>
							<div className='mb-8'>
								<p className='text-[2rem] font-medium'>{subtitle}</p>
							</div>
							<div
								className={`mb-8 max-w-3xl ${
									isFadeInTriggered ? "opacity-100" : "opacity-0"
								} transition-opacity duration-500`}>
								<p className='text-darkGrey mb-8 leading-7'>
									{description.split(" ").map((word, index) => (
										<span
											key={index}
											className={`inline-block opacity-0 fade-in`}
											style={{
												animationDelay: `${
													isFadeInTriggered ? 0.4 + index * 0.05 : 0
												}s`,
											}}>
											{word}&nbsp;
										</span>
									))}
								</p>
							</div>
							<div className='relative w-fit group'>
								<Button showPlayIcon>Book a call</Button>
								<div className='w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]'></div>
							</div>
						</div>
					</div>
					<div className='basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0'>
						<Image
							alt='plan-img'
							loading='lazy'
							width='200'
							height='200'
							decoding='async'
							data-nimg='1'
							className='w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]'
							src={activeItem.image}
							style={{ color: "transparent" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CallToActionSection;
