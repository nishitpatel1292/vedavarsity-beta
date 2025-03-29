'use client';
import Script from 'next/script';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './navigation/Header';
import { INST_URL, PORTAL_NAME } from '../data/constants';
import { Footer } from './footer/footer';
import logo from '../../public/inss-logo.png';
const Layout = ({ children, className, SEO }) => {
  if (typeof window !== 'undefined') {
    var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?63473';
    var s = document.createElement('script');
    s.async = true;
    s.src = url;
    var options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: '#00E785',
        ctaText: 'Chat with us',
        borderRadius: '25',
        marginLeft: '0',
        marginRight: '20',
        marginBottom: '20',
        ctaIconWATI: true,
        position: 'right'
      },
      brandSetting: {
        brandName: 'Vedavarsity',
        brandSubTitle: 'Preserving the legacy, Promoting the truth, Propagating the wisdom',
        brandImg: 'https://www.vedavarsity.com/inss-logo.png',
        welcomeText: 'Hare Krishna!\nDo you have any question?',
        messageText: 'Hare Krishna! I have some Inquiry',
        backgroundColor: '#fff',
        ctaText: 'Athāto brahma jijñāsā',
        borderRadius: '25',
        autoShow: false,
        phoneNumber: '919634998911'
      }
    };
    s.onload = function () {
      CreateWhatsappChatWidget(options);
    };
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
  return (
    <React.Fragment>
      <iframe
        src={`${INST_URL}/js-sdks/signup-sdk/iframe.php?subdomain=${PORTAL_NAME}`}
        id="iframe"
        className="iframe"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 10000,
          display: 'none'
        }}
      />
      <div>
        <Toaster />
      </div>
      <Header />

      <main className={className}>{children}</main>
      <Footer />
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script
        src={`${process.env.NEXT_PUBLIC_INST_URL}/js-sdks/signup-sdk/signup-sdk.js?v=2.8`}
        strategy="beforeInteractive"
      />
      <Script src="/js/inst.js" />
    </React.Fragment>
  );
};

export default Layout;
