interface Props {
	master: React.ReactNode;
	slave: React.ReactNode;
}

const Tall: React.VFC<Props> = ({ master, slave }) => {
	return (
		<div className="grid grid-cols-1 gap-y-12 lg:gap-12 lg:grid-cols-3">
			<div className="space-y-6">{master}</div>
			<div className="grid gap-6 lg:col-span-2 sm:grid-cols-2">{slave}</div>
		</div>
	);
};

export default Tall;
