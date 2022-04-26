import { split } from 'lodash'

const IMAGES_PATH = `${process.env.PUBLIC_URL}/img/`

export function retrievePhoto({ photo, tag }: { photo: string; tag?: string }) {
  if (!tag) {
    return `${IMAGES_PATH}${photo}`
  }

  const photoTokens = split(photo, '.')
  return `${IMAGES_PATH}${photoTokens[0]}${tag}${photoTokens[1]}`
}
