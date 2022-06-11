import {
	Spacing,
	Container,
	Typography,
	Wide,
	NewsletterItem,
	Tile,
} from "@components";

const ListNewsletters: React.VFC = () => {
	return (
		<Spacing>
			<Container>
				<Wide
					master={
						<>
							<Typography variant="h1">Newsletters</Typography>
						</>
					}
					slave={
						<div className="col-span-full">
							<Tile>
								<NewsletterItem year={2021} month={"SWORFI"} />

								<NewsletterItem year={2020} month={"SWORFI"} />

								<NewsletterItem year={2019} month={"SWORFI"} />
								<NewsletterItem year={2019} month={10} />
								<NewsletterItem year={2019} month={9} />
								<NewsletterItem year={2019} month={8} />
								<NewsletterItem year={2019} month={7} />
								<NewsletterItem year={2019} month={6} />
								<NewsletterItem year={2019} month={2} />
								<NewsletterItem year={2019} month={1} />

								<NewsletterItem year={2018} month={12} />
								<NewsletterItem year={2018} month={11} />
								<NewsletterItem year={2018} month={10} />
								<NewsletterItem year={2018} month={7} />
								<NewsletterItem year={2018} month={6} />
								<NewsletterItem year={2018} month={5} />
								<NewsletterItem year={2018} month={3} />
								<NewsletterItem year={2018} month={2} />
								<NewsletterItem year={2018} month={1} />
							</Tile>
						</div>
					}
				/>
			</Container>
		</Spacing>
	);
};

export default ListNewsletters;
