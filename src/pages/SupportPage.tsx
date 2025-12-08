import React, { useState } from 'react';
import {
  SupportContainer,
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImageWrapper,
  HeroImage,
  ContactInfo,
  PhoneNumber,
  PhoneIcon,
  AvailabilityText,
  ActionButtons,
  ActionButton,
  HelpSection,
  HelpTitle,
  HelpGrid,
  HelpCard,
  HelpIcon,
  HelpCardTitle,
  HelpCardDescription,
  FAQSection,
  FAQSectionTitle,
  FAQSectionDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/SupportPage.styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does decline salvage work for direct mail campaigns?',
      answer: 'Our decline salvage platform specializes in recovering failed payments from direct mail and catalog orders. When a transaction declines, our system automatically initiates intelligent retry sequences optimized for mail-order transactions. We use alternative routing, timing optimization, and risk-aware logic to recover up to 15% of declined payments. The entire process is automated and works seamlessly with your existing payment infrastructure.'
    },
    {
      question: 'What makes your solution different for direct mail merchants?',
      answer: 'Unlike generic payment recovery tools, we specifically serve direct mail businesses—catalog companies, mail-order retailers, and postal campaign marketers. Our algorithms understand the unique challenges of mail-acquired customers: delayed order fulfillment, phone orders, and customer demographics typical of direct mail responders. We optimize retry timing and communication specifically for this acquisition channel.'
    },
    {
      question: 'How do I integrate with your platform?',
      answer: 'Integration is straightforward and typically takes 1-2 weeks. After signing up, you receive API credentials and access to our documentation. Your payment gateway forwards declined transactions to our engine via secure API. We support all major processors used by direct mail merchants. Our technical team provides hands-on onboarding support to ensure smooth integration.'
    },
    {
      question: 'What is the best way to reach merchant support?',
      answer: 'We\'re here to help! You can reach our merchant support team by phone during business hours (Monday-Friday, 9 AM - 6 PM EST), via email anytime, or through our contact form. For technical integration questions, we offer dedicated API support. For urgent issues affecting your revenue recovery, call us directly and we\'ll prioritize your request.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const helpTopics = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
      ),
      title: 'High decline rates on catalog orders',
      description: 'Experiencing excessive payment failures on direct mail campaigns? We can analyze your decline patterns and implement recovery strategies to salvage lost revenue.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      title: 'Mail-order payment processing issues',
      description: 'Struggling with failed transactions from postal campaigns? We help optimize payment routing and retry logic specifically for mail-order business models.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: 'Revenue recovery setup',
      description: 'Need help configuring automated decline salvage for your direct mail campaigns? We guide you through integration and workflow optimization to maximize recovered transactions.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
        </svg>
      ),
      title: 'Gateway integration questions',
      description: 'Questions about connecting your payment gateway to our decline salvage platform? We support all major processors and offer dedicated onboarding assistance for direct mail merchants.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'Campaign performance analytics',
      description: 'Want to understand recovery metrics for your direct mail campaigns? We provide detailed dashboards showing salvaged revenue, success rates, and ROI by campaign.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
        </svg>
      ),
      title: 'Billing and commission structure',
      description: 'Questions about our performance-based pricing? We explain our commission model, monthly fees, and how you only pay when we successfully recover failed transactions.'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@joinserenity.ai';
  };

  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <Header />
      <SupportContainer>
        <SupportHero>
          <div>
            <HeroImageWrapper>
              <HeroImage src="/heroSupport3.jpg" alt="Merchant Platform Support" />
            </HeroImageWrapper>
            
            <HeroContent>
              <HeroTitle>Merchant Support for Direct Mail Businesses</HeroTitle>
              <HeroDescription>Need help with declined payments or revenue recovery? We're here to assist with your direct mail transaction challenges.</HeroDescription>
            
              <ContactInfo>
                <PhoneIcon>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </PhoneIcon>
                <div>
                  <PhoneNumber>{process.env.REACT_APP_PHONE_DISPLAY}</PhoneNumber>
                  <AvailabilityText>Available Monday - Friday, 9 AM - 6 PM EST</AvailabilityText>
                </div>
              </ContactInfo>
            
              <ActionButtons>
                <ActionButton onClick={handleContactClick}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </svg>
                  Get Help
                </ActionButton>
              </ActionButtons>
            </HeroContent>
          </div>
        </SupportHero>
        
        <HelpSection>
          <HelpTitle>How Can We Help You Today?</HelpTitle>
          <HelpGrid>
            {helpTopics.map((topic, index) => (
              <HelpCard key={index} onClick={handleContactClick} style={{ cursor: 'pointer' }}>
                <HelpIcon>{topic.icon}</HelpIcon>
                <HelpCardTitle>{topic.title}</HelpCardTitle>
                <HelpCardDescription>{topic.description}</HelpCardDescription>
              </HelpCard>
            ))}
          </HelpGrid>
        </HelpSection>

        <FAQSection>
          <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
          <FAQSectionDescription>Quick answers to common merchant questions about decline salvage for direct mail</FAQSectionDescription>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)} $isOpen={openFAQIndex === index}>
                  <span>{faq.question}</span>
                  <FAQIcon $isOpen={openFAQIndex === index}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </FAQIcon>
                </FAQQuestion>
                {openFAQIndex === index && (
                  <FAQAnswer>
                    {faq.answer}
                    <div style={{ marginTop: '1rem' }}>
                      <ActionButton 
                        onClick={handleContactClick} 
                        style={{ 
                          fontSize: '0.9rem', 
                          padding: '0.6rem 1.25rem',
                          display: 'inline-flex'
                        }}
                      >
                        Contact Support
                      </ActionButton>
                    </div>
                  </FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>
      </SupportContainer>
      <Footer />
    </>
  );
};

export default SupportPage;
