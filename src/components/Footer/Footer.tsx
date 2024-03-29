import Image from "next/image";
import React from "react";
import { FaExternalLinkAlt, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import { MdOutlineFeaturedVideo } from "react-icons/md";
import { PiSealQuestionBold } from "react-icons/pi";
import { MdRoundaboutLeft } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { FaSheetPlastic } from "react-icons/fa6";
import { BsNewspaper } from "react-icons/bs";
import { BsFileEarmarkSpreadsheet } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import PolicyDialog from "./PolicyDialog";
import DisclaimerDialog from "./DisclaimerDialog";

const Footer = () => {
	return (
		<div className="h-fit w-full bg-gradient-to-t border-t-2 border-black from-blue-300 to-white text-black/[0.9]">
			<div className="md:grid md:grid-cols-5 md:mx-0 mx-auto md:gap-10 gap-10 bg-dot-white-200/[0.2] px-1  flex flex-col ">
				<div className="rounded-md md:my-auto mt-3 md:col-span-1 lg:mx-0 flex flex-col gap-5 mx-auto justify-center">
					<Image
						alt="edlern"
						src="/logo.png"
						width={200}
						height={200}
						className="rounded-full  mx-auto"
					/>
					<div className="w-[200px] text-center mx-auto  flex-col flex  ">
						<div className="font-oswald md:text-md text-md  text-black/80 font-normal text-wrap flex flex-row gap-2 my-auto  lg:w-full w-5/6 mx-auto">
							edLern is an online, centralized place for growing the educational
							community
						</div>
					</div>
				</div>
				<div className="rounded-md md:my-auto md:col-span-1 lg:mx-0 flex flex-col gap-5 mx-auto ">
					<div className="w-[200px] text-center mx-auto  flex-col flex  ">
						<div className="font-oswald md:text-md text-sm  text-black/80 font-normal text-wrap flex flex-row gap-2 my-auto hover:scale-105 transition-all duration-75">
							<Link href="mailto:support@edlern.com">
								For any queries, contact us on support@edlern.com
								<FaExternalLinkAlt className="my-auto mx-auto text-black/50" />
							</Link>
						</div>
					</div>
				</div>
				<div className=" rounded-md col-span-3 md:mt-5  font-oswald grid-cols-2 grid md:grid-cols-3 lg:py-10 lg:gap-20 gap-10  w-3/4 lg:ml-20 mx-auto  ">
					<div className="flex flex-col gap-3  col-span-1 mx-auto w-full">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight uppercase text-black/80">
							WEBSITE
						</h2>
						<div className="flex flex-col text-lg  sm:font-normal text-black/80  transition-all duration-300">
							<Link
								href="#home"
								className="hover:text-black hover:scale-105 flex flex-row gap-2 "
							>
								Home
								<FaHome className="my-auto" />
							</Link>
							<Link
								href="#features"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Features
								<MdOutlineFeaturedVideo className="my-auto" />
							</Link>
							<Link
								href="#whyUs"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Who Are We
								<MdRoundaboutLeft className="my-auto" />
							</Link>
							<Link
								href="#faq"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								FAQ
								<PiSealQuestionBold className="my-auto" />
							</Link>
						</div>
					</div>

					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full ">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight  uppercase text-black/80">
							Socials
						</h2>

						<div className="flex flex-col text-lg md:font-normal font-normal text-black/80  transition-all duration-300">
							<Link
								href="https://www.instagram.com/edlern_official?igsh=MWN2Mzk2cWRscG9hdw=="
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								Instagram
								<FaInstagram className="my-auto" />
							</Link>
							<Link
								href="https://www.linkedin.com/company/edlern/"
								className="hover:text-black hover:scale-105 flex flex-row gap-2"
							>
								LinkedIn
								<CiLinkedin className="my-auto text-2xl" />
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-3 cols-span-1 mx-auto w-full">
						<h2 className="text-xl md:font-bold font-semibold tracking-tight uppercase  text-black/80">
							LEGAL
						</h2>

						<div className="flex flex-col text-lg text-black/80 font-normal  transition-all  duration-300">
							<div className="hover:text-black hover:scale-105 flex flex-row gap-2">
								<DisclaimerDialog />
								<FaSheetPlastic className="my-auto" />
							</div>

							<div className="hover:text-black hover:scale-105 flex flex-row gap-2 text-ellipsis">
								<PolicyDialog />
								<BsNewspaper className="my-auto" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative lg:bottom-5 lg:left-3 bottom-1 left-2 text-sm text-muted/70 text-black">
				copyrights reserved
			</div>
		</div>
	);
};

export default Footer;
