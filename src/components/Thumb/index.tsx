import React from 'react'
import { thumbsDown, thumbsUp } from '../../assets/img'
import './styles.css'

type ComponentProps = {
  className?: string
  onClick?: () => void
  up?: boolean
}
export default function Thumb(props: ComponentProps): JSX.Element {
  const { className, onClick, up } = props
  const label = `thumbs ${up ? 'up' : 'down'}`

  return (
    <button className={`${className} thumb-container icon-button`} aria-label={label} onClick={onClick ? () => onClick() : undefined}>
      <img src={up ? thumbsUp : thumbsDown} alt={label} className="thumb" />
    </button>
  )
}
