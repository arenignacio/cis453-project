import React, { Component } from 'react';

const border = {
	listStyle: 'none',
	paddingRight: '20px',
	borderRight: '1px grey solid',
};

class Menu extends Component {
	render() {
		return (
			<div>
				<h2>Today's Menu</h2>
				<p>
					Please enjoy your stay by trying one of the items in our constant
					changing menu.
				</p>
				<div className="wrapper">
					<ul style={border}>
						<li>Potato Gratis 5</li>
						<li>German Fries 6</li>
						<li>Vietnamese Tea 3</li>
						<li>Tukneneng 10</li>
						<li>Mango Lassi 4</li>
					</ul>
					<ul style={border}>
						<li>Potato Gratis 5</li>
						<li>German Fries 6</li>
						<li>Vietnamese Tea 3</li>
						<li>Tukneneng 10</li>
						<li>Mango Lassi 4</li>
					</ul>
					<ul
						style={{
							listStyle: 'none',
							paddingRight: '20px',
						}}
					>
						<li>Potato Gratis 5</li>
						<li>German Fries 6</li>
						<li>Vietnamese Tea 3</li>
						<li>Tukneneng 10</li>
						<li>Mango Lassi 4</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Menu;
