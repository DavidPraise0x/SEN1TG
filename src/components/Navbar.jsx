import React, { useState, useEffect } from 'react';
import { Menu, X, Music, Disc, Sliders } from 'lucide-react';

const TiktokIcon = ({ size = 15, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = ({ size = 15, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Navbar({ activeTab, setActiveTab, isConsoleOpen, setIsConsoleOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tabId) => {
    setIsOpen(false);
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveTab('home');
    setTimeout(() => {
      const target = document.querySelector('#bookings');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px',
        transition: 'var(--transition-smooth)',
        background: isScrolled ? 'rgba(10, 10, 15, 0.75)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(6, 182, 212, 0.15)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(24px)' : 'none',
      }}
    >
      {/* Brand Logo */}
      <button
        onClick={() => handleNavClick('home')}
        style={{
          fontFamily: 'var(--font-sf-pro)',
          fontSize: '1.8rem',
          fontWeight: 800,
          letterSpacing: '1px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-primary)',
        }}
      >
        SEN1TG
      </button>

      {/* Desktop Navigation Link Menu */}
      <ul
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          listStyle: 'none',
        }}
        className="desktop-menu"
      >
        <li>
          <button
            onClick={() => handleNavClick('home')}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'home' ? 'var(--color-cyan)' : 'var(--text-secondary)',
            }}
            className="nav-item-btn"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick('about')}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'about' ? 'var(--color-cyan)' : 'var(--text-secondary)',
            }}
            className="nav-item-btn"
          >
            About Me
          </button>
        </li>
        <li>
          <a
            href="#bookings"
            onClick={handleContactClick}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--text-secondary)',
            }}
            className="nav-item-btn"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Social Icons (Right Aligned) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
        }}
        className="social-icons"
      >
        <a href="https://open.spotify.com/artist/2465npzdlzftbttabvjvga?si=15nuvl1arjmh-sribikzgq" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Spotify">
          <Music size={15} />
        </a>
        <a href="https://www.instagram.com/godswill.asadu" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
          <InstagramIcon size={15} />
        </a>
        <a href="https://audiomack.com/godswillasadu" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Audiomack">
          <Disc size={15} />
        </a>
        <a href="https://www.tiktok.com/@the_.vision" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="TikTok">
          <TiktokIcon size={15} />
        </a>
        <button 
          onClick={() => setIsConsoleOpen(!isConsoleOpen)} 
          className="social-icon-btn" 
          style={{ 
            background: isConsoleOpen ? 'var(--color-cyan)' : 'rgba(255,255,255,0.03)', 
            color: isConsoleOpen ? '#0A0A0F' : 'var(--text-secondary)',
            border: isConsoleOpen ? '1px solid var(--color-cyan)' : '1px solid var(--border-color)'
          }}
          title="Sloban Studio Console"
        >
          <Sliders size={15} />
        </button>
        
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay Menu */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '90px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 90px)',
            background: 'rgba(8, 8, 12, 0.92)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '35px',
            zIndex: 99,
          }}
        >
          <button
            onClick={() => handleNavClick('home')}
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '2rem',
              fontWeight: 800,
              background: 'none',
              border: 'none',
              color: activeTab === 'home' ? 'var(--color-cyan)' : 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick('about')}
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '2rem',
              fontWeight: 800,
              background: 'none',
              border: 'none',
              color: activeTab === 'about' ? 'var(--color-cyan)' : 'var(--text-primary)',
              cursor: 'pointer',
            }}
          >
            ABOUT ME
          </button>
          <a
            href="#bookings"
            onClick={handleContactClick}
            style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
            }}
          >
            CONTACT
          </a>

          <div style={{ display: 'flex', gap: '30px', marginTop: '20px', alignItems: 'center' }}>
            <a href="https://open.spotify.com/artist/2465npzdlzftbttabvjvga?si=15nuvl1arjmh-sribikzgq" target="_blank" rel="noopener noreferrer" title="Spotify"><Music size={22} style={{ color: 'var(--text-secondary)' }} /></a>
            <a href="https://www.instagram.com/godswill.asadu" target="_blank" rel="noopener noreferrer" title="Instagram"><InstagramIcon size={22} style={{ color: 'var(--text-secondary)' }} /></a>
            <a href="https://audiomack.com/godswillasadu" target="_blank" rel="noopener noreferrer" title="Audiomack"><Disc size={22} style={{ color: 'var(--text-secondary)' }} /></a>
            <a href="https://www.tiktok.com/@the_.vision" target="_blank" rel="noopener noreferrer" title="TikTok"><TiktokIcon size={22} style={{ color: 'var(--text-secondary)' }} /></a>
            <button 
              onClick={() => {
                setIsOpen(false);
                setIsConsoleOpen(!isConsoleOpen);
              }}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              title="Sloban Studio Console"
            >
              <Sliders size={22} style={{ color: isConsoleOpen ? 'var(--color-cyan)' : 'var(--text-secondary)' }} />
            </button>
          </div>
        </div>
      )}

      {/* Styled Inline CSS for Navbar Hover effects */}
      <style>{`
        .nav-item-btn {
          position: relative;
          padding: 8px 0;
          transition: var(--transition-fast);
        }
        .nav-item-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--color-cyan);
          transition: var(--transition-smooth);
          transform: translateX(-50%);
        }
        .nav-item-btn:hover {
          color: var(--color-cyan) !important;
        }
        .nav-item-btn:hover::after {
          width: 100%;
        }
        .social-icon-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          transition: var(--transition-smooth);
        }
        .social-icon-btn:hover {
          color: #0A0A0F;
          background: var(--color-cyan);
          border-color: var(--color-cyan);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px var(--color-cyan-glow);
        }
        
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .social-icons .social-icon-btn {
            display: none !important;
          }
          nav {
            padding: 0 24px !important;
            height: 80px !important;
          }
        }
      `}</style>
    </nav>
  );
}
