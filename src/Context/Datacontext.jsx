import React, { useState } from 'react';
export const userDataContext = React.createContext(null);
function DataContext({ children }) {
	let [data, setData] = useState([]);
	return (
		<userDataContext.Provider value={{ data, setData }}>
			{children}
		</userDataContext.Provider>
	);
}

export default DataContext;