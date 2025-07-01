import { useState } from "react";

export default function Ex() {
  
  let [numero, setnumero]  = useState(0);
  
  const suma = () => {
    setnumero(numero + 1);
    numero += 1;
  }

  let [texto, setTexto] = useState("");

  const cambio = (e) => {
    setTexto(e.target.value);
    console.log(e.target.value);
  }

  return (
    <>
    <h2>Ejemplo useEffect suma</h2>
    <button onClick={suma}>+1</button>
    <h1>{numero}</h1>

    <hr />

    <h2>Ejemplo useState texto input</h2>
    <input type="text" onChange={cambio} />
    <h1>{texto}</h1>

    </>
  )
}