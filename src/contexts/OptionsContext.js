import React, { useState, useContext } from 'react';

const OptionsContext = React.createContext();
const OptionsUpdateContext = React.createContext();

export function useOption() {
	return useContext(OptionsContext);
}

export function useOptionUpdate() {
	return useContext(OptionsUpdateContext);
}

export function OptionsProvider({ children }) {
	const [options, setOptions] = useState([]);

	function updateOptions(option) {
		setOptions(option);
	}

	return (
		<OptionsContext.Provider value={options}>
			<OptionsUpdateContext.Provider value={updateOptions}>
				{children}
			</OptionsUpdateContext.Provider>
		</OptionsContext.Provider>
	);
}
