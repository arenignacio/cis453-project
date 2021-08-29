import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import style from 'styled-components';
import Home from './Home';
import Contact from './Contact';
import About from './AboutUs';
import Affiliates from './Affiliates';
import FAQ from './FAQ';
import Menu from './Menu';

const Wrapper = style.div`

	#sign:hover {
		animation: flash 1s;
	}

	a {
		&:hover {
			color: salmon;
		}

		&:focus {
			color: white;
		}
	}

	h1 {
		font-family: 'Dancing Script', cursive;
		margin: 0px;
	}

	h3 {
		font-family: 'Fira Sans', sans-serif;
	}

	@keyframes flash {

		20% {
			color: white;
		}

		30% {
			color: salmon;
		}

		60% {
			color: white;
		}

		80% {
			color: salmon;
		}
	}

	@keyframes spread {
		100% {
			letter-spacing: 10px;
		}
	}
`;

const Main = class Main extends Component {
	test = (() => {
		return console.log('Yeehaw');
	})();

	render() {
		return (
			<HashRouter>
				<Wrapper>
					<h1
						style={{
							fontSize: '4rem',
						}}
					>
						<span
							style={{
								color: 'white',
							}}
						>
							Dado's
						</span>{' '}
						<span id="sign" style={{ color: 'salmon' }}>
							Diner
						</span>
					</h1>
					<h3 style={{ letterSpacing: '2px' }}>First Class World Diner</h3>
					<ul className="header">
						<li>
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/menu">Menu</NavLink>
						</li>
						<li>
							<NavLink to="/about">About Us</NavLink>
						</li>
						<li>
							<NavLink to="/affiliates">Affiliates</NavLink>
						</li>
						<li>
							<NavLink to="/faq">Frequently Asked Questions</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</ul>
					<div
						className="content"
						style={{ border: 'double 10px salmon' }}
					>
						<Route exact path="/" component={Home} />
						<Route path="/menu" component={Menu} />
						<Route path="/contact" component={Contact} />
						<Route path="/faq" component={FAQ} />
						<Route path="/affiliates" component={Affiliates} />
						<Route path="/about" component={About} />
					</div>
				</Wrapper>
			</HashRouter>
		);
	}
};

export default Main;
