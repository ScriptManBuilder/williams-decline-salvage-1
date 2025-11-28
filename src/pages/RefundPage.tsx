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

const RefundPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Refund Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Our Commitment to Customer Satisfaction</LegalSectionTitle>
            <LegalParagraph>
              At {process.env.REACT_APP_COMPANY_NAME}, we are committed to providing excellent customer service. 
              This Refund Policy outlines the circumstances under which refunds may be issued for purchases made through our direct mail service and the process for requesting a refund.
            </LegalParagraph>
            <LegalParagraph>
              By using our services, you acknowledge that you have read and understood this Refund Policy and agree to be bound by its terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>General Refund Policy</LegalSectionTitle>
            <LegalParagraph>
              For purchases made through our direct mail service, the following refund terms apply:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Order Cancellation:</strong> You may cancel your order within 24 hours of purchase for a full refund 
                if the product has not yet shipped.
              </LegalListItem>
              <LegalListItem>
                <strong>Product Returns:</strong> Physical products may be returned within 30 days of delivery for a full refund, 
                provided they are in original, unopened condition.
              </LegalListItem>
              <LegalListItem>
                <strong>Digital Products:</strong> Digital products and services are generally non-refundable once accessed 
                or downloaded, unless required by law.
              </LegalListItem>
              <LegalListItem>
                <strong>Damaged or Defective Items:</strong> If you receive a damaged or defective product, contact us within 
                7 days for a replacement or full refund.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Eligible Refund Scenarios</LegalSectionTitle>
            <LegalParagraph>
              Refunds may be considered in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Non-Delivery:</strong> If your order was not delivered within the stated timeframe and cannot be located, 
                you may be eligible for a full refund.
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Errors:</strong> If you were charged incorrectly due to a system error, we will refund the 
                incorrect amount immediately upon verification.
              </LegalListItem>
              <LegalListItem>
                <strong>Duplicate Charges:</strong> If you were accidentally charged twice for the same order, we will 
                refund the duplicate charge.
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized Charges:</strong> If you can demonstrate that charges were made without your authorization, 
                we will investigate and issue a refund if warranted.
              </LegalListItem>
              <LegalListItem>
                <strong>Product Not as Described:</strong> If the product you received significantly differs from the 
                description in your direct mail offer, you may be eligible for a refund or replacement.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Non-Refundable Items and Services</LegalSectionTitle>
            <LegalParagraph>
              The following are not eligible for refunds under any circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Digital products that have been accessed, downloaded, or used</LegalListItem>
              <LegalListItem>Products returned after 30 days from delivery date</LegalListItem>
              <LegalListItem>Products that are not in original, unopened condition (unless defective)</LegalListItem>
              <LegalListItem>Custom or personalized products made specifically for you</LegalListItem>
              <LegalListItem>Products marked as final sale or clearance items</LegalListItem>
              <LegalListItem>Gift cards or promotional codes once redeemed</LegalListItem>
              <LegalListItem>Shipping and handling fees (unless order was not delivered)</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Request a Refund</LegalSectionTitle>
            <LegalParagraph>
              To request a refund, please follow these steps:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Support:</strong> Email us at {process.env.REACT_APP_EMAIL_SUPPORT} or call 
                {process.env.REACT_APP_PHONE_DISPLAY} with your refund request
              </LegalListItem>
              <LegalListItem>
                <strong>Provide Information:</strong> Include your account email, transaction ID or invoice number, 
                reason for refund request, and any supporting documentation
              </LegalListItem>
              <LegalListItem>
                <strong>Review Process:</strong> Our team will review your request within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Decision Notification:</strong> You will receive an email with our decision and next steps
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Processing:</strong> If approved, refunds are processed within 10-14 business days to 
                your original payment method
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Processing Time</LegalSectionTitle>
            <LegalParagraph>
              Once a refund is approved:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit/Debit Cards:</strong> 5-10 business days (may vary by bank)</LegalListItem>
              <LegalListItem><strong>PayPal:</strong> 3-5 business days</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> 7-14 business days</LegalListItem>
              <LegalListItem><strong>Other Payment Methods:</strong> Up to 14 business days</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Processing times may be longer depending on your financial institution. We are not responsible for delays 
              caused by banks or payment processors.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Store Credits</LegalSectionTitle>
            <LegalParagraph>
              In some cases, we may offer store credits as an alternative to refunds:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Store credits can be applied to future purchases</LegalListItem>
              <LegalListItem>Credits are valid for 12 months from the date of issuance</LegalListItem>
              <LegalListItem>Credits are non-transferable and cannot be redeemed for cash</LegalListItem>
              <LegalListItem>Unused credits expire and cannot be refunded</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Chargebacks and Disputes</LegalSectionTitle>
            <LegalParagraph>
              If you initiate a chargeback or payment dispute with your bank or payment provider:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>We encourage you to contact us first to resolve the issue directly</LegalListItem>
              <LegalListItem>Chargebacks may result in immediate suspension or termination of your account</LegalListItem>
              <LegalListItem>We reserve the right to dispute illegitimate chargebacks</LegalListItem>
              <LegalListItem>You may be liable for chargeback fees and legal costs if the chargeback is found to be fraudulent</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Order Cancellation Policy</LegalSectionTitle>
            <LegalParagraph>
              You may cancel your order in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Orders can be cancelled within 24 hours of purchase for a full refund</LegalListItem>
              <LegalListItem>Once an order has shipped, it cannot be cancelled but may be returned per our return policy</LegalListItem>
              <LegalListItem>To cancel an order, contact customer support immediately</LegalListItem>
              <LegalListItem>Refunds for cancelled orders are processed within 5-10 business days</LegalListItem>
              <LegalListItem>You will receive a cancellation confirmation email once processed</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Force Majeure</LegalSectionTitle>
            <LegalParagraph>
              We are not liable for refunds or service disruptions caused by circumstances beyond our reasonable control, including:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Natural disasters, pandemics, or acts of God</LegalListItem>
              <LegalListItem>Government actions, regulations, or restrictions</LegalListItem>
              <LegalListItem>Internet service provider failures or network outages</LegalListItem>
              <LegalListItem>Third-party service disruptions (payment gateways, hosting providers)</LegalListItem>
              <LegalListItem>Cyberattacks, security breaches, or malicious activities by third parties</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Policy</LegalSectionTitle>
            <LegalParagraph>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon 
              posting to our website. Your continued use of our services after any changes constitutes acceptance of the 
              updated policy. Material changes will be communicated via email to registered users.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For refund requests or questions about this policy, please contact:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
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

export default RefundPage;
