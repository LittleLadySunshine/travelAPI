import React, { PropTypes as T } from 'react'
import classnames from 'classnames'

import Rating from 'components/Rating/Rating';
import styles from './styles.module.css'


export class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false
    }
  }

  onClick(e) {
    this.props.onClick(this.props.place);
  }


export default Item
