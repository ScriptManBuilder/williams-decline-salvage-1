import React from 'react';
import {
  FeaturesContainer,
  FeaturesContent,
  SectionTitle,
  SectionDescription,
  FeaturesGrid,
  FeatureCard,
  IconWrapper,
  FeatureTitle,
  FeatureDescription,
  CTAButton
} from '../styles/FeaturesSection.styles';

const FeaturesSection: React.FC = () => {
  const handleLearnMore = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
      ),
      title: 'Smart Decline Code Mapping',
      description: 'Intelligent classification of decline reasons—soft vs. hard declines, issuer friction, insufficient funds, expired cards—to determine optimal recovery strategy.',
      color: '#0066cc'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'AI-Based Retry Logic',
      description: 'Machine learning algorithms determine the optimal timing, sequence, and routing for retry attempts, maximizing recovery rates while minimizing processor fees.',
      color: '#3388dd'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Secure Automated Recovery',
      description: 'PCI-compliant infrastructure handles all transaction data. No manual intervention required—your failed payments are automatically queued and reprocessed.',
      color: '#00d4aa'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Real-Time Reporting',
      description: 'Live dashboards show decline rates, recovery performance, revenue impact, and success metrics. Track ROI and identify trends across your payment flow.',
      color: '#ff6b6b'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
        </svg>
      ),
      title: 'Seamless Gateway Integration',
      description: 'Connect with all major payment processors—Stripe, Authorize.Net, Braintree, PayPal, and more. API-based integration takes minutes, not weeks.',
      color: '#a855f7'
    }
  ];

  return (
    <FeaturesContainer id="features">
      <FeaturesContent>
        <SectionTitle>What We Do</SectionTitle>
        <SectionDescription>
          Reduce involuntary churn. Recover failed payments. Increase net revenue.
          <br /><br />
          Every business loses revenue to declined transactions—insufficient funds, outdated cards, processor errors, soft declines, and more. 
          Our platform reprocesses these transactions using intelligent routing, strategic retries, and proprietary salvage logic to recover 
          a portion of the revenue you would otherwise lose.
        </SectionDescription>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper $color={feature.color}>
                {feature.icon}
              </IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
        <CTAButton onClick={handleLearnMore}>
          Learn How It Works
        </CTAButton>
      </FeaturesContent>
    </FeaturesContainer>
  );
};

export default FeaturesSection;
