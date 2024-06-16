import React, { useContext } from 'react';
import './css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown.png';
import Item from '../Components/items/item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <div className="category-header">
        <p>
          <span>Показати 1-12</span> з 36 позицій
        </p>
        <div className="category-sort">
          Сортувати за <img src={dropdown_icon} alt='' />
        </div>
      </div>
      <div className="category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="load-more-button">
        Показати більше
      </div>
    </div>
  );
}

export default ShopCategory;
