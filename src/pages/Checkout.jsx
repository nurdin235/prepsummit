import { useState } from 'react';

export default function Checkout({ signupData, onCheckoutComplete, selectedCourse, onBack }) {
  const [selectedPlan, setSelectedPlan] = useState('monthly'); // 'monthly' vs 'twoweek'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' vs 'paypal'
  const [couponCode, setCouponCode] = useState('');
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiryMonth: 'Month',
    expiryYear: 'Year',
    cvc: ''
  });

  const getRenewalDateStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 14);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  const handleJoin = (e) => {
    if (e) e.preventDefault();
    if (paymentMethod === 'card') {
      if (!cardDetails.number || cardDetails.expiryMonth === 'Month' || cardDetails.expiryYear === 'Year' || !cardDetails.cvc) {
        alert("Please enter all required credit card credentials.");
        return;
      }
    }
    const planText = selectedPlan === 'monthly' ? '$59.99/mo Monthly Plan' : '$39.99 Two-Week Pass';
    onCheckoutComplete(planText);
  };

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const years = Array.from({ length: 11 }, (_, i) => String(2026 + i));

  // Determine course name to display
  const courseTitle = selectedCourse?.title || "FTCE Test Prep";

  return (
    <div style={{
      backgroundColor: '#f4f6f8',
      minHeight: '100vh',
      fontFamily: 'var(--font-body)',
      padding: '40px 16px 80px 16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      
      {/* Inline styles for custom mobile compliance */}
      <style>{`
        @media (max-width: 768px) {
          .checkout-grid-layout {
            flex-direction: column !important;
            align-items: center !important;
            gap: 32px !important;
          }
          .checkout-left-col {
            max-width: 100% !important;
            width: 100% !important;
          }
          .checkout-right-col {
            max-width: 100% !important;
            width: 100% !important;
            order: -1; /* Display plan summary card on top of forms on mobile */
            padding-bottom: 24px;
            border-bottom: 1.5px dashed #cbd5e1;
            margin-bottom: 12px;
          }
          .grid-2-mobile-stack {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .payment-toggle-container {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .zip-input-mobile-full {
            width: 100% !important;
          }
        }
      `}</style>

      <div className="checkout-grid-layout" style={{
        maxWidth: '1080px',
        width: '100%',
        display: 'flex',
        gap: '40px',
        justifyContent: 'center'
      }}>
        
        {/* Left Column: Payment Details */}
        <div className="checkout-left-col" style={{
          flex: '1 1 600px',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          
          <div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '700',
              color: '#333333',
              margin: '0 0 10px 0',
              lineHeight: '1.25'
            }}>
              Last step! To create your account, enter your payment info below.
            </h2>
            <p style={{
              fontSize: '0.98rem',
              color: '#16a34a',
              fontWeight: '600',
              margin: 0
            }}>
              Don't worry, we'll email you right away with all the details.
            </p>
          </div>

          {/* Guidelines Bullet points */}
          <ul style={{
            margin: 0,
            paddingLeft: '20px',
            color: '#4a5568',
            fontSize: '0.92rem',
            lineHeight: '1.6',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            <li>You are free to cancel online, anytime, with just a few simple clicks</li>
            <li>And if you have any questions, you can reach out anytime</li>
          </ul>

          {/* Payment Method Selector Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#4a5568' }}>
              Choose your payment option below
            </span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("We ask for billing details to prevent service gaps and verify authorized usage for your risk-free study trial. You will not be charged if you cancel before the trial period ends."); }}
              style={{ fontSize: '0.88rem', color: '#00829a', textDecoration: 'underline' }}
            >
              Why do I need to enter my payment info?
            </a>

            {/* Credit Card / PayPal Toggle Boxes */}
            <div className="payment-toggle-container" style={{
              display: 'flex',
              gap: '16px',
              marginTop: '8px'
            }}>
              
              {/* Credit Card Box */}
              <div 
                onClick={() => setPaymentMethod('card')}
                style={{
                  flex: 1,
                  border: '1.5px solid #ccd6e0',
                  borderRadius: '4px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  backgroundColor: paymentMethod === 'card' ? '#eef6f8' : '#ffffff',
                  borderColor: paymentMethod === 'card' ? '#00829a' : '#ccd6e0',
                  transition: 'all 0.15s'
                }}
              >
                <input 
                  type="radio" 
                  checked={paymentMethod === 'card'} 
                  onChange={() => setPaymentMethod('card')}
                  style={{ width: '18px', height: '18px', accentColor: '#00829a', cursor: 'pointer' }}
                />
                <span style={{ fontWeight: '700', color: '#2d3748', fontSize: '0.95rem' }}>Credit Card</span>
              </div>

              {/* PayPal Box */}
              <div 
                onClick={() => setPaymentMethod('paypal')}
                style={{
                  flex: 1,
                  border: '1.5px solid #ccd6e0',
                  borderRadius: '4px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  backgroundColor: paymentMethod === 'paypal' ? '#eef6f8' : '#ffffff',
                  borderColor: paymentMethod === 'paypal' ? '#00829a' : '#ccd6e0',
                  transition: 'all 0.15s'
                }}
              >
                <input 
                  type="radio" 
                  checked={paymentMethod === 'paypal'} 
                  onChange={() => setPaymentMethod('paypal')}
                  style={{ width: '18px', height: '18px', accentColor: '#00829a', cursor: 'pointer' }}
                />
                {/* PayPal Styled Text Logo */}
                <span style={{ fontStyle: 'italic', fontWeight: '900', color: '#003087', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
                  Pay<span style={{ color: '#0079C1' }}>Pal</span>
                </span>
              </div>

            </div>
          </div>

          {/* Form Area */}
          {paymentMethod === 'card' ? (
            <form onSubmit={handleJoin} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              
              {/* Card Number Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1f4e5a' }}>Card Number</label>
                  <span 
                    onClick={() => setShowCouponInput(!showCouponInput)}
                    style={{ fontSize: '0.85rem', color: '#00829a', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Have a Coupon Code?
                  </span>
                </div>
                
                {showCouponInput && (
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                    <input 
                      type="text" 
                      placeholder="Enter Coupon Code"
                      value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        border: '1.5px solid #ccd6e0',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    <button 
                      type="button" 
                      onClick={() => alert("Coupon code applied successfully!")}
                      style={{
                        backgroundColor: '#00829a',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0 16px',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      Apply
                    </button>
                  </div>
                )}

                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <input 
                    type="text" 
                    placeholder="Credit Card Number"
                    value={cardDetails.number}
                    onChange={e => setCardDetails({ ...cardDetails, number: e.target.value })}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 130px 12px 16px',
                      border: '1.5px solid #ccd6e0',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      color: '#222222'
                    }}
                    className="input-focus-effect"
                  />
                  {/* Card logos */}
                  <div style={{
                    position: 'absolute',
                    right: '12px',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '9px', padding: '1.5px 3px', border: '1px solid #ccd6e0', borderRadius: '2px', fontWeight: '800', color: '#1A1F71', backgroundColor: '#ffffff' }}>VISA</span>
                    <span style={{ fontSize: '9px', padding: '1.5px 3px', border: '1px solid #ccd6e0', borderRadius: '2px', fontWeight: '800', color: '#EB001B', backgroundColor: '#ffffff' }}>MC</span>
                    <span style={{ fontSize: '9px', padding: '1.5px 3px', border: '1px solid #ccd6e0', borderRadius: '2px', fontWeight: '800', color: '#0173B2', backgroundColor: '#ffffff' }}>AMEX</span>
                    <span style={{ fontSize: '9px', padding: '1.5px 3px', border: '1px solid #ccd6e0', borderRadius: '2px', fontWeight: '800', color: '#FF5F00', backgroundColor: '#ffffff' }}>DISC</span>
                  </div>
                </div>
              </div>

              {/* Expiry and CVC Row */}
              <div className="grid-2-mobile-stack" style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '16px'
              }}>
                
                {/* Expiry selectors */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1f4e5a' }}>Expiration</label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <select
                      value={cardDetails.expiryMonth}
                      onChange={e => setCardDetails({ ...cardDetails, expiryMonth: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        border: '1.5px solid #ccd6e0',
                        borderRadius: '4px',
                        fontSize: '0.95rem',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                        outline: 'none'
                      }}
                    >
                      <option disabled>Month</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select
                      value={cardDetails.expiryYear}
                      onChange={e => setCardDetails({ ...cardDetails, expiryYear: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        border: '1.5px solid #ccd6e0',
                        borderRadius: '4px',
                        fontSize: '0.95rem',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                        outline: 'none'
                      }}
                    >
                      <option disabled>Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>

                {/* CVC Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: '700', color: '#1f4e5a' }}>CVC</label>
                    <svg 
                      onClick={() => alert("The CVC (Card Verification Code) is the 3-digit number printed on the back of VISA/MC cards, or the 4-digit code on the front of AMEX cards.")}
                      width="13" 
                      height="13" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#4a5568" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      style={{ cursor: 'pointer', opacity: 0.8 }}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    placeholder="CVC"
                    value={cardDetails.cvc}
                    onChange={e => setCardDetails({ ...cardDetails, cvc: e.target.value })}
                    required
                    maxLength="4"
                    style={{
                      padding: '12px 16px',
                      border: '1.5px solid #ccd6e0',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      color: '#222222'
                    }}
                    className="input-focus-effect"
                  />
                </div>

              </div>

              {/* Consent Text */}
              <p style={{
                fontSize: '0.82rem',
                color: '#718096',
                lineHeight: '1.5',
                margin: '8px 0 0 0'
              }}>
                By creating an account, you agree to Study.com's <a href="#" style={{ color: '#00829a', textDecoration: 'underline' }}>Terms of Use</a> and <a href="#" style={{ color: '#00829a', textDecoration: 'underline' }}>Privacy Policy</a>.
              </p>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(to bottom, #22c55e, #16a34a)',
                    border: 'none',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1.15rem',
                    padding: '12px 48px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(22, 163, 74, 0.2)',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseOver={e => e.target.style.opacity = '0.9'}
                  onMouseOut={e => e.target.style.opacity = '1'}
                >
                  Join Now
                </button>
              </div>

            </form>
          ) : (
            /* PayPal Checkout Container */
            <div style={{
              backgroundColor: '#ffffff',
              border: '1.5px dashed #ccd6e0',
              borderRadius: '6px',
              padding: '40px 24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px'
            }}>
              <p style={{ color: '#4a5568', fontSize: '0.95rem', margin: 0 }}>
                Click below to complete authorization securely using PayPal.
              </p>
              <button 
                onClick={handleJoin}
                style={{
                  backgroundColor: '#ffc439',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '12px 36px',
                  cursor: 'pointer',
                  fontStyle: 'italic',
                  fontWeight: '900',
                  fontSize: '1.1rem',
                  color: '#003087',
                  boxShadow: '0 3px 6px rgba(0,0,0,0.06)'
                }}
              >
                Pay<span style={{ color: '#0079C1' }}>Pal</span> Checkout
              </button>
            </div>
          )}

          {/* Back button */}
          <div>
            <span
              onClick={onBack}
              style={{
                color: '#00829a',
                fontSize: '0.9rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              back
            </span>
          </div>

        </div>

        {/* Right Column: Selected Plan Card & 92% pass badge */}
        <div className="checkout-right-col" style={{
          flex: '0 0 350px',
          maxWidth: '350px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          
          {/* Plan selection card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            
            <div>
              <span style={{
                fontSize: '0.78rem',
                fontWeight: '700',
                color: '#718096',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Your Selected Plan
              </span>
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: '700',
                color: '#1f4e5a',
                margin: '4px 0 0 0'
              }}>
                {courseTitle}
              </h3>
            </div>

            {/* Money back guarantee */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#16a34a',
              fontSize: '0.88rem',
              fontWeight: '700'
            }}>
              <span>30-day money back guarantee</span>
              <svg 
                onClick={() => alert("Try our service for 30 days risk-free. If it isn't for you, get a full refund. No hassles.")}
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#16a34a" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ cursor: 'pointer', opacity: 0.9 }}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>

            {/* Radio inputs for pricing */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* Option 1: Monthly */}
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                padding: '12px',
                border: '1.5px solid #ccd6e0',
                borderRadius: '4px',
                backgroundColor: selectedPlan === 'monthly' ? '#eef6f8' : 'transparent',
                borderColor: selectedPlan === 'monthly' ? '#00829a' : '#ccd6e0',
                transition: 'all 0.15s'
              }}>
                <input 
                  type="radio"
                  name="studyPlan"
                  checked={selectedPlan === 'monthly'}
                  onChange={() => setSelectedPlan('monthly')}
                  style={{
                    width: '16px',
                    height: '16px',
                    accentColor: '#00829a',
                    marginTop: '3px',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#2d3748' }}>Monthly access</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#2d3748' }}>$59.99<span style={{ fontSize: '0.75rem', fontWeight: '500', color: '#718096' }}>/mo</span></span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#718096', fontStyle: 'italic', marginTop: '2px' }}>
                    Just $2.00/day (+ tax if applicable)
                  </div>
                </div>
              </label>

              {/* Option 2: 2-Week access */}
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                cursor: 'pointer',
                padding: '12px',
                border: '1.5px solid #ccd6e0',
                borderRadius: '4px',
                backgroundColor: selectedPlan === 'twoweek' ? '#eef6f8' : 'transparent',
                borderColor: selectedPlan === 'twoweek' ? '#00829a' : '#ccd6e0',
                transition: 'all 0.15s'
              }}>
                <input 
                  type="radio"
                  name="studyPlan"
                  checked={selectedPlan === 'twoweek'}
                  onChange={() => setSelectedPlan('twoweek')}
                  style={{
                    width: '16px',
                    height: '16px',
                    accentColor: '#00829a',
                    marginTop: '3px',
                    cursor: 'pointer'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#2d3748' }}>Two week access</span>
                    <span style={{ fontSize: '0.92rem', fontWeight: '700', color: '#2d3748' }}>$39.99</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#718096', marginTop: '2px' }}>
                    Renews on {getRenewalDateStr()} for $59.99/mo
                  </div>
                </div>
              </label>

            </div>

          </div>

          {/* 92% passed telemetry badge */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '6px',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#00829a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.15rem',
              fontWeight: '800',
              color: '#ffffff',
              flexShrink: 0
            }}>
              92%
            </div>
            <div>
              <p style={{
                fontSize: '0.88rem',
                lineHeight: '1.4',
                color: '#4a5568',
                margin: 0
              }}>
                of students <strong style={{ color: '#e15b3e', fontWeight: '700' }}>passed their exam</strong> after using PrepSummit.com*
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
