import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  background: linear-gradient(rgba(0, 43, 84, 0.8), rgba(0, 43, 84, 0.9)), url('/assets/images/hero-new.jpg');
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 100vh;
  min-height: 600px;
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px; /* Account for fixed header */
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    background-attachment: scroll;
    background: linear-gradient(rgba(0, 43, 84, 0.9), rgba(0, 22, 55, 0.95)), url('/assets/images/hero-new.jpg');
    background-size: cover;
    background-position: center center;
    min-height: 550px;
    height: 100vh;
    padding-top: 100px; /* More padding for mobile header */
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    min-height: 500px;
    height: 100vh;
    background: linear-gradient(rgba(0, 22, 55, 0.95), rgba(0, 43, 84, 0.98)), url('/assets/images/hero-new.jpg');
    background-size: cover;
    background-position: center center;
    padding-top: 120px; /* Even more padding for smaller screens */
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 700px;
  padding: 0 20px;
  
  h1 {
    font-size: 3.5rem;
    margin-bottom: 25px;
    color: white;
    font-weight: 700;
    letter-spacing: -0.5px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      font-size: 2.8rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 2.2rem;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
      margin-bottom: 20px;
    }
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 25px;
    color: white;
    font-weight: 600;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      font-size: 1.6rem;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.6);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 1.4rem;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
      margin-bottom: 20px;
    }
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
    max-width: 90%;
    line-height: 1.6;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      font-size: 1.1rem;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.6);
      margin-bottom: 35px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      font-size: 1rem;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
      margin-bottom: 30px;
      max-width: 100%;
    }
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  
  a {
    padding: 14px 28px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    &.btn-primary {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: white;
      border: 2px solid ${({ theme }) => theme.colors.secondary};
      
      &:hover {
        background-color: white;
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
    }
    
    &.btn-secondary {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
      border: 2px solid white;
      backdrop-filter: blur(10px);
      
      &:hover {
        background-color: white;
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    flex-direction: column;
    max-width: 250px;
  }
`;

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}>First Class Care</motion.h1>
          <motion.h2 variants={itemVariants}>Safe & Reliable Medical Transportation</motion.h2>
          <motion.p variants={itemVariants}>
            Professional, comfortable, and stress-free transportation for medical appointments and healthcare services.
          </motion.p>
          <HeroButtons variants={itemVariants}>
            <Link to="/booking" className="btn btn-primary">Book a Ride</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
          </HeroButtons>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

export default HeroSection; 