import React, { useState } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const PlayingEqualizer = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '14px', width: '22px' }}>
    <div className="eq-bar eq-bar-1" />
    <div className="eq-bar eq-bar-2" />
    <div className="eq-bar eq-bar-3" />
    <div className="eq-bar eq-bar-4" />
  </div>
);

export default function AudioPlayer({ tracksList }) {
  const [currentTrackId, setCurrentTrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = (track) => {
    if (currentTrackId === track.id && isPlaying) {
      setIsPlaying(false);
      setCurrentTrackId(null);
    } else {
      const listenUrl = track.spotify || track.audiomack || track.apple;
      if (listenUrl) {
        window.open(listenUrl, '_blank', 'noopener,noreferrer');
        setCurrentTrackId(track.id);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div style={{ width: '100%' }} className="glass-panel">
      {tracksList.map((track, idx) => (
        <div 
          key={track.id || idx} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '24px 30px', 
            borderBottom: idx === tracksList.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
            transition: 'var(--transition-fast)',
          }}
          className="track-row-minimal"
        >
          {/* Left section: Number + Cover Thumbnail + Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px', textAlign: 'left' }}>
            
            {/* Number / Play / Pause Toggle Wrapper */}
            <div 
              style={{ width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              onClick={() => handlePlayPause(track)}
            >
              {currentTrackId === track.id && isPlaying ? (
                <button style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--color-cyan)', display: 'flex', alignItems: 'center' }}>
                  <Pause size={14} fill="var(--color-cyan)" />
                </button>
              ) : (
                <div className="track-number-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                  <span className="track-index" style={{ fontSize: '0.8rem', fontFamily: 'var(--font-sf-pro)', fontWeight: 800, color: 'var(--color-cyan)' }}>
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <button className="track-play-icon" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: 'var(--color-cyan)', display: 'none', alignItems: 'center' }}>
                    <Play size={14} fill="var(--color-cyan)" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Minimal Square Cover */}
            <div style={{ width: '50px', height: '50px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }} onClick={() => handlePlayPause(track)}>
              <img 
                src={track.cover || '/sent1g_vinyl.png'} 
                alt={track.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-fast)' }} 
                className="track-thumbnail"
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sf-pro)', fontWeight: 800, margin: 0, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                  {track.title}
                </h3>
                {currentTrackId === track.id && isPlaying && <PlayingEqualizer />}
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {track.album || 'Single Release'}
              </span>
            </div>
          </div>
          
          {/* Right section: Link / Action */}
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {track.audiomack && (
                <a href={track.audiomack} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary btn-listen btn-audiomack" style={{ padding: '8px 14px', fontSize: '0.6rem', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    AUDIOMACK
                  </button>
                </a>
              )}
              {track.spotify && (
                <a href={track.spotify} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary btn-listen btn-spotify" style={{ padding: '8px 14px', fontSize: '0.6rem', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    SPOTIFY
                  </button>
                </a>
              )}
              {track.apple && (
                <a href={track.apple} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary btn-listen btn-apple" style={{ padding: '8px 14px', fontSize: '0.6rem', letterSpacing: '1px', border: '1px solid rgba(255,255,255,0.08)' }}>
                    APPLE MUSIC
                  </button>
                </a>
              )}
              {!track.audiomack && !track.spotify && !track.apple && (
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '1px' }}>
                  COMING SOON
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {/* Styles for row hovers */}
      <style>{`
        .track-row-minimal:hover {
          background: rgba(255, 255, 255, 0.02);
          border-left: 3px solid var(--color-cyan);
          padding-left: 27px; /* compensate for border offset */
        }
        
        .track-row-minimal:hover .track-index {
          display: none !important;
        }
        .track-row-minimal:hover .track-play-icon {
          display: flex !important;
        }

        .btn-listen {
          transition: var(--transition-fast) !important;
          border-radius: 4px !important;
        }
        .btn-audiomack:hover {
          background: #FFA200 !important;
          border-color: #FFA200 !important;
          color: #000000 !important;
        }
        .btn-spotify:hover {
          background: #1DB954 !important;
          border-color: #1DB954 !important;
          color: #FFFFFF !important;
        }
        .btn-apple:hover {
          background: #FC3C44 !important;
          border-color: #FC3C44 !important;
          color: #FFFFFF !important;
        }

        /* Equalizer Animating Bars */
        @keyframes eq-bounce-1 {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
        @keyframes eq-bounce-2 {
          0%, 100% { height: 6px; }
          50% { height: 11px; }
        }
        @keyframes eq-bounce-3 {
          0%, 100% { height: 8px; }
          50% { height: 13px; }
        }
        @keyframes eq-bounce-4 {
          0%, 100% { height: 3px; }
          50% { height: 10px; }
        }
        .eq-bar {
          width: 3px;
          background: var(--color-cyan);
          border-radius: 1px;
        }
        .eq-bar-1 { animation: eq-bounce-1 0.8s ease-in-out infinite; }
        .eq-bar-2 { animation: eq-bounce-2 0.7s ease-in-out infinite; }
        .eq-bar-3 { animation: eq-bounce-3 0.9s ease-in-out infinite; }
        .eq-bar-4 { animation: eq-bounce-4 0.6s ease-in-out infinite; }

        @media (max-width: 768px) {
          .track-row-minimal {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            padding: 20px !important;
          }
          .track-row-minimal > div:first-child {
            width: 100%;
          }
          .track-row-minimal > div:last-child {
            width: 100%;
          }
          .track-row-minimal > div:last-child > div {
            width: 100%;
            flex-direction: column;
            gap: 8px;
          }
          .track-row-minimal > div:last-child button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
