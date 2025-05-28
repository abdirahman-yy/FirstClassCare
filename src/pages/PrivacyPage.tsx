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

const PrivacyContent = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionPadding};
  
  .container {
    max-width: 800px;
  }
`;

const PrivacySection = styled(motion.div)`
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

const PrivacyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy - First Class Care Transit';
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
            Privacy Policy
          </motion.h1>
        </div>
      </PageHeader>
      
      <PrivacyContent>
        <div className="container">
          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p><strong>Effective Date:</strong> January 1, 2024</p>
            <p>
              At First Class Care Transit, we are committed to protecting your privacy and handling your personal 
              information with care and respect. This Privacy Policy explains how we collect, use, and protect 
              your information when you use our medical transportation services.
            </p>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Contact information (name, phone number, email address)</li>
              <li>Address and location information</li>
              <li>Medical appointment details and healthcare provider information</li>
              <li>Emergency contact information</li>
              <li>Payment and billing information</li>
              <li>Mobility assistance requirements</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Provide safe and reliable transportation services</li>
              <li>Schedule and coordinate your rides</li>
              <li>Communicate with you about your transportation needs</li>
              <li>Process payments and maintain billing records</li>
              <li>Ensure your safety during transportation</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information only in the following circumstances:
            </p>
            <ul>
              <li>With healthcare providers to coordinate your appointments</li>
              <li>With insurance companies for billing purposes (with your consent)</li>
              <li>With emergency services if required for your safety</li>
              <li>As required by law or legal process</li>
              <li>With your explicit consent for other purposes</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul>
              <li>Secure data transmission and storage</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Regular security training for our staff</li>
              <li>Secure disposal of personal information when no longer needed</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information we hold</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of non-essential communications</li>
              <li>File a complaint about our privacy practices</li>
            </ul>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <p>
              <strong>First Class Care Transit</strong><br />
              Phone: (763) 286-5064<br />
              Email: contact@firstclasscaretransit.com<br />
              Address: 6160 Summit Drive, Brooklyn Center, MN 55430
            </p>
          </PrivacySection>

          <PrivacySection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material 
              changes by posting the new Privacy Policy on our website with an updated effective date.
            </p>
          </PrivacySection>
        </div>
      </PrivacyContent>
    </>
  );
};

export default PrivacyPage; 