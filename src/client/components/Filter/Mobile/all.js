import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import { style, region, flavor, abv } from '../../../mockup/data';

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

const All = (props) => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const col1 = style.filter((d, i) => i < 6)
    const col2 = region.filter((d, i) => i < 6)
  
    return (
      <>
        <Button className='mobile-filter-button' onClick={handleShow}>
          All
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className='justify-content-center border-bottom-0'>
            <Modal.Title>All Filter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
                <Col xs={6}>
                    <h6 className='mb-3' style={{ fontWeight: 'bold', fontSize: '20px' }}>Style</h6>
                    {
                        col1.map((d, i) => {
                            return (
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id={`mobile ${d + i}`}
                                    label={d}
                                    key={i}
                                />
                            )
                        })
                    }
                    <a style={{ textAlign: 'center', marginLeft: '32px', fontSize: '16px' }} href="" className='see-all'>See All</a>
                </Col>
                <Col xs={6}>
                    <h6 className='mb-3' style={{ fontWeight: 'bold', fontSize: '20px' }}>Region</h6>
                    {
                        col2.map((d, i) => {
                            return (
                                <Form.Check 
                                    custom
                                    type="checkbox"
                                    id={`mobile ${d + i}`}
                                    label={d}
                                    key={i}
                                />
                            )
                        })
                    }
                    <a style={{ textAlign: 'center', marginLeft: '32px', fontSize: '16px' }} href="" className='see-all'>See All</a>
                </Col>
            </Row>
            <div className='flavor mt-4'>
                <h6 className='mb-3' style={{ fontWeight: 'bold', fontSize: '20px' }}>Flavor</h6>
                <Typography gutterBottom className={classes.typo}>Fruity/Juicy</Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                <Typography gutterBottom className={classes.typo}>Hoppy/Bitter</Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                <Typography gutterBottom className={classes.typo}>Dry</Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                <Typography gutterBottom className={classes.typo}>Sweet/Malty</Typography>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
            </div>
            <div className='abv mt-4'>
                <h6 className='mb-3' style={{ fontWeight: 'bold', fontSize: '20px' }}>Alcohol by Volume(ABV)</h6>
                <Row>
                    <Col>
                        {
                            abv.map((d, i) => {
                                return (
                                    <Form.Check 
                                        custom
                                        type="checkbox"
                                        id={`mobile ${d + i}`}
                                        label={d}
                                        key={i}
                                    />
                                )
                            })
                        }
                    </Col>
                </Row>
            </div>
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

  export default All;