import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';

const CTASection = styled.section`
  padding: 80px 0;
  background-image: 
    linear-gradient(rgba(0, 22, 55, 0.85), rgba(0, 43, 84, 0.9)),
    url('/assets/images/cta-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2);
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: white;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: white;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    
    a {
      padding: 14px 32px;
      font-size: 1.1rem;
      font-weight: 600;
      text-decoration: none;
      border-radius: ${({ theme }) => theme.borderRadius.small};
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      
      &:first-child {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border: 2px solid ${({ theme }) => theme.colors.secondary};
        
        &:hover {
          background-color: white;
          color: ${({ theme }) => theme.colors.primary};
          border-color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
      }
      
      &:last-child {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid white;
        backdrop-filter: blur(10px);
        
        &:hover {
          background-color: white;
          color: ${({ theme }) => theme.colors.primary};
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    .buttons {
      flex-direction: column;
      align-items: center;
      
      a {
        width: 100%;
        max-width: 250px;
      }
    }
  }
`;

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'First Class Care Transit - Safe and Reliable Medical Transportation';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      
      <CTASection>
        <CTAContent>
          <h2>Need a Ride You Can Count On?</h2>
          <p>
            Whether you need transportation to your medical appointments, hospital discharge,
            or any other healthcare-related service, First Class Care Transit is here for you.
            Our compassionate team ensures you get there safely and on time, every time.
          </p>
          <div className="buttons">
            <Link to="/booking" style={{
              display: 'inline-block',
              padding: '16px 32px',
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '8px',
              border: '2px solid white',
              transition: 'all 0.3s ease',
              marginRight: '15px'
            }}>Book Your Ride Today</Link>
            <Link to="/services">Learn More</Link>
          </div>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default HomePage; 