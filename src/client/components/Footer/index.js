import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './index.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {
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
		const { width } = this.state;
		return (
			<footer>
				{
					<Navbar>
						<Nav className=''>
							<Nav.Link href='#search'><FontAwesomeIcon className='fa-lg' color="#999999" icon={faSearch} ></FontAwesomeIcon>Search</Nav.Link>
							<Nav.Link href='#nav1'><FontAwesomeIcon className='fa-lg' color="#999999" icon={faSearch} ></FontAwesomeIcon>Nav</Nav.Link>
							<Nav.Link href='#nav2'><FontAwesomeIcon className='fa-lg' color="#999999" icon={faSearch} ></FontAwesomeIcon>Nav</Nav.Link>
							<Nav.Link href='#nav3'><FontAwesomeIcon className='fa-lg' color="#999999" icon={faSearch} ></FontAwesomeIcon>Nav</Nav.Link>
							<Nav.Link href='#nav4'><FontAwesomeIcon className='fa-lg' color="#999999" icon={faSearch} ></FontAwesomeIcon>Nav</Nav.Link>
						</Nav>
					</Navbar>
				}
			</footer>
		);
	}
}

export default Footer;