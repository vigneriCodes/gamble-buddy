import React, { useState, useEffect } from 'react';

import Header from './Header';
import GamblesList from './GamblesList';

const initialGambles = [
	{
		id: 118836,
		name: 'Wild Goose',
		image: 'https://i.pravatar.cc/48?u=118836',
		spent: 120,
		winnings: 0,
	},
	{
		id: 933372,
		name: "Shari's",
		image: 'https://i.pravatar.cc/48?u=933372',
		spent: 60,
		winnings: 475,
	},
	{
		id: 499476,
		name: 'Oak Tree',
		image: 'https://i.pravatar.cc/48?u=499476',
		spent: 60,
		winnings: 0,
	},
	{
		id: 853489,
		name: 'Seven Feathers',
		image: 'https://i.pravatar.cc/48?u=853489',
		spent: 200,
		winnings: 900,
	},
];

function App() {
	const [gambleDb, setGambleDb] = useState([]);

	useEffect(() => {
		setGambleDb([...initialGambles]);
	}, []);

	return (
		<div className='App'>
			<Header />
			<GamblesList gambleDb={gambleDb} />
		</div>
	);
}

export default App;
