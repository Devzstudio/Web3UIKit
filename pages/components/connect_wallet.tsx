import React from 'react';

import ViewComponents from 'components/view_components';
import PreviewComponent from 'components/preview_component';

import Example1 from 'components/kit/connect_wallet/Example1';
import Example2 from 'components/kit/connect_wallet/Example2';
import Example3 from 'components/kit/connect_wallet/Example3';
import Example4 from 'components/kit/connect_wallet/Example4';
import Config from 'libs/config';

const ConnectWalletComponents = () => {
	return (
		<ViewComponents name="Connect Wallet">
			<div>
				<PreviewComponent
					name="Light with blur overlay"
					Component={Example1}
					preview={'/previews/connect_wallet/example1.png'}
					source={`${Config.raw_component}connect_wallet/Example1.tsx`}
				/>
				<PreviewComponent
					name="Dark"
					Component={Example2}
					preview={'/previews/connect_wallet/example2.png'}
					source={`${Config.raw_component}connect_wallet/Example2.tsx`}
				/>
				<PreviewComponent
					name="Dark with search"
					Component={Example3}
					preview={'/previews/connect_wallet/example3.png'}
					source={`${Config.raw_component}connect_wallet/Example3.tsx`}
				/>
				<PreviewComponent
					name="Lite with 2 column"
					Component={Example4}
					preview={'/previews/connect_wallet/example4.png'}
					source={`${Config.raw_component}connect_wallet/Example4.tsx`}
				/>
			</div>
		</ViewComponents>
	);
};

export default ConnectWalletComponents;
