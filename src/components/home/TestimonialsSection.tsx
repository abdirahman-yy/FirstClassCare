import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialData {
  quote: string;
  author: string;
}

const TestimonialsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 50px;
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

const TestimonialSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  height: 250px;
  overflow: hidden;
`;

const TestimonialItem = styled(motion.div)`
  position: absolute;
  width: 100%;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  
  p {
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 20px;
    position: relative;
    
    &::before, &::after {
      content: '"';
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.secondary};
      position: absolute;
      opacity: 0.5;
    }
    
    &::before {
      top: -10px;
      left: -15px;
    }
    
    &::after {
      bottom: -30px;
      right: -15px;
    }
  }
`;

const TestimonialAuthor = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 10px;
`;

const SliderDot = styled.button<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : 'rgba(0, 43, 84, 0.2)'};
  border: none;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : 'rgba(0, 43, 84, 0.4)'};
  }
`;

const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      quote: "FirstClass Care has been a blessing for my mother. The drivers are always on time and so caring with her.",
      author: "Sarah T."
    },
    {
      quote: "I've never felt safer or more comfortable using a transportation service. They truly treat you like family.",
      author: "Robert J."
    },
    {
      quote: "When I need to get to my weekly appointments, I know I can count on FirstClass Care to be there for me.",
      author: "Mary D."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };
  
  return (
    <TestimonialsContainer>
      <div className="container">
        <SectionTitle>What Our Riders Say</SectionTitle>
        
        <TestimonialSlider>
          <AnimatePresence initial={false} mode='wait' custom={direction}>
            <TestimonialItem
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <p>{testimonials[currentIndex].quote}</p>
              <TestimonialAuthor>- {testimonials[currentIndex].author}</TestimonialAuthor>
            </TestimonialItem>
          </AnimatePresence>
        </TestimonialSlider>
        
        <SliderControls>
          {testimonials.map((_, index) => (
            <SliderDot
              key={index}
              active={currentIndex === index}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </SliderControls>
      </div>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection; 