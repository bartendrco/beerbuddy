import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BeerList from '../../components/Beer/BeerList';
import BeerDetail from '../../components/Beer/BeerDetail';
import Filter from '../../components/Filter';
import './index.css';

class SearchPage extends React.Component {
	render() {
		return (
			<>
				<section className='search-page'>
					<Container fluid={true}>
						<div className='content-body'>
							<Row className='no-gutter'>
								<Col lg={12} xl={9} className='beer-list'>
									<div className='filter'>
										<Filter />
									</div>
								</Col>
								<Col lg={12} xl={3}>
								</Col>
							</Row>
              				<Row className='no-gutter'>
								<Col lg={12} xl={9} className='beer-list'>
									<BeerList />
								</Col>
								<Col lg={12} xl={3}>
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

export default SearchPage