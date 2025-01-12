import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
	href: string;
	imgSrc: StaticImageData;
	imgAlt: string;
	category: string;
	author: string;
	date: string;
	title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
	href,
	imgSrc,
	imgAlt,
	category,
	author,
	date,
	title,
}) => {
	return (
		<Link
			className='w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer border border-transparent hover:border-[#60a6e7]/40 group hover:shadow-sm hover:shadow-accent transition-all duration-700'
			href={href}>
			<div className='h-60 sm:h-56 relative mb-6'>
				<Image
					alt={imgAlt}
					className='w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105'
					src={imgSrc}
					layout='fill'
					objectFit='cover'
				/>
			</div>
			<div className='pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 transition-all duration-500 ease-in-out'>
				<p className='text-lg font-semibold mb-1'>{category}</p>
				<div className='text-base text-darkGrey flex items-center mb-6'>
					<span>{author}</span>
					<div className='h-2 w-2 rounded-full bg-white mx-[6px]'></div>
					<span>{date}</span>
				</div>
				<h6 className='text-xl md:text-2xl font-semibold line-clamp-2'>
					{title}
				</h6>
			</div>
		</Link>
	);
};

export default BlogCard;
