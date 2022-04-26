import { find, map } from 'lodash'
import React, { useState } from 'react'
import Select from 'react-select'
import useLocalStorage from '../../hooks/useLocalStorage'
import Character from '../../types/Character'
import Card from '../Card'
import { Container, TopContent } from './styles'

export default function CardsContainer(): JSX.Element {
  const { currentCharacters } = useLocalStorage()
  const [selectedView, setSelectedView] = useState<'list' | 'grid'>('list')
  const options = [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' }
  ]

  return (
    <div>
      <TopContent>
        <div className="title">Previous Rulings</div>
        <Select
          options={options}
          value={find(options, option => option.value === selectedView)}
          onChange={element => setSelectedView(element?.value as 'list' | 'grid')}
          className="select-container"
          classNamePrefix="select"
          isSearchable={false}
        />
      </TopContent>
      <Container>
        {map(currentCharacters, (character: Character, index: number) => (
          <Card key={index} character={character} />
        ))}
      </Container>
    </div>
  )
}
