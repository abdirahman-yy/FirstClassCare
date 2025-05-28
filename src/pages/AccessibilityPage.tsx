import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const AccessibilityContent = styled.section`
  padding: 80px 0;
`;

const ContentContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 1.8rem;
    margin: 40px 0 20px;
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
  
  h3 {
    font-size: 1.4rem;
    margin: 30px 0 15px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.7;
  }
  
  ul, ol {
    margin-bottom: 20px;
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
      line-height: 1.7;
    }
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
    
    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.secondary};
      outline-offset: 2px;
    }
  }
  
  .contact-box {
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 30px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin: 40px 0;
    
    h3 {
      margin-top: 0;
    }
    
    p:last-child {
      margin-bottom: 0;
    }
  }
`;

const AccessibilityPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <PageHeader>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Accessibility Statement
          </motion.h1>
        </div>
      </PageHeader>
      
      <AccessibilityContent>
        <div className="container">
          <ContentContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              FirstClass Care Transit is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
            </p>
            
            <h2>Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. FirstClass Care Transit's website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
            </p>
            
            <h2>Measures Taken</h2>
            <p>FirstClass Care Transit takes the following measures to ensure accessibility:</p>
            <ul>
              <li>Include accessibility as part of our mission statement</li>
              <li>Integrate accessibility into our procurement processes</li>
              <li>Regularly evaluate our site for accessibility issues</li>
              <li>Provide accessibility training for our staff</li>
              <li>Maintain clear color contrast ratios for text visibility</li>
              <li>Ensure keyboard navigation for all interactive elements</li>
              <li>Include proper form labels and error handling</li>
              <li>Provide alt text for all meaningful images</li>
              <li>Use semantic HTML for better screen reader compatibility</li>
              <li>Implement ARIA attributes where necessary</li>
            </ul>
            
            <h2>Technical Specifications</h2>
            <p>
              Accessibility of FirstClass Care Transit relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul>
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <p>
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>
            
            <h2>Assessment Approach</h2>
            <p>
              FirstClass Care Transit assessed the accessibility of our website by the following approaches:
            </p>
            <ul>
              <li>Self-evaluation</li>
              <li>External evaluation</li>
              <li>User feedback and testing</li>
            </ul>
            
            <h2>Known Accessibility Issues</h2>
            <p>
              Despite our best efforts to ensure the accessibility of FirstClass Care Transit, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
            </p>
            <ul>
              <li><strong>Maps:</strong> Our interactive maps may be difficult to navigate using keyboard-only navigation. We provide alternative text directions as an alternative.</li>
              <li><strong>Third-party content:</strong> Some third-party content embedded within our website may not be fully accessible.</li>
            </ul>
            
            <div className="contact-box">
              <h3>Feedback</h3>
              <p>
                We welcome your feedback on the accessibility of FirstClass Care Transit. Please let us know if you encounter accessibility barriers on our website:
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+16512638764">(651) 263-8764</a><br />
                <strong>Email:</strong> <a href="mailto:firstclasscaretransit@gmail.com">firstclasscaretransit@gmail.com</a><br />
                <strong>Postal Address:</strong> 6160 Summit Drive, Brooklyn Center, MN 55430
              </p>
              <p>
                We try to respond to feedback within 3 business days.
              </p>
            </div>
            
            <h2>Compatibility with Browsers and Assistive Technology</h2>
            <p>
              FirstClass Care Transit is designed to be compatible with the following assistive technologies:
            </p>
            <ul>
              <li>Screen readers (including NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnifiers</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            <p>
              The website is compatible with recent versions of major browsers including Chrome, Firefox, Safari, and Edge.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions or concerns about our accessibility statement or the accessibility of our website, please contact us:
            </p>
            <p>
              <Link to="/contact">Contact Us</Link>
            </p>
            
            <p>
              This statement was created on November 8, 2023, and was last updated on November 8, 2023.
            </p>
          </ContentContainer>
        </div>
      </AccessibilityContent>
    </>
  );
};

export default AccessibilityPage; 