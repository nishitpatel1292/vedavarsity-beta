export const mainURL = 'https://vedavarsity.com';

const defaultSEO = {
  defaultTitle:
    'Vedavarsity: Explore Vedic Wisdom, Gita Insights, Puranas, Srimad Bhagavatam, Parenting & Relationship Courses at the School of Love',
  description:
    'Explore profound teachings of the Bhagavad Gita at Iskcon Bhagavata Mahavidyalaya. Learn Bhakti Shashtri, Teacher Training Course, and IDC. Enrol Now!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: mainURL, //TODO: Change this on Domain name change
    site_name: 'INSS',
    images: [
      {
        url: `${mainURL}/inss-logo.png`
      }
    ]
  },
  twitter: {
    handle: '@Vedavarsity',
    site: '@vedavaristy',
    cardType: 'summary_large_image'
  }
};

export default defaultSEO;
