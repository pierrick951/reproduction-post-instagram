import { useState } from "react"
import './Footer.css'
export default function Footer() {
    
const [Click, setClick] = useState(true)

function showcontent(){
    if(Click === true){

        setClick(false)
    }else {
        setClick(!false)
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
        <p><span>Jhone_Doe</span> j'ai haaaaaate 🔥 </p>
        </div>
    )
}