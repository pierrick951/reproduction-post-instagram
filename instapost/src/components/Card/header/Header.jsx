import React from 'react'
import './Header.css'
import pptrunks from '../../../assets/pptrunks.jpg'

export default function Header() {
  return (
    <div className="headerContainer">
      <img src={pptrunks} alt="photo de profile " />
      <p>Etuve_</p>
    </div>
  )
}