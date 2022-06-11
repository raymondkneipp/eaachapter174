import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SEO } from "@components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<SEO />
			<Toaster position="bottom-center" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
