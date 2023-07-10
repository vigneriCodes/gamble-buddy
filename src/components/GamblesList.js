import React from 'react';

import Gamble from './Gamble';

function GamblesList({ gambleDb }) {
	return (
		<>
			<ul>
				{gambleDb.map((gamble) => (
					<Gamble key={gamble.id} gamble={gamble} />
				))}
			</ul>
		</>
	);
}

export default GamblesList;
