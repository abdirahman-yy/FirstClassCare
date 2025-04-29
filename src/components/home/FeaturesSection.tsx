import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

const FeaturesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
  background-color: ${({ theme }) => theme.colors.accent};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FeatureBox = styled(motion.div)`
  background-color: white;
  padding: 40px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-align: center;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: transform ${({ theme }) => theme.transitions.default}, 
              box-shadow ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  margin: 0 auto 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

const FeaturesSection: React.FC = () => {
  const features: FeatureData[] = [
    {
      icon: 'fa-hospital',
      title: 'Hospital Discharges',
      description: 'Safe and comfortable transportation from hospital to home or other facilities.'
    },
    {
      icon: 'fa-user-friends',
      title: 'Senior Transportation',
      description: 'Respectful and attentive service for seniors with any mobility needs.'
    },
    {
      icon: 'fa-heartbeat',
      title: 'Medical Appointments',
      description: 'Reliable rides to dialysis, therapy, and other medical appointments.'
    },
    {
      icon: 'fa-route',
      title: 'Long-Distance Transport',
      description: 'Comfortable transportation for longer journeys with care and attention.'
    }
  ];
  
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
    <FeaturesContainer>
      <div className="container">
        <FeaturesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureBox key={index} variants={itemVariants}>
              <FeatureIcon>
                <i className={`fas ${feature.icon}`}></i>
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureBox>
          ))}
        </FeaturesGrid>
      </div>
    </FeaturesContainer>
  );
};

export default FeaturesSection; 