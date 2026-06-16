import React from 'react';
import { Cpu, Activity, Zap, ShieldAlert } from 'lucide-react';

export default function AboutPage({ aboutImage }) {
  const musicHighlights = [
    {
      icon: <Cpu size={24} className="text-gold" />,
      title: "SONIC SYNTHESIS",
      desc: "Crafting custom synthesizer patches and rich analog textures that define the unique SLOBAN sonic imprint."
    },
    {
      icon: <Activity size={24} className="text-gold" />,
      title: "RHYTHM MODULATION",
      desc: "Engineering deep, driving percussion loops and complex syncopated grooves that anchor the tracks."
    },
    {
      icon: <Zap size={24} className="text-gold" />,
      title: "SIGNAL DYNAMICS",
      desc: "Designing balanced transient responses and clear frequency spectrums for high-impact club playback."
    },
    {
      icon: <ShieldAlert size={24} className="text-gold" />,
      title: "PRODUCTION DESIGN",
      desc: "Directing creative arrangements and vocal engineering to shape immersive and cinematic sonic environments."
    }
  ];

  return (
    <div style={{
      padding: '140px 0 80px',
      background: 'transparent',
      color: 'var(--text-primary)',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            fontSize: '0.8rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '5px',
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            fontWeight: 700,
            display: 'block',
            marginBottom: '10px'
          }}>
            THE BIOGRAPHY ARCHIVE
          </span>
          <h1 style={{
            fontSize: '3.5rem',
            fontFamily: 'var(--font-accent)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
          }}>
            Godswill Asadu <span style={{ fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 300 }}>AKA</span> SEN1TG
          </h1>
          <div style={{
            width: '60px',
            height: '2px',
            background: 'var(--color-gold)',
            margin: '25px auto 0',
          }} />
        </div>

        {/* Profile Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '80px',
        }} className="about-grid">
          
          {/* Left: Fashion Editorial Portrait */}
          <div style={{ position: 'relative' }} className="about-image-column reveal">
            <div className="glass-panel" style={{
              padding: '16px',
              borderRadius: '18px',
            }}>
              <img
                src={aboutImage || "/sent1g_about_abstract.png"}
                alt="SEN1TG abstract sonic geometry"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '6px',
                  filter: 'brightness(102%)',
                  transition: 'var(--transition-smooth)'
                }}
                className="about-portrait"
              />
            </div>
            {/* Minimal subtitle label underneath portrait */}
            <div style={{
              marginTop: '20px',
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
            }}>
              SEN1TG — Abstract Sonic Architecture.
            </div>
          </div>

          {/* Right: Biographical text columns */}
          <div 
            style={{ 
              textAlign: 'left', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '25px',
              padding: '40px',
              background: 'rgba(13, 12, 26, 0.85)',
              backdropFilter: 'blur(30px) saturate(180%)',
              WebkitBackdropFilter: 'blur(30px) saturate(180%)',
              border: '2px solid rgba(255, 255, 255, 0.18)',
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
            }} 
            className="about-text-column glass-panel reveal reveal-delay-1"
          >
            
            <h2 style={{
              fontSize: '2rem',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.3,
              color: 'var(--text-primary)',
            }}>
              Bridging the gap between <span style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>synthesized soundscapes</span> and Afro-fusion rhythms.
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#E2E2E9', lineHeight: '1.8' }}>
              Born in Nsukka LGA, Enugu State, Nigeria, <strong>Asadu Godswill Chijioke</strong> (popularly known as <strong>SEN1TG</strong>) 
              represents a new breed of African artists who blend academic technical logic with deep musical soul. 
              Growing up in the historic university town of Nsukka, he was surrounded by rich cultural folklore and emerging highlife/afrobeats scenes.
            </p>

            {/* Blockquote callout */}
            <blockquote style={{
              borderLeft: '3px solid var(--color-gold)',
              paddingLeft: '24px',
              margin: '15px 0',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: 'var(--text-primary)',
              lineHeight: '1.6',
            }}>
              "Music is just signals, current, and code. But the groove? The groove is spiritual. I want to build a bridge between precision and the warmth of the drum."
            </blockquote>

            <p style={{ fontSize: '1.05rem', color: '#E2E2E9', lineHeight: '1.8' }}>
              A graduate from the prestigious <strong>University of Nigeria, Nsukka (UNN)</strong>, 
              Godswill applies a structured, analytical mind to his creative process. 
              This structured discipline allows him to craft intricate synth textures and clean, heavy-hitting drum patterns that give his production its signature crisp texture.
            </p>

            <p style={{ fontSize: '1.05rem', color: '#E2E2E9', lineHeight: '1.8' }}>
              Operating under the indie record label <strong>SLOBAN</strong>, SEN1TG's breakout project includes the single <em>"Daughter of Eve"</em>, 
              which gained quick traction on Spotify, Boomplay, and Audiomack for its moody vocal harmonies and rich African rhythmic drive. 
              This was accompanied by his debut project, the <em>Risk It All</em> album, showcasing a versatility spanning traditional 
              Afrobeats, ambient Afro-fusion, and electronic experiments.
            </p>

            {/* Details Table */}
            <div 
              style={{
                marginTop: '20px',
                padding: '25px',
                borderRadius: '12px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }} 
              className="details-subgrid"
            >
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#A1A1B2', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                  ORIGIN
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)' }}>
                  Nsukka, Enugu State, Nigeria
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#A1A1B2', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                  EDUCATION
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)' }}>
                  Graduate Alumnus, UNN
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#A1A1B2', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                  RECORD LABEL
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)' }}>
                  SLOBAN Records
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#A1A1B2', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                  GENRES
                </span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)' }}>
                  Afrosounds, Afrobeats, Fusion
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-sans)', fontWeight: 700, color: '#A1A1B2', display: 'block', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '5px' }}>
                  DIRECT PHONE
                </span>
                <a href="tel:+234706624089" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--color-gold)', textDecoration: 'none' }}>
                  +234 706 624 089
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* SIGNAL GRID: Creative Sonic Direction */}
        <div style={{ marginTop: '100px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal">
            <h3 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '1.8rem',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: 'var(--text-primary)'
            }}>
              CREATIVE SONIC DIRECTION
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#A1A1B2', fontStyle: 'italic', marginTop: '10px' }}>
              How structured composition and sound design shape the SEN1TG sonic imprint
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
          }}>
            {musicHighlights.map((hl, i) => (
              <div 
                key={i} 
                className={`glass-panel reveal reveal-delay-${(i % 4) + 1}`} 
                style={{
                  padding: '30px',
                  borderRadius: '18px',
                  textAlign: 'left',
                  transition: 'var(--transition-smooth)',
                  background: 'rgba(13, 12, 26, 0.85)',
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  border: '2px solid rgba(255, 255, 255, 0.18)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '6px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {hl.icon}
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  marginBottom: '10px',
                  color: 'var(--text-primary)'
                }}>
                  {hl.title}
                </h4>
                <p style={{
                  fontSize: '0.85rem',
                  lineHeight: '1.6',
                  color: '#E2E2E9'
                }}>
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .about-portrait:hover {
          transform: scale(1.02);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-image-column {
            max-width: 450px;
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
