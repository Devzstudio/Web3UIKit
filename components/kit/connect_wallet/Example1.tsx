import useOnClickOutside from 'hooks/useOnClickoutside';
import React, { useRef } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
	background: hsla(0, 0%, 100%, 0.01) !important;
	backdrop-filter: blur(10px);
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
	padding: 1rem;
	background-color: #fff;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	width: 500px;
	max-width: 400px;
	border-radius: 0.375rem;
	border: 1px solid #e2e4e8;

	h3 {
		margin: 0.25rem 0;
		color: #374151;
	}

	.close {
		cursor: pointer;
		color: #9ca3af;
		&:hover {
			color: #111827;
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
	background-color: #3b82f6;
	font-size: 1rem;
	line-height: 1.5rem;
	border-radius: 0.25rem;
	cursor: pointer;
	border: 0;
	color: #fff;

	&:hover {
		background: #2563eb;
	}
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-right: 0.5rem;
	margin-bottom: 1rem;
`;

const InfoMessage = styled.div`
	color: #9ca3af;
	font-size: 0.875rem;
	line-height: 1.25rem;
	margin-top: 1rem;
	text-align: center;
`;

const ConnectWalletButton = styled.button`

	width: 100%;
	cursor: pointer;
	border: 1px solid #d1d5db;
	color: #4B5563;
	padding: 0.5rem;
	font-size: 1rem;
	border-radius: 0.375rem;
 	margin-top: 0.875rem;
	background-color: #F3F4F6;
	position relative;
	text-align:left;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

	img {
		position relative;
		bottom:0;
		right:0;
	}

	&:hover {
		color: #111827;
		border-color: #3B82F6;
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
];

const Example1 = () => {
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

						{Wallets.map((wallet, index) => (
							<ConnectWalletButton key={index}>
								{wallet.name}
								<img src={wallet.image} width="25px" height="25px" />
							</ConnectWalletButton>
						))}

						<InfoMessage>By connecting a wallet, you agree to our Terms</InfoMessage>
					</ModalConent>
				</ModalOverlay>
			)}
		</div>
	);
};

export default Example1;
