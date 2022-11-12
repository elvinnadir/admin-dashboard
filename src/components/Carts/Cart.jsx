import React from 'react'
import { CartsData } from '../../data/Data'
import './cart.css'
import CartItem from '../CartItem/CartItem'
const Cart = () => {
    return (
        <div className='cart__container'>
            {CartsData.map((cart, id) => (
                <div className="cart__container-items">
                    <CartItem
                        title={cart.title}
                        color={cart.color}
                        barValue={cart.barValue}
                        value={cart.value}
                        png={cart.png}
                        series={cart.series}
                    />
                </div>
            ))}
        </div>
    )
}

export default Cart
