# NextTrendz - E-commerce Shopping App

A modern e-commerce application built with React and Context API as part of the NxtWave training program. This project demonstrates advanced React concepts including state management, cart functionality, and user authentication.

## Features

- **User Authentication**: Secure login and logout functionality
- **Product Catalog**: Browse through a variety of products with detailed views
- **Shopping Cart Management**:
  - Add items to cart
  - Remove items from cart
  - Increase/decrease item quantities
  - Real-time cart updates
- **Responsive Design**: Optimized for desktop and mobile devices
- **Context API Integration**: Efficient state management across components
- **Protected Routes**: Secure pages that require authentication

## Technologies Used

- **Frontend**: React.js
- **State Management**: React Context API
- **Styling**: CSS3
- **Build Tool**: Vite
- **Authentication**: JWT tokens
- **Routing**: React Router DOM

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Karthikanegouni/NxtTrendz
cd NxtTrendz
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Cart Context Implementation

The application uses React Context API to manage cart state globally:

### CartContext Features:

- **addCartItem()**: Adds new items to the cart
- **deleteCartItem()**: Removes items from the cart
- **increaseQuantity()**: Increases item quantity
- **decreaseQuantity()**: Decreases item quantity
<!-- - **removeAllCartItems()**: Clears the entire cart -->

### Context Usage:

```javascript
// Accessing cart context in components
const {
  cartList,
  addCartItem,
  removeCartItem,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} = useContext(CartContext)
```

## Authentication Flow

1. Users must log in to access protected routes
2. JWT tokens are stored as Cookies
3. Protected routes redirect to login if not authenticated
4. Cart data persists in LocalStorage

## Key Components

### Products Component

- Displays all available products
- Implements product filtering and sorting
- Integrates with cart context for adding items

### Cart Component

- Shows all cart items with quantities
- Provides quantity controls (increase/decrease)
- Remove item functionality

### Product Item Details

- Detailed view of individual products
- Add to cart with quantity selection
- Product specifications and images

## Deployment

The application can be deployed using:

1. **Netlify**:

```bash
npm run build
# Deploy the build folder to Netlify
```

2. **Vercel**:

```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

## 📈 Learning Outcomes

This project demonstrates proficiency in:

- **Context API**: Global state management
- **Component Architecture**: Reusable and maintainable components
- **Routing**: Protected routes and navigation
- **Local Storage**: Data persistence
- **API Integration**: Fetching and managing data
- **Responsive Web Design**: Cross-device compatibility

## Future Enhancements

- Payment gateway integration
- User profile management
- Order history tracking
- Product reviews
- Wishlist functionality

## 🤝 Contributing

This is a learning project built during NxtWave training. Contributions and suggestions are welcome!

**Skills Demonstrated**:

React.js | Context API | JWT Authentication | JavaScript | CSS3 | Responsive Design | State Management

---

⭐ **Star this repository if you found it helpful for your React learning journey!**
