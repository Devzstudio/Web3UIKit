import useOnClickOutside from 'hooks/useOnClickoutside';
import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	transform-origin: center center;
`;

const ModalConent = styled.div`
	position: absolute;
	top: 40%;
	right: 50%;
	transform: translate(50%, -50%);
	color: #fff;
	background-color: #191b1f;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	width: 500px;
	max-width: 400px;
	border-radius: 0.375rem;
	border: 1px solid #2c2f36;

	h3 {
		margin: 0.25rem 0;
		color: #fff;
	}

	.close {
		cursor: pointer;
		color: #9ca3af;
		&:hover {
			color: #fff;
		}
	}

	@media only screen and (max-width: 600px) {
		width: 98%;
		margin-left: 1%;
		padding-bottom: 2%;
		max-width: inherit;
		transform: unset;
		left: 0;
		right: 0;
		bottom: 0px;
	}
`;

const ChooseAssets = styled.button`
	padding: 0.5rem 1rem;
	background-color: #000;
	border-radius: 0.5rem;
	font-size: 1rem;
	line-height: 1.5rem;
	cursor: pointer;
	border: 0;
	color: #e5e7eb;

	&:hover {
		color: #f3f4f6;
		background: #1f2937;
	}
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;
	padding: 1rem;

	margin-bottom: 1rem;
`;

const ChooseAsset = styled.button`
	text-transform: capitalize;
	width: 100%;
	cursor: pointer;
    background-color: transparent;
    border:0;
    color: #fff;
	padding: 0.5rem 1rem;
	font-size: 1rem;
 	position relative;
	text-align:left;

    display: flex;
    align-items: center;

	img {
		position relative;
		bottom:0;
		right:0;
		margin-right: 1rem;
	}

    .asset_info {
        p{
            margin:0;
    		font-size: 1rem;
            color:#6B7280;
        }
        .symbol {
            color:#4B5563;
            margin-top:0.25rem;
		   	font-size: 0.75rem;
        }
    }

	&:hover {
		color: #fff;
        background: #22252a;

        .asset_info {
            p{
                color: #fff;
            }
            .symbol {
                color:#757575;
            }
        }
	}
`;

const AssetSearchWrapper = styled.div`
	position: relative;
	margin-bottom: 0.5rem;
	margin: 0rem 1rem 1rem 1rem;

	.search_icon {
		position: absolute;
		top: 12px;
		left: 15px;
		color: #868c97;
	}
`;

const AssetSearch = styled.input`
	border: 0px;
	padding: 1rem 3.5rem;
	border-radius: 0.25rem;
	color: #fff;
	width: 100%;
	font-size: 1rem;
	background-color: transparent;
	border: 1px solid #515256;

	&:focus {
		border: 1px solid #fff;
	}
`;

const AssetWrapper = styled.div`
	height: 40vh;
	overflow-y: scroll;
	border-top: 1px solid #333;

	@media only screen and (max-width: 600px) {
		height: 50vh;
	}
`;

const CommonBases = styled.div`
	margin: 1rem;

	h4 {
		margin: 0;
		margin-bottom: 0.5rem;
		color: #686869;
		font-weight: 400;
		font-size: 0.875rem;
	}
`;

const CommonBase = styled.button`
	border-radius: 0.375rem;
	padding: 0.25rem 0.5rem;
	border: 1px solid #333;
	display: flex;
	align-items: center;
	background-color: transparent;
	color: #757575;
	cursor: pointer;

	img {
		margin-right: 0.5rem;
	}

	&:hover {
		border-color: #fff;
		color: #fff !important;
	}
`;

const CommonBasesWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	> button {
		margin-right: 0.25rem;
	}
`;

const Assets = [
	{
		name: 'Grape',
		symbol: 'GRAPE',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA/logo.svg',
	},
	{
		name: 'USDC',
		symbol: 'GRAPE',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
	},
	{
		name: 'Solana',
		symbol: 'GRAPE',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
	},
	{
		name: 'Raydium',
		symbol: 'RAY',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png',
	},
	{
		name: 'Sunny',
		symbol: 'sunny',

		image: 'https://assets.coingecko.com/coins/images/18039/small/90dbe787-8e5f-473c-b923-fe138a7a30ea.png',
	},
	{
		name: 'Star Atlas',
		symbol: 'ATLAST',

		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png',
	},
	{
		name: 'Parrot',
		symbol: 'Prt',
		image: 'https://i.imgur.com/m3ejuhk.jpg',
	},
	{
		name: 'Mango Markets',
		symbol: 'MNGO',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac/token.png',
	},
	{
		name: 'Sushi',
		symbol: 'Sushi',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy/logo.png',
	},
];

const CommonAssets = [
	{
		name: 'Grape',
		symbol: 'GRAPE',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA/logo.svg',
	},
	{
		name: 'USDC',
		symbol: 'GRAPE',
		image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
	},
];

const Example2 = () => {
	const [term, setTerm] = React.useState('');
	const [showModal, setShowModal] = React.useState(false);
	const modalRef = useRef();
	useOnClickOutside(modalRef, () => setShowModal(false));

	return (
		<div>
			<ChooseAssets onClick={() => setShowModal(true)}>Choose Asset</ChooseAssets>

			{showModal && (
				<ModalOverlay>
					<ModalConent ref={modalRef}>
						<ModalHeader>
							<h3>Select a Token</h3>
							<div className="close" onClick={() => setShowModal(false)}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18"></line>
									<line x1="6" y1="6" x2="18" y2="18"></line>
								</svg>
							</div>
						</ModalHeader>

						<AssetSearchWrapper>
							<AssetSearch
								onChange={(e) => setTerm(e.target.value)}
								value={term}
								type="search"
								placeholder="Search name or paste address"
							/>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="search_icon"
							>
								<circle cx="11" cy="11" r="8"></circle>
								<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
							</svg>
						</AssetSearchWrapper>

						{!term && (
							<CommonBases>
								<h4>Common Tokens</h4>
								<CommonBasesWrapper>
									{CommonAssets.map((asset) => (
										<CommonBase key={asset.symbol}>
											<img src={asset.image} width="20px" height="20px" />
											{asset.name}
										</CommonBase>
									))}
								</CommonBasesWrapper>
							</CommonBases>
						)}

						<AssetWrapper>
							{Assets.map((wallet, index) => (
								<ChooseAsset key={index}>
									<img src={wallet.image} width="25px" height="25px" />
									<div className="asset_info">
										<p>{wallet.name}</p>
										<p className="symbol">{wallet.symbol}</p>
									</div>
								</ChooseAsset>
							))}
						</AssetWrapper>
					</ModalConent>
				</ModalOverlay>
			)}
		</div>
	);
};

export default Example2;
