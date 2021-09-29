import React from 'react';

import ViewComponents from 'components/view_components';
import PreviewComponent from 'components/preview_component';

import Example1 from 'components/kit/connect_wallet/Example1';
import Example2 from 'components/kit/connect_wallet/Example2';
import Example3 from 'components/kit/connect_wallet/Example3';
import Example4 from 'components/kit/connect_wallet/Example4';

const ConnectWalletComponents = () => {
	return (
		<ViewComponents name="Connect Wallet">
			<div>
				<PreviewComponent
					name="Light with blur overlay"
					Component={Example1}
					preview={'/previews/connect_wallet/example1.png'}
				/>
				<PreviewComponent name="Dark" Component={Example2} preview={'/previews/connect_wallet/example2.png'} />
				<PreviewComponent
					name="Dark with search"
					Component={Example3}
					preview={'/previews/connect_wallet/example3.png'}
				/>
				<PreviewComponent
					name="Lite with 2 column"
					Component={Example4}
					preview={'/previews/connect_wallet/example4.png'}
				/>
			</div>
		</ViewComponents>
	);
};

export default ConnectWalletComponents;
