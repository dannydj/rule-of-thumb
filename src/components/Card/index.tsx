import { formatDistanceStrict } from 'date-fns'
import { split, startCase } from 'lodash'
import React from 'react'
import Character from '../../types/Character'
import Thumb from '../Thumb'
import './styles.css'

export default function Card({ character }: { character: Character }): JSX.Element {
  const pictureTokens = split(character.picture, '.')
  const bigImage = `${process.env.PUBLIC_URL}/img/${pictureTokens[0]}@2x.${pictureTokens[1]}`
  const time = formatDistanceStrict(new Date(character.lastUpdated), new Date(), { addSuffix: true })

  const VoteButton = (): JSX.Element => {
    return (
      <button className="vote-btn white-text" onClick={() => console.log('vote')}>
        Vote Now
      </button>
    )
  }

  return (
    <div className="content">
      <div className="image-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/img/${character.picture}`}
          alt={character.name}
          className="background-image"
          srcSet={`${process.env.PUBLIC_URL}/img/${character.picture} 750w, ${bigImage} 1440w`}
        />
      </div>
      <Thumb className="thumb-position" />
      <div className="rectangle">
        <div className="white-text name">{character.name}</div>
        <div className="white-text text-box margin-bottom-12 description">{character.description}</div>
        <div className="white-text text-box margin-bottom-12 time">{`${time} in ${startCase(character.category)}`}</div>
        <div className="text-box margin-bottom-12 buttons">
          <Thumb onClick={() => console.log('t1h')} up />
          <Thumb onClick={() => console.log('t2h')} />
          <VoteButton />
        </div>
        <div className="gauge-bar-container">bla bla</div>
      </div>
    </div>
  )
}
