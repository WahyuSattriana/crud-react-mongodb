import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shop-context"
import { useContext } from "react"
import { CartItem } from "./cart-item"
import './cart.css'

const convertRupiah = require('rupiah-format')

const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = convertRupiah.convert(getTotalCartAmount())

    return (
        <div className="cart">
            <div>
                <h1>Daftar Belanja</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}


                <p className="totalAmount">Total: {totalAmount}</p>
                <input className="user-data" type="text" placeholder='No. WhatsApp'/>
                <input className="user-data" type="text" placeholder='Nama'/>
            </div>
            <div className="checkout">
                <button>Checkout</button> { /* add routing */ }
            </div>
        </div>
    );
}

export default Cart;