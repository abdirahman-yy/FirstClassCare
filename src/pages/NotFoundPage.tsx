import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.section`
  padding: 150px 0;
  text-align: center;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundContent = styled(motion.div)`
  max-width: 600px;
  margin: 0 auto;
  
  h1 {
    font-size: 8rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 6rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 1.8rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
  padding: 12px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: 600;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &.primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
      transform: translateY(-3px);
    }
  }
  
  &.secondary {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      transform: translateY(-3px);
    }
  }
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }
`;

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    // Set document title for screen readers
    document.title = "Page Not Found - FirstClass Care Transit";
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <NotFoundContainer role="main">
      <div className="container">
        <NotFoundContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            404
          </motion.h1>
          <h2>Page Not Found</h2>
          <p>We're sorry, but the page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to our homepage.</p>
          
          <ButtonGroup>
            <ActionButton to="/" className="primary">
              Back to Home
            </ActionButton>
            <ActionButton to="/contact" className="secondary">
              Contact Us
            </ActionButton>
          </ButtonGroup>
        </NotFoundContent>
      </div>
    </NotFoundContainer>
  );
};

export default NotFoundPage; 