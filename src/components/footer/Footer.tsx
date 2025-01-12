import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/forcythe-logo.svg";
import Facebook from "@/assets/images/facebook.svg";
import Instagram from "@/assets/images/instagram.svg";
import X from "@/assets/images/x.svg";
import LinkedIn from "@/assets/images/linkedin.svg";
import YouTube from "@/assets/images/youtube.svg";
import Spotify from "@/assets/images/spotify.svg";

const socialLinks = [
	{ href: "https://www.facebook.com/forcythe/", src: Facebook, alt: "Facebook" },
	{ href: "https://www.instagram.com/forcythe", src: Instagram, alt: "Instagram" },
	{ href: "https://twitter.com/forcythe_", src: X, alt: "X" },
	{ href: "https://www.linkedin.com/company/forcythe/", src: LinkedIn, alt: "LinkedIn" },
	{ href: "https://www.youtube.com/@forcythe", src: YouTube, alt: "YouTube" },
	{ href: "https://podcasters.spotify.com/pod/show/the-future-insight", src: Spotify, alt: "Spotify" },
];

const companyLinks = [
	{ href: "/about", text: "About" },
	{ href: "/services", text: "Services" },
	{ href: "/portfolio", text: "Portfolio" },
	{ href: "/studio", text: "Studio" },
	{ href: "/foundation", text: "Foundation" },
	{ href: "/careers", text: "Careers" },
	{ href: "/blog", text: "Blog" },
];

const Footer = () => {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className='container py-10'>
			<div className='lg:grid lg:grid-cols-3 my-10'>
				<div className='max-w-lg mb-10 lg:mb-0'>
					<div className='w-full grid grid-cols-4'>
						<input
							className='py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]'
							placeholder='Your Email Address'
							type='text'
						/>
						<button className='py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white transition-all duration-300 ease'>
							Subscribe
						</button>
					</div>
					<div className='flex'>
						<input
							className='hidden'
							id='agreement'
							type='checkbox'
							name='agreement'
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<label
							htmlFor='agreement'
							className='text-sm cursor-pointer gap-3 mt-5 items-center flex'>
							<div className='w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center'>
								{isChecked && (
									<div className='w-2 h-2 bg-white rounded-full'></div>
								)}
							</div>
							I agree to receive other notifications from Forcythe
						</label>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0'>
					<div className='lg:pl-14 md:col-span-2 md:pr-10'>
						<Image
							alt='Forcythe logo'
							width={130}
							height={9}
							decoding='async'
							className='mb-5 md:mb-8'
							src={Logo}
						/>
						<p className='text-base text-darkGrey leading font-normal'>
							We are the growth company for businesses looking to scale. We are
							dedicated to transforming businesses with bespoke digital
							solutions that drive growth.
						</p>
						<div className='mt-10 hidden md:flex items-center gap-2'>
							{socialLinks.map((link, index) => (
								<a
									key={index}
									target='_blank'
									className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center'
									href={link.href}>
									<Image
										alt={link.alt}
										width={20}
										height={20}
										decoding='async'
										src={link.src}
									/>
								</a>
							))}
						</div>
					</div>

					<div className='lg:pl-10'>
						<h3 className='mb-8 text-2xl font-bold'>Company</h3>
						<ul className='flex flex-col gap-2'>
							{companyLinks.map((link, index) => (
								<li key={index} className='text-base text-[#b3d0f2] font-medium'>
									<Link href={link.href}>
										<span>{link.text}</span>
									</Link>
								</li>
							))}
						</ul>
						<div className='mt-10 flex md:hidden items-center gap-2 w-fit mx-auto'>
							{socialLinks.map((link, index) => (
								<a
									key={index}
									target='_blank'
									className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center'
									href={link.href}>
									<Image
										alt={link.alt}
										width={20}
										height={20}
										decoding='async'
										src={link.src}
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='copyright border-t-[1px] border-[#60a6e7]'>
				<p className='text-[#b3d0f2] text-sm mt-5 text-center md:text-left'>
					Copyright © 2024 Forcythe. All rights reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
