import ContentLeft from './components/ContentLeft';
import ContentMiddle from './components/ContentMiddle';
import ContentRight from './components/ContentRight';
import ContentTop from './components/ContentTop';

export default function App() {
	return (
		<div className='container-fluid' style={{ padding: '0 0 0 0' }}>
			<ContentTop />
			<div
				className='container-fluid'
				style={{ backgroundColor: 'green', height: '80vh' }}>
				<div className='row'>
					<ContentLeft />
					<ContentMiddle />
					<ContentRight />
				</div>
			</div>
		</div>
	);
}
