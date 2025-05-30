import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderContainerProps {
  $scrolled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  background-color: ${({ $scrolled, theme }) => ($scrolled ? 'white' : theme.colors.primary)};
  box-shadow: ${({ $scrolled }) => ($scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ $scrolled }) => ($scrolled ? '15px 0' : '20px 0')};
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled(motion.div)`
  max-width: 200px;
  
  img {
    width: auto;
    height: auto;
    transition: all 0.3s ease;
    max-height: 50px;
    object-fit: contain;
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

const NavMenu = styled.nav<{ isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: white;
    padding: 20px 0 40px;
    box-shadow: -8px 0 32px rgba(0, 43, 84, 0.15);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 280px;
    padding: 15px 0 30px;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 60px; /* Start below the header area */
  }
`;

const NavItem = styled(motion.li)`
  margin-left: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-left: 0;
    margin-bottom: 0;
    width: 100%;
    
    &:last-child {
      margin-top: 30px;
      padding: 0 30px;
    }
  }
`;

const NavLink = styled(Link)<{ $active: boolean; $scrolled: boolean }>`
  color: ${({ $active, $scrolled, theme }) => 
    $scrolled 
      ? ($active ? theme.colors.primary : theme.colors.text)
      : theme.colors.lightText
  };
  font-weight: 600;
  position: relative;
  padding: 8px 0;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ $scrolled, theme }) => 
      $scrolled ? theme.colors.primary : theme.colors.lightText};
    bottom: 0;
    left: 0;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${({ $scrolled, theme }) => 
      $scrolled ? theme.colors.primary : 'white'};
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    font-size: 1.1rem;
    display: block;
    width: 100%;
    padding: 18px 30px;
    color: ${({ $active, theme }) => 
      $active ? theme.colors.primary : '#34495e'};
    font-weight: ${({ $active }) => $active ? '700' : '600'};
    border-bottom: 1px solid #ecf0f1;
    
    &::after {
      background-color: ${({ theme }) => theme.colors.primary};
      left: 30px;
      width: ${({ $active }) => ($active ? 'calc(100% - 60px)' : '0')};
    }
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      background-color: #f8f9fa;
      
      &::after {
        width: calc(100% - 60px);
      }
    }
  }
`;

const BookButton = styled(Link)<{ $scrolled: boolean }>`
  background-color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : 'transparent'};
  color: ${({ $scrolled }) => $scrolled ? 'white' : 'white'};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 12px 24px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  margin-left: 40px;
  display: inline-block;
  box-shadow: ${({ $scrolled }) => $scrolled ? '0 4px 10px rgba(0, 43, 84, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.2)'};
  border: 2px solid ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : 'white'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 43, 84, 0.25);
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-left: 0;
    margin-top: 0;
    width: calc(100% - 60px);
    text-align: center;
    padding: 16px 24px;
    font-size: 1.1rem;
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    
    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      transform: none;
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const MobileMenuBtn = styled.button<{ $scrolled: boolean }>`
  display: none;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : 'white'};
  z-index: 1100;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 43, 84, 0.4);
  z-index: 1000;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMenuOpen]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <HeaderContainer $scrolled={scrolled}>
      <div className="container">
        <HeaderWrapper>
          <Logo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" onClick={closeMenu}>
              <img 
                src={scrolled ? "/assets/images/logo.png" : "/assets/images/logo-white.png"}
                alt="First Class Care Transit" 
                style={{ maxHeight: scrolled ? '45px' : '45px' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  // Fallback if the image fails to load
                  if (scrolled) {
                    target.src = "/assets/images/logo.png";
                  } else {
                    target.src = "/assets/images/logo-white.png";
                  }
                }}
              />
            </Link>
          </Logo>
          
          <MobileMenuBtn 
            $scrolled={scrolled}
            onClick={toggleMenu} 
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </MobileMenuBtn>
          
          <AnimatePresence>
            {isMenuOpen && (
              <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
              />
            )}
          </AnimatePresence>
          
          <NavMenu 
            isOpen={isMenuOpen} 
            id="mobile-menu" 
            ref={menuRef}
            aria-hidden={!isMenuOpen && window.innerWidth <= 768}
            role="navigation"
            aria-label="Main Navigation"
          >
            <NavList as={motion.ul} variants={navVariants} initial="hidden" animate="visible">
              <NavItem variants={itemVariants}>
                <NavLink to="/" $active={location.pathname === '/'} onClick={closeMenu} $scrolled={scrolled}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem variants={itemVariants}>
                <NavLink to="/about" $active={location.pathname === '/about'} onClick={closeMenu} $scrolled={scrolled}>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem variants={itemVariants}>
                <NavLink to="/services" $active={location.pathname === '/services'} onClick={closeMenu} $scrolled={scrolled}>
                  Our Services
                </NavLink>
              </NavItem>
              <NavItem variants={itemVariants}>
                <NavLink to="/contact" $active={location.pathname === '/contact'} onClick={closeMenu} $scrolled={scrolled}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem variants={itemVariants}>
                <BookButton to="/booking" onClick={closeMenu} $scrolled={scrolled}>
                  Book a Ride
                </BookButton>
              </NavItem>
            </NavList>
          </NavMenu>
        </HeaderWrapper>
      </div>
    </HeaderContainer>
  );
};

export default Header; 