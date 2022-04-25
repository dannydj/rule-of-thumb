import { find, map } from 'lodash'
import React, { useState } from 'react'
import Select from 'react-select'
import useLocalStorage from '../../hooks/useLocalStorage'
import Character from '../../types/Character'
import Card from '../Card'
import './styles.css'

export default function CardsContainer(): JSX.Element {
  const { currentCharacters } = useLocalStorage()
  const [selectedView, setSelectedView] = useState<'list' | 'grid'>('list')
  const options = [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' }
  ]

  return (
    <div>
      <div className="title">
        <div>Previous Rulings</div>
        <Select
          options={options}
          value={find(options, option => option.value === selectedView)}
          onChange={element => setSelectedView(element?.value as 'list' | 'grid')}
          className="select-container"
          classNamePrefix="select"
          isSearchable={false}
        />
      </div>
      <div className="container">
        {map(currentCharacters, (character: Character, index: number) => (
          <Card key={index} character={character} />
        ))}
      </div>
    </div>
  )
}
