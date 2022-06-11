import { Container, Typography, PageLink } from "@components";

const Footer: React.VFC = () => {
	return (
		<footer className="bg-gray-100 py-6">
			<Container>
				<div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row justify-between text-center">
					<Typography variant="p">
						&copy; {new Date().getFullYear()} EAA Chapter 174
					</Typography>

					<PageLink
						to="https://raymondkneipp.com"
						page="Website by Raymond Kneipp"
						external
					/>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
