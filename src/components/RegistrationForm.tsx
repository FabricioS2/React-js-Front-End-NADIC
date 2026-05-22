import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Jogador } from '../types';
import StarParticle from './StarParticle';

interface Props {
  onToast: (msg: string, isError?: boolean) => void;
  onInscricaoConfirmada: (dados: Jogador) => void;
}

const FormSection = styled.div`
  background: ${({ theme }) => theme.bg2};
  padding: 40px 30px;
  border: 4px solid #2a2050;
  box-shadow: 0 0 0 3px #0a0a14, 0 0 0 7px #2a2050, 0 0 30px rgba(100, 50, 200, 0.25);
  max-width: 650px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.95rem;
  text-align: center;
  color: ${({ theme }) => theme.neonYellow};
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

const Group = styled.div`
  margin-bottom: 22px;
`;

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.65rem;
  color: #c0b8e0;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 1.4rem;
  background: ${({ theme }) => theme.inputBg};
  color: #fff;
  border: 3px solid #2a2050;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  transition: all 0.3s;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.neonCyan};
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 18px rgba(0, 240, 255, 0.35);
    background: #0f0f28;
  }

  &::placeholder {
    color: #555;
    font-size: 1.2rem;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 18px;
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 1.4rem;
  background: ${({ theme }) => theme.inputBg};
  color: #fff;
  border: 3px solid #2a2050;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%23ff5eff'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;

  &:focus {
    border-color: ${({ theme }) => theme.neonCyan};
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 18px rgba(0, 240, 255, 0.35);
    background-color: #0f0f28;
  }

  option {
    background: #0d0d20;
    color: #fff;
    font-family: ${({ theme }) => theme.fontMono};
    font-size: 1.2rem;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  padding: 16px;
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.9rem;
  letter-spacing: 2px;
  background: #1a0040;
  color: #fff;
  border: 4px solid ${({ theme }) => theme.neonPink};
  cursor: pointer;
  box-shadow: 0 0 0 2px #000, 0 0 0 6px ${({ theme }) => theme.neonPink}, 0 0 20px rgba(255, 94, 255, 0.4);
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    background: #2a0060;
    box-shadow: 0 0 0 2px #000, 0 0 0 6px ${({ theme }) => theme.neonPink}, 0 0 40px rgba(255, 94, 255, 0.8);
    transform: translateY(-2px);
    letter-spacing: 3px;
  }

  &:active {
    transform: translateY(0);
    transition: all 0.05s;
  }
`;

const RegistrationForm: React.FC<Props> = ({ onToast, onInscricaoConfirmada }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [jogo, setJogo] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [particulas, setParticulas] = useState(false);

  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const jogoRef = useRef<HTMLSelectElement>(null);
  const loginRef = useRef<HTMLInputElement>(null);
  const senhaRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    if (nome.trim().length < 3) {
      onToast('⚠️ Nome deve ter pelo menos 3 caracteres!', true);
      nomeRef.current?.focus();
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      onToast('⚠️ Insira um e-mail válido!', true);
      emailRef.current?.focus();
      return;
    }
    if (!jogo) {
      onToast('⚠️ Selecione um jogo!', true);
      jogoRef.current?.focus();
      return;
    }
    if (login.trim().length < 4) {
      onToast('⚠️ Login deve ter pelo menos 4 caracteres!', true);
      loginRef.current?.focus();
      return;
    }
    if (senha.length < 6) {
      onToast('⚠️ Senha deve ter pelo menos 6 caracteres!', true);
      senhaRef.current?.focus();
      return;
    }

    const dados: Jogador = {
      nome: nome.trim(),
      email: email.trim(),
      jogo: jogo as Jogador['jogo'],
      login: login.trim(),
      senha,
    };

    setParticulas(true);
    setTimeout(() => setParticulas(false), 3500);

    onInscricaoConfirmada(dados);

    setNome('');
    setEmail('');
    setJogo('');
    setLogin('');
    setSenha('');
  }, [nome, email, jogo, login, senha, onToast, onInscricaoConfirmada]);

  return (
    <section id="cadastro" style={{ padding: '50px 25px 60px', maxWidth: '1100px', margin: '0 auto' }}>
      <FormSection>
        <FormTitle>📋 INSCREVA-SE AGORA</FormTitle>
        <form onSubmit={handleSubmit} noValidate>
          <Group>
            <Label htmlFor="nome">👤 Nome Completo</Label>
            <Input
              id="nome"
              ref={nomeRef}
              type="text"
              placeholder="Digite seu nome..."
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
              minLength={3}
            />
          </Group>
          <Group>
            <Label htmlFor="email">📧 E-mail</Label>
            <Input
              id="email"
              ref={emailRef}
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Group>
          <Group>
            <Label htmlFor="jogo">🎮 Jogo Escolhido</Label>
            <Select
              id="jogo"
              ref={jogoRef}
              value={jogo}
              onChange={e => setJogo(e.target.value)}
              required
            >
              <option value="" disabled>-- Selecione o jogo --</option>
              <option value="cs2">Counter-Strike 2 (CS2)</option>
              <option value="valorant">Valorant</option>
              <option value="overwatch2">Overwatch 2</option>
              <option value="mk">Mortal Kombat 1</option>
            </Select>
          </Group>
          <Group>
            <Label htmlFor="login">🔑 Login</Label>
            <Input
              id="login"
              ref={loginRef}
              type="text"
              placeholder="Crie seu login..."
              value={login}
              onChange={e => setLogin(e.target.value)}
              required
              minLength={4}
            />
          </Group>
          <Group>
            <Label htmlFor="senha">🔒 Senha</Label>
            <Input
              id="senha"
              ref={senhaRef}
              type="password"
              placeholder="Crie uma senha segura..."
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              minLength={6}
            />
          </Group>
          <SubmitBtn type="submit">⚔️ INSCREVER-SE ⚔️</SubmitBtn>
        </form>
      </FormSection>
      {particulas && <StarParticle />}
    </section>
  );
};

export default RegistrationForm;