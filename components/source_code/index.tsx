import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css';
import toast, { Toaster } from 'react-hot-toast';
import { Clipboard } from 'react-feather';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const notify = () => toast.success('Copied.');

const SourceCode = ({ source }) => {
	const [code, setCode] = useState(`Loading...`);

	useEffect(() => {
		if (source) {
			fetch(source)
				.then((res) => res.text())
				.then((text) => setCode(text));
		}
	}, [source]);

	return (
		<div>
			<CopyToClipboard text={code} onCopy={() => notify()}>
				<button className="code_copy_btn">
					<Clipboard /> Copy
				</button>
			</CopyToClipboard>

			<Toaster />

			<div className="code_preview">
				<Editor
					value={code}
					onValueChange={(code) => setCode(code)}
					highlight={(code) => highlight(code, languages.js)}
					padding={10}
					style={{
						fontFamily: '"Fira code", "Fira Mono", monospace',
						fontSize: 14,
					}}
				/>
			</div>
		</div>
	);
};

export default SourceCode;
