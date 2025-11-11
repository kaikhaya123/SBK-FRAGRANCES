"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FiShoppingCart, FiCreditCard, FiTruck, FiCheck, FiMapPin, FiClock, FiAlertCircle, FiDollarSign } from 'react-icons/fi';
import { SiVisa, SiMastercard } from 'react-icons/si';
import { RiBankLine } from 'react-icons/ri';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [step, setStep] = useState(1);
  const [selectedDelivery, setSelectedDelivery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [selectedCollectionPoint, setSelectedCollectionPoint] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [specialInstructions, setSpecialInstructions] = useState('');

  const provinces = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "North West",
    "Northern Cape",
    "Western Cape"
  ];

  const deliveryOptions = [
    {
      id: 'paxi',
      name: 'Paxi',
      price: 99.00,
      time: '3-5 business days',
      description: 'Collect from your nearest PEP store',
      type: 'collection'
    },
    {
      id: 'courier-guy',
      name: 'The Courier Guy',
      price: 129.00,
      time: '1-2 business days',
      description: 'Door-to-door delivery nationwide',
      type: 'door-to-door'
    },
    {
      id: 'aramex',
      name: 'Aramex',
      price: 149.00,
      time: '1-3 business days',
      description: 'Door-to-door delivery with live tracking',
      type: 'door-to-door'
    },
    {
      id: 'pudo',
      name: 'PUDO',
      price: 89.00,
      time: '2-4 business days',
      description: 'Collect from your nearest PUDO point',
      type: 'collection'
    }
  ];

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Credit/Debit Card',
      description: 'Pay securely with your card',
      icon: FiCreditCard,
      brands: [SiVisa, SiMastercard]
    },
    {
      id: 'eft',
      name: 'Instant EFT',
      description: 'Pay directly from your bank account',
      icon: RiBankLine,
      supported: ['FNB', 'Standard Bank', 'Absa', 'Nedbank', 'Capitec']
    },
    {
      id: 'payfast',
      name: 'PayFast',
      description: 'Fast and secure payment gateway',
      icon: FiDollarSign
    }
  ];

  const findNearestCollectionPoints = (province) => {
    const points = {
      'Gauteng': [
        { id: 'pep-sandton', name: 'PEP Sandton City', address: 'Shop 42, Sandton City Mall' },
        { id: 'pep-rosebank', name: 'PEP Rosebank Mall', address: 'Shop 21, Rosebank Mall' },
        { id: 'pudo-hyde-park', name: 'PUDO Hyde Park', address: 'Hyde Park Corner Shopping Centre' }
      ],
      'Western Cape': [
        { id: 'pep-canal-walk', name: 'PEP Canal Walk', address: 'Shop 156, Canal Walk Shopping Centre' },
        { id: 'pep-waterfront', name: 'PEP V&A Waterfront', address: 'Shop 32, V&A Waterfront' },
        { id: 'pudo-century-city', name: 'PUDO Century City', address: 'Century City Mall' }
      ]
    };
    return points[province] || [];
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = selectedDelivery ? 
      deliveryOptions.find(opt => opt.id === selectedDelivery)?.price || 0 : 0;
    return (subtotal + shipping).toFixed(2);
  };

  function StepIndicator({ number, title, active, completed }) {
    return (
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            completed ? 'bg-green-500 text-white' :
            active ? 'bg-black text-white' :
            'bg-gray-200 text-gray-500'
          }`}
        >
          {completed ? <FiCheck /> : number}
        </div>
        <span className="mt-2 text-sm font-medium">{title}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F5] to-white">
      <div className="text-center pt-8 pb-6">
        <a href="/" className="inline-block" title="Return to Home">
          <img 
            src="/images/webp/Elegant_SBK_Fragrance_Logo_Design-removebg-preview.webp" 
            alt="SBK Fragrance Logo" 
            className="h-16 w-auto mx-auto"
          />
        </a>
      </div>
      <div className="max-w-6xl mx-auto pb-8 px-4">
        <div className="flex justify-center items-center space-x-4 mb-12">
          <StepIndicator number={1} title="Cart" active={step >= 1} completed={step > 1} />
          <div className="h-0.5 w-12 bg-gray-200" />
          <StepIndicator number={2} title="Shipping" active={step >= 2} completed={step > 2} />
          <div className="h-0.5 w-12 bg-gray-200" />
          <StepIndicator number={3} title="Payment" active={step >= 3} completed={step > 3} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {step === 1 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-50">
                <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <FiShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <p className="text-gray-400 text-sm mt-2">Add some fragrances from the shop to get started!</p>
                  </div>
                ) : (
                  <>
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 border-b last:border-b-0">
                        <div className="relative w-24 h-24">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                          <p className="text-gray-600">R{item.price.toFixed(2)}</p>
                          <div className="flex items-center mt-2 gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 border rounded-l hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 border rounded-r hover:bg-gray-100"
                            >
                              +
                            </button>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="ml-4 px-3 py-1 text-red-600 hover:bg-red-50 rounded text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">R{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-50">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Choose Delivery Method</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {deliveryOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedDelivery === option.id
                            ? 'border-black bg-rose-50/50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={(e) => setSelectedDelivery(e.target.value)}
                          className="hidden"
                        />
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 relative bg-gray-50 rounded-lg flex items-center justify-center">
                              {option.type === 'collection' ? (
                                <FiMapPin className="w-6 h-6" />
                              ) : (
                                <FiTruck className="w-6 h-6" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">{option.name}</p>
                              <p className="text-sm text-gray-600">{option.description}</p>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <FiClock className="w-4 h-4 mr-1" />
                                <span>{option.time}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">R{option.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (e.g., 072 123 4567)"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />
                  
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Suburb"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />
                  
                  <input
                    type="text"
                    placeholder="City/Town"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />
                  
                  <select
                    value={selectedProvince}
                    onChange={(e) => {
                      setSelectedProvince(e.target.value);
                      setSelectedCollectionPoint('');
                    }}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  >
                    <option value="">Select Province</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                  />

                  {selectedDelivery && ['paxi', 'pudo'].includes(selectedDelivery) && selectedProvince && (
                    <div className="md:col-span-2 space-y-4">
                      <h4 className="font-medium text-gray-700">Select Collection Point</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {findNearestCollectionPoints(selectedProvince).map((point) => (
                          <label
                            key={point.id}
                            className={`p-3 border rounded-lg cursor-pointer ${
                              selectedCollectionPoint === point.id
                                ? 'border-black bg-rose-50/50'
                                : 'border-gray-200'
                            }`}
                          >
                            <input
                              type="radio"
                              name="collectionPoint"
                              value={point.id}
                              checked={selectedCollectionPoint === point.id}
                              onChange={(e) => setSelectedCollectionPoint(e.target.value)}
                              className="hidden"
                            />
                            <div>
                              <p className="font-medium">{point.name}</p>
                              <p className="text-sm text-gray-600">{point.address}</p>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="md:col-span-2">
                    <textarea
                      placeholder="Special Delivery Instructions (Optional)"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100 h-24 resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-50">
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Choose Payment Method</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {paymentMethods.map((method) => (
                      <label
                        key={method.id}
                        className={`relative flex items-center p-4 border rounded-xl cursor-pointer transition-all duration-200 ${
                          selectedPaymentMethod === method.id
                            ? 'border-black bg-rose-50/50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPaymentMethod === method.id}
                          onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                          className="hidden"
                        />
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 relative bg-gray-50 rounded-lg flex items-center justify-center">
                              <method.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="font-medium">{method.name}</p>
                              <p className="text-sm text-gray-600">{method.description}</p>
                              {method.supported && (
                                <p className="text-xs text-gray-500 mt-1">
                                  Supported banks: {method.supported.join(', ')}
                                </p>
                              )}
                            </div>
                          </div>
                          {method.brands && (
                            <div className="flex space-x-2">
                              {method.brands.map((Brand, index) => (
                                <Brand key={index} className="w-8 h-8 text-gray-400" />
                              ))}
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {selectedPaymentMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Card"
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-rose-100"
                    />
                  </div>
                )}

                {selectedPaymentMethod === 'eft' && (
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">Bank Details</h4>
                      <p className="text-sm text-gray-600">Account Name: SBK Fragrances</p>
                      <p className="text-sm text-gray-600">Bank: FNB</p>
                      <p className="text-sm text-gray-600">Account Number: 1234 5678 9012</p>
                      <p className="text-sm text-gray-600">Branch Code: 250655</p>
                      <p className="text-sm text-gray-600">Reference: Your Order #</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-lg backdrop-filter bg-opacity-50 sticky top-8">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {selectedDelivery
                      ? `R${deliveryOptions.find(opt => opt.id === selectedDelivery)?.price.toFixed(2)}`
                      : '-'}
                  </span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>R{calculateTotal()}</span>
                  </div>
                </div>
                <button
                  onClick={() => setStep(Math.min(step + 1, 3))}
                  className="w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg mt-6 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={(step === 2 && !selectedDelivery) || cart.length === 0}
                >
                  {step === 3 ? 'Place Order' : 'Continue'}
                </button>
                {step === 1 && cart.length > 0 && (
                  <a
                    href="/shop"
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 py-3 rounded-lg mt-2 transition duration-200 block text-center"
                  >
                    Continue Shopping
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}