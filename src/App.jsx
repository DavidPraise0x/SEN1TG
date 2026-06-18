import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import BookingForm from './components/BookingForm';
import AboutPage from './components/AboutPage';
import { ArrowDown, Radio, Mail, Heart, Music, Disc, Phone } from 'lucide-react';

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

const DEFAULT_TRACKS = [
  {
    id: 'default-1',
    title: 'DAUGHTER OF EVE',
    album: 'Risk It All (Album)',
    duration: '3:18',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: '/cover_daughter_of_eve.png',
    audiomack: 'https://audiomack.com/godswillasadu/song/daughter-of-eve',
    spotify: 'https://open.spotify.com/artist/2465npzdlzftbttabvjvga',
    apple: 'https://music.apple.com/us/album/risk-it-all-single/1798544974'
  },
  {
    id: 'default-2',
    title: 'WORLD',
    album: 'Out Now On All Platforms',
    duration: '3:45',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: '/cover_world.webp',
    audiomack: 'https://audiomack.com/godswillasadu/song/world',
    spotify: 'https://open.spotify.com/track/0Zz3OfeOJKK2mjKh7T3zUF?si=xCOPKZGBSYCRY2emC5WlxA&context=spotify%3Aplaylist%3A37i9dQZF1E8PbaXj1nQ8nu',
    apple: 'https://music.apple.com/ng/album/world-single/6780094087'
  },
  {
    id: 'default-3',
    title: 'GIVE IT',
    album: 'Single (feat. Atinukebaby)',
    duration: '4:12',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: '/cover_give_it.png',
    audiomack: 'https://audiomack.com/godswillasadu/song/give-it',
    spotify: 'https://open.spotify.com/artist/2465npzdlzftbttabvjvga',
    apple: 'https://music.apple.com/us/artist/sen1tg/1798544976'
  },
  {
    id: 'default-4',
    title: 'THE CHANGE',
    album: 'Single (feat. Non)',
    duration: '3:50',
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    cover: '/cover_the_change.png',
    audiomack: 'https://audiomack.com/godswillasadu/song/the-change',
    spotify: 'https://open.spotify.com/artist/2465npzdlzftbttabvjvga',
    apple: 'https://music.apple.com/us/artist/sen1tg/1798544976'
  },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' or 'about'
  const [tracksList, setTracksList] = useState(() => {
    const saved = localStorage.getItem('sen1tg_tracks') || localStorage.getItem('sent1g_tracks');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map(t => {
          if (t.title === 'WORLD') {
            return { 
              ...t, 
              cover: '/cover_world.webp',
              spotify: 'https://open.spotify.com/track/0Zz3OfeOJKK2mjKh7T3zUF?si=xCOPKZGBSYCRY2emC5WlxA&context=spotify%3Aplaylist%3A37i9dQZF1E8PbaXj1nQ8nu',
              apple: 'https://music.apple.com/ng/album/world-single/6780094087'
            };
          }
          return t;
        });
      } catch (e) {
        console.error("Failed to load tracks from localstorage", e);
      }
    }
    return DEFAULT_TRACKS;
  });
  
  // Preloader states
  const [preloaderActive, setPreloaderActive] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setPreloaderFade(true);
    }, 1800);
    const removeTimer = setTimeout(() => {
      setPreloaderActive(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Sloban Studio Console
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [heroImage, setHeroImage] = useState(() => {
    return localStorage.getItem('sen1tg_hero_image') || localStorage.getItem('sent1g_hero_image') || '/sent1g_hero_abstract.png';
  });
  const [aboutImage, setAboutImage] = useState(() => {
    return localStorage.getItem('sen1tg_about_image') || localStorage.getItem('sent1g_about_image') || '/sent1g_about_photo.jpg';
  });

  const handleSaveStudioData = (updatedTracks, newHero, newAbout) => {
    setTracksList(updatedTracks);
    localStorage.setItem('sen1tg_tracks', JSON.stringify(updatedTracks));
    
    setHeroImage(newHero);
    localStorage.setItem('sen1tg_hero_image', newHero);
    
    setAboutImage(newAbout);
    localStorage.setItem('sen1tg_about_image', newAbout);
  };

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Give react rendering a brief moment to paint
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [activeTab, tracksList]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', background: 'transparent', overflow: 'hidden', minHeight: '100vh' }}>
      
      {preloaderActive && (
        <div className={`preloader-overlay ${preloaderFade ? 'fade-out' : ''}`}>
          <div className="preloader-content">
            <h1 className="preloader-title">SEN1TG</h1>
            <div className="preloader-loader-bar">
              <div className="preloader-fill" />
            </div>
            <div className="preloader-status">ESTABLISHING AUDIO LINK...</div>
          </div>
        </div>
      )}

      {/* Cinematic Film Noise & Gradient Mesh overlays */}
      <div className="noise-overlay" />
      <div className="gradient-mesh-overlay" />



      {/* Floating ambient glow blobs */}
      <div className="ambient-glow-wrapper">
        <div className="ambient-blob blob-1" />
        <div className="ambient-blob blob-2" />
        <div className="ambient-blob blob-3" />
      </div>

      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isConsoleOpen={isConsoleOpen} 
        setIsConsoleOpen={setIsConsoleOpen} 
      />

      {/* Main content viewport */}
      <div className="page-transition-container" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
        {activeTab === 'home' ? (
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="bento-container">
              
              {/* Tile 1: Hero Text & Identity (Spans 3 cols) */}
              <div className="bento-card bento-col-span-3 glass-panel hero-animate-1" style={{ padding: '60px 45px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', textAlign: 'left' }}>
                <span style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  letterSpacing: '4px',
                  color: 'var(--color-cyan)',
                  textTransform: 'uppercase',
                  display: 'block',
                }}>
                  // ARTIST //
                </span>
                
                <h1 style={{
                  fontFamily: 'var(--font-sf-pro)',
                  fontSize: 'calc(3rem + 3vw)',
                  fontWeight: 900,
                  lineHeight: 1.0,
                  color: 'var(--text-primary)',
                  letterSpacing: '-4px',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>
                  SEN1TG
                </h1>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.1rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  maxWidth: '520px',
                  margin: '10px 0 20px',
                }}>
                  Fusing advanced sound design with the raw warmth of African rhythms. A creative visionary crafting structured, high-energy sonic experiences.
                </p>

                <div style={{ display: 'flex', gap: '15px' }} className="hero-buttons">
                  <button
                    onClick={() => handleScrollTo('#music')}
                    className="btn btn-primary"
                  >
                    CATALOG <Radio size={14} />
                  </button>
                  <button
                    onClick={() => handleScrollTo('#bookings')}
                    className="btn btn-secondary"
                  >
                    BOOKINGS <Mail size={14} />
                  </button>
                </div>
              </div>

              {/* Tile 3: Music Catalog Player (Spans 2 cols) */}
              <div id="music" className="bento-card bento-col-span-2 glass-panel reveal reveal-delay-1" style={{ padding: '45px' }}>
                <h2 className="section-title reveal" style={{ fontSize: '1.8rem', marginBottom: '30px', textAlign: 'left' }}>
                  Latest Recordings
                </h2>
                <div className="reveal reveal-delay-2">
                  <AudioPlayer tracksList={tracksList} />
                </div>
              </div>

              {/* Tile 4: Sloban Directory & Connections (Spans 1 col) */}
              <div className="bento-card bento-col-span-1 glass-panel reveal reveal-delay-2" style={{ padding: '45px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'left' }}>
                <div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--color-cyan)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Artist Directory
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sf-pro)', fontWeight: 800, color: 'var(--text-primary)', marginTop: '10px', marginBottom: '15px' }}>
                    SEN1TG Hub
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Active composite audio signals routing out of SLOBAN records. Access social channels, primary streaming archives, and the digital console.
                  </p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                  <a href="https://open.spotify.com/artist/2465npzdlzftbttabvjvga" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '12px', fontSize: '0.65rem', justifyContent: 'flex-start', gap: '10px' }}>
                    <Music size={14} /> SPOTIFY
                  </a>
                  <a href="https://music.apple.com/us/artist/sen1tg/1798544976" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '12px', fontSize: '0.65rem', justifyContent: 'flex-start', gap: '10px' }}>
                    <Radio size={14} /> APPLE MUSIC
                  </a>
                  <a href="https://audiomack.com/godswillasadu" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '12px', fontSize: '0.65rem', justifyContent: 'flex-start', gap: '10px' }}>
                    <Disc size={14} /> AUDIOMACK
                  </a>
                  <a href="https://www.tiktok.com/@the_.vision" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '12px', fontSize: '0.65rem', justifyContent: 'flex-start', gap: '10px' }}>
                    <TiktokIcon size={14} /> TIKTOK (@the_.vision)
                  </a>
                  <a href="https://www.instagram.com/godswill.asadu" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '12px', fontSize: '0.65rem', justifyContent: 'flex-start', gap: '10px' }}>
                    <InstagramIcon size={14} /> INSTAGRAM (@godswill.asadu)
                  </a>
                  <a href="tel:+234706624089" className="btn btn-secondary" style={{ padding: '12px', fontSize: '0.65rem', justifyContent: 'flex-start', gap: '10px', borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}>
                    <Phone size={14} /> +234 706 624 089
                  </a>
                </div>
              </div>

              {/* Tile 5: Booking Form (Spans 3 cols) */}
              <div id="bookings" className="bento-col-span-3 reveal reveal-delay-3" style={{ width: '100%' }}>
                <BookingForm />
              </div>

            </div>
          </div>
        ) : (
          <AboutPage aboutImage={aboutImage} />
        )}
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '60px 20px',
        background: 'var(--bg-secondary)',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Animated Gradient Divider Line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 50%, transparent 100%)',
          opacity: 0.8,
        }} />

        <div className="footer-layout" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 30px',
        }}>
          <button
            onClick={() => handleNavClick ? handleNavClick('home') : setActiveTab('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
            className="footer-brand"
          >
            SEN1TG
          </button>

          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', fontWeight: 500 }}>
            © {new Date().getFullYear()} SEN1TG & SLOBAN RECORDS. ALL RIGHTS RESERVED.
          </span>


        </div>
      </footer>

      {/* CSS Keyframes for Animations */}
      <style>{`
        /* Cinematic film noise grid styling */
        .noise-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.025;
          pointer-events: none;
          z-index: 1000;
        }

        .gradient-mesh-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(at 10% 20%, rgba(0, 229, 255, 0.2) 0px, transparent 55%),
                      radial-gradient(at 90% 10%, rgba(236, 72, 153, 0.18) 0px, transparent 55%),
                      radial-gradient(at 50% 80%, rgba(124, 58, 237, 0.18) 0px, transparent 55%);
          mix-blend-mode: screen;
          z-index: 1;
          pointer-events: none;
        }

        /* Hero particles layout */
        .hero-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--color-gold);
          opacity: 0.15;
          filter: blur(1px);
          animation: float-particle 15s infinite linear;
        }
        .particle-1 { width: 4px; height: 4px; top: 20%; left: 15%; animation-duration: 18s; }
        .particle-2 { width: 6px; height: 6px; top: 60%; left: 80%; animation-duration: 22s; animation-delay: -5s; }
        .particle-3 { width: 3px; height: 3px; top: 75%; left: 25%; animation-duration: 14s; animation-delay: -2s; }
        .particle-4 { width: 5px; height: 5px; top: 35%; left: 70%; animation-duration: 25s; animation-delay: -8s; }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.05;
          }
          50% {
            transform: translateY(-50px) translateX(20px) scale(1.2);
            opacity: 0.25;
          }
          100% {
            transform: translateY(-100px) translateX(0) scale(1);
            opacity: 0;
          }
        }

        /* Staggered entrance animations for hero text */
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-animate-1 {
          opacity: 0;
          animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
        }
        .hero-animate-2 {
          opacity: 0;
          animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.4s;
        }
        .hero-animate-3 {
          opacity: 0;
          animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.6s;
        }
        .hero-animate-4 {
          opacity: 0;
          animation: heroFadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.8s;
        }

        .footer-brand {
          font-family: var(--font-sf-pro);
          font-size: 1.4rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--text-primary);
          text-shadow: 0 0 10px rgba(6, 182, 212, 0);
          transition: var(--transition-smooth);
        }
        .footer-brand:hover {
          text-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
          color: var(--color-cyan);
        }

        @keyframes bounceIndicator {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .hero-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-portrait-frame {
            max-width: 320px;
            margin: 0 auto;
          }
          .footer-layout {
            flex-direction: column !important;
            gap: 15px !important;
            text-align: center;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>



      {/* Sloban Studio Console Drawer Overlay */}
      <div className={`studio-console-overlay ${isConsoleOpen ? 'open' : ''}`}>
        <div className="studio-header">
          <h3 style={{ fontFamily: 'var(--font-accent)', fontWeight: 800, color: 'var(--color-gold)', letterSpacing: '1px', fontSize: '1.05rem', margin: 0 }}>
            SLOBAN STUDIO CONSOLE
          </h3>
          <button 
            onClick={() => setIsConsoleOpen(false)}
            style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '1.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '10px' }}
          >
            ×
          </button>
        </div>
        <div className="studio-content">
          <div style={{ background: 'var(--color-cyan-subtle)', border: '1px solid rgba(6, 182, 212, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold)', display: 'block', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              ⚡ SYSTEM OVERVIEW
            </span>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Welcome back, SEN1TG. Edit your active page assets, song definitions, and streaming URLs. All updates immediately apply and persist in local cache.
            </p>
          </div>

          <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '1.5px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', textTransform: 'uppercase' }}>
            Image System Overlays
          </h4>
          <div className="studio-input-group">
            <label className="studio-input-label">Hero Background Image URL</label>
            <input 
              type="text" 
              className="studio-input" 
              value={heroImage}
              onChange={(e) => setHeroImage(e.target.value)}
              placeholder="/sent1g_hero_abstract.png"
            />
            <span className="studio-input-hint">Default: /sent1g_hero_abstract.png</span>
          </div>
          <div className="studio-input-group">
            <label className="studio-input-label">About Portrait Image URL</label>
            <input 
              type="text" 
              className="studio-input" 
              value={aboutImage}
              onChange={(e) => setAboutImage(e.target.value)}
              placeholder="/sent1g_about_photo.jpg"
            />
            <span className="studio-input-hint">Default: /sent1g_about_photo.jpg</span>
          </div>

          <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '1.5px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginTop: '20px', textTransform: 'uppercase' }}>
            Track Engine Configuration
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tracksList.map((track, index) => (
              <div key={track.id} style={{ border: '1px solid var(--border-solid)', padding: '20px', borderRadius: '8px', background: 'var(--bg-tertiary)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--color-gold)', display: 'block', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  TRACK #{index + 1}: {track.title}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div className="studio-input-group">
                    <label className="studio-input-label">Track Title</label>
                    <input 
                      type="text" 
                      className="studio-input" 
                      value={track.title}
                      onChange={(e) => {
                        const updated = [...tracksList];
                        updated[index].title = e.target.value;
                        setTracksList(updated);
                      }}
                      placeholder="Track Title"
                    />
                  </div>
                  <div className="studio-input-group">
                    <label className="studio-input-label">Album / Project</label>
                    <input 
                      type="text" 
                      className="studio-input" 
                      value={track.album}
                      onChange={(e) => {
                        const updated = [...tracksList];
                        updated[index].album = e.target.value;
                        setTracksList(updated);
                      }}
                      placeholder="Album / Single"
                    />
                  </div>
                  <div className="studio-input-group">
                    <label className="studio-input-label">Audiomack URL</label>
                    <input 
                      type="text" 
                      className="studio-input" 
                      value={track.audiomack || ''}
                      onChange={(e) => {
                        const updated = [...tracksList];
                        updated[index].audiomack = e.target.value;
                        setTracksList(updated);
                      }}
                      placeholder="Audiomack Song link"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            className="studio-btn-save"
            onClick={() => {
              handleSaveStudioData(tracksList, heroImage, aboutImage);
              alert("SLOBAN Studio configuration saved successfully! Rerendering system overlays.");
            }}
          >
            Save Configuration
          </button>
        </div>
      </div>
    </div>
  );
}
