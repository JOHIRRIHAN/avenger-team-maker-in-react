/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

const Card = ({selectedActors, remining, totalCost}) => {
  console.log(selectedActors)

  return (
    <center style={{padding: '20px', border: '1px solid gray', height: '100%', borderRadius: '15px'}}>
        <h1>This is card: {selectedActors.length}</h1>
        <h5>Remining: {remining}</h5>
        <h5>TotalCost: {totalCost}</h5>
        <hr />
        {
          selectedActors.map((actor)=>(
            <li key={actor.id}>{actor.name}</li>
          ))
        }
    </center>
  )
}

export default Card;