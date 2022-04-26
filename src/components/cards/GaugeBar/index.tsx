import { round } from 'lodash'
import React from 'react'
import { thumbsDown, thumbsUp } from '../../../assets/img'
import { GaugeBarItem } from './styles'

export default function GaugeBar({ percentage, color }: { percentage: number; color: 'green' | 'yellow' }): JSX.Element {
  const gauges: { [key: string]: { image: string; thumbType: string } } = {
    green: { image: thumbsUp, thumbType: 'up' },
    yellow: { image: thumbsDown, thumbType: 'down' }
  }

  return (
    <GaugeBarItem className={`white-text ${color}`} percentage={percentage}>
      <img src={gauges[color].image} alt={`thumbs ${gauges[color].thumbType}`} />
      <span>{round(percentage, 2)}%</span>
    </GaugeBarItem>
  )
}
