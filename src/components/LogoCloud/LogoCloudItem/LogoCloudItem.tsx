import Image from 'next/image';

interface Props {
	src: string;
}

const LogoCloudItem: React.VFC<Props> = ({ src }) => {
	return (
		<div className="flex items-center justify-center opacity-30">
			<Image
				src={`/img/badges/${src}`}
				layout="fixed"
				width="100"
				height="100"
				objectFit="contain"
				alt={'badge'}
				priority={true}
			/>
		</div>
	);
};

export default LogoCloudItem;
