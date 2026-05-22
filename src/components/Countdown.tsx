import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface CountdownProps {
  dataEvento: string;
}

const Section = styled.section`
  text-align: center;
  padding: 30px 15px 40px;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.neonYellow};
  letter-spacing: 2px;
  margin-bottom: 22px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: clamp(10px, 2.5vw, 25px);
  flex-wrap: wrap;
`;

const Item = styled.div`
  background: #0d0d24;
  border: 3px solid #2a2050;
  padding: 18px clamp(14px, 2.5vw, 28px);
  text-align: center;
  min-width: 80px;
  box-shadow: 0 0 0 2px #000, 0 0 0 5px #2a2050, 0 0 15px rgba(100, 50, 200, 0.3);
  transition: all 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.neonPink};
    box-shadow: 0 0 0 2px #000, 0 0 0 5px ${({ theme }) => theme.neonPink}, 0 0 30px rgba(255, 94, 255, 0.5);
    transform: translateY(-3px);
  }
`;

const Number = styled.span`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: clamp(1.6rem, 3.5vw, 3rem);
  color: #fff;
  display: block;
  line-height: 1.2;
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.55rem;
  color: #aaa;
  letter-spacing: 1px;
  display: block;
  margin-top: 8px;
`;

const Countdown: React.FC<CountdownProps> = ({ dataEvento }) => {
  const [tempo, setTempo] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const evento = new Date(dataEvento);

    const atualizar = () => {
      const agora = new Date();
      const diff = evento.getTime() - agora.getTime();

      if (diff <= 0) {
        setTempo({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
        return;
      }

      setTempo({
        dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    atualizar();
    const id = setInterval(atualizar, 1000);
    return () => clearInterval(id);
  }, [dataEvento]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <Section>
      <Title>⏳ CONTAGEM REGRESSIVA ⏳</Title>
      <Container>
        <Item><Number>{pad(tempo.dias)}</Number><Label>DIAS</Label></Item>
        <Item><Number>{pad(tempo.horas)}</Number><Label>HORAS</Label></Item>
        <Item><Number>{pad(tempo.minutos)}</Number><Label>MINUTOS</Label></Item>
        <Item><Number>{pad(tempo.segundos)}</Number><Label>SEGUNDOS</Label></Item>
      </Container>
    </Section>
  );
};

export default Countdown;