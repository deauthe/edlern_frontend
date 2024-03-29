"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval: any;

type Card = {
	id: number;
	name: string;
	designation: string;
	content: string;
};

export const CardStack = ({
	items,
	offset,
	scaleFactor,
}: {
	items: Card[];
	offset?: number;
	scaleFactor?: number;
}) => {
	const CARD_OFFSET = offset || 10;
	const SCALE_FACTOR = scaleFactor || 0.06;
	const [cards, setCards] = useState<Card[]>(items);

	useEffect(() => {
		startFlipping();
	}, []);
	const startFlipping = () => {
		interval = setInterval(() => {
			setCards((prevCards: Card[]) => {
				const newArray = [...prevCards]; // create a copy of the array
				newArray.unshift(newArray.pop()!); // move the last element to the front
				return newArray;
			});
		}, 2000);

		return () => clearInterval(interval);
	};

	return (
		<div className="relative  h-60 w-60 md:h-60 md:w-96">
			{cards.map((card, index) => {
				return (
					<motion.div
						key={card.id}
						className="absolute font-oswald  bg-gradient-to-b from-black to-blue-300 h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-black/[0.2]   shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
						style={{
							transformOrigin: "top center",
						}}
						animate={{
							top: index * -CARD_OFFSET,
							scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
							zIndex: cards.length - index, //  decrease z-index for the cards that are behind
						}}
					>
						<div>
							<p className="text-white/[0.9] font-bold dark:text-white text-2xl uppercase tracking-tighter">
								{card.name}
							</p>
							<p className="text-white/[0.5] font-semibold dark:text-neutral-200 ">
								{card.designation}
							</p>
						</div>
						<div className="font-medium text-black text-muted/70 dark:text-neutral-200 text-wrap text-center tracking-wide">
							{card.content}
						</div>
					</motion.div>
				);
			})}
		</div>
	);
};
