import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import './index.css';

class EachFilter extends React.Component {
  render() {
    const list = (this.props.data || []).map((s, i) => {
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

    return (
      <Dropdown>
        <Dropdown.Toggle id='dropdown-basic-style'>
          {this.props.type}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {list}
          <Dropdown.Divider>
          </Dropdown.Divider>
          <a href="#" className="see-all">See All</a>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default EachFilter;