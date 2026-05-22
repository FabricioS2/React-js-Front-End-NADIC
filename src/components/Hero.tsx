import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;

const pulseDate = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 4px #000, 0 0 0 7px ${({ theme }) => theme.neonGreen}, 0 0 25px rgba(60,255,60,0.5);
  }
  50% {
    box-shadow: 0 0 0 4px #000, 0 0 0 7px ${({ theme }) => theme.neonGreen}, 0 0 45px rgba(60,255,60,0.9);
  }
`;

const HeroWrapper = styled.header`
  text-align: center;
  padding: 60px 25px 40px;
  position: relative;
  background: radial-gradient(ellipse at center, rgba(100, 30, 180, 0.15) 0%, transparent 70%);
`;

const Badge = styled.div`
  display: inline-block;
  background: #1a1035;
  color: ${({ theme }) => theme.neonCyan};
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.85rem;
  padding: 10px 22px;
  letter-spacing: 3px;
  margin-bottom: 25px;
  animation: ${blink} 2s infinite;
  border: 2px solid ${({ theme }) => theme.neonCyan};
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: clamp(1.8rem, 4.5vw, 3.5rem);
  color: #fff;
  line-height: 1.5;
  letter-spacing: 3px;
  margin-bottom: 20px;
`;

const Line1 = styled.span`
  color: ${({ theme }) => theme.neonPink};
  display: block;
  text-shadow: 2px 2px 0 #4a004a, -2px -2px 0 #4a004a, 0 0 10px ${({ theme }) => theme.neonPink};
`;

const Line2 = styled.span`
  color: ${({ theme }) => theme.neonCyan};
  display: block;
  text-shadow: 2px 2px 0 #003040, -2px -2px 0 #003040, 0 0 10px ${({ theme }) => theme.neonCyan};
`;

const Line3 = styled.span`
  color: ${({ theme }) => theme.neonYellow};
  display: block;
  font-size: 0.75em;
  text-shadow: 2px 2px 0 #3d2e00, -2px -2px 0 #3d2e00, 0 0 10px #ffd700;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: clamp(1.3rem, 2.5vw, 1.9rem);
  color: #c0b8e0;
  max-width: 750px;
  margin: 0 auto 15px;
  letter-spacing: 1px;
`;

const DateBadge = styled.div`
  display: inline-block;
  background: #000;
  color: ${({ theme }) => theme.neonGreen};
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: clamp(0.7rem, 1.8vw, 1rem);
  padding: 15px 30px;
  margin-top: 20px;
  letter-spacing: 2px;
  border: 3px solid ${({ theme }) => theme.neonGreen};
  animation: ${pulseDate} 2s ease-in-out infinite;
`;

const Hero: React.FC = () => (
  <HeroWrapper>
    <Badge>🎮 TORNEIO OFICIAL</Badge>
    <Title>
      <Line1>RETRO BATTLE</Line1>
      <Line2>CHAMPIONSHIP</Line2>
      <Line3>2026</Line3>
    </Title>
    <Subtitle>
      O maior campeonato de jogos eletrônicos com espírito retrô!<br />
      Prepare-se para reviver a era de ouro dos games enquanto compete nos títulos mais quentes da atualidade.
    </Subtitle>
    <DateBadge>📅 15 DE AGOSTO DE 2026</DateBadge>
  </HeroWrapper>
);

export default Hero;