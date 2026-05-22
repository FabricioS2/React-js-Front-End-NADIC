import React from 'react';
import styled from 'styled-components';

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
  text-shadow: 0 0 10px ${({ theme }) => theme.neonCyan};

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
`;

interface CardProps {
  $accent: string;
  $accentGlow: string;
}

const Card = styled.div<CardProps>`
  background: ${({ theme }) => theme.cardBg};
  padding: 30px 20px;
  text-align: center;
  border: 3px solid #2a2050;
  box-shadow: 0 0 0 2px #0a0a14, 0 0 0 5px #2a2050;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ $accent }) => $accent};
    box-shadow: 0 0 0 2px #0a0a14, 0 0 0 5px ${({ $accent }) => $accent}, 0 0 30px ${({ $accentGlow }) => $accentGlow};
  }
`;

const Img = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 2px solid #2a2050;
  background: #000;
  margin-bottom: 12px;
  transition: transform 0.3s;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const GameName = styled.span`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.75rem;
  color: #fff;
  letter-spacing: 1px;
  display: block;
`;

const GameSub = styled.span`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 1.2rem;
  color: #aaa;
  display: block;
  margin-top: 6px;
`;

const jogos = [
  { id: 'cs2' as const, nome: 'CS2', subtitulo: 'Counter-Strike 2', imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.rWzDpI0XfaOdEU88H2AOmQHaEK&f=1&ipt=a6b9c84dcd3618deafc22b5c1fa984cb01298c63fd33416f41f5b27cbb8bf24f&ipo=images', accent: '#f0a841', accentGlow: 'rgba(240,168,65,0.6)' },
  { id: 'valorant' as const, nome: 'VALORANT', subtitulo: 'Riot Games', imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.ibxk.com.br%2F2021%2F03%2F22%2F22175519591468.jpg&f=1&nofb=1&ipt=59ed78f5381a5c6e20e0abf9605e174ea16313a9149e9414a5f0bdf80065117a', accent: '#ff4655', accentGlow: 'rgba(255,70,85,0.6)' },
  { id: 'overwatch2' as const, nome: 'OVERWATCH 2', subtitulo: 'Blizzard', imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgamingbolt.com%2Fwp-content%2Fuploads%2F2019%2F11%2FOverwatch-2.jpg&f=1&nofb=1&ipt=f2ea5d4cc0f9f0f59aa3a092c076c0c6262229d8ea8b27e3e79c2a0721836b57', accent: '#f99e1b', accentGlow: 'rgba(249,158,27,0.6)' },
  { id: 'mk' as const, nome: 'MORTAL KOMBAT 1', subtitulo: 'MK1 Tournament', imagem: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn2.unrealengine.com%2Fegs-mortalkombat1defintiveedition-netherrealmstudiosqloc-editions-g1a-00-1920x1080-4de805dffaf7.jpg&f=1&nofb=1&ipt=d0ec0f6b0d024ff3f2a64f3240fcd3dac6d213760835346fc274ecc958151b5e', accent: '#c41e3a', accentGlow: 'rgba(196,30,58,0.6)' },
];

const GamesGrid: React.FC = () => (
  <Section id="jogos-competicao">
    <Title>🎯 JOGOS DA COMPETIÇÃO</Title>
    <Desc>Escolha sua arena e mostre suas habilidades! Quatro jogos, uma glória.</Desc>
    <Grid>
      {jogos.map(jogo => (
        <Card key={jogo.id} $accent={jogo.accent} $accentGlow={jogo.accentGlow}>
          <Img src={jogo.imagem} alt={jogo.nome} />
          <GameName>{jogo.nome}</GameName>
          <GameSub>{jogo.subtitulo}</GameSub>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default GamesGrid;