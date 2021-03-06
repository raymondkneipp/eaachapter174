import React from "react";
import cn from "variant-classnames";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "lead";
type Element = Variant | "span" | "figcaption" | "blockquote" | "label" | "dt";
type Color = "dark" | "light" | "primary" | "secondary";

interface Props {
	variant?: Variant;
	element?: Element;
	color?: Color;
	className?: string;
	center?: boolean;
	[rest: string]: any;
}

const Typography: React.FC<Props> = ({
	variant = "p",
	element = variant,
	color = "dark",
	className = "",
	center = false,
	children,
	...rest
}) => {
	const headingColors = {
		light: "text-white",
		primary: "text-yellow-400",
		secondary: "text-indigo-600",
		dark: "text-gray-800",
	};

	const textColors = {
		light: "text-gray-200",
		primary: "text-yellow-400",
		secondary: "text-indigo-600",
		dark: "text-gray-600",
	};

	const variants = {
		$all: className,
		center: { true: "text-center" },
		variant: {
			h1: {
				$all: "font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
				color: headingColors,
			},
			h2: {
				$all: "font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl",
				color: headingColors,
			},
			h3: {
				$all: "font-bold text-xl sm:text-2xl md:text-2xl lg:text-2xl",
				color: headingColors,
			},
			h4: {
				$all: "font-bold text-lg sm:text-xl md:text-xl lg:text-xl",
				color: headingColors,
			},
			h5: { $all: "font-bold text-lg", color: headingColors },
			h6: { $all: "font-bold text-sm", color: headingColors },
			lead: { $all: "text-lg", color: textColors },
			p: { $all: "text-base", color: textColors },
		},
	};

	if (variant === "lead") {
		element = "p";
	}

	return React.createElement(
		element,
		{ className: cn(variants, { variant, color, center }), ...rest },
		children
	);
};

export default Typography;
