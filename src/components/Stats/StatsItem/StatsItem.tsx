import { Card, Typography } from '@components';

interface Props {
	name: string;
	stat: number;
	details: string;
}

const StatsItem: React.VFC<Props> = ({ name, stat, details }) => {
	return (
		<Card>
			<Typography variant="h3" center>
				{name}
			</Typography>
			<Typography variant="h1" element="h4" color="secondary" center>
				{stat}+
			</Typography>
			<Typography variant="p" center>
				{details}
			</Typography>
		</Card>
	);
};

export default StatsItem;
