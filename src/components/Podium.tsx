import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Section = styled.section`
  padding: 50px 25px 60px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  position: relative;
  text-shadow: 0 0 10px ${({ theme }) => theme.gold};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: ${({ theme }) => theme.neonPink};
    box-shadow: 0 0 10px ${({ theme }) => theme.neonPink};
  }
`;

const Desc = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 1.6rem;
  color: #c0b8e0;
  max-width: 700px;
  margin: -20px auto 35px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const Stage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: clamp(10px, 2.5vw, 25px);
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;

const Medal = styled.span`
  font-size: clamp(3rem, 6vw, 5.5rem);
  margin-bottom: 8px;
  filter: drop-shadow(0 0 15px currentColor);
  animation: ${float} 3s ease-in-out infinite;
`;

interface PillarProps {
  $height: string;
  $bg: string;
  $borderColor: string;
  $shadowColor: string;
}

const Pillar = styled.div<PillarProps>`
  width: clamp(80px, 18vw, 150px);
  height: ${({ $height }) => $height};
  background: ${({ $bg }) => $bg};
  border: 4px solid ${({ $borderColor }) => $borderColor};
  box-shadow: 0 0 0 2px #0a0a14, 0 0 0 6px ${({ $borderColor }) => $borderColor}, 0 0 20px ${({ $shadowColor }) => $shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  text-align: center;
`;

const Position = styled.span`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.65rem;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 6px;
`;

const Prize = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: clamp(1.1rem, 1.8vw, 1.5rem);
  color: #fff;
  font-weight: bold;

  small {
    display: block;
    font-size: 0.85rem;
    color: #ccc;
    margin-top: 4px;
  }
`;

const Base = styled.div`
  width: clamp(300px, 60vw, 500px);
  height: 24px;
  background: #1a1035;
  border: 3px solid #2a2050;
  box-shadow: 0 0 0 2px #0a0a14, 0 0 0 5px #2a2050;
  margin-top: -2px;
`;

const Podium: React.FC = () => (
  <Section id="premiacoes">
    <Title>🏆 PREMIAÇÕES</Title>
    <Desc>Suba ao pódio e conquiste prêmios incríveis!</Desc>
    <Wrapper>
      <Stage>
        <Block>
          <Medal style={{ animationDelay: '0.4s', color: '#c0c0c0' }}>🥈</Medal>
          <Pillar $height="200px" $bg="linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 50%, #0d0d0d 100%)" $borderColor="#c0c0c0" $shadowColor="rgba(192,192,192,0.4)">
            <Position>2º</Position>
            <Prize>R$ 2.000<small>+ Mouse Gamer</small></Prize>
          </Pillar>
        </Block>
        <Block>
          <Medal style={{ animationDelay: '0s', color: '#ffd700' }}>🥇</Medal>
          <Pillar $height="260px" $bg="linear-gradient(180deg, #3d2e00 0%, #1a1000 50%, #0d0800 100%)" $borderColor="#ffd700" $shadowColor="rgba(255,215,0,0.5)">
            <Position>1º</Position>
            <Prize>R$ 5.000<small>+ Troféu + Kit Gamer</small></Prize>
          </Pillar>
        </Block>
        <Block>
          <Medal style={{ animationDelay: '0.8s', color: '#cd7f32' }}>🥉</Medal>
          <Pillar $height="150px" $bg="linear-gradient(180deg, #2e1a0a 0%, #1a0e04 50%, #0d0602 100%)" $borderColor="#cd7f32" $shadowColor="rgba(205,127,50,0.4)">
            <Position>3º</Position>
            <Prize>R$ 1.000<small>+ Headset</small></Prize>
          </Pillar>
        </Block>
      </Stage>
      <Base />
    </Wrapper>
  </Section>
);

export default Podium;