import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ServiceData {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

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

const ServicesIntro = styled.section`
  padding: 80px 0 40px;
  text-align: center;
`;

const ServicesText = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
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
  }
  
  p {
    margin-bottom: 20px;
    font-size: 1.1rem;
  }
`;

const ServicesGrid = styled.section`
  padding: 0 0 80px;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  padding: 40px 30px;
  transition: transform ${({ theme }) => theme.transitions.default},
              box-shadow ${({ theme }) => theme.transitions.default};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const ServiceIcon = styled.div`
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

const ServiceTitle = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const ServiceDescription = styled.p`
  margin-bottom: 25px;
`;

const ServiceFeatures = styled.ul`
  margin: 25px 0;
  
  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    
    i {
      color: ${({ theme }) => theme.colors.success};
      margin-right: 10px;
    }
  }
`;

const BookButton = styled(Link)`
  display: block;
  width: 100%;
  margin-top: auto;
  padding: 16px;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: 0 4px 15px rgba(0, 43, 84, 0.15);
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 43, 84, 0.25);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PaymentInfo = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
  background-color: ${({ theme }) => theme.colors.accent};
  text-align: center;
`;

const PaymentTitle = styled.h2`
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

const PaymentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
`;

const PaymentOption = styled(motion.div)`
  background-color: white;
  padding: 40px 30px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
`;

const PaymentIcon = styled.div`
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
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
  
  .btn {
    padding: 16px 32px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    transition: all 0.3s ease;
    display: inline-block;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    
    &.btn-primary {
      background-color: white;
      color: ${({ theme }) => theme.colors.primary};
      border-color: white;
      
      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: white;
        border-color: ${({ theme }) => theme.colors.secondary};
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }
    }
    
    &.btn-secondary {
      background-color: transparent;
      color: white;
      border-color: white;
      
      &:hover {
        background-color: white;
        color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
      }
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      width: 100%;
      max-width: 250px;
    }
  }
`;

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services: ServiceData[] = [
    {
      icon: 'fa-hospital',
      title: 'Medical Appointments',
      description: 'We provide reliable transportation to and from medical appointments, ensuring you arrive on time and stress-free. Our drivers can assist with entry and exit from the vehicle and medical facilities.',
      features: [
        'Door-to-door assistance',
        'Help with personal belongings',
        'Comfortable vehicle with space for mobility aids',
        'Professional, caring staff'
      ]
    },
    {
      icon: 'fa-user-friends',
      title: 'Senior Transportation',
      description: 'We specialize in providing respectful and attentive transportation services for seniors. Our drivers are trained to address the unique mobility and comfort needs of older adults.',
      features: [
        'Assistance entering and exiting the vehicle',
        'Vehicles equipped for mobility aids',
        'Patient, understanding drivers',
        'Flexible scheduling'
      ]
    },
    {
      icon: 'fa-wheelchair',
      title: 'Wheelchair Accessible Transport',
      description: 'Our specially equipped vehicles provide safe and comfortable transportation for clients using wheelchairs or with other mobility needs. We ensure secure loading and unloading.',
      features: [
        'ADA-compliant wheelchair lifts and ramps',
        'Secure wheelchair locking systems',
        'Trained staff for safe transfers',
        'Spacious vehicles for comfort'
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
        </div>
      </PageHeader>
      
      <ServicesIntro>
        <div className="container">
          <ServicesText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Transportation You Can Trust</h2>
            <p>At First Class Care Transit, we offer a range of transportation services designed to meet your unique needs. All of our services come with the same commitment to safety, comfort, and personalized care.</p>
            <p>We accept both private pay and insurance for our services. Contact us to learn more about coverage options.</p>
          </ServicesText>
        </div>
      </ServicesIntro>
      
      <ServicesGrid>
        <div className="container">
          <ServicesContainer
            as={motion.div}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
              <ServiceCard key={index} variants={itemVariants}>
                <ServiceIcon>
                  <i className={`fas ${service.icon}`}></i>
                </ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceFeatures>
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ServiceFeatures>
                <BookButton to="/booking">Book This Service</BookButton>
              </ServiceCard>
            ))}
          </ServicesContainer>
        </div>
      </ServicesGrid>
      
      <PaymentInfo>
        <div className="container">
          <PaymentTitle>Payment Options</PaymentTitle>
          <PaymentGrid>
            <PaymentOption
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <PaymentIcon>
                <i className="fas fa-credit-card"></i>
              </PaymentIcon>
              <h3>Private Pay</h3>
              <p>We accept all major credit cards, cash, and checks for our services. We strive to keep our rates affordable while maintaining the highest quality of care.</p>
            </PaymentOption>
            <PaymentOption
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PaymentIcon>
                <i className="fas fa-file-medical"></i>
              </PaymentIcon>
              <h3>Insurance</h3>
              <p>We work with many insurance providers to cover transportation services. Contact us to verify your coverage and eligibility before booking.</p>
            </PaymentOption>
          </PaymentGrid>
        </div>
      </PaymentInfo>
      
      <CTASection>
        <div className="container">
          <CTAContent>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Book Your Ride?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today to schedule your transportation or learn more about our services.
            </motion.p>
            <motion.div 
              className="buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </motion.div>
          </CTAContent>
        </div>
      </CTASection>
    </>
  );
};

export default ServicesPage; 