import { FaClock, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";
import { Container, IconCard, Wide, Typography, Spacing } from "@components";

interface Props {
	simple?: boolean;
}

const About: React.VFC<Props> = ({ simple }) => {
	return (
		<Spacing>
			<Container>
				<Wide
					master={
						<>
							<Typography variant={simple ? "h2" : "h1"}>About Us</Typography>
							<Typography variant="lead">
								Cincinnati EAA Chapter 174 was chartered in 1966 and presently
								has over 120 members from the Greater Cincinnati area. We meet
								at the Clermont County Airport.
							</Typography>
						</>
					}
					slave={
						<>
							<IconCard title="When" icon={FaClock}>
								<Typography>
									We normally meet at 2:00 pm on the third Sunday of the month.
								</Typography>
							</IconCard>
							<IconCard title="Where" icon={FaMapMarkerAlt}>
								<Typography>
									We meet in the Hawk building at the Clermont County airport.
								</Typography>
							</IconCard>
							<IconCard title="Who" icon={FaUserFriends}>
								<Typography>
									Visitors and guests are always welcome to stop by.
								</Typography>
							</IconCard>
						</>
					}
				/>
			</Container>
		</Spacing>
	);
};

export default About;
