import { createContext } from "react"

const CartContext = createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
})

export default CartContext
