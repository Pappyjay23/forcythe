import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

const Services = () => {
	return (
		<div className='flex flex-col gap-10 items-center justify-center h-screen'>
			<h1 className='text-5xl lg:text-7xl'>Services</h1>
			<Link href='/'>
				<Button>Back to Home</Button>
			</Link>
		</div>
	);
};

export default Services;
