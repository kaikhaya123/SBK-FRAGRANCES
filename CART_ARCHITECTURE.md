# Shopping Cart Architecture

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      App Layout (Root)                          │
│                  [CartProvider Wrapper]                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
        ┌───────▼────────┐ ┌──▼───────────┐ ┌──▼──────────────┐
        │  Navbar        │ │ Shop Page    │ │ Checkout Page  │
        ├────────────────┤ ├──────────────┤ ├────────────────┤
        │ - Cart Badge   │ │ - Products   │ │ - Cart Display │
        │ - Item Count   │ │ - Add To Cart│ │ - Checkout     │
        └────────────────┘ └──────────────┘ └────────────────┘
            │                  │                   │
            │                  │                   │
            └──────────────────┴───────────────────┘
                              │
                ┌─────────────▼──────────────┐
                │   CartContext             │
                ├──────────────────────────┤
                │  Global State:           │
                │  - cart: CartItem[]      │
                │                          │
                │  Functions:              │
                │  - addToCart()           │
                │  - removeFromCart()      │
                │  - updateQuantity()      │
                │  - getCartTotal()        │
                │  - getCartItemCount()    │
                │  - clearCart()           │
                └─────────────┬────────────┘
                              │
                ┌─────────────▼──────────────┐
                │  Local Storage            │
                ├──────────────────────────┤
                │  Key: 'sbk-cart'         │
                │  Persists cart items     │
                │  across sessions         │
                └──────────────────────────┘
```

## Data Flow

### Adding an Item to Cart
```
User clicks "Add to Cart"
         │
         ▼
handleAddToCart(fragrance)
         │
         ├─ Get selected size
         │
         ├─ Call addToCart(fragrance, size)
         │
         ▼
CartContext.addToCart()
         │
         ├─ Check if item exists
         │  (by fragranceId + size)
         │
         ├─ If exists: Increment quantity
         │ If not: Add new item
         │
         ▼
setCart(newCart)
         │
         ├─ Update React state
         │
         ├─ Save to localStorage
         │
         ▼
All components using useCart()
re-render with updated data
         │
         ├─ Navbar: Badge updates
         ├─ Checkout: Display updates
         │
         ▼
User sees changes in real-time
```

### Component Dependency Tree

```
layout.js
    └─ CartProvider
         ├─ ClientLayout
         │   ├─ Navbar (uses useCart)
         │   ├─ Main Content
         │   │   ├─ shop/page.js (uses useCart)
         │   │   ├─ checkout/page.js (uses useCart)
         │   │   └─ [other pages]
         │   └─ Footer
         └─ [All child components have cart access]
```

## State Management Pattern

### Without Context (Old):
```
Shop Page             Checkout Page
  [local state]         [local state]
     │                      │
     └─► Data NOT shared ◄──┘
  Cart items not visible in checkout
```

### With Context (New):
```
Shop Page          CartContext           Checkout Page
  │                    │                      │
  ├─ addToCart() ─────→ │ ←─ Get cart data ──┤
  │                    │  ←─ localStorage ───┤
  └─ Updates ─────────→ │ ←─ Real-time ──────┤
                        │
                   [Global State]
                   [Persistent]
```

## Key Features Breakdown

### 1. Real-Time Synchronization
- ✅ Context provides single source of truth
- ✅ All components subscribe to same state
- ✅ Changes trigger immediate re-renders

### 2. Persistence
- ✅ localStorage saves cart automatically
- ✅ Cart survives page refreshes
- ✅ Cart survives browser restart

### 3. Size Differentiation
- ✅ Same fragrance in different sizes = separate items
- ✅ CartItem ID = `${fragranceId}-${size}`
- ✅ Prevents accidental quantity mixing

### 4. Scalability
- ✅ Easy to add more cart operations
- ✅ Context can be extended with discounts
- ✅ Can be connected to backend API

## Integration Points

### With Navbar:
```javascript
const { getCartItemCount } = useCart();
// Shows badge with count
```

### With Shop Page:
```javascript
const { addToCart } = useCart();
// Adds products to cart
```

### With Checkout Page:
```javascript
const { cart, updateQuantity, removeFromCart } = useCart();
// Displays and manages cart items
```

## Future Integration Ideas

1. **Backend Integration**
   ```javascript
   // Save cart to user profile
   await saveCartToBackend(cart);
   ```

2. **Analytics**
   ```javascript
   // Track cart events
   trackEvent('item_added', { productId, size, quantity });
   ```

3. **Recommendations**
   ```javascript
   // Show similar products
   const recommendations = getRecommendations(cart);
   ```

4. **Abandoned Cart Recovery**
   ```javascript
   // Email reminder for abandoned carts
   scheduleAbandonedCartEmail(cart, userEmail);
   ```
