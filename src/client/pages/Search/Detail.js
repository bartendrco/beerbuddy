import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BeerDetail from '../../components/Beer/BeerDetail';
import './index.css';

class DetailPage extends React.Component {
	render() {
		return (
			<>
				<section className='search-page'>
					<Container fluid={true}>
						<div className='filter'>
						</div>
						<div className='content-body'>
              				<Row className='no-gutter'>
								<Col md={9} className='beer-details'>
									<BeerDetail />
								</Col>
								<Col md={3}>
									<div className='right-sidebar' />
								</Col>
              				</Row>
						</div>
					</Container>
				</section>
			</>
		);
	}
}

export default DetailPage