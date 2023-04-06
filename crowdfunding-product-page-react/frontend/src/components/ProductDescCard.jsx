import { useState } from "react";
import BookmarkIcon from "./BookmarkIcon";

const ProductDescCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { logo, name, description } = product;

  const bookmarkHandler = () => {
    window.open('http://localhost:3000') //for demo purposes
  }

  return (
    <div className="card product-desc">
      <img className="product_logo" src={logo} alt="product_logo" />
      <div className="product-desc-text">
         <h1>{name}</h1>
         <p>{description}</p>
      </div>
      <footer className="product-desc-footer">
        <a href="#product-edition" className="btn btn-primary btn-main">
          Back this project
        </a>
        <button onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onClick={bookmarkHandler} className="btn btn-bookmark">
          <BookmarkIcon fill={isHovered ? '#707070' : '#2F2F2F'} pathfill={isHovered ? '#000' : '#B1B1B1'} />Bookmark
        </button>
        </footer>
    </div>
  )
}

export default ProductDescCard;