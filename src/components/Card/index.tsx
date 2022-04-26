import { formatDistanceStrict } from 'date-fns'
import { round, split, startCase } from 'lodash'
import React, { useEffect, useState } from 'react'
import { thumbsDown, thumbsUp } from '../../assets/img'
import useLocalStorage from '../../hooks/useLocalStorage'
import Character from '../../types/Character'
import Thumb from '../Thumb'
import { Button, CardContent, Controls, Description, GaugeBarContainer, GaugeBarItem, Message, Name, Rectangle } from './styles'

const IMAGES_PATH = `${process.env.PUBLIC_URL}/img/`

export default function Card({ character }: { character: Character }): JSX.Element {
  const { name, description, votes, lastUpdated, picture, category } = character
  const [isThumbsUp, setIsThumbsUp] = useState(false)
  const [isThumbsDown, setIsThumbsDown] = useState(false)
  const [hasVoted, setHasVoted] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const time = formatDistanceStrict(new Date(lastUpdated), new Date(), { addSuffix: true })
  const totalVotes = votes.positive + votes.negative
  const positivePercentage = (votes.positive * 100) / totalVotes
  const negativePercentage = (votes.negative * 100) / totalVotes
  const { vote } = useLocalStorage()
  const regularImage = `${IMAGES_PATH}${picture}`
  const pictureTokens = split(picture, '.')
  const smallImage = `${IMAGES_PATH}${pictureTokens[0]}@2x.${pictureTokens[1]}`

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

  const VoteButton = (): JSX.Element => {
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
      <Button className="white-text left-separation" onClick={!disabled ? () => handleClick() : undefined}>
        {hasVoted ? 'Vote Again' : 'Vote Now'}
      </Button>
    )
  }

  const GaugeBar = ({ percentage, color }: { percentage: number; color: 'green' | 'yellow' }): JSX.Element => {
    const gauges: { [key: string]: { image: string; thumbType: string } } = {
      green: { image: thumbsUp, thumbType: 'up' },
      yellow: { image: thumbsDown, thumbType: 'down' }
    }

    return (
      <GaugeBarItem className={`white-text ${color}`} percentage={percentage}>
        <img src={gauges[color].image} alt={`thumbs ${gauges[color].thumbType}`} />
        <span>{round(percentage, 2)}%</span>
      </GaugeBarItem>
    )
  }

  return (
    <CardContent image={regularImage} smallImage={smallImage}>
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
            <VoteButton />
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
