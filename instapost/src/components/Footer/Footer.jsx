import { useState } from "react"
import './Footer.css'
import coeur from '../../assets/svg/coeur.svg'
import coeurRouge from '../../assets/svg/coeurRouge.svg'
export default function Footer() {
    
const [Click, setClick] = useState(true)
const [isRed, setRed] = useState(true)

function showcontent(){
    if(Click === true){

        setClick(false)
    }else {
        setClick(!false)
    }
}

function handleclick(){
    if (isRed === true){
        setRed(false)
    }else {
        setRed(!false)
    }
}
    return (
        <div>
           <p className="publication">
          {Click ? (
            <><span>etuve_</span>
            Soon back to MTL ⚜️<small onClick={showcontent}> ...plus</small></>
          ) : (
            <> <span>etuve_</span> Soon back to MTL ⚜️<br/>
            #Canada #Travel <small onClick={showcontent}>moins</small>
            </>
          )}
        </p>
        <div className="containerName">
            <p className="comments"><span>Jhone_Doe</span> j'ai haaaaaate 🔥</p>
            <div>
                <img
                onClick={handleclick} 
                className="iconeLike"  
                src={isRed ?  coeur : coeurRouge } 
                alt="liker ce commentaire" />
            </div>
        </div>
        <p className="textBottom"><small>13 décembre 2023</small> - <span>Voir la traduction</span></p>
        </div>
    )
}