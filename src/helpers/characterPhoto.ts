import { split } from 'lodash'

const IMAGES_PATH = `${process.env.PUBLIC_URL}/img/`

export function retrieveRegularPhoto(photo: string) {
  return `${IMAGES_PATH}${photo}`
}
export function retrieveSmallPhoto(photo: string) {
  const photoTokens = split(photo, '.')
  return `${IMAGES_PATH}${photoTokens[0]}@2x.${photoTokens[1]}`
}
