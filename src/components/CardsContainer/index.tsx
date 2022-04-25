import React from 'react'
import './styles.css'
import { default as data } from '../../assets/data.json'
import { map } from 'lodash'
import Character from '../../types/Character'
import Card from '../Card'

export default function CardsContainer(): JSX.Element {
  const characters = data.data

  return (
    <div>
      <div className="title">Previous Rulings</div>
      <div className="container">
        {map(characters, (character: Character, index: number) => (
          <Card key={index} character={character} />
        ))}
      </div>
    </div>
  )
}
