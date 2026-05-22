import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const Divider = styled.div`
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 10px;
  color: ${({ theme }) => theme.neonPink};
  margin: 20px 0;
  user-select: none;
  animation: ${blink} 1.5s infinite;
`;

interface Props {
  char: string;
}

const PixelDivider: React.FC<Props> = ({ char }) => (
  <Divider>{char} {char} {char}</Divider>
);

export default PixelDivider;