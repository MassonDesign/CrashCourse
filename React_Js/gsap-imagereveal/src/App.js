import { useEffect, useRef } from "react";
import "./App.scss";
import People from "./image/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Timeline, Power2 } from "gsap/gsap-core";
import gsap from "gsap";

function App() {
	let container = useRef(null);
	let image = useRef(null);
	let imageReveal = CSSRulePlugin.getRule(".img-container:after");

	const tl = gsap.timeline();

	useEffect(() => {
		tl.to(container, {
			duration: 0,
			css: { visibility: "visible" },
		})
			.to(imageReveal, {
				duration: 1.4,
				width: "0%",
				ease: Power2.easeInOut,
			})
			.from(image, {
				duration: 1.4,
				scale: 1.6,
				ease: Power2.easeInOut,
				delay: -1.6,
			});
	});

	return (
		<section className='main'>
			<div ref={(el) => (container = el)} className='container'>
				<>
					<div className='img-container'>
						<img src={People} ref={(el) => (image = el)} />
					</div>
				</>
			</div>
		</section>
	);
}

export default App;
