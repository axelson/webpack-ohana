import React, { Component } from 'react'

import Fox from 'url!./fox.jpg'
import column from './Trajans-Column-lower-animated.svg'
import boxes from './boxes.svg'
import hobnob from './hobnob_smile.svg'
import styles from './styles.css'
import baselines from './baselines.png'

export class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>What does the fox say?</h1>
        Hmmm
        <svg height='25' width='25'>
          <use xlinkHref={hobnob} />
        </svg>
        <svg>
          <use xlinkHref={column} />
        </svg>
        <svg height='350' width='300'>
          <use xlinkHref={boxes} />
        </svg>
        <svg>
          <use xlinkHref={column} />
        </svg>
        <svg height='300' width='300'>
          <use xlinkHref={hobnob} />
        </svg>
        <img src={baselines} />
      </div>
    );
  }
}
