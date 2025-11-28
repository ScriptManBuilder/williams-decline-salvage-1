import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  LegalPageContainer,
  LegalHeroSection,
  LegalTitle,
  LegalContent,
  LegalSection,
  LegalSectionTitle,
  LegalParagraph,
  LegalList,
  LegalListItem
} from '../styles/LegalPages.styles';

const CompanyInfoPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Company Information</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>About Our Company</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} provides customer payment assistance services for direct mail 
              purchases. We help customers complete their orders when payment issues occur, ensuring a smooth 
              and secure transaction process.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We serve only direct mail clients. If you received a direct mail offer and are experiencing 
              payment difficulties, we are here to help you complete your purchase securely and conveniently.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Company Details</LegalSectionTitle>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Legal Business Name:
            </LegalParagraph>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Address:
            </LegalParagraph>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Contact Information:
            </LegalParagraph>
            <LegalParagraph>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours:
            </LegalParagraph>
            <LegalParagraph>
              Monday - Friday: 9:00 AM - 6:00 PM EST
            </LegalParagraph>
            <LegalParagraph>
              Saturday - Sunday: Closed
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Our Services</LegalSectionTitle>
            <LegalParagraph>
              We provide customer payment assistance services for direct mail orders:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Support:</strong> Help with updating payment information when your card is declined
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Processing:</strong> Safe and secure payment processing for your direct mail orders
              </LegalListItem>
              <LegalListItem>
                <strong>Order Assistance:</strong> Support with completing your purchase and tracking your order
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Service:</strong> Friendly assistance for any questions about your direct mail purchase
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Established in {process.env.REACT_APP_COMPANY_BIRTH}, we are committed to providing excellent 
              customer service and ensuring your satisfaction with your direct mail purchases.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Billing Information</LegalSectionTitle>
            <LegalParagraph>
              When you complete a payment through our service, the following may appear on your credit card or 
              bank statement:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Billing Descriptor:</strong> "WILLIAMS COLLECTION" or similar variation
              </LegalListItem>
              <LegalListItem>
                <strong>Contact Phone:</strong> {process.env.REACT_APP_PHONE_DISPLAY} will appear on your statement 
                for customer service
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              If you do not recognize a charge on your statement with this descriptor, please contact us immediately 
              at {process.env.REACT_APP_PHONE_DISPLAY} or {process.env.REACT_APP_EMAIL_SUPPORT}. We are here to help 
              resolve any concerns you may have.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Payment Methods</LegalSectionTitle>
            <LegalParagraph>
              We accept the following payment methods to complete your direct mail order:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit Cards:</strong> Visa, Mastercard, American Express, Discover</LegalListItem>
              <LegalListItem><strong>Debit Cards:</strong> Visa Debit, Mastercard Debit with major card networks</LegalListItem>
              <LegalListItem><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay (where available)</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All payment information is processed securely through industry-leading payment processors. 
              We never store your complete credit card information on our servers.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Security and Privacy</LegalSectionTitle>
            <LegalParagraph>
              Your security and privacy are our top priorities:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Secure Encryption:</strong> All payment information is encrypted using industry-standard 
                SSL/TLS encryption
              </LegalListItem>
              <LegalListItem>
                <strong>PCI Compliance:</strong> We maintain Payment Card Industry Data Security Standard (PCI-DSS) compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Protection:</strong> Your personal information is protected according to our Privacy Policy
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Processing:</strong> Payments are processed through certified secure payment processors
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For detailed information about how we protect your data, please review our Privacy Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Customer Support</LegalSectionTitle>
            <LegalParagraph>
              We are here to help with any questions or concerns:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Phone Support:</strong> Call us at {process.env.REACT_APP_PHONE_DISPLAY} during business hours
              </LegalListItem>
              <LegalListItem>
                <strong>Email Support:</strong> Send us an email at {process.env.REACT_APP_EMAIL_SUPPORT} anytime
              </LegalListItem>
              <LegalListItem>
                <strong>Response Time:</strong> We aim to respond to all inquiries within 24 hours on business days
              </LegalListItem>
              <LegalListItem>
                <strong>Support Topics:</strong> Payment issues, order questions, account updates, general inquiries
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our customer support team is dedicated to ensuring you have a positive experience with your 
              direct mail purchase.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Policy</LegalSectionTitle>
            <LegalParagraph>
              Our refund policy is designed to be fair and transparent:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Order Cancellation:</strong> Cancel within 24 hours of purchase for a full refund 
                (if not yet shipped)
              </LegalListItem>
              <LegalListItem>
                <strong>Product Returns:</strong> Return physical products within 30 days in original condition
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Processing:</strong> Approved refunds are processed within 5-10 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Contact for Refunds:</strong> Email {process.env.REACT_APP_EMAIL_SUPPORT} with your 
                order details
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms and conditions, please refer to our Refund Policy document.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Dispute Resolution</LegalSectionTitle>
            <LegalParagraph>
              If you have concerns about a transaction:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Us First:</strong> Reach out to us at {process.env.REACT_APP_EMAIL_SUPPORT} or 
                {process.env.REACT_APP_PHONE_DISPLAY}
              </LegalListItem>
              <LegalListItem>
                <strong>Quick Response:</strong> We will investigate your concern and respond within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Fair Resolution:</strong> We are committed to resolving disputes fairly and promptly
              </LegalListItem>
              <LegalListItem>
                <strong>Escalation:</strong> If needed, disputes can be escalated to your card issuer
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Terms and Policies</LegalSectionTitle>
            <LegalParagraph>
              Your use of our services is governed by the following documents:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Terms and Conditions:</strong> Complete terms governing the use of our services
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> How we collect, use, and protect your personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Policy:</strong> Terms and conditions for refunds and cancellations
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All terms and policies are available on our website. By completing a transaction, you agree to 
              these terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For any questions about our company or services:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Customer Service Department
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#5a6c7d' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </LegalParagraph>
          </LegalSection>
        </LegalContent>
      </LegalPageContainer>
      <Footer />
    </>
  );
};

export default CompanyInfoPage;
