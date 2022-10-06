import Link from 'next/link';
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';

interface Props {
	to: string;
	page: string;
	external?: boolean;
}

const PageLink: React.VFC<Props> = ({ to, page, external = false }) => {
	const props = external
		? { target: '_blank', rel: 'noopener noreferrer', href: to }
		: {};

	const styles =
		'rounded-3xl text-neutral-600 inline-flex items-center group relative underline decoration-neutral-300 hover:decoration-neutral-800 hover:text-neutral-800 transition';

	if (external) {
		return (
			<a className={styles} {...props}>
				{page}{' '}
				<FaExternalLinkAlt className="opacity-0 group-hover:opacity-100 transition absolute right-0 ml-1 group-hover:translate-x-5" />
			</a>
		);
	}

	return (
		<Link href={to}>
			<a className={styles}>
				{page}{' '}
				<FaLink className="opacity-0 group-hover:opacity-100 transition absolute right-0 ml-1 group-hover:translate-x-5" />
			</a>
		</Link>
	);
};

export default PageLink;
