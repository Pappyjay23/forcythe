import React, { useState, useEffect } from "react";
import AnimatedText from "../AnimatedText";
import StatisticsCard from "./StatisticsCard";
import LayerThreeImg from "@/assets/images/layers-three.svg";
import ArcImg from "@/assets/images/arc.svg";
import Arc2Img from "@/assets/images/arc-L.svg";

type StatisticItem = {
	id: number;
	title: string;
	description: string;
	image: string;
};

type NumberStatistic = {
	number: string;
	description: string;
};

const useCountAnimation = (
	end: string | number,
	duration: number = 2000
): string | number => {
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		const endNumber = parseInt(end.toString().replace("+", ""));

		if (isNaN(endNumber)) {
			setCount(0);
			return;
		}

		const steps = 60;
		const stepDuration = duration / steps;
		let current = 0;
		const increment = endNumber / steps;

		const timer = setInterval(() => {
			current += increment;
			if (current >= endNumber) {
				setCount(endNumber);
				clearInterval(timer);
			} else {
				setCount(Math.floor(current));
			}
		}, stepDuration);

		return () => clearInterval(timer);
	}, [end, duration]);

	if (typeof end === "string" && end.includes("+")) {
		return `${count}+`;
	}
	return count;
};

const statisticsData: StatisticItem[] = [
	{
		id: 1,
		title: "Experience",
		description:
			"Decades of collective wisdom. Leverage our extensive experience to avoid common pitfalls and accelerate your business growth.",
		image: LayerThreeImg,
	},
	{
		id: 2,
		title: "Quick Support",
		description:
			"We are your reliable partner, always there when you need us, ensuring smooth operations at every stage of your growth.",
		image: LayerThreeImg,
	},
	{
		id: 3,
		title: "Cost Savings",
		description:
			"Maximising impact, minimising costs efficiency is key. We provide cost-effective solutions without compromising on quality.",
		image: LayerThreeImg,
	},
];

const numberStatisticsData: NumberStatistic[] = [
	{
		number: "50+",
		description: "Clients",
	},
	{
		number: "120+",
		description: "Projects",
	},
	{
		number: "10+",
		description: "Team Leads",
	},
	{
		number: "10+",
		description: "Glorious Years",
	},
];

const getBackgroundImage = (): string => {
	if (window.innerWidth >= 1024) {
		return `url(${Arc2Img.src})`;
	} else {
		return `url(${ArcImg.src})`;
	}
};

interface AnimatedNumberProps {
	number: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number }) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const animatedValue = useCountAnimation(isVisible ? number : 0);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{ threshold: 0.1 }
		);

		const element = document.getElementById("stats-container");
		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	}, []);

	return <>{animatedValue}</>;
};

const StatisticsSection: React.FC = () => {
	const [backgroundImage, setBackgroundImage] = useState<string>(
		getBackgroundImage()
	);

	useEffect(() => {
		const handleResize = () => {
			setBackgroundImage(getBackgroundImage());
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<div
				className='min-h-[50vh]'
				style={{
					background:
						"linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(12, 38, 69) 40%, rgb(3, 5, 22) 70%), #03051677",
				}}>
				<div className='container'>
					<AnimatedText
						text='Your best call for B2B/B2C product innovation'
						className='md:w-[85%] lg:w-[80%] mx-auto text-center'
						colorClassName='text-[#b3d0f2]'
						fontClassName=''
					/>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8'>
						{statisticsData.map((stat) => (
							<StatisticsCard key={stat.id} data={stat} />
						))}
					</div>
				</div>
			</div>
			<div
				className='py-14 md:py-20 xl:py-28'
				style={{
					background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
				}}>
				<div
					className='max-w-[52rem] mx-auto bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat'
					style={{
						backgroundImage: backgroundImage,
					}}>
					<div className='pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5'>
						<div className='mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto'>
							<AnimatedText
								text='We build solutions that help businesses of all sizes to scale'
								highlight='businesses scale'
								fontClassName='text-xl md:text-2xl lg:text-3xl font-medium'
							/>
						</div>
						<div
							id='stats-container'
							className='flex justify-evenly sm:justify-between items-center gap-3'>
							{numberStatisticsData.map((stat) => (
								<div
									key={stat.number}
									className='flex flex-col gap-3 text-left w-fit'>
									<div className='text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium'>
										<AnimatedNumber number={stat.number} />
									</div>
									<span className='text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis'>
										{stat.description}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StatisticsSection;
