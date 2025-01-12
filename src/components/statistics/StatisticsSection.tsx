import React from "react";
import SectionHeader from "../SectionHeader";

const StatisticsSection = () => {
	return (
		<div className='container pb-[3rem]'>
			<SectionHeader
				text='Your best call for B2B/B2C product innovation'
				className='md:w-[85%] lg:w-[80%] mx-auto text-center'
                colorClassName='text-[#b3d0f2]'
                fontClassName=''
			/>
		</div>
	);
};

export default StatisticsSection;
