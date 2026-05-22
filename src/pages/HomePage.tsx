import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Countdown from '../components/Countdown';
import PixelDivider from '../components/PixelDivider';
import GamesGrid from '../components/GamesGrid';
import Podium from '../components/Podium';
import RegistrationForm from '../components/RegistrationForm';
import Toast from '../components/Toast';
import Footer from '../components/Footer';
import { Jogador } from '../types';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState<{ mensagem: string; isError: boolean; visivel: boolean }>({
    mensagem: '',
    isError: false,
    visivel: false,
  });

  const showToast = useCallback((mensagem: string, isError: boolean = false) => {
    setToast({ mensagem, isError, visivel: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, visivel: false }));
    }, 4000);
  }, []);

  const handleInscricaoConfirmada = useCallback((dados: Jogador) => {
    navigate('/confirmacao', { state: { dados } });
  }, [navigate]);

  return (
    <>
      <Toast
        mensagem={toast.mensagem}
        isError={toast.isError}
        visivel={toast.visivel}
      />
      <Hero />
      <Countdown dataEvento="2026-08-15T09:00:00-03:00" />
      <PixelDivider char="◈" />
      <GamesGrid />
      <PixelDivider char="◆" />
      <Podium />
      <PixelDivider char="◆" />
      <RegistrationForm
        onToast={showToast}
        onInscricaoConfirmada={handleInscricaoConfirmada}
      />
      <Footer />
    </>
  );
};

export default HomePage;