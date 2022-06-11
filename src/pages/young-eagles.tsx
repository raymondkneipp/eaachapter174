import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { CTA, Layout, YoungEagles } from "@components";

const YoungEaglesPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Young Eagles" />
			<YoungEagles />
			<CTA />
		</Layout>
	);
};

export default YoungEaglesPage;
