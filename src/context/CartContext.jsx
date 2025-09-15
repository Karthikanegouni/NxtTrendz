import { createContext } from "react"

const CartContext = createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default CartContext
