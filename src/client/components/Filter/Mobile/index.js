import React from 'react';
import Style from './style';
import Region from './region';
import Flavor from './flavor';
import ABV from './abv';
import SRM from './srm';
import All from './all';
import './index.css';

class MobileFilter extends React.Component {
  render() {
    return (
      <>
        <All />
        <Style />
        <Region />
        <Flavor />
        <ABV />
        <SRM />
      </>
    )
  }
}

export default MobileFilter;