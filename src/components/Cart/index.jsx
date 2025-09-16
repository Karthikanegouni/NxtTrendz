import Header from "../Header"
import CartListView from "../CartListView"
import "./index.css"
import CartContext from "../../context/CartContext"
import EmptyCartView from "../EmptyCartView"
import CartCheckoutCard from "../CartCheckoutCard"

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, clearCart } = value
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
                  <div className="cart-non-empty-view">
                    <div className="cart-header">
                      <h1 className="cart-heading">My Cart</h1>
                      <button
                        type="button"
                        className="custom-btn"
                        onClick={clearCart}
                      >
                        Remove All
                      </button>
                    </div>
                    <CartListView />
                  </div>
                  <CartCheckoutCard />
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
