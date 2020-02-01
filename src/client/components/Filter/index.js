import React from 'react';
import EachFilter from './Filter.js';
import FilterAll from './FilterAll.js';
import MobileFilter from './Mobile';
import './index.css';

class Filter extends React.Component {
  render() {
    const style = [
      'Brown Ale',
      'India Pale Ale',
      'Porter',
      'Stout',
      'Lager',
      'Czech Pilsner',
    ]

    const region = [
      'East Coast',
      'West Coast',
      'Germany',
      'Japan',
      'Europe',
      'Mexico'
    ];

    const flavor = [
      'Fruit/Juicy',
      'Hoppy/Bitter',
      'Dry',
      'Sweet/Maltry',
    ];

    const abv = [
      '1-2%',
      '2-3%',
      '4-6%',
      '7%+',
    ];

    const srm = [
      '1-10',
      '11-20',
      '21-30',
      '31-40',
      '41-50',
      '51-80',
    ]

    const data = {
      style: style,
      region: region,
      flavor: flavor,
      abv: abv,
      srm: srm
    };

    return (
      <>
        <div className='desktop-filter'>
          <FilterAll data={data} />
          <EachFilter data={style} type='Style' />
          <EachFilter data={region} type='Region' />
          <EachFilter data={flavor} type='Flavor' />
          <EachFilter data={abv} type='ABV' />
          <EachFilter data={srm} type='SRM' />
        </div>
        <div className='mobile-filter'>
          <MobileFilter />
        </div>
      </>
    )
  }
}

export default Filter;