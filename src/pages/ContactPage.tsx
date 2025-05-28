import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Form field interface
interface FormField {
  name: string;
  value: string;
  error: string;
}

// Contact page header
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

// Contact intro section
const ContactIntro = styled.section`
  padding: 80px 0 40px;
  text-align: center;
`;

const IntroText = styled(motion.div)`
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

// Contact content section with form and info
const ContactContent = styled.section`
  padding: 0 0 80px;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

// Contact form styles
const ContactForm = styled(motion.form)`
  background-color: white;
  padding: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
`;

const FormTitle = styled.h3`
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const FormInput = styled.input<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ $hasError, theme }) => ($hasError ? 'red' : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  transition: border ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) => 
      $hasError ? 'red' : theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ $hasError, theme }) => 
      $hasError ? 'rgba(255, 0, 0, 0.1)' : 'rgba(26, 117, 193, 0.1)'};
  }
`;

const FormTextarea = styled.textarea<{ $hasError?: boolean }>`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ $hasError, theme }) => ($hasError ? 'red' : theme.colors.border)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) => 
      $hasError ? 'red' : theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ $hasError, theme }) => 
      $hasError ? 'rgba(255, 0, 0, 0.1)' : 'rgba(26, 117, 193, 0.1)'};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.85rem;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 14px 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: translateY(0);
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 20px;
  font-weight: 600;
`;

// Contact info styles
const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: white;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: white;
`;

const InfoItem = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: flex-start;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 20px;
`;

const InfoContent = styled.div`
  flex: 1;
  
  h4 {
    margin-bottom: 5px;
    color: white;
  }
  
  p, a {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
  }
  
  a:hover {
    color: white;
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: white;
  font-size: 16px;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
`;

// Map section
const MapSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const MapTitle = styled.h2`
  text-align: center;
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

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// FAQ section
const FAQSection = styled.section`
  padding: 80px 0;
`;

const FAQTitle = styled.h2`
  text-align: center;
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

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

interface AccordionProps {
  isOpen: boolean;
}

const FAQItem = styled.div`
  margin-bottom: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  overflow: hidden;
`;

const FAQQuestion = styled.button<AccordionProps>`
  width: 100%;
  text-align: left;
  padding: 20px;
  background-color: ${({ isOpen, theme }) => 
    isOpen ? theme.colors.primary : 'white'};
  color: ${({ isOpen }) => isOpen ? 'white' : 'inherit'};
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.default};
  font-size: 1.1rem;
  
  &:hover {
    background-color: ${({ isOpen, theme }) => 
      isOpen ? theme.colors.primary : theme.colors.accent};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: -2px;
  }
  
  span {
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
    transition: transform ${({ theme }) => theme.transitions.default};
    font-size: 1.2rem;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 20px;
  font-size: 1rem;
  line-height: 1.6;
  
  p {
    margin: 0;
    padding: 20px 0;
  }
`;

// CTA section
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
    gap: 15px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      flex-direction: column;
      max-width: 250px;
      margin: 0 auto;
    }
  }
