import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { flavor } from '../../../mockup/data';

const useStyles = makeStyles(theme => ({
    typo: {
        marginBottom: 0,
        fontFamily: 'Lato'
    }
}));

const PrettoSlider = withStyles({
    root: {
      color: '#f43939',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#f43939',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
      color: '#999999',
      opacity: 1,
    },
  })(Slider);

const Flavor = (props) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const col1 = flavor.filter((d, i) => i < (flavor.length / 2))
    const col2 = flavor.filter((d, i) => i > (flavor.length / 2))
  
    return (
      <>
        <Button className='mobile-filter-button' onClick={handleShow}>
            Flavor
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className='justify-content-center border-bottom-0'>
            <Modal.Title>Flavor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Typography gutterBottom className={classes.typo}>Fruity/Juicy</Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
            <Typography gutterBottom className={classes.typo}>Hoppy/Bitter</Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
            <Typography gutterBottom className={classes.typo}>Dry</Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
            <Typography gutterBottom className={classes.typo}>Sweet/Malty</Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
          </Modal.Body>
          <Modal.Footer className='border-top-0'>
            <Button variant="default" onClick={handleClose} style={{ color: '#999999' }}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Search
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default Flavor;