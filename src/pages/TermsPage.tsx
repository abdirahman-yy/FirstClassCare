import React, { useEffect } from 'react';
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

const TermsContent = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
  
  .container {
    max-width: 800px;
  }
`;

const TermsSection = styled(motion.div)`
  margin-bottom: 40px;
  
  h2 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
  
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 15px;
    font-size: 1.2rem;
  }
  
  p {
    margin-bottom: 15px;
    line-height: 1.7;
    color: #333;
  }
  
  ul {
    margin-bottom: 15px;
    padding-left: 20px;
    
    li {
      margin-bottom: 8px;
      color: #333;
      list-style-type: disc;
    }
  }
`;

const TermsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Terms of Service - First Class Care Transit';
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
            Terms of Service
          </motion.h1>
        </div>
      </PageHeader>
      
      <TermsContent>
        <div className="container">
          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p><strong>Effective Date:</strong> January 1, 2024</p>
            <p>
              Welcome to First Class Care Transit. These Terms of Service ("Terms") govern your use of our 
              medical transportation services. By using our services, you agree to these Terms.
            </p>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Our Services</h2>
            <p>First Class Care Transit provides:</p>
            <ul>
              <li>Medical appointment transportation</li>
              <li>Hospital discharge transportation</li>
              <li>Wheelchair accessible transportation</li>
              <li>Non-emergency medical transportation</li>
              <li>Senior care transportation services</li>
            </ul>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Booking and Cancellation</h2>
            <h3>Booking Requirements</h3>
            <ul>
              <li>Advance booking is required for all transportation services</li>
              <li>Accurate pickup and destination information must be provided</li>
              <li>Special assistance needs must be communicated at time of booking</li>
              <li>Valid contact information is required</li>
            </ul>
            
            <h3>Cancellation Policy</h3>
            <ul>
              <li>Cancellations must be made at least 2 hours before scheduled pickup</li>
              <li>Late cancellations may incur charges</li>
              <li>No-shows may be charged the full service fee</li>
              <li>Emergency cancellations will be handled on a case-by-case basis</li>
            </ul>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Payment Terms</h2>
            <ul>
              <li>Payment is due at the time of service unless prior arrangements are made</li>
              <li>We accept cash, credit cards, and insurance coverage (where applicable)</li>
              <li>Insurance coverage must be verified prior to service</li>
              <li>Private pay rates are available upon request</li>
              <li>Returned checks may incur additional fees</li>
            </ul>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Safety and Conduct</h2>
            <h3>Passenger Responsibilities</h3>
            <ul>
              <li>Follow all safety instructions from our drivers</li>
              <li>Use provided safety equipment (seatbelts, wheelchair restraints)</li>
              <li>Inform us of any medical conditions that may affect transportation</li>
              <li>Treat our staff with respect and courtesy</li>
              <li>Arrive at pickup location on time</li>
            </ul>
            
            <h3>Prohibited Items and Behavior</h3>
            <ul>
              <li>Weapons, illegal substances, or hazardous materials</li>
              <li>Smoking or vaping in vehicles</li>
              <li>Abusive, threatening, or disruptive behavior</li>
              <li>Consumption of alcohol during transport</li>
            </ul>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Limitation of Liability</h2>
            <p>
              First Class Care Transit provides transportation services with reasonable care and skill. 
              However, we cannot guarantee arrival times due to factors beyond our control such as 
              traffic, weather, or road conditions.
            </p>
            <p>
              Our liability is limited to the cost of the transportation service. We are not responsible 
              for missed appointments, personal property loss, or consequential damages unless caused 
              by our gross negligence.
            </p>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Medical Information and Privacy</h2>
            <ul>
              <li>Medical information is kept confidential in accordance with HIPAA regulations</li>
              <li>Information is only shared as necessary for transportation coordination</li>
              <li>Emergency contact information may be used in case of medical emergencies</li>
              <li>You have the right to review and correct your medical transportation records</li>
            </ul>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2>Modifications and Termination</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on our 
              website with an updated effective date. We may terminate services for violation of these Terms.
            </p>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2>Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <p>
              <strong>First Class Care Transit</strong><br />
              Phone: (763) 286-5064<br />
              Email: contact@firstclasscaretransit.com<br />
              Address: 6160 Summit Drive, Brooklyn Center, MN 55430
            </p>
          </TermsSection>

          <TermsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Minnesota. Any disputes will be 
              resolved in the courts of Hennepin County, Minnesota.
            </p>
          </TermsSection>
        </div>
      </TermsContent>
    </>
  );
};

export default TermsPage; 