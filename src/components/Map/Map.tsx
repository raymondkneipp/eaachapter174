import Image from "next/image";
import { Button, Container, Typography, Card } from "@components";

const Map: React.VFC = () => {
	return (
		<section className="relative">
			<Image
				src="/img/map.png"
				layout="fill"
				objectFit="cover"
				alt="map"
				objectPosition="center"
				priority={true}
			/>
			<Container>
				<div className="relative py-12 sm:py-24">
					<Card className="sm:max-w-md ml-auto">
						<Typography variant="h2">Location</Typography>
						<Typography>
							Our headquarters are located at Clermont County Airport (I69) in
							Batavia, Ohio, home of world-famous Sporty's Pilot Shop, the
							world's largest pilot shop. We meet in the Hawk Building, on
							Taylor Rd (just off the threshold of Rnwy 4). The Hawk building is
							the building closest to the road just before the runway.
						</Typography>
						<Button to="https://www.google.com/maps/place/4184+Taylor+Rd,+Batavia,+OH+45103,+USA/@39.0756057,-84.2160932,584m/data=!3m1!1e3!4m19!1m13!4m12!1m3!2m2!1d-84.2161141!2d39.0757383!1m6!1m2!1s0x884106c332bede59:0xd4d39fac94c976b8!2s4194+Taylor+Rd,+Batavia,+OH+45103,+USA!2m2!1d-84.217258!2d39.0769746!3e4!3m4!1s0x884106c2dc39c06f:0x3cd213946bfef768!8m2!3d39.07579!4d-84.2162698">
							Get Directions
						</Button>
					</Card>
				</div>
			</Container>
		</section>
	);
};

export default Map;
