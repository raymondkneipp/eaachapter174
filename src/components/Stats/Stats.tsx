import { Container, Spacing, Typography, Wide } from '@components';

import StatsItem from './StatsItem/StatsItem';

const Stats: React.VFC = () => {
	return (
		<Spacing>
			<Container>
				<Wide
					master={
						<Typography variant="h2" center>
							Young Eagles
						</Typography>
					}
					slave={
						<>
							<StatsItem
								name="Flights"
								stat={1000}
								details="We have provided over 1000 young Cincinnati men and women their first experiences with flight and perhaps setting the course for a career or two in the direction of flying and flight-related professions."
							/>
							<StatsItem
								name="Events"
								stat={15}
								details="We have sponsored over 15 Young Eagles flight rallies. Each rally is assembled and conducted by a small number of our members, who volunteered their time to fly some of Cincinnati's newest and youngest aviators."
							/>
							<StatsItem
								name="Years"
								stat={10}
								details="For over ten years, our members have provided Young Eagle flights. The flights are paid for entirely by the Chapter volunteers without reimbursement or contributions for fuel or aircraft time."
							/>
						</>
					}
				/>
			</Container>
		</Spacing>
	);
};

export default Stats;
