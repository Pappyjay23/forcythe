import React, { useEffect, useState, useRef } from "react";

const SectionHeader = ({
	text,
	highlight,
}: {
	text: string;
	highlight: string;
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

	const beforeHighlight = text.split(highlight)[0];
	const afterHighlight = text.split(highlight)[1];

	// Function to render words with animation
	const renderWords = (
		text: string,
		startIndex: number,
		isHighlight = false,
		isLastSection = false
	) => {
		if (!text) return null;

		const words = text.trim().split(/\s+/);
		return words.map((word, index) => (
			<React.Fragment key={`${word}-${startIndex + index}`}>
				<span
					className={`inline-block opacity-0 text-[2rem] lg:text-[2.5rem] font-medium
            ${isInView ? "fade-in" : ""}
            ${isHighlight ? "text-accent" : ""}`}
					style={{
						animationDelay: `${(startIndex + index) * 0.2}s`,
					}}>
					{word}
				</span>

				{/* Add space between words*/}
				{(index < words.length - 1 || isHighlight || !isLastSection) && (
					<span className='inline-block'>&nbsp; &nbsp;</span>
				)}
			</React.Fragment>
		));
	};

	// Calculate starting indices for each section
	const beforeWords = beforeHighlight
		? beforeHighlight.trim().split(/\s+/).length
		: 0;
	const highlightWords = highlight ? highlight.trim().split(/\s+/).length : 0;

	return (
		<h1 ref={headerRef} className='text-center md:w-[85%] lg:w-[70%] mx-auto mb-5'>
			{renderWords(beforeHighlight, 0, false, false)}
			{renderWords(highlight, beforeWords, true, false)}
			{renderWords(afterHighlight, beforeWords + highlightWords, false, true)}
		</h1>
	);
};

export default SectionHeader;
