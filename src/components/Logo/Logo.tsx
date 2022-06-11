import Image from "next/image";

interface Props {
	dark?: boolean;
	size?: number;
}

const Logo: React.VFC<Props> = ({ dark = false, size = 90 }) => {
	return (
		<Image
			src={dark ? "/img/EAA_black.png" : "/img/EAA.png"}
			alt="EAA Logo"
			width={size}
			height={size / 2}
			layout="fixed"
			objectFit="contain"
		/>
	);
};

export default Logo;
