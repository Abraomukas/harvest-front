import React, { useState } from 'react';

import ContentTop from './components/ContentTop';
import Content from './components/Content';

export default function App() {
	return (
		<div className='container-fluid' style={{ padding: '0 0 0 0' }}>
			<ContentTop />
			<Content />
		</div>
	);
}
