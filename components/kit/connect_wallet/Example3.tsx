import useOnClickOutside from 'hooks/useOnClickoutside';
import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
	background: rgba(0, 0, 0, 0.6);
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
	background-color: #191b1f;
	color: #fff;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	width: 500px;
	max-width: 400px;
	border-radius: 0.75rem;

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

const ConnectButton = styled.button`
	padding: 0.5rem 1rem;
	background-color: #191b1f;
	font-size: 1rem;
	line-height: 1.5rem;
	border-radius: 0.25rem;
	cursor: pointer;
	border: 0;
	color: #fff;

	&:hover {
		background: #1f2937;
	}
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;
	border-radius: 0.25rem 0.25rem 0 0;
	background-color: #191b1f;
	border-bottom: 1px solid #333;
	padding: 1rem;
	margin-bottom: 1rem;
`;

const InfoMessage = styled.a`
	color: #9ca3af;
	font-size: 0.875rem;
	line-height: 1.25rem;
	margin-top: 1rem;
	text-align: center;
	padding-bottom: 1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		margin-right: 0.25rem;
	}

	&:hover {
		color: #fff;
	}
`;

const ConnectWalletButton = styled.button`
	background-color: #2c2f36;
	width: 100%;
	cursor: pointer;
	border: 1px solid #40444f;
	color: #9CA3AF;
	padding: 0.5rem;
	font-size: 1rem;
	border-radius: 0.375rem;
	margin-top: 0.75rem;
	margin-top: 0.875rem;
	position relative;
	text-align:left;

    display: flex;
    align-items: center;
    padding: 1rem;

	img {
		position relative;
		bottom:0;
        margin-right:0.5rem;
		right:0;
	}

	&:hover {
		color: #fff;
		border-color: #3B82F6;
	}
`;

const WalletsWrapper = styled.div`
	height: 40vh;
	overflow-y: scroll;
	padding: 0 1rem;

	@media only screen and (max-width: 600px) {
		height: 50vh;
	}
`;

const WalletSearchWrapper = styled.div`
	position: relative;
	margin-bottom: 0.5rem;
	padding: 0 1rem;

	.search_icon {
		position: absolute;
		top: 12px;
		left: 30px;
		color: #868c97;
	}
`;

const WalletSearch = styled.input`
	border: 0px;
	padding: 1rem 3.5rem;
	border-radius: 0.25rem;
	width: 100%;
	font-size: 1rem;
	background-color: #2c2f36;
	color: #777;
	border: 1px solid #40444f;

	&:focus {
		color: #333;
		background: #fff;
	}
`;

const Wallets = [
	{
		name: 'Metamask',
		image: '/icons/metamask.png',
	},
	{
		name: 'Coinbase Wallet',
		image: '/icons/coinbase_wallet.svg',
	},
	{
		name: 'Portis',
		image: '/icons/portis.png',
	},
	{
		name: 'Wallet Connect',
		image: '/icons/walletconnect.svg',
	},
	{
		name: 'Metamask',
		image: '/icons/metamask.png',
	},
	{
		name: 'Coinbase Wallet',
		image: '/icons/coinbase_wallet.svg',
	},
	{
		name: 'Portis',
		image: '/icons/portis.png',
	},
	{
		name: 'Wallet Connect',
		image: '/icons/walletconnect.svg',
	},
];

const Example3 = () => {
	const [term, setTerm] = React.useState('');
	const [showModal, setShowModal] = React.useState(false);
	const modalRef = useRef();
	useOnClickOutside(modalRef, () => setShowModal(false));

	return (
		<div>
			<ConnectButton onClick={() => setShowModal(true)}>Connect Wallet</ConnectButton>

			{showModal && (
				<ModalOverlay>
					<ModalConent ref={modalRef}>
						<ModalHeader>
							<h3>Connect the wallet</h3>
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

						<WalletSearchWrapper>
							<WalletSearch
								onChange={(e) => setTerm(e.target.value)}
								value={term}
								type="text"
								placeholder="Search wallet"
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
						</WalletSearchWrapper>
						<WalletsWrapper>
							{Wallets.map((wallet, index) => {
								if (term === '' || wallet.name.toLowerCase().includes(term.toLowerCase())) {
									return (
										<ConnectWalletButton key={index}>
											<img src={wallet.image} width="25px" height="25px" />
											{wallet.name}
										</ConnectWalletButton>
									);
								}
							})}
						</WalletsWrapper>

						<InfoMessage>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
								<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
							</svg>
							Other wallet
						</InfoMessage>
					</ModalConent>
				</ModalOverlay>
			)}
		</div>
	);
};

export default Example3;
