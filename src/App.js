import React, { Component } from 'react'

import Fox from 'url!./fox.jpg'
import column from './Trajans-Column-lower-animated.svg'
import boxes from './boxes.svg'
import styles from './styles.css'

export class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>What does the fox say?</h1>
        Hmmm
        <svg>
          <use xlinkHref={column} />
        </svg>
        <svg height='350' width='300'>
          <use xlinkHref={boxes} />
        </svg>
        <svg>
          <use xlinkHref={column} />
        </svg>
      </div>
    );
  }
}
