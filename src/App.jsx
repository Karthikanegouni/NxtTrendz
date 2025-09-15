import { Route, Switch, Redirect } from "react-router-dom"
import { Component } from "react"
import LoginForm from "./components/LoginForm"
import Home from "./components/Home"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductItemDetails from "./components/ProductItemDetails"
import NotFound from "./components/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import CartContext from "./context/CartContext"
import "./App.css"

class App extends Component {
  storedCart = localStorage.getItem("cartList")
  state = {
    cartList: this.storedCart ? JSON.parse(this.storedCart) : [],
  }

  componentDidUpdate(_, prevState) {
    if (prevState.cartList !== this.state.cartList) {
      localStorage.setItem("cartList", JSON.stringify(this.state.cartList))
    }
  }

  addCartItem = (product) => {
    this.setState((prevState) => {
      const existingProductIndex = prevState.cartList.findIndex(
        (item) => item.id === product.id
      )

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevState.cartList]
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity:
            updatedCart[existingProductIndex].quantity +
            (product.quantity || 1),
        }

        return { cartList: updatedCart }
      } else {
        return {
          cartList: [
            ...prevState.cartList,
            { ...product, quantity: product.quantity || 1 },
          ],
        }
      }
    })
  }

  deleteCartItem = (productId) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.filter((item) => item.id !== productId),
    }))
  }

  increaseQuantity = (productId) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }))
  }

  decreaseQuantity = (productId) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0),
    }))
  }

  clearCart = () => {
    this.setState({ cartList: [] })
  }

  render() {
    const { cartList } = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          deleteCartItem: this.deleteCartItem,
          increaseQuantity: this.increaseQuantity,
          decreaseQuantity: this.decreaseQuantity,
          clearCart: this.clearCart,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
