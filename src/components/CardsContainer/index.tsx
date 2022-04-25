import { map } from 'lodash'
import React from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import Character from '../../types/Character'
import Card from '../Card'
import './styles.css'

export default function CardsContainer(): JSX.Element {
  const { currentCharacters } = useLocalStorage()

  return (
    <div>
      <div className="title">Previous Rulings</div>
      <div className="container">
        {map(currentCharacters, (character: Character, index: number) => (
          <Card key={index} character={character} />
        ))}
      </div>
    </div>
  )
}
