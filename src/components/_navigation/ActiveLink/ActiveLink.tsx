import Link from "next/link";
import { useRouter } from "next/router";
import cn from "variant-classnames";

interface Props {
	to: string;
}

const ActiveLink: React.FC<Props> = ({ to, children }) => {
	const router = useRouter();
	const active = router.asPath === to;

	const variants = {
		$all: "text-white rounded-3xl py-2 px-4 font-bold",
		active: {
			true: "bg-indigo-500",
			false: "hover:bg-indigo-500 transition",
		},
	};

	return (
		<Link href={to}>
			<a className={cn(variants, { active })}>{children}</a>
		</Link>
	);
};

export default ActiveLink;
