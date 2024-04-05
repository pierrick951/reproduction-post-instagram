import { useState, useEffect } from "react"
import './Body.css'
import publication from '../../assets/publication.jpg'
import coeur from '../../assets/svg/coeur.svg'
import chat from '../../assets/svg/chat.svg'
import send from '../../assets/svg/partager.svg'
import save from '../../assets/svg/save.svg'
import coeurRouge from '../../assets/svg/coeurRouge.svg'
import saveGold from '../../assets/svg/saveGold.svg'


export default function Body() {
  const [like, setLike] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isSave, setSaved] = useState(false) 


  function handleClick() {
    if (like <= 1 && !isLiked) {
      setLike(like + 1);
      setIsLiked(true);
    }
    else  {
      setLike(like -1)
      setIsLiked(false)
    }
  }

  function Saveclick(){
    if (!isSave){
      setSaved(true)
    }
    else {
      setSaved(false)
    }
  }
  

  return (
    <div>
      <img className="imgBodycard" src={publication} alt="photo prise a montreal dans le Boulevard saint laurent" />
      <div className="container_ico">
        <img
          onClick={() => handleClick()} src={isLiked ? coeurRouge : coeur} alt="icone en forme de coeur" />

        <img src={chat} alt="pour laisser un commentaire" />
        <img src={send} alt="icone en forme de coeur" />
        <img 
        onClick={() => Saveclick()}
        className="icoSave" src={isSave ? saveGold : save} alt="icone en forme de coeur" />
        <p>{like}</p>
      </div>
    </div>
  )
}