interface Props {
	className?: string;
}

const Card: React.FC<Props> = ({ className, children }) => {
	return (
		<div
			className={
				"bg-white rounded-3xl flex flex-col p-6 space-y-3 border border-gray-200 " +
				className
			}
		>
			{children}
		</div>
	);
};

export default Card;
