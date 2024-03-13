"use client";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/NavBar/Navbar";
import Hero from "@/components/Hero/Hero";
import FaqSection from "@/components/Faq/FaqSection";
import localfont from "next/font/local";
import CategoryStrip from "@/components/CategoryStrip/CategoryStrip";
import Footer from "@/components/Footer/Footer";
import FeaturesHome from "@/components/features/FeaturesHome";
import FeaturesStrip from "@/components/features/Features";
import { Toaster } from "@/components/ui/toaster";
import Offerings from "@/components/Offerings/Offerings";
import Vision from "@/components/Vision/Vision";
import WhyUs from "@/components/WhyUs/WhyUs";
import Launch from "@/components/Launch/Launch";
const Oswald = localfont({
	src: [
		{
			path: "../../public/fonts/Oswald/Oswald-ExtraLight.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Light.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Oswald/Oswald-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-oswald",
});

export default function Home() {
	return (
		<>
			<main
				className={`flex h-full w-screen flex-col items-center justify-between  bg-gradient-to-b from-blue-300 to-white ${Oswald.variable} `}
			>
				<Navbar />

				<div className="h-full w-full lg:py-5 py-8 ">
					<div
						id="home"
						className="lg:h-screen h-fit w-full  bg-transparent  bg-dot-blue-100/[0.6] relative flex items-center justify-center"
					>
						<Hero />
					</div>

					<Offerings />
					<div
						id="whyUs"
						className="lg:grid lg:grid-cols-2 lg:px-44 bg-white bg-dot-zinc-500/[0.9] flex flex-col  w-full"
					>
						<Vision />
						<WhyUs />
					</div>
					<div id="launch" className="pb-10 bg-white bg-dot-zinc-500/[0.9]">
						<Launch />
					</div>
					<CategoryStrip />
					<div id="features">
						<FeaturesHome />
						<FeaturesStrip />
					</div>
					<div id="faq">
						<FaqSection />
					</div>
					<hr className="bg-black" />

					<div id="footer">
						<Footer />
					</div>

					<Toaster />
				</div>
			</main>
		</>
	);
}
