import CartContext from "../../context/CartContext"
import "./index.css"

const CartCheckoutCard = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value
      const totalAmount = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
      return (
        <div className="cart-checkout-card">
          <h1>Order Summary</h1>
          <hr className="h-line" />
          <h2>Total Price: {totalAmount}</h2>
          <p>{cartList.length} Item in cart</p>
          <hr className="h-line" />
          <button type="button" className="custom-btn checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartCheckoutCard
