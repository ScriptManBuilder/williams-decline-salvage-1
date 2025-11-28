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

const DigitalProductsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Digital Products Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              We serve only direct mail clients. This Digital Products Policy governs your purchase of digital products and services 
              through our direct mail offers. By purchasing or accessing digital products, you agree to the terms outlined in this policy.
            </LegalParagraph>
            <LegalParagraph>
              Digital products may include software downloads, digital content, online courses, ebooks, digital subscriptions, 
              streaming services, and any other downloadable or online-accessible products offered through direct mail.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Types of Digital Products</LegalSectionTitle>
            <LegalParagraph>
              Digital products purchased through direct mail may include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Software & Applications:</strong> Desktop software, mobile apps, and web-based applications
              </LegalListItem>
              <LegalListItem>
                <strong>Digital Content:</strong> Ebooks, audiobooks, music, videos, and other downloadable media
              </LegalListItem>
              <LegalListItem>
                <strong>Online Courses:</strong> Educational content, training programs, and instructional materials
              </LegalListItem>
              <LegalListItem>
                <strong>Subscriptions:</strong> Access to streaming services, digital publications, or membership content
              </LegalListItem>
              <LegalListItem>
                <strong>Digital Services:</strong> Cloud storage, online tools, and web-based services
              </LegalListItem>
              <LegalListItem>
                <strong>Game Content:</strong> Video games, in-game content, and gaming subscriptions
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Purchase and Payment</LegalSectionTitle>
            <LegalParagraph>
              When purchasing digital products through direct mail:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Pricing:</strong> All prices are as stated in your direct mail offer and include applicable taxes unless noted
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Methods:</strong> We accept major credit cards, debit cards, PayPal, and other payment methods as indicated
              </LegalListItem>
              <LegalListItem>
                <strong>One-Time Purchases:</strong> Most digital products are one-time purchases with lifetime access
              </LegalListItem>
              <LegalListItem>
                <strong>Subscriptions:</strong> Some products may include recurring subscriptions billed monthly or annually
              </LegalListItem>
              <LegalListItem>
                <strong>Auto-Renewal:</strong> Subscription products automatically renew unless you cancel before renewal
              </LegalListItem>
              <LegalListItem>
                <strong>Confirmation:</strong> You will receive an email confirmation with purchase details and access instructions
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Delivery and Access</LegalSectionTitle>
            <LegalParagraph>
              Digital products are delivered electronically:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Immediate Delivery:</strong> Most products are accessible immediately after successful payment
              </LegalListItem>
              <LegalListItem>
                <strong>Email Delivery:</strong> Download links, access codes, and login credentials are sent to your email
              </LegalListItem>
              <LegalListItem>
                <strong>Download Links:</strong> Software and digital content can be downloaded from the links provided
              </LegalListItem>
              <LegalListItem>
                <strong>Online Access:</strong> Streaming content and online courses are accessed through secure login portals
              </LegalListItem>
              <LegalListItem>
                <strong>License Keys:</strong> Software products may include license keys or activation codes
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Most digital products are delivered within minutes; some may take up to 24 hours
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>License and Usage Rights</LegalSectionTitle>
            <LegalParagraph>
              Your license to use digital products is subject to the following terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Personal Use License:</strong> Digital products are licensed for your personal, non-commercial use only
              </LegalListItem>
              <LegalListItem>
                <strong>Non-Transferable:</strong> Licenses cannot be shared, transferred, or resold to others
              </LegalListItem>
              <LegalListItem>
                <strong>Device Limits:</strong> Some products may have limits on the number of devices where they can be used
              </LegalListItem>
              <LegalListItem>
                <strong>Prohibited Uses:</strong> You may not copy, distribute, reverse engineer, or create derivative works
              </LegalListItem>
              <LegalListItem>
                <strong>Copyright:</strong> All digital products are protected by copyright and remain the property of their creators
              </LegalListItem>
              <LegalListItem>
                <strong>Revocation:</strong> Licenses may be revoked if you violate these terms or applicable laws
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Returns and Refunds for Digital Products</LegalSectionTitle>
            <LegalParagraph>
              Due to the nature of digital products, special refund terms apply:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>No Returns:</strong> Digital products cannot be returned once accessed, downloaded, or license key is provided
              </LegalListItem>
              <LegalListItem>
                <strong>Satisfaction Guarantee:</strong> Request a full refund within 7 days if you are not satisfied with the product
              </LegalListItem>
              <LegalListItem>
                <strong>Technical Issues:</strong> Full refund available if the product does not work as described and cannot be fixed
              </LegalListItem>
              <LegalListItem>
                <strong>Subscriptions:</strong> Cancel subscriptions anytime; no refunds for the current billing period
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Process:</strong> Email {process.env.REACT_APP_EMAIL_SUPPORT} with your order number and reason for refund
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms, please refer to our Refund Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Product Updates and Modifications</LegalSectionTitle>
            <LegalParagraph>
              Digital products may receive updates and improvements:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Free Updates:</strong> Software and digital content updates are typically provided free of charge
              </LegalListItem>
              <LegalListItem>
                <strong>Automatic Updates:</strong> Online services and subscriptions update automatically
              </LegalListItem>
              <LegalListItem>
                <strong>Download Updates:</strong> Software updates may require downloading new versions
              </LegalListItem>
              <LegalListItem>
                <strong>Compatibility:</strong> Updates may require newer operating systems or hardware
              </LegalListItem>
              <LegalListItem>
                <strong>No Guarantee:</strong> We are not obligated to provide updates or maintain products indefinitely
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Product Availability</LegalSectionTitle>
            <LegalParagraph>
              We work to ensure digital products remain accessible:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Download Access:</strong> Purchased products remain available for download from your account
              </LegalListItem>
              <LegalListItem>
                <strong>Online Services:</strong> Subscription services are available 24/7 with minimal scheduled downtime
              </LegalListItem>
              <LegalListItem>
                <strong>Maintenance:</strong> Occasional maintenance may temporarily limit access
              </LegalListItem>
              <LegalListItem>
                <strong>Backup Copies:</strong> We recommend downloading and backing up purchased digital products
              </LegalListItem>
              <LegalListItem>
                <strong>Service Changes:</strong> Online services may be modified or discontinued with reasonable notice
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Customer Support</LegalSectionTitle>
            <LegalParagraph>
              Support for digital products includes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Product Help:</strong> Instructions and FAQs for using your digital products
              </LegalListItem>
              <LegalListItem>
                <strong>Email Support:</strong> Contact us at {process.env.REACT_APP_EMAIL_SUPPORT} for assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Response Times:</strong> We respond to support requests within 24-48 hours
              </LegalListItem>
              <LegalListItem>
                <strong>Technical Issues:</strong> Help with download problems, installation, and access issues
              </LegalListItem>
              <LegalListItem>
                <strong>Product Questions:</strong> Answers about features, usage, and compatibility
              </LegalListItem>
              <LegalListItem>
                <strong>Scope:</strong> Support covers product functionality, not personal device troubleshooting
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Ownership and Export</LegalSectionTitle>
            <LegalParagraph>
              Regarding data processed through our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Your Data:</strong> You retain ownership of all data you input, upload, or generate using our products
              </LegalListItem>
              <LegalListItem>
                <strong>Data Export:</strong> You can export your data at any time in standard formats (CSV, JSON, XML)
              </LegalListItem>
              <LegalListItem>
                <strong>Data Portability:</strong> We provide tools to help you migrate to other platforms if you choose
              </LegalListItem>
              <LegalListItem>
                <strong>Post-Cancellation:</strong> After account cancellation, data is retained for 30 days, then permanently deleted
              </LegalListItem>
              <LegalListItem>
                <strong>Anonymized Data:</strong> We may retain anonymized, aggregated data for analytics and product improvement
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Termination and Suspension</LegalSectionTitle>
            <LegalParagraph>
              Your access to digital products may be terminated or suspended:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Non-Payment:</strong> Accounts with overdue payments may be suspended after grace period
              </LegalListItem>
              <LegalListItem>
                <strong>Terms Violation:</strong> Violation of our Terms of Service may result in immediate termination
              </LegalListItem>
              <LegalListItem>
                <strong>Fraudulent Activity:</strong> Suspected fraud or abuse will result in account suspension pending investigation
              </LegalListItem>
              <LegalListItem>
                <strong>Voluntary Cancellation:</strong> You may cancel your subscription at any time from your account settings
              </LegalListItem>
              <LegalListItem>
                <strong>Effect of Termination:</strong> Upon termination, your license to use our products ends immediately
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Warranty Disclaimer</LegalSectionTitle>
            <LegalParagraph>
              Our digital products are provided "as is" without warranties of any kind:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We do not warrant that our products will meet your specific requirements or expectations
              </LegalListItem>
              <LegalListItem>
                We do not guarantee that our products will be uninterrupted, timely, secure, or error-free
              </LegalListItem>
              <LegalListItem>
                We do not warrant that results obtained from using our products will be accurate or reliable
              </LegalListItem>
              <LegalListItem>
                Any material downloaded or accessed through our products is done at your own risk
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Some jurisdictions do not allow disclaimer of warranties, so some of the above may not apply to you.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, {process.env.REACT_APP_COMPANY_NAME} shall not be liable for:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Any indirect, incidental, special, consequential, or exemplary damages</LegalListItem>
              <LegalListItem>Loss of profits, revenue, data, or business opportunities</LegalListItem>
              <LegalListItem>Service interruptions or data loss</LegalListItem>
              <LegalListItem>Errors or bugs in the software</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claim related to digital products shall not exceed the amount you paid for the 
              product in the 12 months preceding the claim.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For questions about our digital products or this policy, contact:
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

export default DigitalProductsPage;
