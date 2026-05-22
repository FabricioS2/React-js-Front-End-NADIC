import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Jogador } from '../types';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(60, 255, 60, 0.5); }
  50% { box-shadow: 0 0 40px rgba(60, 255, 60, 0.9); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  position: relative;
  z-index: 1;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.bg2};
  border: 4px solid ${({ theme }) => theme.neonGreen};
  box-shadow:
    0 0 0 3px #0a0a14,
    0 0 0 7px ${({ theme }) => theme.neonGreen},
    0 0 30px rgba(60, 255, 60, 0.4);
  padding: 50px 40px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const Icone = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
  animation: ${float} 3s ease-in-out infinite;
`;

const Titulo = styled.h1`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 1.4rem;
  color: ${({ theme }) => theme.neonGreen};
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow:
    0 0 10px ${({ theme }) => theme.neonGreen},
    0 0 30px ${({ theme }) => theme.neonGreen};
`;

const Subtitulo = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 1.4rem;
  color: #c0b8e0;
  margin-bottom: 30px;
`;

const DadosContainer = styled.div`
  background: #0a0a18;
  border: 2px solid #2a2050;
  padding: 25px;
  text-align: left;
  margin-bottom: 30px;
`;

const DadoLinha = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #1a1035;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 1.3rem;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  color: #888;
`;

const Valor = styled.span`
  color: #fff;
  font-weight: bold;
`;

const BotaoVoltar = styled.button`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.8rem;
  padding: 16px 32px;
  background: #1a0040;
  color: #fff;
  border: 3px solid ${({ theme }) => theme.neonCyan};
  cursor: pointer;
  letter-spacing: 2px;
  transition: all 0.3s;
  box-shadow:
    0 0 0 2px #000,
    0 0 0 5px ${({ theme }) => theme.neonCyan},
    0 0 20px rgba(0, 240, 255, 0.4);

  &:hover {
    background: #2a0060;
    box-shadow:
      0 0 0 2px #000,
      0 0 0 5px ${({ theme }) => theme.neonCyan},
      0 0 40px rgba(0, 240, 255, 0.8);
    transform: translateY(-2px);
  }
`;

const ConfirmationPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dados = location.state?.dados as Jogador | undefined;

  if (!dados) {
    return (
      <Container>
        <Card>
          <Icone>❌</Icone>
          <Titulo>NENHUMA INSCRIÇÃO ENCONTRADA</Titulo>
          <Subtitulo>Volte e preencha o formulário de inscrição.</Subtitulo>
          <BotaoVoltar onClick={() => navigate('/')}>
            VOLTAR AO INÍCIO
          </BotaoVoltar>
        </Card>
      </Container>
    );
  }

  const jogoNomes: Record<string, string> = {
    cs2: 'Counter-Strike 2',
    valorant: 'Valorant',
    overwatch2: 'Overwatch 2',
    mk: 'Mortal Kombat 1',
  };

  return (
    <Container>
      <Card>
        <Icone>🏆</Icone>
        <Titulo>INSCRIÇÃO CONFIRMADA!</Titulo>
        <Subtitulo>Bem-vindo(a) ao Retro Battle Championship 2026!</Subtitulo>
        <DadosContainer>
          <DadoLinha>
            <Label>Nome:</Label>
            <Valor>{dados.nome}</Valor>
          </DadoLinha>
          <DadoLinha>
            <Label>E-mail:</Label>
            <Valor>{dados.email}</Valor>
          </DadoLinha>
          <DadoLinha>
            <Label>Jogo:</Label>
            <Valor>{jogoNomes[dados.jogo] || dados.jogo}</Valor>
          </DadoLinha>
          <DadoLinha>
            <Label>Login:</Label>
            <Valor>{dados.login}</Valor>
          </DadoLinha>
        </DadosContainer>
        <Subtitulo>Prepara-se! O torneio começa em 15 de agosto de 2026.</Subtitulo>
        <BotaoVoltar onClick={() => navigate('/')}>
          VOLTAR AO INÍCIO
        </BotaoVoltar>
      </Card>
    </Container>
  );
};

export default ConfirmationPage;