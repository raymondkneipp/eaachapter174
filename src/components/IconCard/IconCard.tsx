import React from "react";
import { IconType } from "react-icons";
import cn from "variant-classnames";
import { Typography } from "@components";

interface Props {
	icon: IconType;
	title: string;
	stack?: boolean;
	light?: boolean;
	center?: boolean;
}

const IconCard: React.FC<Props> = ({
	icon,
	title,
	stack = false,
	light = false,
	center = false,
	children,
}) => (
	<article
		className={cn(
			{
				$all: "flex space-x-6",
				stack: "flex-col space-x-0 space-y-6",
				center: {
					true: "items-center text-center",
					false: "items-start",
				},
			},
			{ stack, center }
		)}
	>
		<div className="bg-indigo-600 rounded-3xl inline-block p-4">
			{React.createElement(icon, { color: "white", size: "18" })}
		</div>
		<div className="space-y-2">
			<Typography variant="h3" color={light ? "light" : "dark"}>
				{title}
			</Typography>
			{children}
		</div>
	</article>
);

export default IconCard;
