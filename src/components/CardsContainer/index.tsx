import React from 'react'
import './styles.css'
import { default as data } from '../../assets/data.json'

export default function CardsContainer(): JSX.Element {
  const characters = data.data
  
  return (
    <div>
      <div className="title">Previous Rulings</div>
    </div>
  )
}
