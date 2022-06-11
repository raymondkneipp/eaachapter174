import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import {
	FaEnvelope,
	FaFacebook,
	FaMapMarkerAlt,
	FaPhone,
} from "react-icons/fa";
import {
	ContactForm,
	Layout,
	Container,
	Tall,
	Typography,
	PageLink,
	Spacing,
	IconCard,
} from "@components";

const ContactPage: NextPage = () => {
	return (
		<Layout>
			<NextSeo title="Contact Us" />

			<Spacing>
				<Container>
					<Tall
						master={
							<>
								<Typography variant="h1">Contact Us</Typography>
								<Typography variant="lead">
									Contact one of our friendly representatives to answer any of
									your questions!
								</Typography>
							</>
						}
						slave={
							<>
								<IconCard title="Phone" icon={FaPhone}>
									<PageLink to="tel:(513) 623-7585" page="(513) 623-7585" />
								</IconCard>
								<IconCard title="Email" icon={FaEnvelope}>
									<PageLink
										to="mailto:danoliver909@gmail.com"
										page="danoliver909@gmail.com"
									/>
								</IconCard>
								<IconCard title="Location" icon={FaMapMarkerAlt}>
									<PageLink
										to="https://www.google.com/maps/place/4184+Taylor+Rd,+Batavia,+OH+45103,+USA/@39.0756057,-84.2160932,584m/data=!3m1!1e3!4m19!1m13!4m12!1m3!2m2!1d-84.2161141!2d39.0757383!1m6!1m2!1s0x884106c332bede59:0xd4d39fac94c976b8!2s4194+Taylor+Rd,+Batavia,+OH+45103,+USA!2m2!1d-84.217258!2d39.0769746!3e4!3m4!1s0x884106c2dc39c06f:0x3cd213946bfef768!8m2!3d39.07579!4d-84.2162698"
										page="Clermont County Airport"
										external
									/>
								</IconCard>
								<IconCard title="Facebook" icon={FaFacebook}>
									<PageLink
										to="https://www.facebook.com/eaachapter174/"
										page="Message us on Facebook"
										external
									/>
								</IconCard>
							</>
						}
					/>
					<hr className="my-24" />
					<ContactForm />
				</Container>
			</Spacing>
		</Layout>
	);
};

export default ContactPage;
