import React, { useState } from 'react';

export default function Content() {
	const [numOptions, setNumOptions] = useState(2);
	const [options, setOptions] = useState([{ option: '' }, { option: '' }]);

	console.log(options.length);

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

	const handleOptionChange = (event, index) => {
		const tmp = [...options];
		tmp[index][event.target.name];

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
								id='question'
								type='text'
								className='form-control'
								placeholder='Introduce your question here'
								aria-label='question'
							/>
						</div>
						{/* Conditional rendering */}
						{options.map((option, index) => {
							return (
								<div key={index} className='input-group mb-3'>
									<input
										type='text'
										name='option'
										value={option.option}
										className='form-control'
										placeholder='New option'
										aria-label='option'
									/>
									{options.length > 2 && (
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
						<div className='mb-2 d-flex justify-content-around'>
							{options.length < 10 && (
								<button
									type='button'
									className='btn btn-primary'
									onClick={() => {
										addOption();
									}}>
									one more option
								</button>
							)}

							<button
								type='button'
								className='btn btn-primary'
								onClick={() => {
									reset();
								}}>
								create
							</button>
						</div>
						<div className='my-1 text-center'>
							<p>{numOptions}/10 possible options</p>
						</div>
						<div className='mt-2 text-center'>
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
