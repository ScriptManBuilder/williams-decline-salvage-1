import React from 'react';
import {
  FooterContainer,
  FooterContent,
  FooterGrid,
  FooterSection,
  FooterLogo,
  CompanyInfo,
  FooterSectionTitle,
  LinkList,
  LinkItem,
  FooterLink,
  ContactCard,
  ContactItem,
  ContactLabel,
  ContactValue,
  FooterBottom,
  PaymentLogos,
  PaymentLogo
} from '../styles/Footer.styles';

const Footer: React.FC = () => {
  const brandName = process.env.REACT_APP_BRAND_NAME || 'Revylant';
  const companyName = process.env.REACT_APP_COMPANY_NAME || 'The Williams Collection Inc.';
  const companyAddress = process.env.REACT_APP_COMPANY_ADDRESS || 'E 2ND ST 5830 Casper WY US 82609';
  const companyPhone = process.env.REACT_APP_PHONE_DISPLAY || '+1 517-258-3818';
  const supportEmail = process.env.REACT_APP_EMAIL_SUPPORT || 'support@williamscollection.com';

  const handleScrollTo = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${id}`;
    }
  };

  return (
    <FooterContainer id="contact">
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <FooterLogo>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              </svg>
              {brandName}
            </FooterLogo>
            <CompanyInfo>
              <p>{companyName}</p>
              <p>{companyAddress}</p>
              <p>Established March 2023</p>
            </CompanyInfo>
            <PaymentLogos>
              <PaymentLogo>
                <svg viewBox="0 0 750 471" fill="none">
                  <rect width="750" height="471" rx="40" fill="#F7F7F7"/>
                  <rect x="20" y="20" width="710" height="431" rx="30" fill="white" stroke="#D1D5DB" stroke-width="2"/>
                  <path d="M278.198 334.228L311.583 138.633H364.446L331.107 334.228H278.198ZM524.307 143.717C513.281 139.099 495.684 134.228 473.77 134.228C421.494 134.228 384.803 161.367 384.545 199.897C384.033 228.935 410.053 244.884 429.466 254.635C449.134 264.546 455.344 270.766 455.087 279.495C454.571 293.027 437.228 299.247 420.911 299.247C398.997 299.247 387.455 296.683 368.558 288.982L360.857 285.39L352.64 331.664C365.2 337.369 388.486 342.496 412.545 342.753C467.56 342.753 503.736 315.872 504.248 274.623C504.505 251.081 489.473 233.226 457.396 218.45C439.799 208.956 429.209 202.993 429.466 193.935C429.466 185.979 438.514 177.509 457.912 177.509C474.745 177.252 487.305 181.613 497.122 186.235L502.249 188.799L510.466 143.717ZM661.614 138.633H619.091C605.816 138.633 595.741 142.481 589.531 156.013L506.055 334.228H560.812L571.917 304.374H638.096L644.564 334.228H693.691L651.426 138.633H661.614ZM585.94 264.546C589.016 255.817 603.791 214.568 603.791 214.568C603.276 215.341 607.381 204.751 610.2 196.022L614.305 215.083C614.305 215.083 626.607 271.024 629.425 282.824H585.94V264.546ZM232.898 138.633L180.622 271.282L174.928 242.759C165.364 211.968 138.986 178.54 109.647 161.367L156.316 334.228H211.331L294.807 138.891H232.898V138.633Z" fill="#1434CB"/>
                  <path d="M131.561 138.633H45.8838L45.1104 143.46C111.804 159.409 157.447 198.196 174.928 242.759L157.074 156.271C154.256 142.997 144.434 139.099 131.561 138.633Z" fill="#F6A500"/>
                </svg>
              </PaymentLogo>
              <PaymentLogo>
                <svg viewBox="0 0 750 471" fill="none">
                  <rect width="750" height="471" rx="40" fill="#F7F7F7"/>
                  <rect x="20" y="20" width="710" height="431" rx="30" fill="white" stroke="#D1D5DB" stroke-width="2"/>
                  <circle cx="283" cy="235.5" r="140" fill="#EB001B"/>
                  <circle cx="467" cy="235.5" r="140" fill="#FF5F00"/>
                  <path d="M375 134.5c-28 23-46 58-46 101s18 78 46 101c28-23 46-58 46-101s-18-78-46-101z" fill="#F79E1B"/>
                </svg>
              </PaymentLogo>
            </PaymentLogos>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Platform</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#features')}>What We Do</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#stats')}>How It Works</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#how-it-works')}>Results & Proof Points</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink as="button" onClick={() => handleScrollTo('#faq')}>Who We Serve</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Legal</FooterSectionTitle>
            <LinkList>
              <LinkItem>
                <FooterLink href="/terms">Terms & Conditions</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/refund">Refund Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/digital-products">Digital Products Policy</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/company-info">Company Information</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/support">Merchant Support</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/ccpa-notice">CCPA Notice</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-processing">Data Processing Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/data-subject-request">Data Subject Request Form</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/e-signature">E-Signature Disclosure Agreement</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/end-user-terms">End-User Terms of Service</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink href="/merchant-disclosure">Payment Disclosure</FooterLink>
              </LinkItem>
            </LinkList>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>Contact Sales</FooterSectionTitle>
            <ContactCard>
              <ContactItem>
                <ContactLabel>Sales Email</ContactLabel>
                <ContactValue as="div" style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  {supportEmail}
                </ContactValue>
              </ContactItem>
              <ContactItem>
                <ContactLabel>Sales Phone</ContactLabel>
                <ContactValue href={`tel:${companyPhone.replace(/\s+/g, '')}`}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  {companyPhone}
                </ContactValue>
              </ContactItem>
            </ContactCard>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <p>&copy; {new Date().getFullYear()} {companyName} All rights reserved.</p>
          <p>Enterprise decline-salvage platform for merchants. PCI-DSS compliant. GDPR & CCPA ready.</p>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
