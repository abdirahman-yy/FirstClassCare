import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageHeader = styled.section`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 100px 0 40px;
  text-align: center;
  position: relative;
  
  h1 {
    color: white;
    font-size: 2.5rem;
    position: relative;
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: linear-gradient(to right bottom, ${({ theme }) => theme.colors.primary} 49%, white 50%);
  }
`;

const AboutContent = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  img {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    width: 100%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    order: -1;
  }
`;

const AboutText = styled(motion.div)`
  h2 {
    margin-bottom: 30px;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: #333;
    font-size: 1.1rem;
  }
`;

const ValuesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
  background-color: ${({ theme }) => theme.colors.accent};
  text-align: center;
`;

const ValuesTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const ValueBox = styled(motion.div)`
  background-color: white;
  padding: 40px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: transform ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ValueIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  margin: 0 auto 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
`;

const CTASection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: white;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 40px;
  }
`;

const ImageContainer = styled.div`
  img {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
    width: 100%;
  }
`;

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const values = [
    {
      icon: 'fa-heart',
      title: 'Compassion',
      text: 'We treat every rider with genuine care and understanding.'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Safety',
      text: 'Your wellbeing is our top priority during every trip.'
    },
    {
      icon: 'fa-clock',
      title: 'Reliability',
      text: "We're committed to being on time, every time."
    },
    {
      icon: 'fa-hands-helping',
      title: 'Service',
      text: 'We go above and beyond to ensure your comfort and satisfaction.'
    }
  ];
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
        </div>
      </PageHeader>
      
      <AboutContent>
        <div className="container">
          <AboutGrid>
            <AboutText
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2>Our Story</h2>
              <p>At First Class Care, we treat every rider like family. Our goal is to make sure your ride is safe, comfortable, and stress free every time.</p>
              <p>Growing up, I saw my grandparents struggle to get to doctor's appointments and other places because rides weren't always easy to find. I told myself then: One day, I'll make sure our elders always have a ride they can count on.</p>
              <p>That promise became First Class Care, a transportation service that puts your needs first. Whether it's a trip to a medical appointment, family gathering, or anywhere else, we're here to help you get there with kindness and respect.</p>
              <p>From the moment you step into our vehicle, we'll make sure you feel cared for and supported just like family.</p>
            </AboutText>
            <AboutImage
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <img src="/assets/images/hero-bg.jpg" alt="Professional medical transportation service" />
            </AboutImage>
          </AboutGrid>
        </div>
      </AboutContent>
      
      <ValuesSection>
        <div className="container">
          <ValuesTitle>Our Values</ValuesTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ValueIcon>
                  <i className={`fas ${value.icon}`}></i>
                </ValueIcon>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </ValueBox>
            ))}
          </ValuesGrid>
        </div>
      </ValuesSection>
      
      <CTASection>
        <div className="container">
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Experience the First Class Care Difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We accept private pay and insurance for all our transportation services.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/booking" 
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  backgroundColor: 'white',
                  color: '#002B54',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  border: '2px solid white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = '#1A75C1';
                  target.style.color = 'white';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = 'white';
                  target.style.color = '#002B54';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                }}
              >
                Book Your Ride Today
              </Link>
            </motion.div>
          </CTAContent>
        </div>
      </CTASection>
    </>
  );
};

export default AboutPage; 