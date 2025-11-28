import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.williamscollection.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    // window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>We serve only direct mail clients</Tagline>
        <HeroTitle>
          Payment Declined?
          <Highlight>We Can Help.</Highlight>
        </HeroTitle>
        <HeroDescription>
          If your direct mail payment was declined, don't worry. We specialize in helping customers complete their 
          direct mail purchases after payment issues. Update your payment information securely and complete your 
          order with confidence.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Contact Us for Help
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
