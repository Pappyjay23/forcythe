import React, { useEffect, useState, useRef } from "react";

const AnimatedText = ({
	text,
	highlight,
	className,
	isWhite,
	colorClassName,
	fontClassName,
	noSpace,
}: {
	text: string;
	highlight?: string;
	className?: string;
	colorClassName?: string;
	fontClassName?: string;
	isWhite?: boolean;
	noSpace?: boolean;
}) => {
	const [isInView, setIsInView] = useState(false);
	const headerRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsInView(true);
						observer.disconnect();
					}
				});
			},
			{
				threshold: 0.1,
			}
		);

		if (headerRef.current) {
			observer.observe(headerRef.current);
		}

		return () => {
			if (headerRef.current) {
				observer.unobserve(headerRef.current);
			}
		};
	}, []);

	// Convert the highlight string into a set of words
	const highlightWordsSet = new Set(
		highlight?.split(/\s+/).map((word) => word.toLowerCase())
	);

	// Render words, checking if each word is in the highlight set
	const renderWords = (text: string) => {
		const words = text.split(/\s+/);
		return words.map((word, index) => (
			<React.Fragment key={`${word}-${index}`}>
				<span
					className={`inline-block opacity-0
						${isWhite ? "text-white" : colorClassName}
						${fontClassName ? fontClassName : "text-[2rem] lg:text-[2.5rem] font-medium"}
						${isInView ? "fade-in" : ""}
						${highlightWordsSet.has(word.toLowerCase()) ? "text-accent" : ""}`}
					style={{
						animationDelay: `${index * 0.2}s`,
					}}>
					{word}
				</span>

				{/* Add space between words */}
				{index < words.length - 1 && !noSpace && <>&nbsp;&nbsp;</>}
				{index < words.length - 1 && noSpace && <>&nbsp;</>}
			</React.Fragment>
		));
	};

	return (
		<h1 ref={headerRef} className={`mb-5 ${className}`}>
			{renderWords(text)}
		</h1>
	);
};

export default AnimatedText;
