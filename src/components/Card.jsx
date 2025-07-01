import '../assets/styles/Card.css';

export default function Card({img, titulo, descripcion}) {
  

  return(
    <div className="card-container">
      <img src={img} alt="imagen" />
      <div className="card-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    </div>
  )
}