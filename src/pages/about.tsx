import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	About,
	Container,
	Layout,
	Map,
	PageLink,
	Spacing,
	Tall,
	Typography,
} from "@components";

const AboutPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="About Us" />
			<About />
			<Map />
			<Container>
				<Spacing>
					<Tall
						master={
							<Typography element="h2" variant="h3">
								Clermont County Airport - I69
							</Typography>
						}
						slave={
							<>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Sectional
									</Typography>
									<Typography>Cincinnati</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Location
									</Typography>
									<Typography>39.04.02 lat, 84.12.38 lng</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Runways
									</Typography>
									<Typography>4-22 (3500', asphalt)</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Altitude
									</Typography>
									<Typography>844' MSL</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										CTAF
									</Typography>
									<Typography>122.975 MHz</Typography>
								</div>
							</>
						}
					/>
					<hr className="my-12" />
					<Tall
						master={
							<Typography element="h2" variant="h3">
								Board of Directors Executive Officers
							</Typography>
						}
						slave={
							<>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										President
									</Typography>
									<Typography variant="lead">Dan Oliver</Typography>
									<PageLink to="tel:(513) 623-7585" page="(513) 623-7585" />
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Vice-president
									</Typography>
									<Typography variant="lead">David Gallagher</Typography>
									<PageLink to="tel:(513) 877-3249" page="(513) 877-3249" />
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Treasurer
									</Typography>
									<Typography variant="lead">Phil Cady</Typography>
									<PageLink to="tel:(513) 969-5324" page="(513) 969-5324" />
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Secretary
									</Typography>
									<Typography variant="lead">Bill Miracco</Typography>
									<PageLink to="tel:(651) 249-1152" page="(651) 249-1152" />
								</div>
							</>
						}
					/>
					<hr className="my-12" />
					<Tall
						master={
							<Typography element="h2" variant="h3">
								Chairpersons and Volunteers Chairs
							</Typography>
						}
						slave={
							<>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Technical Counselor
									</Typography>
									<Typography variant="lead">David Gallagher</Typography>
									<Typography variant="lead">Leo Krebs</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Membership Coordinator
									</Typography>
									<Typography variant="lead">Tom Volze</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Newsletter Editor
									</Typography>
									<Typography variant="lead">Eric Carnahan</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Programs Director
									</Typography>
									<Typography variant="lead">Jim Gibbs</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Young Eagles Coordinator
									</Typography>
									<Typography variant="lead">Eric Carnahan</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Asst. YE Coordinator
									</Typography>
									<Typography variant="lead">Phil Cady</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Fly-outs Coordinator
									</Typography>
									<Typography variant="lead">Mark Webb</Typography>
								</div>
								<div className="space-y-1">
									<Typography variant="h4" element="h3" color="secondary">
										Web Developer
									</Typography>
									<Typography variant="lead">Raymond Kneipp III</Typography>
								</div>
							</>
						}
					/>
				</Spacing>
			</Container>
		</Layout>
	);
};

export default AboutPage;
