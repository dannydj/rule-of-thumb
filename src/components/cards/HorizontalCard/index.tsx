import { formatDistanceStrict } from 'date-fns'
import { startCase } from 'lodash'
import React, { useEffect, useState } from 'react'
import { retrievePhoto } from '../../../helpers/characterPhoto'
import useLocalStorage from '../../../hooks/useLocalStorage'
import Character from '../../../types/Character'
import { calculatePercentage } from '../../../utils/percentage'
import Thumb from '../../Thumb'
import GaugeBar from '../GaugeBar'
import VoteButton from '../VoteButton'
import { CardContent, Controls, Description, GaugeBarContainer, Message, Name, Rectangle } from './styles'

export default function HorizontalCard({ character }: { character: Character }): JSX.Element {
  const { name, description, votes, lastUpdated, picture, category } = character
  const [isThumbsUp, setIsThumbsUp] = useState(false)
  const [isThumbsDown, setIsThumbsDown] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [hasVoted, setHasVoted] = useState(false)
  const time = formatDistanceStrict(new Date(lastUpdated), new Date(), { addSuffix: true })
  const totalVotes = votes.positive + votes.negative
  const positivePercentage = calculatePercentage(votes.positive, totalVotes)
  const negativePercentage = calculatePercentage(votes.negative, totalVotes)
  const { vote } = useLocalStorage()

  useEffect(() => {
    if (isThumbsUp) {
      setIsThumbsDown(false)
      setDisabled(false)
    }
  }, [isThumbsUp])

  useEffect(() => {
    if (isThumbsDown) {
      setIsThumbsUp(false)
      setDisabled(false)
    }
  }, [isThumbsDown])

  const handleClick = () => {
    setIsThumbsDown(false)
    setIsThumbsUp(false)
    if (hasVoted) {
      setHasVoted(false)
      setDisabled(true)
      return
    }
    vote({ character, vote: isThumbsUp ? 'positive' : 'negative' })
    setHasVoted(true)
  }

  return (
    <CardContent image={retrievePhoto({ photo: picture, tag: '@2x.' })}>
      <Thumb className="thumb-position" up={positivePercentage >= negativePercentage} />
      <Rectangle>
        <div>
          <Name className="white-text name">
            <span>{name}</span>
          </Name>
          <Description className="white-text text-box margin-bottom-12">{description}</Description>
        </div>
        <div>
          <Message className="white-text text-box margin-bottom-12">{hasVoted ? 'Thank you for voting!' : `${time} in ${startCase(category)}`}</Message>
          <Controls className="text-box margin-bottom-12">
            <Thumb onClick={() => setIsThumbsUp(!isThumbsUp)} up className={isThumbsUp ? 'white-border' : ''} />
            <Thumb onClick={() => setIsThumbsDown(!isThumbsDown)} className={`left-separation ${isThumbsDown ? 'white-border' : ''}`} />
            <VoteButton disabled={disabled} handleClick={handleClick} hasVoted={hasVoted} />
          </Controls>
        </div>
      </Rectangle>
      <GaugeBarContainer>
        <GaugeBar color="green" percentage={positivePercentage} />
        <GaugeBar color="yellow" percentage={negativePercentage} />
      </GaugeBarContainer>
    </CardContent>
  )
}
