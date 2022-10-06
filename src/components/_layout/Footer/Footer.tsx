import { Container, PageLink } from '@components';

import { FaFacebook } from 'react-icons/fa';

const Footer: React.VFC = () => {
	return (
		<footer className="bg-neutral-100 py-6">
			<Container>
				<div className="flex flex-col items-center space-y-3 md:space-y-0 md:flex-row justify-between text-center">
					<a
						href="https://www.facebook.com/eaachapter174/"
						className="text-neutral-600 hover:text-neutral-800 transition flex items-center gap-2 underline decoration-neutral-300 hover:decoration-neutral-800"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook size={18} />
						Facebook
					</a>

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
