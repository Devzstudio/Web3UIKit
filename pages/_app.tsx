import Link from 'next/link';
import { Box } from 'react-feather';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<header>
				<Link href="/" as="/">
					<a className="logo">
						<Box />
						Web3 UI Kit
					</a>
				</Link>
			</header>

			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;500&display=swap"
				rel="stylesheet"
			></link>

			<main className="container">
				<Component {...pageProps} />
			</main>

			<footer>Copyright 2021</footer>
		</>
	);
}

export default MyApp;
