import { Footer, NavBar } from "@components";

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
