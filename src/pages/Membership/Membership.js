import React, { useState } from 'react';
import { FaArrowLeft, FaCheck, FaDumbbell, FaUserFriends, FaCrown, 
         FaCreditCard, FaPaypal, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Membership.css';

const Membership = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    email: ''
  });

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment processing
    console.log('Payment submitted:', { selectedPlan, paymentMethod, formData });
    alert('Payment processed successfully!');
    setShowModal(false);
  };

  const plans = [
    {
      name: 'Basic',
      price: '29.99',
      duration: 'month',
      icon: <FaDumbbell />,
      color: '#3498db',
      features: [
        'Access to gym facilities',
        'Basic equipment usage',
        'Locker room access',
        'Free water dispenser',
        'Basic fitness assessment'
      ]
    },
    {
      name: 'Premium',
      price: '49.99',
      duration: 'month',
      icon: <FaUserFriends />,
      color: '#e74c3c',
      popular: true,
      features: [
        'All Basic features',
        'Group fitness classes',
        'Personal trainer consultation',
        'Access to spa facilities',
        'Nutrition guidance',
        'Guest passes (2/month)'
      ]
    },
    {
      name: 'Elite',
      price: '89.99',
      duration: 'month',
      icon: <FaCrown />,
      color: '#f1c40f',
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Priority class booking',
        'Private locker',
        'Massage sessions (2/month)',
        'Nutrition plan',
        'Access to all locations'
      ]
    }
  ];

  return (
    <div className="membership-page">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="membership-header">
        <h1>Membership Plans</h1>
        <p>Choose the perfect plan for your fitness journey</p>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`plan-card ${plan.popular ? 'popular' : ''}`}
            style={{ '--plan-color': plan.color }}
            onClick={() => handlePlanSelect(plan)}
          >
            {plan.popular && <div className="popular-tag">Most Popular</div>}
            <div className="plan-icon" style={{ backgroundColor: plan.color }}>
              {plan.icon}
            </div>
            <h2>{plan.name}</h2>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="duration">/{plan.duration}</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheck /> {feature}
                </li>
              ))}
            </ul>
            <button className="select-plan-btn">
              Select Plan
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="payment-modal-overlay">
          <div className="payment-modal">
            <button className="close-modal" onClick={() => setShowModal(false)}>
              <FaTimes />
            </button>
            
            <h2>Complete Your Membership</h2>
            <div className="selected-plan-summary">
              <h3>{selectedPlan.name} Plan</h3>
              <p className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{selectedPlan.price}</span>
                <span className="duration">/{selectedPlan.duration}</span>
              </p>
            </div>

            <div className="payment-methods">
              <button 
                className={`payment-method ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <FaCreditCard /> Credit Card
              </button>
              <button 
                className={`payment-method ${paymentMethod === 'paypal' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <FaPaypal /> PayPal
              </button>
            </div>

            <form onSubmit={handleSubmit} className="payment-form">
              {paymentMethod === 'card' ? (
                <>
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="John Doe"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="form-group">
                  <label>PayPal Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <button type="submit" className="submit-payment">
                Pay ${selectedPlan?.price}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Membership;