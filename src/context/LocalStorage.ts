import { createContext } from 'react'
import Character from '../types/Character'

export type LocalStorageContextProps = {
  currentCharacters?: Character[] | null
  storeCurrentCharacters: (characters: Character[]) => void
  vote: ({ character, vote }: { character: Character; vote: 'positive' | 'negative' }) => void
}

const LocalStorageContext = createContext<LocalStorageContextProps>({
  currentCharacters: undefined,
  storeCurrentCharacters: () => undefined,
  vote: () => undefined
})

export default LocalStorageContext
