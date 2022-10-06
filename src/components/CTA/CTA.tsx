import { Button, Centered, Container, Divider, Typography } from '@components';

const CTA: React.VFC = () => {
	return (
		<div className="relative">
			<div className="bg-yellow-400 bg-gradient-to-t from-sky-600 to-indigo-600 relative">
				<Container>
					<div className="pt-28 pb-36">
						<Centered>
							<Typography variant="h1" element="h2" color="light">
								Join Our Chapter
							</Typography>
							<Typography variant="lead" color="light">
								Share your passion for flying by connecting with over one
								hundred of our members.
							</Typography>
							<div className="flex flex-row flex-wrap gap-6 items-center justify-center">
								<Button to="/contact" theme="primary" size="lg">
									Become a member
								</Button>
							</div>
						</Centered>
					</div>
				</Container>
			</div>
			<Divider color="neutral-100" bottom />
		</div>
	);
};

export default CTA;
