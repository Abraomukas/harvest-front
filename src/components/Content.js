import React, { useState } from 'react';

export default function Content() {
	const [options, setOptions] = useState([{ option: '' }, { option: '' }]);
	const [visible, setVisible] = useState(false);
	const [questionText, setQuestionText] = useState('');

	let questionTextField;

	const addOption = () => {
		setOptions([...options, { option: '' }]);
	};

	const removeOption = (index) => {
		const tmp = [...options];

		tmp.splice(index, 1);
		setOptions(tmp);
	};

	const handleInputChange = (index, event) => {
		const tmp = [...options];

		tmp[index][event.target.name] = event.target.value;
		setOptions(tmp);
	};

	const createQuestion = () => {
		let tmp = [...options];
		setQuestionText(questionTextField.value);

		tmp = tmp.filter((option) => {
			return option.option !== '';
		});

		setVisible(true);
		setOptions(tmp);
	};

	const reset = () => {
		window.location.reload();
	};

	const createGraph = () => {};

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
								ref={(element) => {
									questionTextField = element;
								}}
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
										onChange={(event) => {
											handleInputChange(index, event);
										}}
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
									createQuestion();
								}}>
								create
							</button>
						</div>
						<div className='my-1 text-center'>
							<p>{options.length}/10 possible options</p>
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
					className='col-lg-4 col-md-12 d-flex align-items-center'
					style={{ backgroundColor: 'blue', height: '80vh' }}>
					{visible && (
						<div className='container-fluid d-flex justify-content-center'>
							<div className='text-center'>
								<h5 className='text-white'>{questionText}</h5>
								<ul>
									{options.map((option, index) => {
										return (
											<div key={index} className='form-check'>
												<input
													className='form-check-input'
													type='radio'
													name='flexRadioDefault'
													id='flexRadioDefault1'
												/>
												<label
													className='form-check-label'
													for='flexRadioDefault1'>
													{option.option}
												</label>
											</div>
										);
									})}
								</ul>
								<div className='d-flex justify-content-center'>
									<div className='mt-2'>
										<button
											type='button'
											className='btn btn-primary'
											onClick={() => {
												createGraph();
											}}>
											vote
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
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
