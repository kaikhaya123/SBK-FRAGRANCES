
"use client";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import '../styles/navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  
  // Temporary cart data for demonstration
  const cartItems = [
    { id: 1, name: "Alien Goodness", quantity: 1, price: 600 }
  ];
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Reusable cart items component
  const CartItems = ({ className = "" }) => (
    <div className={className}>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center gap-3 mb-3">
          <span className="text-[14px] flex-1">{item.name}</span>
          <span className="text-[14px]">x{item.quantity}</span>
          <span className="text-[14px] font-semibold">R{item.price}</span>
        </div>
      ))}
    </div>
  );
  
  const seasons = [
    { name: "Summer Collection", link: "/collections/summer" },
    { name: "Winter Collection", link: "/collections/winter" },
    { name: "Spring Collection", link: "/collections/spring" },
    { name: "Autumn Collection", link: "/collections/autumn" }
  ];
  return (
    <>
      {/* Logo fixed at top left */}
      <div className="absolute top-4 sm:top-6 left-3 sm:left-8 z-50 select-none pointer-events-auto">
        <a href="/" className="flex items-center">
          <img src="/images/webp/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.webp" alt="SBK Fragrance Logo" className="h-10 sm:h-16 md:h-20 w-auto object-contain" />
        </a>
      </div>
      {/* Mobile Header Icons */}
      <div className="sm:hidden absolute top-4 right-3 z-50 flex items-center gap-2">
        {/* Cart Icon */}
        <button
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-black/90 transition-all"
          aria-label="Cart"
          onClick={() => setShowCart(!showCart)}
        >
          <div className="relative">
            <FiShoppingCart className="w-[22px] h-[22px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-white text-black text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 font-medium">
                {cartCount}
              </span>
            )}
          </div>
          <span className="font-medium">R{cartTotal}</span>
        </button>
        
        {/* Hamburger Menu */}
        <button
          className="flex flex-col items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-lg border border-gray-200"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-black mb-1 rounded" />
          <span className="block w-6 h-0.5 bg-black mb-1 rounded" />
          <span className="block w-6 h-0.5 bg-black rounded" />
        </button>
      </div>

      {/* Mobile Cart Dropdown */}
      <div className={`sm:hidden fixed top-[4.5rem] right-3 z-50 w-[calc(100%-1.5rem)] max-w-sm bg-white/95 backdrop-blur-md rounded-xl shadow-xl transform transition-all duration-300 ${showCart ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="p-5">
          <h3 className="font-bold text-gray-800 mb-3 text-[15px]">Shopping Cart</h3>
          {cartItems.length > 0 ? (
            <>
              <CartItems className="max-h-[180px] overflow-auto mb-4 pr-2" />
              <div className="border-t pt-3">
                <div className="flex justify-between font-bold mb-4">
                  <span className="text-[15px]">Total:</span>
                  <span className="text-[15px]">R{cartTotal}</span>
                </div>
                <a
                  href="/checkout"
                  className="block w-full bg-black text-white text-center py-3.5 rounded-xl hover:bg-gray-800 transition text-[15px] font-medium"
                  onClick={() => setShowCart(false)}
                >
                  View Cart
                </a>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center py-6 text-[15px]">Your cart is empty</p>
          )}
        </div>
      </div>
      {/* Side menu overlay and sidebar only block pointer events when open */}
      <div className={`fixed inset-0 z-40${menuOpen ? '' : ' pointer-events-none'}`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Sidebar */}
        <nav
          className={`fixed top-0 left-0 h-full w-[85%] max-w-[360px] bg-white/95 backdrop-blur-lg z-50 flex flex-col pt-16 px-5 transform transition-transform duration-300
            ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{fontFamily: 'Oswald, Bebas Neue, Montserrat, Arial, sans-serif'}}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-black bg-white/80 rounded-full w-9 h-9 flex items-center justify-center"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)'}}
          >
            &times;
          </button>
          
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-1 mt-4">
            <a href="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              <span className="nav-text">HOME</span>
            </a>
            <a href="/shop" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              <span className="nav-text">SHOP</span>
            </a>
            
            {/* Mobile Collections Dropdown */}
            <div className="relative">
              <button 
                className="mobile-nav-link w-full text-left flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  e.currentTarget.nextElementSibling.classList.toggle('hidden');
                }}
              >
                <span className="nav-text">COLLECTIONS</span>
                <span className="text-xs transform transition-transform duration-300 ml-2">▼</span>
              </button>
              <div className="hidden pl-5 pb-1">
                {seasons.map((season) => (
                  <a
                    key={season.name}
                    href={season.link}
                    className="block py-3 text-gray-700 hover:text-[#4d3222] text-[15px] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {season.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/about" className="text-[17px] font-bold uppercase tracking-[0.18em] py-4 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a href="/contact" className="text-[17px] font-bold uppercase tracking-[0.18em] py-4 hover:text-[#4d3222] transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>

          {/* Mobile Cart Preview */}
          <div className="mt-auto mb-5 bg-gray-100/80 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800 text-[15px]">Shopping Cart</h3>
              <span className="bg-red-500 text-white text-xs px-2.5 py-1 rounded-full">
                {cartCount} items
              </span>
            </div>
            <CartItems className="max-h-[180px] overflow-auto mb-4 pr-2" />
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between font-bold mb-4">
                <span className="text-[15px]">Total:</span>
                <span className="text-[15px]">R{cartTotal}</span>
              </div>
              <a
                href="/checkout"
                className="block w-full bg-black text-white text-center py-3.5 rounded-xl hover:bg-gray-800 transition text-[15px] font-medium"
                onClick={() => setMenuOpen(false)}
              >
                View Cart
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar links centered at the top for desktop, with cart icon on the far right */}
      <div className="hidden sm:flex absolute top-8 left-0 right-0 z-40 w-full max-w-6xl mx-auto flex-row items-center select-none pointer-events-auto">
        <div className="flex-1" />
        <nav className="flex flex-row gap-6 md:gap-10 text-white text-sm md:text-base font-bold uppercase tracking-wider bg-transparent px-6 py-2 rounded-xl justify-center items-center">
          <a href="/" className="hover:text-gray-300 transition-colors duration-300 relative">
            <span className="nav-text">HOME</span>
          </a>
          <a href="/shop" className="hover:text-gray-300 transition-colors duration-300 relative">
            <span className="nav-text">SHOP</span>
          </a>
          <div className="relative group">
            <a href="/collections" className="hover:text-gray-300 transition-colors duration-300 flex items-center">
              <span className="nav-text">COLLECTIONS</span>
              <span className="ml-1 text-xs">▼</span>
            </a>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {seasons.map((season) => (
                <a
                  key={season.name}
                  href={season.link}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm first:rounded-t-lg last:rounded-b-lg transition-colors duration-300"
                >
                  {season.name}
                </a>
              ))}
            </div>
          </div>
          <a href="/about" className="hover:text-gray-300 transition">About</a>
          <a href="/contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
        <div className="flex-1 flex justify-end items-center">
          <div className="relative">
            <button
              onClick={() => setShowCart(!showCart)}
              className="flex items-center justify-center transition duration-200 mr-8"
              aria-label="Cart"
            >
              <FiShoppingCart className="w-7 h-7 text-white hover:text-gray-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Cart Preview Dropdown */}
            {showCart && (
              <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Shopping Cart</h3>
                <CartItems />
                <div className="border-t mt-2 pt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>R{cartTotal}</span>
                  </div>
                  <a
                    href="/checkout"
                    className="block w-full bg-black text-white text-center py-2 rounded-lg mt-3 hover:bg-gray-800 transition"
                  >
                    View Cart
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
