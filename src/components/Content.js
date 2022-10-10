import React, { useState } from 'react';

export default function Content() {
	const [numOptions, setNumOptions] = useState(2);
	const [options, setOptions] = useState([]);

	const addOption = () => {
		setNumOptions(numOptions + 1);
		setOptions([...options, { option: '' }]);
	};

	const removeOption = (index) => {
		const tmp = [...options];

		tmp.splice(index, 1);
		setNumOptions(numOptions - 1);
		setOptions(tmp);
	};

	const reset = () => {
		window.location.reload();
	};

	return (
		<div
			className='container-fluid'
			style={{ backgroundColor: 'green', height: '80vh' }}>
			<div className='row'>
				{/* LEFT CONTENT */}
				<div
					className='d-flex justify-content-center align-items-center col-lg-4 col-md-12'
					style={{ backgroundColor: 'gray', height: '80vh' }}>
					<div className='container-fluid'>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Introduce your question here'
								aria-label='question'
							/>
						</div>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Option #1'
								aria-label='option'
							/>
						</div>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='Option #2'
								aria-label='option'
							/>
						</div>
						{/* Conditional rendering */}
						{options.map((option, index) => {
							return (
								<div key={index} className='input-group mb-3'>
									<input
										type='text'
										className='form-control'
										placeholder='New option'
										aria-label='option'
									/>
									{setOptions.length < 8 && (
										<button
											type='button'
											className='btn btn-primary'
											onClick={() => {
												removeOption(index);
											}}>
											X
										</button>
									)}
								</div>
							);
						})}
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='New option'
								aria-label='option'
							/>
							{numOptions < 10 && (
								<button
									type='button'
									className='btn btn-primary'
									onClick={() => {
										addOption();
									}}>
									+
								</button>
							)}
						</div>
						<div className='d-flex justify-content-around'>
							<p>{numOptions}/10 possible answers</p>
							<button
								type='button'
								className='btn btn-primary'
								onClick={() => {
									reset();
								}}>
								reset
							</button>
						</div>
					</div>
				</div>
				{/* CENTER CONTENT */}
				<div
					className='col-lg-4 col-md-12'
					style={{ backgroundColor: 'blue', height: '80vh' }}>
					<div></div>
				</div>
				{/* RIGHT CONTENT */}
				<div
					className='col-lg-4 col-md-12'
					style={{ backgroundColor: 'yellow', height: '80vh' }}>
					<div></div>
				</div>
			</div>
		</div>
	);
}
