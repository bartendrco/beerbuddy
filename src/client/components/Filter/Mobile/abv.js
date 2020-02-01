import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { abv } from '../../../mockup/data';

const ABV = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='mobile-filter-button' onClick={handleShow}>
          ABV
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className='justify-content-center border-bottom-0'>
            <Modal.Title>Alcohol by Volume(ABV)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

  export default ABV;