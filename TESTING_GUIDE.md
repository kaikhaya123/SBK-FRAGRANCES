# Testing the Real-Time Cart Implementation

## Quick Start Testing

### Test 1: Add Item to Cart
1. Go to http://localhost:3000/shop
2. Select a fragrance (e.g., "New West")
3. Choose a size (55ml or 100ml)
4. Click "Add to Cart"
5. You should see: "New West (55ml) added to cart!"
6. Notice the cart icon badge now shows "1"

### Test 2: Multiple Items
1. Click another fragrance and add it
2. Cart badge now shows "2"
3. Add the same fragrance but different size
4. Should see "3" in badge (different size = separate item)

### Test 3: View Cart in Checkout
1. Click the cart icon (shopping bag with number)
2. You're taken to /checkout page
3. All items you added are displayed with:
   - Product image
   - Product name
   - Selected size
   - Unit price
   - Quantity buttons
   - Total price for that item
   - Remove button

### Test 4: Cart Persistence
1. Add items to cart
2. Refresh the page (F5 or Cmd+R)
3. Cart items are still there!
4. Navigate to different pages (/shop, /about, etc.)
5. Go back to /checkout
6. Your cart is still intact

### Test 5: Modify Quantities
1. In checkout, find an item
2. Click the "+" button to increase quantity
3. Notice:
   - Item total updates
   - Order summary total updates
4. Click "-" to decrease
5. Quantity cannot go below 1 (removes item instead)

### Test 6: Remove Items
1. In checkout, click "Remove" on an item
2. Item disappears from cart
3. Badge count decreases
4. If all items removed, see "Your cart is empty" message

### Test 7: Continue Shopping
1. In checkout with items, click "Continue Shopping"
2. Returns to /shop page
3. Add more items
4. Go back to checkout - new items are there!

### Test 8: Empty Cart Checkout
1. If cart is empty, checkout page shows friendly message
2. "Next" button is disabled
3. Cannot proceed to shipping/payment steps

## What to Verify

✅ Cart icon shows correct item count
✅ Cart persists after page refresh
✅ Different sizes are separate items
✅ Quantity updates reflect in totals
✅ Remove button works
✅ Can switch between shop and checkout
✅ Empty cart shows proper message
✅ Subtotal calculation is correct
✅ All product details display correctly

## Browser Console Commands

You can also test from browser console:

```javascript
// Check cart contents
JSON.parse(localStorage.getItem('sbk-cart'))

// Clear cart (if needed)
localStorage.removeItem('sbk-cart')

// Check if context is working
// Open checkout and look at cart in sidebar
```

## Expected Results

| Action | Expected Result |
|--------|-----------------|
| Add item | Badge shows +1, alert confirms |
| Refresh page | Cart items persist |
| Add same item different size | Counted as separate item |
| Increase quantity | Total updates immediately |
| Remove item | Item gone, badge count -1 |
| Go to checkout | All items display |
| Continue shopping | Returns to shop, items stay in cart |
| Clear items | Empty state message appears |

## Performance Notes

- Cart loads instantly (from localStorage)
- No lag when adding items
- Badge updates in real-time
- Page transitions are smooth

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Cart not showing items | Check localStorage in DevTools |
| Badge not updating | Refresh page, check console for errors |
| Size not saving | Ensure size is selected before adding |
| Items disappearing | Check browser's private mode isn't clearing storage |

## Files Modified Summary

1. Created `app/context/CartContext.js` - Global cart state
2. Updated `app/layout.js` - Added CartProvider
3. Updated `app/shop/page.js` - Uses global cart
4. Updated `app/checkout/page.js` - Displays real-time cart
5. Updated `app/components/Navbar.js` - Shows cart badge

All changes preserve existing functionality while adding real-time cart features!
