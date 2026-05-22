import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 35px 25px;
  font-family: ${({ theme }) => theme.fontPixel};
  font-size: 0.55rem;
  color: #666;
  letter-spacing: 2px;
  border-top: 2px solid #1a1035;
  margin-top: 50px;
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    <p>© 2026 RETRO BATTLE CHAMPIONSHIP — TODOS OS DIREITOS RESERVADOS</p>
    <p style={{ marginTop: '8px', color: '#444' }}>FEITO COM ❤️ E PIXEL ART</p>
  </FooterWrapper>
);

export default Footer;