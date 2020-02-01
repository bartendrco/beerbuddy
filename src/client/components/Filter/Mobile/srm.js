import React, { useState } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import { HuePicker, SliderPicker } from 'react-color'
import { srm } from '../../../mockup/data';

const SRM = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [background, setBackgrond] =useState('fff');

    const handleChangeComplete = (color) => {
        setBackgrond(color.hex);
    }
  
    return (
      <>
        <Button className='mobile-filter-button' onClick={handleShow}>
          SRM
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header className='justify-content-center border-bottom-0'>
            <Modal.Title>Standard Reference Method (SRM)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Row>
                  <Col>
                      <SliderPicker
                        color={ background }
                        onChangeComplete={ handleChangeComplete }
                      />
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

  export default SRM;