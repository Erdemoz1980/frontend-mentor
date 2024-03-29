import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

const ProductEditionCard = ({ edition }) => {
  const { name, desc, min_pledge, countInStock } = edition;

  const {setIsOpen, setSelectedEdition } = useContext(GlobalContext);

  const onClickHandler = () => {
    setIsOpen({
      mainModalOpen: true,
      completedModaOpen:false
    });
    setSelectedEdition(name)
  }

  return (
    <div id="product-edition" className={`edition-card ${countInStock>0 ?'enabled':''}`} >
      <header className="edition-header">
        <h2>{name}</h2>
        <p>Pledge ${min_pledge} or more</p>
      </header>
        <p className="edition-text">{desc}</p>
      <footer className="edition-footer">
        <div><h1>{countInStock}</h1>
          <p>left</p>
        </div>
        <button disabled={countInStock < 1}
          onClick={onClickHandler}
          className={`btn btn-edition ${countInStock > 0 ? '' : 'disabled'}`}>
         {countInStock > 0 ?'Select Reward' :'Out of stock'}</button>
      </footer>
    </div> 
  )
}

export default ProductEditionCard