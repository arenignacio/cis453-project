import React from 'react';
import { HashRouter, useHistory } from 'react-router-dom';
import Style from 'styled-components';

import annie from './img/annie-spratt-wGtK3-JzSC4-unsplash.jpg';

const Wrapper = Style.div`
display:flex;
flex-direction: column;

#img {
	align-self: center;
	width: 600px;
	height: 300px;
	background: center 100% / 100% no-repeat url(${annie});
}
`;

const Button = Style.button`
	border: none;
	width: ${({ size }) => {
		switch (size) {
			case 'small':
				return '4rem';
			case 'large':
				return '8rem';
			default:
				return '6rem';
		}
	}};
	background-color: RGB(123,199,255);
	font-size: 15px;
	padding: 10px 0px;
	border-radius: 10px;
	transition: transform 0.3s;
	-webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.44); 
	box-shadow: 8px 8px 25px 0.5px rgba(0,0,0,0.8);

	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	@media (max-width: 600px) {
		width: 12rem;
	}
`;

const Home = () => {
	const history = useHistory();

	return (
		<Wrapper>
			<HashRouter>
				<h2>WELCOME</h2>
				<div id="img"></div>
				<div>
					<p>{`Hello! We are pleased to
							welcome you to Dado's diner. Here at Dado's Diner, we
							strive to please all customers from all corners of the
							world.`}</p>
					<p>
						&#9;Amet consectetur adipisicing elit. Doloribus maxime ipsum
						sunt, voluptate unde sequi praesentium quidem iste neque culpa
						asperiores corporis qui enim! Delectus provident quae
						repudiandae voluptatum nam. Lorem ipsum dolor sit, amet
						consectetur adipisicing elit. Ea ad, delectus hic, dolorem
						obcaecati ratione necessitatibus sed aperiam, iure in dolor
						molestiae aliquid dolore provident!
					</p>
					<p>
						Sunt, impedit rerum! Quibusdam, beatae ad? Impedit assumenda
						accusamus perferendis est, vel ratione illum ullam totam iusto
						hic quo, laudantium recusandae iure. Lorem ipsum dolor, sit
						amet consectetur adipisicing elit. Delectus, praesentium quis!
						Ipsam dignissimos cumque omnis voluptatum laborum iste,
						architecto eum, ipsa nesciunt tempore, repellendus quasi
						soluta eligendi. Maxime, inventore obcaecati! Lorem, ipsum
						dolor sit amet consectetur adipisicing elit. Tenetur, illum
						sed ipsam libero delectus facilis laborum? Provident eius,
						corporis natus nobis dicta ipsa labore maiores, eum adipisci
						fugit suscipit eligendi? Lorem, ipsum dolor sit amet
						consectetur adipisicing elit. Tenetur, illum sed ipsam libero
						delectus facilis laborum? Provident eius, corporis natus nobis
						dicta ipsa labore maiores, eum adipisci fugit suscipit
						eligendi!
					</p>
				</div>
				<div
					style={{
						marginLeft: '.5rem',
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<Button
						onClick={(e) => {
							e.preventDefault();
							history.push('/contact');
						}}
						size="large"
					>
						Order now
					</Button>
				</div>
			</HashRouter>
		</Wrapper>
	);
};

export default Home;
