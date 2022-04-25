import { map } from 'lodash'
import Character from '../types/Character'

type CharacterObject = {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: {
    positive: number
    negative: number
  }
}

export function objectToCharacter(object: CharacterObject): Character {
  return {
    name: object.name,
    description: object.description,
    category: object.category,
    picture: object.picture,
    lastUpdated: new Date(object.lastUpdated),
    votes: {
      positive: object.votes.positive,
      negative: object.votes.negative
    }
  }
}

export function objectArrayToCharacters(objectArray: CharacterObject[]): Character[] {
  return map(objectArray, object => objectToCharacter(object))
}