`;

const ContactPage: React.FC = () => {
  // State for form fields and submission
  const [formFields, setFormFields] = useState<{[key: string]: FormField}>({
    name: { name: 'name', value: '', error: '' },
    email: { name: 'email', value: '', error: '' },
    phone: { name: 'phone', value: '', error: '' },
    subject: { name: 'subject', value: '', error: '' },
    message: { name: 'message', value: '', error: '' }
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // FAQ state
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Form validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Name is required' : '';
      case 'email':
        return value.trim() === '' 
          ? 'Email is required' 
          : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
            ? 'Invalid email format' 
            : '';
      case 'message':
        return value.trim() === '' ? 'Message is required' : '';
      default:
        return '';
    }
  };
  
  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: validateField(name, value)
      }
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    let hasErrors = false;
    const updatedFields = { ...formFields };
    
    Object.keys(formFields).forEach(key => {
      const field = formFields[key];
      const error = validateField(field.name, field.value);
      
      updatedFields[key] = {
        ...field,
        error
      };
      
      if (error) {
        hasErrors = true;
      }
    });
    
    setFormFields(updatedFields);
    
    if (!hasErrors) {
      setSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
          setFormFields({
            name: { name: 'name', value: '', error: '' },
            email: { name: 'email', value: '', error: '' },
            phone: { name: 'phone', value: '', error: '' },
            subject: { name: 'subject', value: '', error: '' },
            message: { name: 'message', value: '', error: '' }
          });
        }, 3000);
      }, 1500);
    }
  };
  
  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  // FAQ data
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We currently serve the greater metropolitan area including all suburbs within a 50-mile radius of downtown. We're continually expanding our service area, so please contact us if you're unsure if we serve your location."
    },
    {
      question: "How far in advance should I book transportation?",
      answer: "We recommend booking at least 24-48 hours in advance to ensure availability. For regular appointments, such as dialysis or therapy, we offer recurring scheduling. For urgent transportation needs, please call us directly to check immediate availability."
    },
    {
      question: "Do you accept insurance for transportation services?",
      answer: "Yes, we work with several insurance providers including Medicare Advantage plans and Medicaid. Coverage varies by plan and service type. Please contact us with your insurance information so we can verify your coverage prior to booking."
    },
    {
      question: "Can someone accompany me during transportation?",
      answer: "Absolutely. We understand that some clients may need or want a family member or caregiver to accompany them. There's no additional charge for one companion to ride along. Please let us know when booking if someone will be accompanying you."
    },
    {
      question: "What COVID-19 safety measures do you have in place?",
      answer: "We follow all CDC guidelines for transportation services. Our vehicles are thoroughly sanitized between clients, our drivers wear appropriate PPE, and we maintain proper ventilation. We also screen our staff daily for symptoms and offer contactless service when possible."
    },
    {
      question: "What if I need to cancel my reservation?",
      answer: "We understand that plans change. We request at least 24 hours' notice for cancellations when possible. For non-emergency cancellations with less than 24 hours' notice, a cancellation fee may apply. Emergency cancellations will be handled on a case-by-case basis."
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
            Contact Us
          </motion.h1>
        </div>
      </PageHeader>
      
      <ContactIntro>
        <div className="container">
          <IntroText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2>Get In Touch</h2>
            <p>Have questions about our services? Need to schedule transportation? We're here to help. Reach out to us using any of the methods below, and our team will get back to you promptly.</p>
          </IntroText>
        </div>
      </ContactIntro>
      
      <ContactContent>
        <div className="container">
          <ContactGrid>
            <ContactForm
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
            >
              <FormTitle>Send Us a Message</FormTitle>
              
              {submitSuccess && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! We'll be in touch soon.
                </SuccessMessage>
              )}
              
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your full name" 
                  value={formFields.name.value}
                  onChange={handleInputChange}
                  $hasError={!!formFields.name.error}
                />
                {formFields.name.error && <ErrorMessage>{formFields.name.error}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your email address" 
                  value={formFields.email.value}
                  onChange={handleInputChange}
                  $hasError={!!formFields.email.error}
                />
                {formFields.email.error && <ErrorMessage>{formFields.email.error}</ErrorMessage>}
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="Your phone number" 
                  value={formFields.phone.value}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="What's this about?" 
                  value={formFields.subject.value}
                  onChange={handleInputChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  value={formFields.message.value}
                  onChange={handleInputChange}
                  $hasError={!!formFields.message.error}
                />
                {formFields.message.error && <ErrorMessage>{formFields.message.error}</ErrorMessage>}
              </FormGroup>
              
              <SubmitButton type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
            
            <ContactInfo>
              <InfoTitle>Contact Information</InfoTitle>
              
              <InfoItem>
                <InfoIcon>
                  <i className="fas fa-map-marker-alt"></i>
                </InfoIcon>
                <InfoContent>
                  <h4>Our Location</h4>
                  <p>6160 Summit Drive<br />Brooklyn Center, MN 55430</p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <i className="fas fa-phone-alt"></i>
                </InfoIcon>
                <InfoContent>
                  <h4>Phone Number</h4>
                  <p><a href="tel:+16512638764">(651) 263-8764</a></p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <i className="fas fa-envelope"></i>
                </InfoIcon>
                <InfoContent>
                  <h4>Email Address</h4>
                  <p><a href="mailto:firstclasscaretransit@gmail.com">firstclasscaretransit@gmail.com</a></p>
                </InfoContent>
              </InfoItem>
              
              <InfoItem>
                <InfoIcon>
                  <i className="fas fa-clock"></i>
                </InfoIcon>
                <InfoContent>
                  <h4>Office Hours</h4>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed</p>
                </InfoContent>
              </InfoItem>
              
              <SocialLinks>
                <SocialLink href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </SocialLink>
                <SocialLink href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </SocialLink>
              </SocialLinks>
            </ContactInfo>
          </ContactGrid>
        </div>
      </ContactContent>
      
      <MapSection>
        <div className="container" style={{ textAlign: 'center' }}>
          <MapTitle>Find Us</MapTitle>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.8!2d-93.3265!3d45.0781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbb%3A0x939fc9842f7aee07!2s6160%20Summit%20Dr%20N%2C%20Brooklyn%20Center%2C%20MN%2055430!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="First Class Care Transit Location"
            />
          </MapContainer>
        </div>
      </MapSection>
      
      <FAQSection>
        <div className="container" style={{ textAlign: 'center' }}>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          
          <FAQGrid role="region" aria-label="Frequently Asked Questions">
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion 
                  isOpen={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  {faq.question}
                  <span aria-hidden="true">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </FAQQuestion>
                
                {openFAQ === index && (
                  <FAQAnswer
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    role="region"
                  >
                    <p>{faq.answer}</p>
                  </FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQGrid>
        </div>
      </FAQSection>
      
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
              Our friendly team is here to assist you with all your transportation needs.
            </motion.p>
            <motion.div 
              className="buttons"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/booking" className="btn btn-primary">Book Now</Link>
              <a href="tel:+16512638764" className="btn btn-secondary">Call Us</a>
            </motion.div>
          </CTAContent>
        </div>
      </CTASection>
    </>
  );
};

export default ContactPage; 