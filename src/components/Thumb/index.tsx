import React from 'react'
import './styles.css'

export default function Thumb({ className }: { className?: string }): JSX.Element {
  return <div className={`${className} thumb-container`}>Thumb</div>
}
