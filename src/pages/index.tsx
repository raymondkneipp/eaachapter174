import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	CTA,
	Hero,
	Layout,
	Stats,
	LogoCloud,
	About,
	Button,
	Typography,
} from "@components";

const Home: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Home" />
			<Hero>
				<div className="space-y-3">
					<Typography variant="h2" element="h1" color="primary">
						EAA Chapter 174
					</Typography>
					<Typography variant="h1" element="h2" color="light">
						The Spirit Of Aviation
					</Typography>
					<Typography variant="h3" color="light">
						Cincinnati, OH
					</Typography>
				</div>
				<Button to="/contact" size="lg">
					Become a member
				</Button>
			</Hero>
			<LogoCloud />
			<About simple />
			<Stats />
			<CTA />
		</Layout>
	);
};

export default Home;
