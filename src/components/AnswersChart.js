import React from 'react';
import BarChart from 'react-easy-bar-chart';

export default function AnswersChart(props) {
	console.log(props);
	return (
		<BarChart
			xAxis={'Options'}
			yAxis={'Answers'}
			height={500}
			width={800}
			data={props.answers}
		/>
	);
}
