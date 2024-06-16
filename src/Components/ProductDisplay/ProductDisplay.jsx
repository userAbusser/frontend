import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/fullstar.svg';
// import star_dull_icon from '../Assets/halfstar.svg';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-container">
      <div className="product-left">
        <div className="product-img">
          <img className="product-main-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="product-right">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <p>122</p>
        </div>
        <div className="product-prices">
          <div className="product-price-old">
            ${product.old_price}
          </div>
          <div className="product-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-description">
          
Придбавши цей смартфон в період з 02.04.2024 по 01.04.2025, Ви отримуєте безкоштовну 3-місячну пробну підписку на YouTube Premium.
        </div>
        <div className="product-memory-title">
          <h1>Оберіть кількість пам'яті</h1>
          <div className="product-memories">
            <div className="memory-option">128Gb</div>
            <div className="memory-option">256Gb</div>
            <div className="memory-option">512Gb</div>
          </div>
        </div>
        <button className="add-to-cart-button" onClick={() => { addToCart(product.id) }}>
          Додати в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
