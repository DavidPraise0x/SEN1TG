import React, { useState } from 'react';
import { Send, Check, AlertTriangle } from 'lucide-react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    eventType: 'Festival',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name or Agency is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Contact Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.date) newErrors.date = 'Event date is required.';
    if (!formData.details.trim()) newErrors.details = 'Offer details are required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        date: '',
        eventType: 'Festival',
        details: '',
      });
    }, 2000);
  };

  return (
    <div 
      className="glass-panel"
      style={{
        padding: '50px 40px',
        maxWidth: '700px',
        margin: '0 auto',
        position: 'relative',
        borderRadius: '18px',
      }}
    >
      {/* Booking Form Header */}
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h3 style={{
          fontFamily: 'var(--font-accent)',
          fontSize: '1.8rem',
          fontWeight: 800,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'var(--text-primary)',
          margin: 0
        }}>
          SECURE BOOKINGS
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.5 }}>
          Submit your proposal or contact directly via phone/WhatsApp at <a href="tel:+234706624089" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 600 }}>+234 706 624 089</a>
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        
        {/* Name / Agency */}
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <label style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            letterSpacing: '2px',
            marginBottom: '8px',
            color: errors.name ? '#ff6b6b' : 'var(--color-gold)',
          }}>
            NAME / AGENCY NAME *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. SLOBAN Booking Dept"
            style={{
              padding: '12px 18px',
              border: errors.name ? '1px solid #ff6b6b' : '1px solid var(--border-color)',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              borderRadius: '6px',
              transition: 'var(--transition-fast)',
            }}
            className="editorial-input"
          />
          {errors.name && (
            <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <AlertTriangle size={12} /> {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <label style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            letterSpacing: '2px',
            marginBottom: '8px',
            color: errors.email ? '#ff6b6b' : 'var(--color-gold)',
          }}>
            CONTACT EMAIL *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. management@sen1tg.com"
            style={{
              padding: '12px 18px',
              border: errors.email ? '1px solid #ff6b6b' : '1px solid var(--border-color)',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              borderRadius: '6px',
              transition: 'var(--transition-fast)',
            }}
            className="editorial-input"
          />
          {errors.email && (
            <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <AlertTriangle size={12} /> {errors.email}
            </span>
          )}
        </div>

        {/* Row: Date & Event Type */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
        }} className="form-row">
          {/* Date */}
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <label style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              letterSpacing: '2px',
              marginBottom: '8px',
              color: errors.date ? '#ff6b6b' : 'var(--color-gold)',
            }}>
              PROPOSED DATE *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{
                padding: '12px 18px',
                border: errors.date ? '1px solid #ff6b6b' : '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'var(--transition-fast)',
              }}
              className="editorial-input date-input"
            />
            {errors.date && (
              <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                <AlertTriangle size={12} /> {errors.date}
              </span>
            )}
          </div>

          {/* Event Type */}
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <label style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              letterSpacing: '2px',
              marginBottom: '8px',
              color: 'var(--color-gold)',
            }}>
              EVENT TYPE
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              style={{
                padding: '12px 18px',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                outline: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                cursor: 'pointer',
                borderRadius: '6px',
                transition: 'var(--transition-fast)',
              }}
              className="editorial-input select-input"
            >
              <option value="Festival" style={{ background: '#1A1A24', color: '#FAFAFA' }}>Festival</option>
              <option value="Club Night" style={{ background: '#1A1A24', color: '#FAFAFA' }}>Club Night</option>
              <option value="Private Concert" style={{ background: '#1A1A24', color: '#FAFAFA' }}>Private Concert</option>
              <option value="Collab / Studio session" style={{ background: '#1A1A24', color: '#FAFAFA' }}>Collab / Studio Session</option>
            </select>
          </div>
        </div>

        {/* Offer Details */}
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
          <label style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            letterSpacing: '2px',
            marginBottom: '8px',
            color: errors.details ? '#ff6b6b' : 'var(--color-gold)',
          }}>
            OFFER DETAILS & VENUE INFO *
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={5}
            placeholder="Please detail budget offer, set lengths, acoustic details, and hospitality preferences..."
            style={{
              padding: '14px 18px',
              border: errors.details ? '1px solid #ff6b6b' : '1px solid var(--border-color)',
              background: 'var(--bg-tertiary)',
              color: 'var(--text-primary)',
              outline: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              resize: 'vertical',
              borderRadius: '6px',
              transition: 'var(--transition-fast)',
              lineHeight: 1.6
            }}
            className="editorial-input"
          />
          {errors.details && (
            <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
              <AlertTriangle size={12} /> {errors.details}
            </span>
          )}
        </div>

        {/* Submit Button */}
        {isSubmitting ? (
          <button
            disabled
            className="btn btn-primary"
            style={{ width: '100%', opacity: 0.8, cursor: 'not-allowed' }}
          >
            <div style={{
              width: '16px',
              height: '16px',
              border: '2px solid rgba(0,0,0,0.15)',
              borderTop: '2px solid var(--color-cyan)',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              marginRight: '12px',
              display: 'inline-block',
              verticalAlign: 'middle',
            }} />
            TRANSMITTING SECURE PROPOSAL...
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            SUBMIT BOOKING REQUEST <Send size={12} />
          </button>
        )}
      </form>

      {/* Success Modal Overlay */}
      {isSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(8, 8, 12, 0.85)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
          <div className="glass-panel" style={{
            width: '100%',
            maxWidth: '500px',
            padding: '45px 35px',
            textAlign: 'center',
            borderRadius: '18px',
            border: '1px solid var(--color-cyan)',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--color-gold-subtle)',
              border: '2px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              color: 'var(--color-gold)',
            }}>
              <Check size={28} />
            </div>
            
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-accent)', marginBottom: '12px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
              PROPOSAL TRANSMITTED
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '35px', lineHeight: 1.6 }}>
              Your electronic booking proposal has been successfully encrypted and dispatched to SEN1TG's management at SLOBAN Records. 
              A coordinator will review dates and follow up via email.
            </p>

            <button
              onClick={() => setIsSuccess(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              DISMISS RECEIPT
            </button>
          </div>
        </div>
      )}

      {/* Keyframe spinner and active hover inputs */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .editorial-input:focus {
          border-color: var(--color-gold) !important;
          box-shadow: 0 0 12px var(--color-gold-glow) !important;
        }
        .date-input::-webkit-calendar-picker-indicator {
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}
