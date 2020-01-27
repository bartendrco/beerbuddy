import React from 'react';
import { Container, Row, Col, Media } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BeerList from '../../components/Beer/BeerList';
import './index.css';

const data = [
	{
		name: 'Sweet Action',
		brewery: 'Sixpoint',
		tag: 'malty, peach, hazy',
		description: 'That short-lived sensation sparked one of our first collaborations—the beer you hold in your hand. Our quest to classify SWEET ACTION has ended; it’s a beer your brain can’t categorize, but instead speaks directly to your palate. Our senses and intuition sometimes conquer rational thought. It’s Mad Science.',
	},
	{
		name: 'Neon Neon Rainbows',
		brewery: 'Ommegang',
		tag: 'sweet, ale, farm',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat dolor et nisl condimentum, eget pretium ex elementum. Vivamus scelerisque quis mi sed consectetur',
	},
	{
		name: 'Slow Your Roll',
		brewery: 'Bronx Brewery',
		tag: 'sweet, ale, farm',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat dolor et nisl condimentum, eget pretium ex elementum. Vivamus scelerisque quis mi sed consectetur',
	},
]

class SearchPage extends React.Component {
	render() {
		const beerlist = data.map((beer, i) => {
			return <BeerList name={beer.name} brewery={beer.brewery} tag={beer.tag} description={beer.description} />
		})
		return (
			<>
				<Header />
				<section className='search-page'>
					<Container fluid={true}>
						<div className='filter'>
              filter
						</div>
						<div className='content-body'>
              <Row className='no-gutter'>
  							<Col md={9} className='beer-list'>
  								{beerlist}
  							</Col>
  							<Col md={3} className="right-sidebar">
  							</Col>
              </Row>
						</div>
					</Container>
				</section>
				<Footer />
			</>
		);
	}
}

export default SearchPage