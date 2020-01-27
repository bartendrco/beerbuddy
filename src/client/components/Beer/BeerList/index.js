import React from 'react';
import { Media } from 'react-bootstrap';
import './index.css';
import beer_image from '../../../assets/images/beer.svg'

const BeerList = (props) => {
	return (
		<div className='beer'>
			<Media>
        <img
          width={200}
          height={200}
          className="mr-4"
          src={beer_image}
          alt="beer"
        />
        <Media.Body>
          <h3 className='beer-name'>{props.name}</h3>
          <h6 className='brewery'>{props.brewery}</h6>
          <h6 className='tag'>{props.tag}</h6>
          <p className='description'>
            {props.description}
          </p>
        </Media.Body>
      </Media>
	  </div>
	);
}

export default BeerList;