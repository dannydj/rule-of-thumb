import { formatDistanceStrict } from 'date-fns'
import { split, startCase, round } from 'lodash'
import React from 'react'
import { thumbsDown, thumbsUp } from '../../assets/img'
import Character from '../../types/Character'
import Thumb from '../Thumb'
import './styles.css'

export default function Card({ character }: { character: Character }): JSX.Element {
  const { name, description, votes, lastUpdated, picture, category } = character
  const pictureTokens = split(picture, '.')
  const bigImage = `${process.env.PUBLIC_URL}/img/${pictureTokens[0]}@2x.${pictureTokens[1]}`
  const time = formatDistanceStrict(new Date(lastUpdated), new Date(), { addSuffix: true })
  const totalVotes = votes.positive + votes.negative
  const positivePercentage = (votes.positive * 100) / totalVotes
  const negativePercentage = (votes.negative * 100) / totalVotes

  const VoteButton = (): JSX.Element => {
    return (
      <button className="vote-btn white-text left-separation" onClick={() => console.log('vote')}>
        Vote Now
      </button>
    )
  }

  const GaugeBar = ({ percentage, color }: { percentage: number; color: 'green' | 'yellow' }): JSX.Element => {
    const gauges: { [key: string]: { image: string; thumbType: string } } = {
      green: { image: thumbsUp, thumbType: 'up' },
      yellow: { image: thumbsDown, thumbType: 'down' }
    }

    return (
      <div className={`white-text inner ${color}`} style={{ width: `${percentage}%` }}>
        <img src={gauges[color].image} alt={`thumbs ${gauges[color].thumbType}`} className="thumb" />
        <span>{round(percentage, 2)}%</span>
      </div>
    )
  }

  return (
    <div className="content">
      <div className="image-wrapper">
        <img src={`${process.env.PUBLIC_URL}/img/${picture}`} alt={name} className="background-image" srcSet={`${process.env.PUBLIC_URL}/img/${picture} 750w, ${bigImage} 1440w`} />
      </div>
      <Thumb className="thumb-position" />
      <div className="rectangle">
        <div className="white-text name">{name}</div>
        <div className="white-text text-box margin-bottom-12 description">{description}</div>
        <div className="white-text text-box margin-bottom-12 time">{`${time} in ${startCase(category)}`}</div>
        <div className="text-box margin-bottom-12 buttons">
          <Thumb onClick={() => console.log('t1h')} up />
          <Thumb onClick={() => console.log('t2h')} className="left-separation" />
          <VoteButton />
        </div>
        <div className="gauge-bar-container">
          <GaugeBar color="green" percentage={positivePercentage} />
          <GaugeBar color="yellow" percentage={negativePercentage} />
        </div>
      </div>
    </div>
  )
}
