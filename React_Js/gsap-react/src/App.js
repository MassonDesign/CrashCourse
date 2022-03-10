import { useRef, useEffect, useState } from "react";

import "./App.css";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";

function App() {
	let app = useRef(null);
	let circle = useRef(null);
	let circleRed = useRef(null);
	let circleBlue = useRef(null);

	const [circleState, setCircleState] = useState(false);

	const handleExpand = () => {
		gsap.to(circleRed, {
			duration: 0.8,
			width: 200,
			height: 200,
			ease: Power3.easeOut,
		});
		setCircleState(true);
	};

	const handleShrink = () => {
		gsap.to(circleRed, {
			duration: 0.8,
			width: 75,
			height: 75,
			ease: Power3.easeOut,
		});
		setCircleState(false);
	};

	useEffect(() => {
		gsap.to(app, {
			duration: 0,
			css: {
				visibility: "visible",
			},
		});
		// gsap.from(circle, {
		// 	duration: 0.8,
		// 	opacity: 0,
		// 	x: 40,
		// 	ease: Power3.easeOut,
		// });
		// gsap.from(circleRed, {
		// 	duration: 0.8,
		// 	opacity: 0,
		// 	x: 40,
		// 	ease: Power3.easeOut,
		// 	delay: 0.2,
		// });
		// gsap.from(circleBlue, {
		// 	duration: 0.8,
		// 	opacity: 0,
		// 	x: 40,
		// 	ease: Power3.easeOut,
		// 	delay: 0.4,
		// });
		gsap.from([circle, circleRed, circleBlue], {
			duration: 0.8,
			opacity: 0,
			x: 40,
			ease: Power3.easeOut,
			stagger: 0.2,
		});
	}, []);

	return (
		<div ref={(el) => (app = el)} className='App'>
			<header className='App-header'>
				<div className='circle-container'>
					<div ref={(el) => (circle = el)} className='circle'></div>
					<div
						ref={(el) => (circleRed = el)}
						className='circle red'
						onClick={circleState !== true ? handleExpand : handleShrink}
					></div>
					<div ref={(el) => (circleBlue = el)} className='circle blue'></div>
				</div>
			</header>
		</div>
	);
}

export default App;
