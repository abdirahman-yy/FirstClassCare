import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const BookButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Header = () => {
  return (
    <header>
      <Logo>
        <img src="/assets/images/logo-white.png" alt="First Class Care Transit" />
        First Class Care Transit
      </Logo>
      <BookButton to="/contact">Book a Ride</BookButton>
    </header>
  );
};

export default Header; 