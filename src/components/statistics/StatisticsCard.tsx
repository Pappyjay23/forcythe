import React from "react";
import Image from "next/image";
import AnimatedText from "../AnimatedText";

interface StatisticsCardProps {
	data: {
		title: string;
		image: string;
		description: string;
	};
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ data }) => {
	return (
		<div className='relative flex border-0 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left cursor-pointer transition-all duration-500 ease-in-out'>
			<div className='w-auto text-white z-10 bg-transparent rounded-[inherit]'>
				<div className='w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate transition-all duration-500 ease-in-out'>
					<div className='w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5'>
						<Image
							alt={data.title}
							loading='lazy'
							width={30}
							height={30}
							src={data.image}
							style={{ color: "transparent" }}
						/>
					</div>
					<h4 className='text-2xl font-medium mb-5'>{data.title}</h4>
					<div>
						<AnimatedText
							text={data.description}
							fontClassName='text-[17.5px]'
							noSpace
							colorClassName='text-darkGrey'
						/>
					</div>
				</div>
			</div>
			<div
				className='flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]'
				style={{
					filter: "blur(2px)",
					position: "absolute",
					width: "100%",
					height: "100%",
					background:
						"radial-gradient(19.8603% 48.3579% at 59.3277% 90.3304%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
				}}></div>
			<div className='bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]'></div>
		</div>
	);
};

export default StatisticsCard;
