import Image from "next/image";
import { Container, Divider } from "@components";

const Hero: React.FC = ({ children }) => {
	return (
		<section className="relative bg-gradient-to-t via-indigo-600 from-sky-400 to-indigo-600">
			<div className="relative">
				<Container>
					<div className="py-36 min-h-screen flex flex-col items-center justify-center space-y-12 text-center md:flex-row md:text-left md:justify-between">
						<div className="space-y-6">{children}</div>
						<div>
							<Image
								src="/img/plane.svg"
								layout="intrinsic"
								objectFit="contain"
								width={600}
								height={300}
								alt="plane"
							/>
						</div>
					</div>
				</Container>
			</div>
			<Divider color="white" bottom />
		</section>
	);
};

export default Hero;
