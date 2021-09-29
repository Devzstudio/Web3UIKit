import SourceCode from 'components/source_code';
import React, { useState } from 'react';
import { Code, Eye, Image } from 'react-feather';

const PreviewComponent = ({ Component, preview, name, source }) => {
	const [tab, setTab] = useState(1);

	return (
		<div className="tab_container">
			<div className="tab-header">
				<h4 className="tab_header">{name}</h4>

				<div className="tabs">
					<button onClick={() => setTab(1)}>
						<Image />
						Preview
					</button>
					<button onClick={() => setTab(2)}>
						<Eye />
						Demo
					</button>
					<button onClick={() => setTab(3)}>
						<Code />
						Code
					</button>
				</div>
			</div>

			{tab === 1 && <img className="preview_image" src={preview} width="100%" height="100%" />}
			{tab === 2 && <Component />}
			{tab === 3 && <SourceCode source={source} />}
		</div>
	);
};

export default PreviewComponent;
