import React from "react";
import { FeatureCardContent } from "./FeatureCardStatic";
import { HoverEffect } from "./FeatureCard";

const Features = () => {
	return (
		<div className=" w-screen h-fit lg:px-20 mx-auto md:px-16 px-5 lg:hidden">
			<HoverEffect items={FeatureCardContent} />
		</div>
	);
};

export default Features;
