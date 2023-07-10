import React from 'react';

function Gamble({ gamble }) {
	return (
		<>
			<li>
				<div>
					<h3>{gamble.name}</h3>
					<p>Balance: {gamble.winnings - gamble.spent}</p>
				</div>
			</li>
		</>
	);
}

export default Gamble;
