import { Container, Tile } from '@components';
import LogoCloudItem from './LogoCloudItem/LogoCloudItem';

const Brands: React.VFC = () => {
	return (
		<Container>
			<Tile>
				<LogoCloudItem src="EAA_Chapters.png" />
				<LogoCloudItem src="EAA_logo.png" />
				<LogoCloudItem src="YE25th.png" />
				<LogoCloudItem src="YE.png" />
			</Tile>
		</Container>
	);
};

export default Brands;
