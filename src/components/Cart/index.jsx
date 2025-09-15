import Header from "../Header"
import CartListView from "../CartListView"
import "./index.css"
import CartContext from "../../context/CartContext"
import EmptyCartView from "../EmptyCartView"

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList } = value
      const showEmptyView = cartList.length === 0
      return (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              {showEmptyView ? (
                <EmptyCartView />
              ) : (
                <>
                  <h1 className="cart-heading">My Cart</h1>
                  <CartListView />
                </>
              )}
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
