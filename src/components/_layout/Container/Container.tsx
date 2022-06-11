import cn from "variant-classnames";

interface Props {
	prose?: boolean;
	className?: string;
	fluid?: boolean;
}

const Container: React.FC<Props> = ({
	className,
	prose,
	fluid = false,
	children,
}) => {
	const variants = {
		$all: className,
		prose: "lg:max-w-screen-lg max-w-screen-sm",
		fluid: {
			true: "px-2 lg:px-6",
			false: "px-2 md:px-12 lg:px-24 container mx-auto",
		},
	};
	return <div className={cn(variants, { prose, fluid })}>{children}</div>;
};

export default Container;
