import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rise = keyframes`
  0% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(-120px) scale(0.3); }
`;

const Particle = styled.span<{ $left: string; $top: string; $size: string; $duration: string }>`
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  font-size: ${({ $size }) => $size};
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
  animation: ${rise} ${({ $duration }) => $duration} ease-out forwards;
`;

const emojis = ['⭐', '✨', '🎮', '🏆', '💎', '🔥', '⚡', '🌟', '💥', '🎯'];

const StarParticle: React.FC = () => {
  const [particulas, setParticulas] = useState<Array<{ id: number; emoji: string; left: string; top: string; size: string; duration: string }>>([]);

  useEffect(() => {
    const novas = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 90 + '%',
      top: Math.random() * 60 + 30 + '%',
      size: (Math.random() * 1.8 + 0.8) + 'rem',
      duration: (Math.random() * 2 + 1.5) + 's',
    }));
    setParticulas(novas);
  }, []);

  return (
    <>
      {particulas.map(p => (
        <Particle
          key={p.id}
          $left={p.left}
          $top={p.top}
          $size={p.size}
          $duration={p.duration}
        >
          {p.emoji}
        </Particle>
      ))}
    </>
  );
};

export default StarParticle;