import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.footerBg};
  color: ${({ theme }) => theme.colors.lightText};
  padding: 70px 0 0;
`;

const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  h3 {
    color: white;
    font-size: 1.25rem;
    margin-bottom: 25px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 50px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  p {
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
  }
  
  img {
    max-width: 180px;
    margin-bottom: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 12px;
      
      a {
        color: rgba(255, 255, 255, 0.8);
        text-decoration: none;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        
        &:hover {
          color: ${({ theme }) => theme.colors.secondary};
          transform: translateX(5px);
        }
        
        &:focus {
          outline: 2px solid ${({ theme }) => theme.colors.secondary};
          outline-offset: 2px;
        }
      }
    }
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    
    i {
      margin-right: 15px;
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 18px;
      margin-top: 4px;
    }
    
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
      
      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 2px;
      }
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.colors.lightText};
    margin-right: 10px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: translateY(-5px);
    }
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.secondary};
      outline-offset: 2px;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 50px;
  padding: 20px 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      flex-direction: column;
      text-align: center;
      
      .copyright {
        margin-bottom: 15px;
      }
    }
  }
  
  .links {
    a {
      color: rgba(255, 255, 255, 0.8);
      margin-left: 20px;
      text-decoration: none;
      transition: color 0.3s ease;
      
      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
      
      &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.secondary};
        outline-offset: 2px;
      }
      
      @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        margin: 0 10px;
      }
    }
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterColumns>
          <FooterColumn>
            <Link to="/" aria-label="Home page">
              <img 
                src="/assets/images/logo-white.png" 
                alt="First Class Care Logo" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/assets/images/logo-white.png";
                }}
                style={{ maxHeight: '50px', objectFit: 'contain', width: 'auto' }}
              />
            </Link>
            <p>First Class Care provides safe, reliable transportation services for medical appointments, senior transportation, and more. Our professional drivers ensure every client receives the highest level of care with dignity and respect.</p>
            <SocialIcons aria-label="Social media links">
              <a href="https://facebook.com" aria-label="Follow us on Facebook">
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com" aria-label="Follow us on Twitter">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com" aria-label="Follow us on Instagram">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com" aria-label="Connect with us on LinkedIn">
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Quick Links</h3>
            <nav aria-label="Footer quick links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/booking">Book A Ride</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Our Services</h3>
            <nav aria-label="Footer services links">
              <ul>
                <li><Link to="/services#medical">Medical Appointments</Link></li>
                <li><Link to="/services#senior">Senior Transportation</Link></li>
                <li><Link to="/services#wheelchair">Wheelchair Transport</Link></li>
              </ul>
            </nav>
          </FooterColumn>
          
          <FooterColumn>
            <h3>Contact Info</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                6160 Summit Drive<br />
                Brooklyn Center, MN 55430
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+16512638764">(651) 263-8764</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:firstclasscaretransit@gmail.com">firstclasscaretransit@gmail.com</a>
            </div>
          </FooterColumn>
        </FooterColumns>
        
        <FooterBottom>
          <div className="container">
            <div className="copyright">
              &copy; {currentYear} First Class Care Transit. All Rights Reserved.
            </div>
            <div className="links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer; 