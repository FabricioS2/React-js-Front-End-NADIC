import React from 'react';
import styled from 'styled-components';

interface ToastProps {
  mensagem: string;
  isError: boolean;
  visivel: boolean;
}

const ToastContainer = styled.div<{ $visivel: boolean; $isError: boolean }>`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ $visivel }) => ($visivel ? '0' : '-130px')});
  background: #0d0d24;
  border: 3px solid ${({ $isError, theme }) => ($isError ? theme.neonRed : theme.neonGreen)};
  box-shadow:
    0 0 0 2px #000,
    0 0 0 5px ${({ $isError, theme }) => ($isError ? theme.neonRed : theme.neonGreen)},
    0 0 25px ${({ $isError }) => ($isError ? 'rgba(255,48,64,0.6)' : 'rgba(60,255,60,0.6)')};
  padding: 20px 35px;
  z-index: 10000;
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.75rem;
  color: ${({ $isError, theme }) => ($isError ? theme.neonRed : theme.neonGreen)};
  letter-spacing: 2px;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  pointer-events: none;
  max-width: 90vw;
`;

const Toast: React.FC<ToastProps> = ({ mensagem, isError, visivel }) => {
  return (
    <ToastContainer $visivel={visivel} $isError={isError}>
      {mensagem}
    </ToastContainer>
  );
};

export default Toast;