import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Common Occurrence',
      description: 'Payment declines happen to everyone - expired cards, insufficient funds, or technical issues',
      value: '15%',
      background: 'linear-gradient(135deg, #0066cc 0%, #3388dd 100%)'
    },
    {
      title: 'Easy to Resolve',
      description: 'Most payment issues can be quickly resolved by updating your payment information',
      value: '90%',
      background: 'linear-gradient(135deg, #3388dd 0%, #0066cc 100%)'
    },
    {
      title: 'Act Quickly',
      description: 'Updating your payment information promptly ensures you receive your direct mail order on time',
      value: '24hrs',
      background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)'
    },
    {
      title: 'We Are Here to Help',
      description: 'Our team successfully helps customers complete their direct mail purchases every day',
      value: '24/7',
      background: 'linear-gradient(135deg, #00d4aa 0%, #00bfa5 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Why Payment Declines Happen</StatsSectionTitle>
        <StatsSectionDescription>
          We serve only direct mail clients. Payment declines are common and usually easy to fix. Here's what you should know.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
