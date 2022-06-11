import cn from "variant-classnames";

interface Props {
	color: string;
	flip?: boolean;
	bottom?: boolean;
}

const Divider: React.VFC<Props> = ({ color, flip = false, bottom = false }) => {
	return (
		<div
			className={cn(
				{
					$all: `absolute left-0 w-full overflow-hidden text-${color} rotate-180 pointer-events-none z-10`,
					flip: {
						true: "rotate-180",
						false: "rotate-0",
					},
					bottom: {
						true: "bottom-0",
						false: "top-0",
					},
				},
				{ flip, bottom }
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				viewBox="0 0 1152 240.17578"
				fill="currentColor"
			>
				<path
					id="rect843"
					style={{
						fill: "currentColor",
						fillOpacity: 1,
						stroke: "none",
						strokeWidth: 5.00032,
						strokeLinecap: "round",
						strokeLinejoin: "round",
						strokeDasharray: "10.0006, 10.0006",
					}}
					d="m 1068,0 c -66.17,0 -120,51.98526 -120,115.88086 0,0.396 6.3e-4,0.80517 0.0156,1.20117 -17.89199,2.91 -34.18659,10.93408 -47.05859,22.45508 -21.357,-18.882 -49.78803,-30.41602 -80.95703,-30.41601 -42.832,0 -81.38673,21.62681 -102.80273,56.38281 -14.077,-8.416 -30.30727,-12.92774 -47.19727,-12.92774 -42.56,0 -78.30372,28.66283 -87.63672,67.04883 -12.312,-9.628 -27.23364,-16.25522 -43.43164,-18.69922 -6.724,-41.559 -44.03464,-73.45703 -88.93164,-73.45703 -16.89,0 -33.12027,4.51269 -47.19727,12.92969 C 381.38673,105.64244 342.832,84.013672 300,84.013672 c -32.957,0 -62.8535,12.895981 -84.5625,33.738278 C 199.9905,105.71295 180.353,98.498047 159,98.498047 c -16.89,0 -33.12027,4.512693 -47.19727,12.929693 C 90.386734,76.671435 51.832,55.042969 9,55.042969 c -3.0274899,0 -6.0281289,0.112347 -9,0.326172 V 240.17578 H 1152 V 33.177735 C 1130.0893,12.272636 1100.2574,0 1068,0 Z"
				/>
			</svg>
		</div>
	);
};

export default Divider;
