import React from "react";
import AnimatedText from "../AnimatedText";
import Button from "../Button";
import BlogCard from "./BlogCard";
import BlogImg1 from "@/assets/images/blog-img-1.webp";
import BlogImg2 from "@/assets/images/blog-img-2.webp";
import BlogImg3 from "@/assets/images/blog-img-3.webp";

const blogs = [
	{
		href: '/blog',
		imgSrc: BlogImg1,
		imgAlt: 'Will AI take over Art?',
		category: 'Blog',
		author: 'The Reformist',
		date: 'May 29th, 2024',
		title: 'Will AI take over Art?',
	},
	{
		href: '/blog',
		imgSrc: BlogImg2,
		imgAlt: 'Cryptocurrency vs Tokens',
		category: 'Blog',
		author: 'The Reformist',
		date: 'May 29th, 2024',
		title: 'Cryptocurrency vs Tokens',
	},
	{
		href: '/blog',
		imgSrc: BlogImg3,
		imgAlt: 'Cryptocurrency and Crypto asset',
		category: 'Blog',
		author: 'The Reformist',
		date: 'May 29th, 2024',
		title: 'Cryptocurrency and Crypto asset',
	},
];

const BlogSection = () => {
	return (
		<div className='container pb-[3rem]'>
			<div className='flex flex-col md:flex-row md:justify-between md:items-center mb-[2rem]'>
				<AnimatedText text='Read our articles, news and product blog' className="md:w-[70%]" />
				<Button showPlayIcon>Visit Blog</Button>
			</div>
			<div className='blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12'>
				{blogs.map((blog, index) => (
					<BlogCard
						key={index}
						href={blog.href}
						imgSrc={blog.imgSrc}
						imgAlt={blog.imgAlt}
						category={blog.category}
						author={blog.author}
						date={blog.date}
						title={blog.title}
					/>
				))}
			</div>
		</div>
	);
};

export default BlogSection;
