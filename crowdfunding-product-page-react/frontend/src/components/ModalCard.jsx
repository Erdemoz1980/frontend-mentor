import React from 'react'

const ModalCard = ({ edition }) => {
  const { name, desc, min_pledge, countInStock } = edition;
  return (
    <div className="modal-card">
         <input type="radio" name="" id="" />    
    <div className="modal-text">
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
  </div>
  )
}

export default ModalCard