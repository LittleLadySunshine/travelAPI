import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Item from './Item'
import styles from './styles.module.css'

describe('<Item />', () => {
  let wrapper;
  const place = {
    name: 'Denise'
  }
  beforeEach(() => {
    wrapper = shallow(<Item place={place} />)
  });

  it('contains a title component with yelp', () => {
    expect(wrapper.find('h1').first().text())
      .to.equal(place.name)
  });
