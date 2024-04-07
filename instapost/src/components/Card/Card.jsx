import Header from "./header/Header"
import Body from "../Body/Body";
import Footer from "../Footer/Footer"
import './Card.css';


export default function Card() {
  return (
    <div className="containerCard">     
      <Header/>
      <Body/>
      <Footer/>

    </div>
  )
}