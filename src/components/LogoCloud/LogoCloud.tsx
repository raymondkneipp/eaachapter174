import { Tile, Container } from "@components";
import LogoCloudItem from "./LogoCloudItem/LogoCloudItem";

const Brands: React.VFC = () => {
	return (
		<Container>
			<Tile>
				<LogoCloudItem src="EAA_Chapters.png" name="EAA Chapters" />
				<LogoCloudItem
					src="EAA_Logo.png"
					name="Experimental Aircraft Association"
				/>
				<LogoCloudItem src="YE25th.png" name="Young Eagles 25th Anniversary" />
				<LogoCloudItem src="YE.png" name="Young Eagles" />
			</Tile>
		</Container>
	);
};

export default Brands;
