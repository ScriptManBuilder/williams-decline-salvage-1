import React from 'react';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTADescription,
  CTASectionButton,
  CTAFeaturesGrid,
  CTAFeatureItem,
  CTAIconWrapper,
  CTAFeatureContent,
  CTAFeatureTitle,
  CTAFeatureDescription
} from '../styles/CTASection.styles';

const CTASection: React.FC = () => {
  const handleGetStarted = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
      title: 'Secure & Fast',
      description: 'Quick and secure payment update process to complete your direct mail order'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      title: 'Easy Process',
      description: 'Simple step-by-step guidance to update payment information and complete your purchase'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Trusted & Safe',
      description: 'Your payment information is protected with bank-grade security and encryption'
    }
  ];

  return (
    <CTAContainer id="how-it-works">
      <CTAContent>
        <CTATitle>Need Help with Your Direct Mail Payment?</CTATitle>
        <CTADescription>
          We serve only direct mail clients. If your payment was declined, we are here to help you complete your purchase securely and easily.
        </CTADescription>
        <CTASectionButton onClick={handleGetStarted}>Get Started Now →</CTASectionButton>
        
        <CTAFeaturesGrid>
          {features.map((feature, index) => (
            <CTAFeatureItem key={index}>
              <CTAIconWrapper>
                {feature.icon}
              </CTAIconWrapper>
              <CTAFeatureContent>
                <CTAFeatureTitle>{feature.title}</CTAFeatureTitle>
                <CTAFeatureDescription>{feature.description}</CTAFeatureDescription>
              </CTAFeatureContent>
            </CTAFeatureItem>
          ))}
        </CTAFeaturesGrid>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
