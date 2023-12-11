import './Card.css'


function Card({ name, title, quote }) {
  return (
    <div className="card">
      <div className="card__author">
        <h3 className="card__name">{name}</h3>
        <p className="card__title">{title}</p>
      </div>
      <div className="card__content">
        <p className="card__quote">“{quote}”</p>
      </div>
    </div>
  )
}

export default Card