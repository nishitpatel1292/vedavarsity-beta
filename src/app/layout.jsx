import 'swiper/css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import Script from 'next/script';
import { mainURL } from 'data/seo';
import Layout from 'components/Layout';

export const metadata = {
  title: {
    default: 'Vedavarsity: Bhaktiyoga, Relationship & Vedic Lifestyle.'
  },
  description:
    'Explore the wisdom of the Srimad Bhagavatam and Bhagavad Gita, and learn Bhakti Yoga and value-based parenting. Join our "School of Love" to build meaningful relationships and connect with your family!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: mainURL,
    site_name: 'INSS',
    images: [
      {
        url: `${mainURL}/inss-logo.png`
      }
    ]
  },
  twitter: {
    handle: '@Vedavarsity',
    site: '@vedavarsity',
    cardType: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/inss-logo.png" type="image/x-icon" />
        <meta name="p:domain_verify" content="7faeda8d52539112a046a1943a022c62" />
        <meta
          name="keywords"
          content="ancient history, vedic history, school of love, gita     
        Wisdom, srimad Bhagavatam and Bhagavata purana"
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4DQH64"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </head>
      <body>
        <Layout>{children}</Layout>
        <NextScripts />
      </body>
    </html>
  );
}

function NextScripts() {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-16918572336`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16918572336');
          `
        }}
      />

      {isProduction && (
        <>
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "hbgl9z0cfv");
              `
            }}
          />
          <Script
            id="sendinblue-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  window.sib = {
                    equeue: [],
                    client_key: "v83lgprxcb0vw3vm330yybau"
                  };
                  window.sendinblue = {};
                  for (var j = ['track', 'identify', 'trackLink', 'page'], i = 0; i < j.length; i++) {
                    (function(k) {
                      window.sendinblue[k] = function() {
                        var arg = Array.prototype.slice.call(arguments);
                        (window.sib[k] || function() {
                          var t = {};
                          t[k] = arg;
                          window.sib.equeue.push(t);
                        })(arg[0], arg[1], arg[2], arg[3]);
                      };
                    })(j[i]);
                  }
                  var n = document.createElement("script"),
                      i = document.getElementsByTagName("script")[0];
                  n.type = "text/javascript", n.id = "sendinblue-js", n.async = !0, n.src = "https://sibautomation.com/sa.js?key=" + window.sib.client_key, i.parentNode.insertBefore(n, i), window.sendinblue.page();
                })();
              `
            }}
          />
        </>
      )}
    </>
  );
}
