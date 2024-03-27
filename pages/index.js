import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Quote from "../src/components/sections/Quote";
import { ResumeSectionFitness } from "../src/components/sections/Resume";
// import RecentWorksFitness from "../src/components/sections/recentWorks/RecentWorksFitness";
import Services from "../src/components/sections/Services";
import { SkillsFitness } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

const RecentWorksFitness = dynamic(
	() => import("../src/components/sections/recentWorks/RecentWorksFitness"),
	{
		ssr: false,
	}
);

const bio = `<p>
A compassionate veterinarian dedicated to providing top-notch care to animals of all shapes and sizes. With a deep-rooted passion for animal welfare and years of experience in veterinary medicine, I specialize in surgical procedures and preventive care.
</p>`;

const serviceList = [
	{
		icon: "fa fa-paw",
		title: "Radiology",
		desc: "Animals are notorious for getting anything inside their body, so imaging is often necessary.",
	},
	{
		icon: "fa fa-heartbeat",
		title: "Endoscopy",
		desc: "Sometimes, diseases may require a live and moving view of how your pet&apos;s internal system works. ",
	},
	{
		icon: "fa fa-stethoscope",
		title: "Bloodwork",
		desc: "A drop of blood can tell us many things your pets will not be able to convey.",
	},
	{
		icon: "fa fa-user-md",
		title: "Surgery",
		desc: "Our goal is to offer the safest, most efficient, practical, and pain-free surgery available.",
	},
];

const headerMenus = [
	{ title: "About", link: "about", icon: "icon ion-person" },
	{ title: "Resume", link: "resume", icon: "icon ion-android-list" },
	{ title: "Gallery", link: "works", icon: "icon ion-images" },
	{ title: "Blog", link: "blog", icon: "icon ion-chatbox-working" },
	{ title: "Contact", link: "contacts", icon: "icon ion-at" },
];

const animationText = ["Veterinarian", "Animal Lover", "Dog Trainer"];

const IndexDark = () => {
	return (
		<Layout
			bg={"img"}
			bgImgUrl="images/bg3.jpg"
			animationIn={"rollIn"}
			animationOut={"rollOut"}
		>
			<Head>
				<link rel="stylesheet" href="css/new-skin/new-skin.css" />
				<link rel="stylesheet" href="css/demos/demo-5-colors.css" />
			</Head>
			<Header noSideBarBtn menus={headerMenus} animationText={animationText} />
			<Home>
				<div className="profile no-photo">
					{/* profile image */}
					<div
						className="slide"
						style={{ backgroundImage: "url(images/avatar.png)" }}
					/>
					{/* profile titles */}
					<div className="title">Dr. Octavia H.</div>
					<TypingAnimation data={animationText} />

					{/* profile socials */}
					<div className="social">
						<a target="_blank" rel="noreferrer" href="https://instagram.com/">
							<span className="fa fa-instagram" />
						</a>
						<a target="_blank" rel="noreferrer" href="https://twitter.com/">
							<span className="fa fa-twitter" />
						</a>
						<a target="_blank" rel="noreferrer" href="https://facebook.com/">
							<span className="fa fa-facebook-f" />
						</a>
						<a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
							<span className="fa fa-spotify" />
						</a>
					</div>
					{/* profile buttons */}
					<div className="lnks">
						<a href="#" className="lnk discover">
							<span className="text">Contact Me</span>
							<span className="ion ion-paper-airplane" />
						</a>
					</div>
				</div>
			</Home>
			<ContentContainer>
				<About animationIn={"rollIn"} animationOut={"rollOut"}>
					<AboutMe bio={bio} />
					<Services serviceList={serviceList} />
					<FunFact />
					<Clients />
					<Quote />
				</About>
				<Resume animationIn={"rollIn"} animationOut={"rollOut"}>
					<ResumeSectionFitness />
					<SkillsFitness />
					<Testimonials />
				</Resume>
				<Work animationIn={"rollIn"} animationOut={"rollOut"}>
					<RecentWorksFitness />
				</Work>
				<Blog animationIn={"rollIn"} animationOut={"rollOut"}>
					<BlogSection />
				</Blog>
				<Contact animationIn={"rollIn"} animationOut={"rollOut"}>
					<ContactInfo />
					<ContactForm />
				</Contact>
			</ContentContainer>
		</Layout>
	);
};
export default IndexDark;
