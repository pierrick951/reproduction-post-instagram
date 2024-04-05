import { useState } from "react"
import './Body.css'
import publication from '../../assets/publication.jpg'
import coeur from '../../assets/svg/coeur.svg'
import chat from '../../assets/svg/chat.svg'
import send from '../../assets/svg/partager.svg'
import save from '../../assets/svg/save.svg'


export default function Body() {
  return (
    <div>
      <img className="imgBodycard" src={publication} alt="photo prise a montreal dans le Boulevard saint laurent" />
    <div className="container_ico">
        <img src={coeur} alt="icone en forme de coeur" />
        <img src={chat} alt="pour laisser un commentaire" />
        <img src={send} alt="icone en forme de coeur" />
        <img  className="icoSave" src={save} alt="icone en forme de coeur" />
    </div>
    </div>
  )
}