"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Logo from "@/assets/images/forcythe-logo.svg";
import MenuIcon from "@/assets/images/menu.svg";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav className={`fixed top-0 left-0 w-full z-30 ${scrolled ? 'backdrop-blur-md' : ''}`}>
			<div className='max-w-[1300px] mx-auto py-7 px-4 lg:px-10 flex justify-between gap-5 lg:gap-10 items-center '>
				<div className='flex items-center gap-10 lg:gap-20'>
					<Link href='/'>
						<Image
							alt='Forcythe logo'
							width='150'
							height='10'
							decoding='async'
							className='w-28 sm:w-32 lg:w-auto'
							src={Logo}
						/>
					</Link>
					<div className='hidden md:flex items-center gap-4 text-base'>
						<Link href='/about'>
							<span>About</span>
						</Link>
						<Link href='/services'>
							<span>Services</span>
						</Link>
						<Link href='/portfolio'>
							<span>Portfolio</span>
						</Link>
						<Link href='/studio'>
							<span>Studio</span>
						</Link>
						<Link href='/foundation'>
							<span>Foundation</span>
						</Link>
					</div>
				</div>
				<div className='hidden md:block'>
					<Button>Book a Call</Button>
				</div>
				<div
					className='menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer'
					onClick={toggleMenu}>
					<Image
						alt='menu'
						loading='lazy'
						width='18'
						height='18'
						decoding='async'
						src={MenuIcon}
					/>
				</div>
			</div>
			{menuOpen && (
				<div className='flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28'>
					<div className='text-white z-10 bg-transparent rounded-[inherit] w-full'>
						<div
							className='w-full p-5 py-8 rounded-[2rem]'
							style={{
								background:
									"linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
							}}>
							<ul className='flex flex-col'>
								<li className='w-full py-2.5'>
									<Link href='/about'>
										<span className='w-full text-base py-3'>About</span>
									</Link>
								</li>
								<li className='w-full py-2.5'>
									<Link href='/services'>
										<span className='w-full text-base py-3'>Services</span>
									</Link>
								</li>
								<li className='w-full py-2.5'>
									<Link href='/portfolio'>
										<span className='w-full text-base py-3'>Portfolio</span>
									</Link>
								</li>
								<li className='w-full py-2.5'>
									<Link href='/studio'>
										<span className='w-full text-base py-3'>Studio</span>
									</Link>
								</li>
								<li className='w-full py-2.5'>
									<Link href='/foundation'>
										<span className='w-full text-base py-3'>Foundation</span>
									</Link>
								</li>
								<li className='w-full py-2.5'>
									<Link href='/careers'>
										<span className='w-full text-base py-3'>Careers</span>
									</Link>
								</li>
								<li className='w-full py-2.5'>
									<Link href='/blog'>
										<span className='w-full text-base py-3'>Blog</span>
									</Link>
								</li>
							</ul>
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
								"radial-gradient(16.8647% 42.5027% at 92.3747% 42.6296%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
						}}></div>
					<div className='bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]'></div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
