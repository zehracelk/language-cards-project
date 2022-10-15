
import '../card/Card.css'

const Card = ({img}) => {
  return (
    <div className="col-6 d-flex">
        <img className="w-25 my-5" src={img} alt="" />
      
    </div>
  )
}

export default Card
