import React from 'react';
import { Button, Accordion, Form } from 'react-bootstrap';
import './index.css';

class FilterAll extends React.Component {
  render() {
    const styleList = (this.props.data.style || []).map((s, i) => {
      return (
        <Form.Check 
          custom
          type="checkbox"
          id={s + i}
          label={s}
          key={i}
        />
      )
    })

    const regionList = (this.props.data.region || []).map((s, i) => {
      return (
        <Form.Check 
          custom
          type="checkbox"
          id={s + i}
          label={s}
          key={i}
        />
      )
    })

    const flavorList = (this.props.data.flavor || []).map((s, i) => {
      return (
        <Form.Check 
          custom
          type="checkbox"
          id={s + i}
          label={s}
          key={i}
        />
      )
    })

    const abvList = (this.props.data.abv || []).map((s, i) => {
      return (
        <Form.Check 
          custom
          type="checkbox"
          id={s + i}
          label={s}
          key={i}
        />
      )
    })

    const srmList = (this.props.data.srm || []).map((s, i) => {
      return (
        <Form.Check 
          custom
          type="checkbox"
          id={s + i}
          label={s}
          key={i}
        />
      )
    })

    const style = {
      backgroundColor: 'white',
      display: 'flex',
      padding: '15px 10px 15px',
      marginTop: '5px',
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }

    const filters = (title, data) => {
      return (
            <div className='desktop-filter-list'>
              <h6> {title} </h6>
              { data }
              <a href="#" className='see-all'>See All</a>
            </div>
        )
    }

    return (
      <Accordion defaultActiveKey='1'>
        <Accordion.Toggle as={Button} eventKey='0' className='desktop-filter-all'>
          All
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0' style={{ position: 'absolute' }}>
          <div style={style}>
            {filters('Style', styleList)}
            {filters('Region', regionList)}
            {filters('Flavor', flavorList)}
            {filters('ABV', abvList)}
            {filters('SRM', srmList)}
          </div>
        </Accordion.Collapse>
      </Accordion>
    )
  }
}

export default FilterAll;