import Typography from "components/Typography/Typography";
import Image from "next/image";

interface Props {
	src: string;
	name: string;
}

const LogoCloudItem: React.VFC<Props> = ({ src, name }) => {
	return (
		<div className="flex items-center flex-col text-center sm:flex-row sm:text-left sm:space-x-6 md:flex-col md:space-x-0 md:text-center xl:flex-row xl:space-x-6 xl:text-left">
			<div className="opacity-30">
				<Image
					src={`/img/badges/${src}`}
					layout="fixed"
					width="100"
					height="100"
					objectFit="contain"
					alt={name}
					priority={true}
				/>
			</div>
			<Typography variant="h6">{name}</Typography>
		</div>
	);
};

export default LogoCloudItem;
