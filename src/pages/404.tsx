import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Button, Hero, Typography } from "@components";
import { FaArrowLeft } from "react-icons/fa";

const Custom404: NextPage = () => {
	return (
		<>
			<NextSeo title="Page Not Found" />
			<Hero>
				<div className="space-y-3">
					<Typography variant="h2" element="h1" color="primary">
						404
					</Typography>
					<Typography variant="h1" element="h2" color="light">
						Page Not Found
					</Typography>
					<Typography variant="lead" color="light">
						Sorry, but the page you are looking for does not exist.
					</Typography>
				</div>
				<Button to="/" size="lg">
					<FaArrowLeft />
					<span>Back to Home</span>
				</Button>
			</Hero>
		</>
	);
};

export default Custom404;
