import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Layout, ListNewsletters } from "@components";

const NewslettersPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Newsletters" />
			<ListNewsletters />
		</Layout>
	);
};

export default NewslettersPage;
