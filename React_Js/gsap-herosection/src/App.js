import "./App.scss";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";
import { useRef, useEffect } from "react";

// import Assets
import arrow from "./images/arrow-right.svg";
import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";

function App() {
	let app = useRef();
	let images = useRef();
	let content = useRef();
	let tl = gsap.timeline({ delay: 0.8 });

	useEffect(() => {
		//images vars
		const girlImage = images.firstElementChild;
		const boyImage = images.lastElementChild;

		// content vars
		const headlineFirst = content.children[0].children[0];
		const headlineSecond = headlineFirst.nextSibling;
		const headlineThird = headlineSecond.nextSibling;
		const contentP = content.children[1];
		const contentButton = content.children[2];

		// Remove initial flash
		gsap.to(app, {
			duration: 0,
			css: { visibility: "visible" },
		});

		// images animation
		tl.from(
			girlImage,
			{
				duration: 1.2,
				y: 1280,
				ease: Power3.easeOut,
			},
			"Start",
		)
			.from(
				girlImage.firstElementChild,
				{
					duration: 2,
					scale: 1.6,
					ease: Power3.easeOut,
				},
				"0.2",
			)
			.from(
				boyImage,
				{
					duration: 1.2,
					y: 1280,
					ease: Power3.easeOut,
				},
				"0.2",
			)
			.from(
				boyImage.firstElementChild,
				{
					duration: 2,
					scale: 1.6,
					ease: Power3.easeOut,
				},
				"0.2",
			);

		// Content Animation
		tl.from(
			[headlineFirst.children, headlineSecond.children, headlineThird.children],
			{
				duration: 1,
				y: 44,
				ease: Power3.easeOut,
				delay: 0.8,
				stagger: 0.15,
			},
			"Start",
		)
			.from(
				contentP,
				{
					duration: 1,
					y: 20,
					opacity: 0,
					ease: Power3.easeOut,
				},
				"1.4",
			)
			.from(
				contentButton,
				{
					duration: 1,
					y: 20,
					opacity: 0,
					ease: Power3.easeOut,
				},
				"1.6",
			);
	}, [tl]);

	return (
		<div ref={(el) => (app = el)} className='hero'>
			<div className='container'>
				<div className='hero-inner'>
					<div className='hero-content'>
						<div ref={(el) => (content = el)} className='hero-content-inner'>
							<h1>
								<div className='hero-content-line'>
									<div className='hero-content-line-inner'>
										Reliveving the burden
									</div>
								</div>
								<div className='hero-content-line'>
									<div className='hero-content-line-inner'>
										of disease caused
									</div>
								</div>
								<div className='hero-content-line'>
									<div className='hero-content-line-inner'>by beaviors.</div>
								</div>
							</h1>
							<p>
								Better treats serious cardiometabolic diseases to transform
								lives and reduce healthcare utilization through the use of
								digital therapeutics.
							</p>
							<div className='btn-row'>
								<button className='explore-button'>
									explore
									<div className='arrow-icon'>
										<img src={arrow} alt='arrow' />
									</div>
								</button>
							</div>
						</div>
					</div>
					<div className='hero-images'>
						<div ref={(el) => (images = el)} className='hero-images-inner'>
							<div className='hero-image girl'>
								<img src={imgGirl} alt='girl' />
							</div>{" "}
							<div className='hero-image boy'>
								<img src={imgBoy} alt='boy' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
