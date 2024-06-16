import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

export const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cart-container'>
            <div className="cart-header">
                <p>Товари</p>
                <p>Назва</p>
                <p>Ціна</p>
                <p>Кількість</p>
                <p>Загальна</p>
                <p>Видалити</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cart-item cart-header">
                                <img src={e.image} alt="" className='cart-item-image' />
                                <p>{e.name}</p>
                                <p>{e.new_price}грн</p>
                                <button className='cart-quantity'>{cartItems[e.id]}</button>
                                <p>{e.new_price * cartItems[e.id]}грн</p>
                                <img className='cart-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}

            <div className="cart-summary">
                <div className="cart-total">
                    <h1>Загальна сума</h1>
                    <div>
                        <div className="cart-total-item">
                            <p>Вартість</p>
                            <p>{getTotalCartAmount()}грн</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <p>Безкоштовна доставка</p>
                            <p>Безкоштовно</p>
                        </div>
                        <hr />
                        <div className="cart-total-item">
                            <h3>Загальна вартість</h3>
                            <h3>{getTotalCartAmount()}грн</h3>
                        </div>
                    </div>
                    <button>Оформити замовлення</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
