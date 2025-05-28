import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  pickupAddress: string;
  dropoffAddress: string;
  serviceType: string;
  additionalInfo: string;
  isRoundTrip: boolean;
  returnDate?: string;
  returnTime?: string;
  insuranceInfo?: string;
  paymentMethod: string;
}

interface BookingFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  pickupAddress?: string;
  dropoffAddress?: string;
  serviceType?: string;
  returnDate?: string;
  returnTime?: string;
  insuranceInfo?: string;
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

const BookingSection = styled.section`
  padding: 80px 0;
`;

const BookingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr;
  }
`;

const BookingForm = styled(motion.div)`
  background-color: white;
  padding: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.medium};
  
  h2 {
    font-size: 2rem;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    display: inline-block;
    
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
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    font-size: 1rem;
    transition: border-color ${({ theme }) => theme.transitions.default};
    
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &[aria-invalid="true"] {
      border-color: #d32f2f;
      padding-right: 40px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23d32f2f'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/%3E%3C/svg%3E");
      background-position: right 10px center;
      background-repeat: no-repeat;
      background-size: 20px;
    }
  }
  
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .error {
    color: #d32f2f;
    font-size: 0.9rem;
    margin-top: 5px;
    display: flex;
    align-items: center;
    
    &::before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 5px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='%23d32f2f'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/%3E%3C/svg%3E");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  
  input {
    width: auto;
    margin-right: 10px;
  }
  
  label {
    display: inline;
    margin-bottom: 0;
  }
`;

const BookingInstructions = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 40px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  .step {
    background-color: white;
    padding: 30px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.light};
    margin-bottom: 30px;
    
    .step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      border-radius: 50%;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    h4 {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.colors.primary};
    }
    
    p {
      margin-bottom: 0;
    }
  }
  
  .info-box {
    background-color: ${({ theme }) => theme.colors.accent};
    padding: 30px;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    margin-top: 40px;
    
    h4 {
      font-size: 1.3rem;
      margin-bottom: 15px;
      color: ${({ theme }) => theme.colors.primary};
    }
    
    p {
      margin-bottom: 15px;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
  }
`;

const FormSuccess = styled.div`
  background-color: #4caf50;
  color: white;
  padding: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
  
  h3 {
    margin-bottom: 10px;
    color: white;
  }
  
  p {
    margin-bottom: 0;
  }
`;

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    pickupAddress: '',
    dropoffAddress: '',
    serviceType: '',
    additionalInfo: '',
    isRoundTrip: false,
    paymentMethod: 'private'
  });
  
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const validateForm = (): boolean => {
    const newErrors: BookingFormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s()-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time.trim()) {
      newErrors.time = 'Time is required';
    }
    
    if (!formData.pickupAddress.trim()) {
      newErrors.pickupAddress = 'Pickup address is required';
    }
    
    if (!formData.dropoffAddress.trim()) {
      newErrors.dropoffAddress = 'Dropoff address is required';
    }
    
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }
    
    if (formData.isRoundTrip) {
      if (!formData.returnDate?.trim()) {
        newErrors.returnDate = 'Return date is required for round trips';
      }
      
      if (!formData.returnTime?.trim()) {
        newErrors.returnTime = 'Return time is required for round trips';
      }
    }
    
    if (formData.paymentMethod === 'insurance' && (!formData.insuranceInfo || !formData.insuranceInfo.trim())) {
      newErrors.insuranceInfo = 'Insurance information is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          pickupAddress: '',
          dropoffAddress: '',
          serviceType: '',
          additionalInfo: '',
          isRoundTrip: false,
          paymentMethod: 'private'
        });
      }, 1500);
    }
  };
  
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
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
            Book Your Transportation
          </motion.h1>
        </div>
      </PageHeader>
      
      <BookingSection>
        <div className="container">
          <BookingContainer>
            <BookingForm
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Request a Ride</h2>
              
              {isSubmitted ? (
                <FormSuccess>
                  <h3>Thank You for Your Booking Request!</h3>
                  <p>We have received your transportation request and will contact you soon to confirm details and provide you with a final quote.</p>
                </FormSuccess>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Booking request form">
                  <div role="alert" aria-live="assertive" className="sr-only">
                    {Object.keys(errors).length > 0 ? 
                      'There are errors in the form. Please correct them and try again.' : ''}
                  </div>
                  
                  <FormGroup>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <div className="error" id="name-error">{errors.name}</div>}
                  </FormGroup>
                  
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <div className="error" id="email-error">{errors.email}</div>}
                    </FormGroup>
                    
                    <FormGroup>
                      <label htmlFor="phone">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && <div className="error" id="phone-error">{errors.phone}</div>}
                    </FormGroup>
                  </FormRow>
                  
                  <FormGroup>
                    <label htmlFor="serviceType">Service Type *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.serviceType}
                      aria-describedby={errors.serviceType ? "service-error" : undefined}
                    >
                      <option value="">Select a service</option>
                      <option value="Medical Appointments">Medical Appointments</option>
                      <option value="Senior Transportation">Senior Transportation</option>
                      <option value="Dialysis/Therapy">Dialysis/Therapy Appointment</option>
                      <option value="Wheelchair Transport">Wheelchair Accessible Transport</option>
                      <option value="Errands & Shopping">Errands & Shopping</option>
                      <option value="Social Events">Social Events & Activities</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.serviceType && <div className="error" id="service-error">{errors.serviceType}</div>}
                  </FormGroup>
                  
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="date">Date of Service *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={getTomorrowDate()}
                        aria-required="true"
                        aria-invalid={!!errors.date}
                        aria-describedby={errors.date ? "date-error" : undefined}
                      />
                      {errors.date && <div className="error" id="date-error">{errors.date}</div>}
                    </FormGroup>
                    
                    <FormGroup>
                      <label htmlFor="time">Time of Pickup *</label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.time}
                        aria-describedby={errors.time ? "time-error" : undefined}
                      />
                      {errors.time && <div className="error" id="time-error">{errors.time}</div>}
                    </FormGroup>
                  </FormRow>
                  
                  <CheckboxGroup>
                    <input
                      type="checkbox"
                      id="isRoundTrip"
                      name="isRoundTrip"
                      checked={formData.isRoundTrip}
                      onChange={handleChange}
                      aria-controls="return-trip-section"
                    />
                    <label htmlFor="isRoundTrip">This is a round trip</label>
                  </CheckboxGroup>
                  
                  {formData.isRoundTrip && (
                    <div id="return-trip-section">
                      <FormRow>
                        <FormGroup>
                          <label htmlFor="returnDate">Return Date *</label>
                          <input
                            type="date"
                            id="returnDate"
                            name="returnDate"
                            value={formData.returnDate || ''}
                            onChange={handleChange}
                            min={formData.date || getTomorrowDate()}
                            aria-required="true"
                            aria-invalid={!!errors.returnDate}
                            aria-describedby={errors.returnDate ? "return-date-error" : undefined}
                          />
                          {errors.returnDate && <div className="error" id="return-date-error">{errors.returnDate}</div>}
                        </FormGroup>
                        
                        <FormGroup>
                          <label htmlFor="returnTime">Return Time *</label>
                          <input
                            type="time"
                            id="returnTime"
                            name="returnTime"
                            value={formData.returnTime || ''}
                            onChange={handleChange}
                            aria-required="true"
                            aria-invalid={!!errors.returnTime}
                            aria-describedby={errors.returnTime ? "return-time-error" : undefined}
                          />
                          {errors.returnTime && <div className="error" id="return-time-error">{errors.returnTime}</div>}
                        </FormGroup>
                      </FormRow>
                    </div>
                  )}
                  
                  <FormGroup>
                    <label htmlFor="pickupAddress">Pickup Address *</label>
                    <input
                      type="text"
                      id="pickupAddress"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      placeholder="Full address including city, state, and zip code"
                      aria-required="true"
                      aria-invalid={!!errors.pickupAddress}
                      aria-describedby={errors.pickupAddress ? "pickup-error" : undefined}
                    />
                    {errors.pickupAddress && <div className="error" id="pickup-error">{errors.pickupAddress}</div>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="dropoffAddress">Dropoff Address *</label>
                    <input
                      type="text"
                      id="dropoffAddress"
                      name="dropoffAddress"
                      value={formData.dropoffAddress}
                      onChange={handleChange}
                      placeholder="Full address including city, state, and zip code"
                      aria-required="true"
                      aria-invalid={!!errors.dropoffAddress}
                      aria-describedby={errors.dropoffAddress ? "dropoff-error" : undefined}
                    />
                    {errors.dropoffAddress && <div className="error" id="dropoff-error">{errors.dropoffAddress}</div>}
                  </FormGroup>
                  
                  <FormGroup>
                    <label htmlFor="additionalInfo">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any special requirements or additional information"
                    ></textarea>
                  </FormGroup>
                  
                  <FormRow>
                    <FormGroup>
                      <label htmlFor="paymentMethod">Payment Method *</label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        aria-controls="insurance-info-section"
                      >
                        <option value="private">Private Pay</option>
                        <option value="insurance">Insurance</option>
                      </select>
                    </FormGroup>
                    
                    {formData.paymentMethod === 'insurance' && (
                      <FormGroup id="insurance-info-section">
                        <label htmlFor="insuranceInfo">Insurance Information</label>
                        <input
                          type="text"
                          id="insuranceInfo"
                          name="insuranceInfo"
                          value={formData.insuranceInfo || ''}
                          onChange={handleChange}
                          placeholder="Provider name and policy/member ID"
                          aria-required="true"
                          aria-invalid={!!errors.insuranceInfo}
                          aria-describedby={errors.insuranceInfo ? "insurance-error" : undefined}
                        />
                        {errors.insuranceInfo && <div className="error" id="insurance-error">{errors.insuranceInfo}</div>}
                      </FormGroup>
                    )}
                  </FormRow>
                  
                  <SubmitButton type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin" aria-hidden="true"></i> 
                        <span>Submitting...</span>
                      </>
                    ) : 'Submit Booking Request'}
                  </SubmitButton>
                </form>
              )}
            </BookingForm>
            
            <BookingInstructions
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>How It Works</h3>
              
              <div className="step">
                <div className="step-number">1</div>
                <h4>Request Your Ride</h4>
                <p>Fill out the booking form with your transportation details and submit your request.</p>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <h4>Confirmation</h4>
                <p>We'll contact you within 2 hours to confirm your booking details and provide pricing information.</p>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <h4>Enjoy Your Ride</h4>
                <p>On the day of service, our professional driver will arrive at your location at the scheduled time.</p>
              </div>
              
              <div className="info-box">
                <h4>Important Information</h4>
                <p>Please book your transportation at least 24 hours in advance when possible.</p>
                <p>For same-day emergency transportation, please call us directly at (651) 263-8764.</p>
                <p>Cancellations should be made at least 12 hours in advance to avoid cancellation fees.</p>
              </div>

              <div className="info-box">
                <h4>Insurance & Payment</h4>
                <p>We accept most insurance plans including Medicare and Medicaid for qualifying medical transportation.</p>
                <p>Please have your insurance information ready when booking. Our team will verify your coverage prior to service.</p>
                <p>For private pay, we accept all major credit cards, cash, and checks.</p>
              </div>
            </BookingInstructions>
          </BookingContainer>
        </div>
      </BookingSection>
    </>
  );
};

export default BookingPage; 