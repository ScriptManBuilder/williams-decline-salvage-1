import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Why was my direct mail payment declined?',
      answer: 'Payment declines happen for many reasons: expired card, insufficient funds, incorrect billing address, or temporary bank issues. Don\'t worry - it\'s common and easy to fix. Simply update your payment information and we\'ll process your order.'
    },
    {
      question: 'How do I update my payment information?',
      answer: 'Simply click the secure link in the email we sent you, or contact us directly. You\'ll be guided through a secure process to update your payment details. The entire process takes less than 2 minutes.'
    },
    {
      question: 'Is it safe to update my payment information?',
      answer: 'Absolutely. We use bank-grade encryption (PCI DSS Level 1 certified) to protect your payment information. We never store your complete card details. Your security is our top priority.'
    },
    {
      question: 'Is this a legitimate email/website?',
      answer: 'Yes! We work directly with the company you placed your direct mail order with. You can verify by checking the email sender, calling the company directly, or contacting us at the phone number listed on this website.'
    },
    {
      question: 'What if I don\'t want to complete my purchase?',
      answer: 'That\'s completely fine! You\'re under no obligation. If you\'ve changed your mind or don\'t want to proceed with your direct mail order, simply ignore our messages or contact us to cancel.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can reach us by phone, email, or through the contact form on this website. Our support team is here to help answer any questions about your direct mail order or payment.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our payment recovery platform
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
