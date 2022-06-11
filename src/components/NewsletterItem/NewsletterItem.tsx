import Image from "next/image";
import { Typography, Card } from "@components";
import Link from "next/link";

type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "SWORFI";

interface Props {
	month: Month;
	year: number;
}

const NewsletterItem: React.VFC<Props> = ({ year, month }) => {
	const path =
		month === "SWORFI"
			? `newsletters/${year}/${month} ${year} Flyer.`
			: `newsletters/${year}/${month}-${String(year).slice(-2)}-tailSpinners.`;

	const monthNames = {
		1: "January",
		2: "February",
		3: "March",
		4: "April",
		5: "May",
		6: "June",
		7: "July",
		8: "August",
		9: "September",
		10: "October",
		11: "November",
		12: "December",
		SWORFI: "SWORFI",
	};

	return (
		<Link href={`${path}pdf`}>
			<a className="hover:-translate-y-1 transition rounded-3xl">
				<Card>
					<div className="rounded-t-3xl overflow-hidden -m-6 mb-3">
						<Image
							src={`/${path}1.png`}
							width={300}
							height={400}
							layout="responsive"
							objectFit="cover"
						/>
					</div>
					<Typography variant="p" center>
						{monthNames[month]} {year}
					</Typography>
				</Card>
			</a>
		</Link>
	);
};

export default NewsletterItem;
