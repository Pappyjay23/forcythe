import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
	title:
		"Forcythe - Your Partner in Scalable Business Growth | Digital Solutions Expert",
	description:
		"Discover bespoke digital solutions with Forcythe, the growth catalyst for businesses aiming to scale in the US market.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${lexend.className} antialiased`}>{children}</body>
		</html>
	);
}
