import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import dallas from "../images/dallas.webp";
import austin from "../images/austin.webp";
import newyork from "../images/newyork.webp";
import sanfrancisco from "../images/sanfrancisco.webp";
import beijing from "../images/beijing.webp";

const cities = [
	{ name: "Dallas", image: dallas },
	{ name: "Austin", image: austin },
	{ name: "New York", image: newyork },
	{ name: "San Francisco", image: sanfrancisco },
	{ name: "Beijing", image: beijing },
];

const Hamburger = ({ state }) => {
	// vars for our animated dom nodes
	let menu = useRef();
	let revealMenu = useRef();
	let reveaulMenuBackground = useRef();
	let cityBackground = useRef();
	let line1 = useRef();
	let line2 = useRef();
	let line3 = useRef();
	let info = useRef();

	useEffect(() => {
		if (state.clicked === false) {
			// close our menu
			//menu.style.display = "none";
			gsap.to([revealMenu, reveaulMenuBackground], {
				duration: 0.8,
				height: 0,
				ease: "power3.inOut",
				stagger: {
					amount: 0.07,
				},
			});
			gsap.to(menu, {
				duration: 1,
				css: { display: "none" },
			});
		} else if (
			state.clicked === true ||
			(state.clicked === true && state.initial === null)
		) {
			// open our menu

			gsap.to(menu, {
				duration: 0,
				css: { display: "block" },
			});

			gsap.to([reveaulMenuBackground, revealMenu], {
				duration: 0,
				opacity: 1,
				height: "100%",
			});
			staggerReveal(reveaulMenuBackground, revealMenu);
			fadeInUp(info);
			staggerText(line1, line2, line3);
		}
	}, [state]);

	const staggerReveal = (node1, node2) => {
		gsap.from([node1, node2], {
			duration: 0.8,
			height: 0,
			transformOrigin: "right top",
			skewY: 2,
			ease: "power3.inOut",
			stagger: {
				amount: 0.1,
			},
		});
	};

	const fadeInUp = (node) => {
		gsap.from(node, {
			duration: 1,
			y: 60,
			delay: 0.2,
			opacity: 0,
			ease: "power3.inOut",
		});
	};

	const staggerText = (node1, node2, node3) => {
		gsap.from([node1, node2, node3], {
			duration: 0.8,
			y: 100,
			delay: 0.1,
			ease: "power3.inOut",
			stagger: {
				amount: 0.3,
			},
		});
	};

	const handleCities = (city) => {
		gsap.to(cityBackground, {
			duration: 0,
			background: `url(${city}) center center`,
		});
		gsap.to(cityBackground, {
			duration: 0.4,
			opacity: 1,
			ease: "power3.inOut",
		});
		gsap.from(cityBackground, {
			duration: 0.4,
			skewY: 2,
			transformOrigin: "right top",
		});
	};

	const handleCityReturn = () => {
		gsap.to(cityBackground, {
			duration: 0.4,
			opacity: 0,
		});
	};

	const handleHover = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: 3,
			skewX: 4,
			ease: "power3.inOut",
		});
	};

	const handleHoverExit = (e) => {
		gsap.to(e.target, {
			duration: 0.3,
			y: -3,
			skewX: 0,
			ease: "power3.inOut",
		});
	};

	return (
		<div ref={(el) => (menu = el)} className='hamburger-menu'>
			<div
				ref={(el) => (reveaulMenuBackground = el)}
				className='menu-secondary-background-color'
			></div>
			<div ref={(el) => (revealMenu = el)} className='menu-layer'>
				<div
					ref={(el) => (cityBackground = el)}
					className='menu-city-background'
				></div>
				<div className='container'>
					<div className='wrapper'>
						<div className='menu-links'>
							<nav>
								<ul>
									<li>
										<Link
											onMouseEnter={(e) => handleHover(e)}
											onMouseOut={(e) => handleHoverExit(e)}
											ref={(el) => (line1 = el)}
											to='/opportunities'
										>
											Opportunities
										</Link>
									</li>
									<li>
										<Link
											onMouseEnter={(e) => handleHover(e)}
											onMouseOut={(e) => handleHoverExit(e)}
											ref={(el) => (line2 = el)}
											to='/solutions'
										>
											Solution
										</Link>
									</li>
									<li>
										<Link
											onMouseEnter={(e) => handleHover(e)}
											onMouseOut={(e) => handleHoverExit(e)}
											ref={(el) => (line3 = el)}
											to='/contact-us'
										>
											Contact us
										</Link>
									</li>
								</ul>
							</nav>
							<div ref={(el) => (info = el)} className='info'>
								<h3>Our Promise</h3>
								<p>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Doloribus placeat facere explicabo voluptatum! Doloribus,
									voluptas odio? Quod odit natus enim?
								</p>
							</div>
							<div className='locations'>
								Locations:
								{cities.map((el) => {
									return (
										<span
											key={el.name}
											onMouseEnter={() => handleCities(el.image)}
											onMouseOut={handleCityReturn}
										>
											{el.name}
										</span>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hamburger;
