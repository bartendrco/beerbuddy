import React from 'react';
import { Media, ProgressBar, Card, Button, CardGroup } from 'react-bootstrap';
import './index.css';
import beer_detail_image from '../../../assets/images/detail-beer.svg';
import beer_image from '../../../assets/images/beer.svg';

class BeerDetail extends React.Component {
  render() {
    return (
      <div className='beer-detail-page'>
        <div className='beer-detail mb-4'>
          <Media>
            <img
              width={348}
              height={600}
              className='mr-4'
              src={beer_detail_image}
              alt='beerDetail'
            />
            <Media.Body>
              <h3 className='f-30-b'>Sweet Action</h3>
              <h6 className='f-18 brewery mb-4'>Sixpoint Brewery</h6>
              <div className='percentage mb-3'>
                <div className='abv-percent'>
                  <p className='mb-2'>5.0%</p>
                  <h6 className='f-16-b f-upper'>abv</h6>
                </div>
                <div className='ibu-percent'>
                  <p className='mb-2'>40</p>
                  <h6 className='f-16-b f-upper'>ibu</h6>
                </div>
                <div className='srm-percent'>
                  <p className='mb-2'>6.3</p>
                  <h6 className='f-16-b f-upper'>srm</h6>
                </div>
              </div>
              <p className='f-16 mb-3' style={{ lineHeight: 1.5 }}>
                That short-lived sensation sparked one of our first collaborations—the beer you hold in your hand. Our quest to classify SWEET ACTION has ended; it’s a beer your brain can’t categorize, but instead speaks directly to your palate. Our senses and intuition sometimes conquer rational thought. It’s Mad Science.
              </p>
              <h6 className='f-14-b f-c-999 f-upper mb-1'>tags</h6>
              <h5 className='f-20-b mb-4'>hoppy, bitter, floral</h5>
              <h6 className='f-14-b f-c-999 f-upper mb-1'>style</h6>
              <h5 className='f-20-b mb-4'>pale ale</h5>
              <h6 className='f-14-b f-c-999 f-upper mb-1'>region</h6>
              <h5 className='f-20-b mb-4'>Northeast USA</h5>
              <div className='flavor'>
                <h6 className='f-14-b f-c-999 f-upper mb-1'>flavor</h6>
                <h5 className='f-20-b'>Fruity/Juicy</h5>
                <ProgressBar now='70' className='mb-3' />
                <h5 className='f-20-b'>Hoppy/Bitter</h5>
                <ProgressBar now='10' className='mb-3' />
                <h5 className='f-20-b'>Dry</h5>
                <ProgressBar now='25' className='mb-3' />
                <h5 className='f-20-b'>Sweet/Malty</h5>
                <ProgressBar now='85' className='mb-3' />
              </div>
            </Media.Body>
          </Media>
        </div>
        <div className='similar-beers'>
          <h3 className='f-30-b mb-3'>Similar Beers</h3>
          <CardGroup className='justify-content-between'>
            <Card className='border-0'>
              <Card.Img variant='top' src={beer_image} width='200' />
              <Card.Body className='p-0 pt-3'>
                <h5 className='f-20-b mb-1'>Slow Your Roll</h5>
                <h6 className='f-16'>Bronx Brewery</h6>
              </Card.Body>
            </Card>
            <Card className='border-0'>
              <Card.Img variant='top' src={beer_image} width='200' />
              <Card.Body className='p-0 pt-3'>
                <h5 className='f-20-b mb-1'>Slow Your Roll</h5>
                <h6 className='f-16'>Bronx Brewery</h6>
              </Card.Body>
            </Card>
            <Card className='border-0'>
              <Card.Img variant='top' src={beer_image} width='200' />
              <Card.Body className='p-0 pt-3'>
                <h5 className='f-20-b mb-1'>Slow Your Roll</h5>
                <h6 className='f-16'>Bronx Brewery</h6>
              </Card.Body>
            </Card>
            <Card className='border-0'>
              <Card.Img variant='top' src={beer_image} width='200' />
              <Card.Body className='p-0 pt-3'>
                <h5 className='f-20-b mb-1'>Slow Your Roll</h5>
                <h6 className='f-16'>Bronx Brewery</h6>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    )
  }
}

export default BeerDetail;