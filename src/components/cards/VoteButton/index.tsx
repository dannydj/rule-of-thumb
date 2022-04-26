import React from 'react'
import { Button } from './styles'

type ComponentProps = {
  disabled: boolean
  handleClick: () => void
  hasVoted: boolean
}
export default function VoteButton({ disabled, handleClick, hasVoted }: ComponentProps): JSX.Element {
  return (
    <Button className="white-text left-separation" onClick={!disabled ? () => handleClick() : undefined}>
      {hasVoted ? 'Vote Again' : 'Vote Now'}
    </Button>
  )
}
