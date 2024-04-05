import React from 'react'
import './Header.css'
import pptrunks from '../../../assets/pptrunks.jpg'
import menu from '../../../assets/svg/menu.svg'


export default function Header() {
  return (
    <div className="headerContainer">
      <img  className="headerContainer__img" src={pptrunks} alt="photo de profile "/>
      <p>etuve_</p>
      <img className='icoMenu' src={menu} alt="" />
      
   
      
      
    </div>
  )
}