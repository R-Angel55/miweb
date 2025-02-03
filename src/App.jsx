import { useState } from 'react'
import fondo from './assets/img/fondo.webp';
import fondo2 from './assets/img/fondo2.jpg';
import letter_T from './assets/img/letter_T.png'
import letter_E from './assets/img/letter_E.png'
import letter_A from './assets/img/letter_A.png'
import letter_M from './assets/img/letter_M.png'
import letter_O from './assets/img/letter_O.png'
import cone from './assets/img/rabbit.webp'
import corazon from './assets/img/feliz.jpg'
import './App.css'
import {useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [animatedText, setAnimatedText] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: "0px", left: "0px" });

  useEffect(() => {
    if (count == 14){
    const text = "¿Quieres Ser Mi San Valentín? 💖";
    const letters = Array.from(text).map((char, i) => (
      <span 
        key={i} 
        className="letter" 
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        {char === " " ? "\u00A0" : char} {/* Convierte espacios en &nbsp; */}
      </span>
    ));
    setAnimatedText(letters);
    setShowForm(true);
   }
  }, [count]);
  const handleYes = () => {
    setAnswer("💖 ¡Sabía que dirías que sí! Te amo 💖");
  };
  const handleNoHover = () => {
    const newTop = Math.random() * 50 + "%";
    const newLeft = Math.random() * 50 + "%";
    setNoButtonPosition({ top: newTop, left: newLeft });
  };
 
return (

  <div img src={fondo2} className="fondo" style={{ backgroundImage: `url(${fondo2})` }}>
      <div className="container">
      
        <button 
          onClick={() => setCount((prev) => (prev < 14 ? prev + 1 : prev))}
          disabled={count === 14}
        >
          Haz Click hasta descubir el mensaje: {count}
        </button>
        {count === 14 && (
          <>
        {count === 14 && (
          <>
            <h1 className='titulo'>{animatedText}</h1>
            <div className="images">
            <img src={letter_T} className="logo" alt="T" />
            <img src={letter_E} className="logo react" alt="E" />
            </div>
            <div className='palabra2'>
            <img src={letter_A} className="logo react" alt="A" />
            <img src={letter_M} className="logo react" alt="M" />
            <img src={letter_O} className="logo react" alt="O" />
            </div>
            <div className='sticker'>
              <img src={corazon} className='rabbit'/>
            </div>
              <div className='Imgrabit'>
                 <p className='letter'>
                  Que tengas un lindo día amor ✨
                </p>
                 <img src={cone} className='rabbit' alt = "Rabbit" />
             </div>
             <div className='text3'>
              <p className='letter'>
               Gracias por tu atención! ajjaja (me encantass 🔥)
              </p>
              </div>
               {/* Formulario de respuesta */}
               {showForm && !answer && (
              <div className="form-container">
                <p className="question">¿Quieres ser mi San Valentín? 💕</p>
                <button className="yes-button" onClick={handleYes}>
                  Sí 💖
                </button>
                <button
                  className="no-button"
                  onMouseEnter={handleNoHover}
                  style={{
                    position: "absolute",
                    top: noButtonPosition.top,
                    left: noButtonPosition.left,
                  }}
                >
                  No 😢
                </button>
              </div>
            )}

            {/* Mensaje de respuesta */}
            {answer && <p className="response">{answer}</p>}
            </>
            )}

          </>
        )}
      </div>
   </div>
  );
}
export default App
