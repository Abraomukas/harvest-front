import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export default function BarChart(props) {
	const getLabels = (array) => {
		let labels = [];
		array.map((obj) => {
			labels.push(obj.option);
		});

		return labels;
	};

	const getVotes = (array) => {
		let votes = [];
		array.map((obj) => {
			votes.push(obj.votes);
		});

		return votes;
	};

	const allData = {
		labels: getLabels(props.options),
		datasets: [
			{
				label: 'Answers',
				backgroundColor: 'rgba(99,132,255,0.5)',
				data: getVotes(props.options),
			},
		],
	};

	return (
		<div>
			<Bar
				data={allData}
				options={{
					responsive: true,
					plugins: { title: { display: true, text: props.title } },
				}}
			/>
		</div>
	);
}
