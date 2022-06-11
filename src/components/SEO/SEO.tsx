import { DefaultSeo } from "next-seo";

const SEO: React.VFC = () => {
	const defaultSeo = {
		titleTemplate: "%s | EAA Chapter 174 Cincinnati, OH",
		description:
			"Experimental Aircraft Association Chapter 174 located in Clermont County, OH.",
		openGraph: {
			images: [
				{
					url: "https://eaachapter174.vercel.app/img/screenshot.png",
					alt: "Cincinnati EAA Chapter 174",
				},
			],
		},
		additionalLinkTags: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/img/favicon.svg",
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/img/favicon.png",
			},
		],
		additionalMetaTags: [
			{
				name: "theme-color",
				content: "#4F45E4",
			},
		],
	};

	return <DefaultSeo {...defaultSeo} />;
};

export default SEO;
