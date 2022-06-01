const Row = ({ guess, currentGuess }) => {
	if (guess) {
		return (
			<div className='row'>
				{guess.map((l, i) => (
					<div key={i} className={l.color}>
						{l.key}
					</div>
				))}
			</div>
		);
	}

	if (currentGuess) {
		let letter = currentGuess.split("");

		return (
			<div className='row current'>
				{letter.map((letter, i) => (
					<div key={i} className='filled'>
						{letter}
					</div>
				))}
				{[...Array(5 - letter.length)].map((_, i) => (
					<div key={i}></div>
				))}
			</div>
		);
	}

	return (
		<div className='row'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
export default Row;
