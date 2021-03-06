import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { region } from '../../../mockup/data';

const Region = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const col1 = region.filter((d, i) => i < (region.length / 2))
    const col2 = region.filter((d, i) => i > (region.length / 2))
  
    return (
      <>
        <Button className='mobile-filter-button' onClick={handleShow}>
          Region
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className='justify-content-center border-bottom-0'>
            <Modal.Title>Style</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
                <Col xs={6}>
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
                </Col>
                <Col xs={6}>
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
                </Col>
            </Row>
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

  export default Region;