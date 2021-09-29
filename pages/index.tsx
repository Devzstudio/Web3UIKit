import Head from 'next/head';
import Link from 'next/link';

const Categories = [
	{
		name: 'Connect Wallet',
		path: '/components/connect_wallet',
		items: 4,
		preview: '/category_preview/connect_wallet.png',
	},
	{
		name: 'Choose Asset',
		path: '/components/choose_asset',
		items: 2,
		preview: '/category_preview/choose_asset.png',
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>Web3UIKit</title>
				<meta name="description" content="Web3uikit by devzstudio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<p className="intro">Opensource Web3 UI Components using ReactJs, Styled Components.</p>

			<h4>Components</h4>
			<div className="categories">
				{Categories.map((category, index) => (
					<Link key={index} href={category.path} as={category.path}>
						<a className="preview_card">
							<img src={category.preview} alt={category.name} width="250px" height="250px" />
							<div className="details">
								<h3>{category.name}</h3>
								<p>{category.items} components</p>
							</div>
						</a>
					</Link>
				))}
			</div>
			<h4>Roadmap</h4>

			<p>- Select asset</p>
			<p>- Switch Network </p>
			<p>- Coin Address Nav </p>
			<p>- Swap Coins </p>
			<p>- Pool UI </p>
			<p>- Farm UI </p>
		</div>
	);
}
