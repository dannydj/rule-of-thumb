import { find, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import useLocalStorage from '../../hooks/useLocalStorage'
import Character from '../../types/Character'
import Card from '../cards/Card'
import HorizontalCard from '../cards/HorizontalCard'
import { Container, TopContent } from './styles'

export default function CardsContainer(): JSX.Element {
  const { currentCharacters } = useLocalStorage()
  const [isDesktop, setIsDesktop] = useState(false)
  const [selectedView, setSelectedView] = useState<'list' | 'grid'>('list')
  const options = [
    { value: 'list', label: 'List' },
    { value: 'grid', label: 'Grid' }
  ]

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const listener = () => setIsDesktop(media.matches)
    listener()
    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [isDesktop])

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
      <Container viewType={selectedView}>
        {currentCharacters && currentCharacters.length > 0 && <CharactersViewer characters={currentCharacters} isGrid={!isDesktop || selectedView === 'grid'} />}
      </Container>
    </div>
  )
}

function CharactersViewer({ isGrid, characters }: { isGrid: boolean; characters: Character[] }): JSX.Element {
  return <>{map(characters, (character: Character, index: number) => (isGrid ? <Card key={index} character={character} /> : <HorizontalCard key={index} character={character} />))}</>
}
