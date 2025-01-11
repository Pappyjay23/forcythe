import Image from "next/image";
import React from "react";
import PlaySvg from "@/assets/images/play.svg";
import PlayWhiteSvg from "@/assets/images/play-white.svg";

interface ButtonProps {
	children: React.ReactNode;
	showPlayIcon?: boolean;
}

const Button = ({ children, showPlayIcon }: ButtonProps) => {
	return (
		<div className='relative group w-fit cursor-pointer'>
			<button className='bg-white group-hover:bg-[#064386] outline-none border-0 text-black group-hover:text-white flex items-center justify-center gap-2 py-[12px] px-5 rounded-[3rem] shadow-lg w-fit font-semibold relative z-[2] transition-all duration-300 ease-in-out'>
				<span>{children}</span>
				{showPlayIcon && (
					<div>
						<span className='block group-hover:hidden'>
							<Image src={PlaySvg} alt='icon' width={10} height={10} />
						</span>
						<span className='hidden group-hover:block'>
							<Image src={PlayWhiteSvg} alt='icon' width={10} height={10} />
						</span>
					</div>
				)}
			</button>
			<div className=' absolute z-[1] top-[5px] left-[-5px] rounded-[3rem] border border-dashed border-white group-hover:border-[#064386] transition-all duration-300 ease-in-out'>
				<div className="flex items-center justify-center gap-2 py-[12px] px-5 opacity-0">
					<span>{children}</span>
					{showPlayIcon && (
						<div>
							<span className='block group-hover:hidden'>
								<Image src={PlaySvg} alt='icon' width={10} height={10} />
							</span>
							<span className='hidden group-hover:block'>
								<Image src={PlayWhiteSvg} alt='icon' width={10} height={10} />
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Button;
