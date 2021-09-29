import React from 'react';

import ViewComponents from 'components/view_components';
import PreviewComponent from 'components/preview_component';
import Example1 from 'components/kit/choose_asset/Example1';
import Example2 from 'components/kit/choose_asset/Example2';

const ConnectWalletComponents = () => {
	return (
		<ViewComponents name="Choose Asset">
			<div>
				<PreviewComponent
					name="Simple Asset Select"
					Component={Example1}
					preview={'/previews/choose_asset/example1.png'}
				/>
				<PreviewComponent
					name="Dark token select with common tokens"
					Component={Example2}
					preview={'/previews/choose_asset/example2.png'}
				/>
			</div>
		</ViewComponents>
	);
};

export default ConnectWalletComponents;
