import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container, Row, Col, Media } from 'react-bootstrap';
import beer_image from '../../assets/images/beer.svg'
import './index.css';

class SearchPage extends React.Component {
	render() {
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