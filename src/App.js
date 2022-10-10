import React, { useState } from 'react';

import ContentLeft from './components/ContentLeft';
import ContentMiddle from './components/ContentMiddle';
import ContentRight from './components/ContentRight';
import ContentTop from './components/ContentTop';

import { OptionsProvider } from './contexts/OptionsContext';

export default function App() {
	const [options, setOptions] = useState([]);

	return (
		<div className='container-fluid' style={{ padding: '0 0 0 0' }}>
			<ContentTop />
			<div
				className='container-fluid'
				style={{ backgroundColor: 'green', height: '80vh' }}>
				{/* <div className='row'>
					<OptionsProvider>
						<ContentLeft />
						<ContentMiddle />
						<ContentRight />
					</OptionsProvider>
				</div> */}
				<div className='row'>
					<Content />
				</div>
			</div>
		</div>
	);
}
