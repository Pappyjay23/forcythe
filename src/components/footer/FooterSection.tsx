import React from "react";
import AnimatedText from "../AnimatedText";
import Button from "../Button";
import Footer from "./Footer";

const FooterSection = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)",
			}}>
			<div className='flex flex-col items-center py-[5rem] container'>
				<AnimatedText
					text='Ready to Scale? '
					highlight='Ready to Scale?'
					className='w-full md:w-[60%] text-center mb-0'
				/>
				<AnimatedText
					text='Join successful brands that chose us as their growth accelerator'
					highlight='growth accelerator'
					className='w-full md:w-[60%] text-center'
				/>
				<Button>Book a Call</Button>
			</div>
			<Footer />
		</div>
	);
};

export default FooterSection;
