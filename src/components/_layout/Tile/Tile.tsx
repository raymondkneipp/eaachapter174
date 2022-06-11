const Tile: React.FC = ({ children }) => {
	return (
		<div className="grid gap-6 grid-cols-2 md:grid-cols-4 items-center">
			{children}
		</div>
	);
};

export default Tile;
