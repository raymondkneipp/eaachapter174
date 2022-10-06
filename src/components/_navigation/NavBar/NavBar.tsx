import { ActiveLink, Button, Container, Logo } from '@components';
import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import cn from 'variant-classnames';

const NavBar: React.VFC = () => {
	const [show, setShow] = useState(false);

	const [scrolled, setScrolled] = useState(false);

	const onScroll = useCallback(() => {
		setScrolled(window.pageYOffset > 60);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [onScroll]);

	const variants = {
		$all: 'py-4 fixed top-0 left-0 right-0 transition z-30 bg-indigo-600',
	};

	return (
		<nav className={cn(variants, { scrolled })}>
			<Container>
				<div className="flex items-center justify-between">
					<Link href="/">
						<a className="flex items-center space-x-2 rounded-3xl">
							<div className="flex-1 flex items-center">
								<Logo />
							</div>
						</a>
					</Link>

					<div
						className={cn(
							{
								$all: 'md:block absolute top-full bg-indigo-600 md:bg-transparent left-0 right-0 p-2 md:relative md:p-1',
								show: { true: 'block', false: 'hidden' },
							},
							{ show }
						)}
					>
						<div className="flex flex-col justify-center space-y-2 md:space-y-0 md:flex-row md:flex md:items-center md:space-x-2 lg:space-x-4">
							<ActiveLink to="/">Home</ActiveLink>
							<ActiveLink to="/about">About</ActiveLink>
							<ActiveLink to="/young-eagles">Young Eagles</ActiveLink>
							<ActiveLink to="/newsletters">Newsletters</ActiveLink>
							<ActiveLink to="/contact">Contact</ActiveLink>
						</div>
					</div>
					<div className="block md:hidden">
						<Button
							onClick={() => setShow((prev) => !prev)}
							theme="ghost"
							size="sq"
							aria-label="menu"
						>
							<div className="flex flex-col space-y-2 h-6 w-6 justify-center">
								<div
									className={cn(
										{
											show: {
												$all: 'transition bg-white h-1 w-6 rounded-3xl',
												true: 'rotate-45 translate-y-1.5',
												false: '',
											},
										},
										{ show }
									)}
								></div>
								<div
									className={cn(
										{
											show: {
												$all: 'transition bg-white h-1 w-6 rounded-3xl',
												true: '-rotate-45 -translate-y-1.5',
												false: '',
											},
										},
										{ show }
									)}
								></div>
							</div>
						</Button>
					</div>
				</div>
			</Container>
		</nav>
	);
};

export default NavBar;
