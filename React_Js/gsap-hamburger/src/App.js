import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='container'>
					<div className='wrapper'>
						<div className='home'>
							<Routes>
								<Route exact path='/' element={<Home />} />
								<Route
									exact
									path='/opportunities'
									element={<Opportunities />}
								/>
								<Route exact path='/solutions' element={<Solutions />} />
								<Route exact path='/contact-us' element={<Contact />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}

function Opportunities() {
	return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
	return <p>Solutions that help you.</p>;
}

function Contact() {
	return <p>Feel free to reach us.</p>;
}

function Home() {
	return (
		<div className='container'>
			<div className='wrapper'>
				<h5>
					The <b>HAMBRG</b>, is a creative, engineer driven, global agency
					working on advancing the software, advertising and design communities
					to new heights.
				</h5>
			</div>
		</div>
	);
}

export default App;
