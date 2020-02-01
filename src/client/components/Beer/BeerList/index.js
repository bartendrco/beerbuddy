import React from 'react';
import { Media, Pagination } from 'react-bootstrap';
import './index.css';
import beer_image from '../../../assets/images/beer.svg'

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

class EachBeer extends React.Component {
  constructor(props) {
    super(props);
    this.description = React.createRef();
    this.state = {
      isMore: false,
      moreorless: false
    }
  }

  componentDidMount() {
    if (this.description.current.clientHeight > 54) {
      this.setState({moreorless: true});
      this.description.current.style.overflow = 'hidden';
      this.description.current.style.height = '54px';
    }
    else this.setState({moreorless: false});
  }

  handleMore = (e) => {
    e.stopPropagation();
    if (this.state.isMore) {
      this.description.current.style.overflow = 'hidden';
      this.description.current.style.height = '54px';
    } else {
      this.description.current.style.overflow = 'visible';
      this.description.current.style.height = 'auto';
    }
    this.setState({isMore: !this.state.isMore});
  }

  goDetail = () => {
  }

  render() {
  	return (
  		<div className='beer' onClick={this.goDetail}>
  			<Media>
          <img
            className="mr-4"
            src={beer_image}
            alt="beer"
          />
          <Media.Body>
            <h3 className='beer-name'>{this.props.name}</h3>
            <h6 className='brewery'>{this.props.brewery}</h6>
            <h6 className='tag'>{this.props.tag}</h6>
            <p className='description' ref={this.description}>
              {this.props.description}
            </p>
            {
              this.state.moreorless ? 
                <h6 className='more-button' onClick={e => this.handleMore(e)}>
                  {this.state.isMore ? 'less' : 'more'}
                </h6> : null
            }
          </Media.Body>
        </Media>
  	  </div>
  	);
  }
}

class BeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const beerlist = data.map((beer, i) => {
      return <EachBeer key={i} name={beer.name} brewery={beer.brewery} tag={beer.tag} description={beer.description} />
    });
    const { width } = this.state;
    return ( 
      <>
        <div>{beerlist}</div>
        {
          <Pagination className=''>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        }
      </>
    )
  }
}

export default BeerList;