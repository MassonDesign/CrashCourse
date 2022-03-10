import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";

function Header() {
	const [state, setState] = useState({
		initial: false,
		clicked: null,
		menuName: "Menu",
	});
	console.log(state);
	const [disabled, setDisabled] = useState(false);

	const location = useLocation();

	// use effect for page changes

	useEffect(() => {
		//listen for page changes
		setState({
			initial: false,
			clicked: null,
			menuName: "Menu",
		});
		// console.log(state.clicked);
	}, [location]);

	const handleMenu = () => {
		disableMenu();

		if (state.initial === false) {
			setState({
				initial: null,
				clicked: true,
				menuName: "Close",
			});
		} else if (state.clicked === true) {
			setState({
				clicked: !state.clicked,
				menuName: "Menu",
			});
		} else if (state.clicked === false) {
			setState({
				clicked: !state.clicked,
				menuName: "Close",
			});
		}
	};

	// Determine if menu button should be disbled
	const disableMenu = () => {
		setDisabled(!disabled);
		setTimeout(() => {
			setDisabled(false);
		}, 1200);
	};

	return (
		<header>
			<div className='container'>
				<div className='wrapper'>
					<div className='inner-header'>
						<div className='logo'>
							<Link to='/'>HAMBURG.</Link>
						</div>
						<div className='menu'>
							<button disabled={disabled} onClick={handleMenu}>
								Menu
							</button>
						</div>
					</div>
				</div>
			</div>
			<Hamburger state={state} />
		</header>
	);
}

export default Header;
