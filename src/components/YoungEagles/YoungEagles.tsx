import { FaChild, FaPlane, FaUserFriends } from "react-icons/fa";
import { Container, IconCard, Wide, Typography, Spacing } from "@components";

const YoungEagles: React.VFC = () => {
	return (
		<Spacing>
			<Container>
				<Wide
					master={
						<>
							<Typography variant="h1">Young Eagles</Typography>
							<Typography variant="lead">
								Ever since 1992, the Young Eagles program has been giving 8 to
								17 years olds the opportunity to fly for the first time. The
								purpose of this program is to introduce youth to the world of
								flying. To date, more than 2 million youth have been given a
								free introductory flight through the Young Eagles program. This
								is made possible by the kindness of EAA member volunteers.
							</Typography>
						</>
					}
					slave={
						<>
							<IconCard title="Ages" icon={FaChild}>
								<Typography>
									The Young Eagles program is available to any 8 to 17 year old.
								</Typography>
							</IconCard>
							<IconCard title="Flights" icon={FaPlane}>
								<Typography>
									Over 2 million youth have been given a free flight,
									introducing them to the world of flight.
								</Typography>
							</IconCard>
							<IconCard title="Get Started" icon={FaUserFriends}>
								<Typography>
									Contact us and we will put you in touch with with our Young
									Eagles Coordinator.
								</Typography>
							</IconCard>
						</>
					}
				/>
			</Container>
		</Spacing>
	);
};

export default YoungEagles;
