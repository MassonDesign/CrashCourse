import leftArrow from "./assets/arrow-left.svg";
import rightArrow from "./assets/arrow-right.svg";

import "reset-css";
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Power3 } from "gsap/gsap-core";

const testimonials = [
	{
		name: "Julia Cameron",
		title: "Creative Director, VISA",
		image: `${require("./assets/image3.jpg")}`,
		quote:
			"It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
	},
	{
		name: "Mark Jacobs",
		title: "Tech Lead, Google",
		image: `${require("./assets/image.jpg")}`,
		quote:
			"The rebranding has really helped our business. Definitely worth the investment.",
	},
	{
		name: "Lisa Bearings",
		title: "Brand Coordinator, Facebook",
		image: `${require("./assets/image2.jpg")}`,
		quote:
			"The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
	},
];

function App() {
	let imageList = useRef(null);
	let testimonialList = useRef(null);

	const imageWidth = 340;

	useEffect(() => {
		gsap.to(testimonialList.children[0], {
			duration: 0,
			opacity: 1,
		});
	}, []);

	const [state, setState] = useState({
		isActive1: true,
		isActive2: false,
		isActive3: false,
	});

	const slideLeft = (index, duration, multiplied = 1) => {
		gsap.to(imageList.children[index], {
			duration,
			x: -imageWidth * multiplied,
			ease: Power3.easeOut,
		});
	};

	const slideRight = (index, duration, multiplied = 1) => {
		gsap.to(imageList.children[index], {
			duration,
			x: imageWidth * multiplied,
			ease: Power3.easeOut,
		});
	};

	const scale = (index, duration) => {
		gsap.from(imageList.children[index], {
			duration,
			scale: 1.2,
			ease: Power3.easeOut,
		});
	};

	const fadeOut = (index, duration) => {
		gsap.to(testimonialList.children[index], {
			duration,
			opacity: 0,
		});
	};

	const fadeIn = (index, duration) => {
		gsap.to(testimonialList.children[index], {
			duration,
			opacity: 1,
			delay: 1,
		});
	};

	// Function for next slide
	const nextSlide = () => {
		if (imageList.children[0].classList.contains("active")) {
			setState({ isActive1: false, isActive2: true });
			slideLeft(0, 1);
			slideLeft(1, 1);
			scale(1, 1);
			slideLeft(2, 1);
			slideLeft(2, 0);
			fadeOut(0, 1);
			fadeIn(1, 1);
		} else if (imageList.children[1].classList.contains("active")) {
			// 2nd animation
			setState({ isActive2: false, isActive3: true });
			slideLeft(1, 1, 2);
			slideLeft(2, 1, 2);
			scale(2, 1);
			fadeOut(1, 1);
			fadeIn(2, 1);
		} else if (imageList.children[2].classList.contains("active")) {
			//3th animation
			setState({ isActive3: false, isActive1: true });
			slideRight(0, 0);
			slideLeft(2, 1, 3);
			slideLeft(0, 1, 0);
			scale(0, 1);
			fadeOut(2, 1);
			fadeIn(0, 1);
		}
	};

	// Function for previous slide
	const previousSlide = () => {
		if (imageList.children[0].classList.contains("active")) {
			setState({ isActive1: false, isActive3: true });
			slideLeft(2, 0, 3);
			slideLeft(2, 1, 2);
			scale(2, 1);
			slideRight(0, 1);
			slideRight(1, 1);
			fadeOut(0, 1);
			fadeIn(2, 1);
		} else if (imageList.children[1].classList.contains("active")) {
			setState({ isActive2: false, isActive1: true });
			// second slide animation
		} else if (imageList.children[2].classList.contains("active")) {
			setState({ isActive3: false, isActive2: true });
			// third slide animation
		}
	};

	return (
		<div className='testimonial-section'>
			<div className='testimonial-container'>
				<div onClick={previousSlide} className='arrows left'>
					<span>
						<img src={leftArrow} alt='left arrow' />
					</span>
				</div>

				<div className='inner'>
					<div className='t-image'>
						<ul ref={(el) => (imageList = el)}>
							<li className={state.isActive1 ? "active" : ""}>
								<img src={testimonials[0].image} alt={testimonials[0].name} />
							</li>
							<li className={state.isActive2 ? "active" : ""}>
								<img src={testimonials[1].image} alt={testimonials[1].name} />
							</li>
							<li className={state.isActive3 ? "active" : ""}>
								<img src={testimonials[2].image} alt={testimonials[2].name} />
							</li>
						</ul>
					</div>
					<div className='t-content'>
						<ul ref={(el) => (testimonialList = el)}>
							<li className={state.isActive1 ? "active" : ""}>
								<div className='content-inner'>
									<p className='quote'>{testimonials[0].quote}</p>
									<h3 className='name'>{testimonials[0].name}</h3>
									<h4 className='title'>{testimonials[0].title}</h4>
								</div>
							</li>
							<li className={state.isActive2 ? "active" : ""}>
								<div className='content-inner'>
									<p className='quote'>{testimonials[1].quote}</p>
									<h3 className='name'>{testimonials[1].name}</h3>
									<h4 className='title'>{testimonials[1].title}</h4>
								</div>
							</li>
							<li className={state.isActive3 ? "active" : ""}>
								<div className='content-inner'>
									<p className='quote'>{testimonials[2].quote}</p>
									<h3 className='name'>{testimonials[2].name}</h3>
									<h4 className='title'>{testimonials[2].title}</h4>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div onClick={nextSlide} className='arrows right'>
					<span>
						<img src={rightArrow} alt='right arrow' />
					</span>
				</div>
			</div>
		</div>
	);
}

export default App;
