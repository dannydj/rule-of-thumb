import React from 'react'
import { thumbsDown, thumbsUp } from '../../assets/img'
import { ThumbButton } from './styles'
import './styles.ts'

type ComponentProps = {
  className?: string
  onClick?: () => void
  up?: boolean
}
export default function Thumb(props: ComponentProps): JSX.Element {
  const { className, onClick, up } = props
  const label = `thumbs ${up ? 'up' : 'down'}`

  return (
    <ThumbButton className={`icon-button ${className}`} aria-label={label} onClick={onClick ? () => onClick() : undefined}>
      <img src={up ? thumbsUp : thumbsDown} alt={label} className="thumb" />
    </ThumbButton>
  )
}
