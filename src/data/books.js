import ajamil from 'public/images/books/ajamil.png';
import bhakti from 'public/images/books/bhaktiyog.png';
import bhisma from 'public/images/books/bhisma.png';
import gahetsu from 'public/images/books/gahestu.png';
import putna from 'public/images/books/putna.png';
import shrida from 'public/images/books/shridamodarlila.png';
import vol1 from 'public/images/books/vol1.png';
import vol2 from 'public/images/books/vol2.png';
import yayaati from 'public/images/books/yayaati.png';

export const formats = {
  paperback: 'PAPERBACK',
  kindle: 'KINDLE EDITION'
};

export const lang = {
  en: 'English',
  hi: 'Hindi'
};

export const books = [
  {
    title: 'SRIMAD BHAGAVATA MAHAPURANAM - Vol 1',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: vol1,
    formats: [formats.paperback],
    language: lang.en,
    vendor: {
      amazon:
        'https://www.amazon.in/Srimad-Bhagavata-Mahapuranam-Vol-1/dp/9390976448/ref=sr_1_1?crid=2ZQTMTC2F66NF&keywords=SRIMAD+BHAGAVATA+MAHAPURANAM+-+Vol+1&qid=1660725416&s=books&sprefix=%2Cstripbooks%2C554&sr=1-1',
      flipkart:
        'https://www.flipkart.com/srimad-bhagavata-mahapuranam-1/p/itmcd8bffd9f3f04?pid=9789390976447&lid=LSTBOK97893909764473N92IZ&marketplace=FLIPKART&q=srimad+bhagavata+mahapuranam+-+vol+1&store=search.flipkart.com%2Fbks&srno=s_1_1&otracker=AS_Query_OrganicAutoSuggest_1_36_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_36_na_na_na&fm=organic&iid=50f3fddc-997e-403b-bdd7-b0dc55029d78.9789390976447.SEARCH&ppt=hp&ppn=homepage&ssid=tzzk9xgg9c0000001660726191779&qH=673d7235e59be3b4'
    }
  },
  {
    title: 'SRIMAD BHAGAVATA MAHAPURANAM - Vol 2',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: vol2,
    formats: [formats.paperback],
    language: lang.en,

    vendor: {
      amazon:
        'https://www.amazon.in/Srimad-Bhagavata-Mahapuranam-Vol-2/dp/9390976529/ref=sr_1_1?crid=1ZK88HYWV9MUZ&keywords=SRIMAD+BHAGAVATA+MAHAPURANAM+-+Vol+2&qid=1660725831&s=books&sprefix=srimad+bhagavata+mahapuranam+-+vol+2%2Cstripbooks%2C243&sr=1-1',
      flipkart:
        'https://www.flipkart.com/srimad-bhagavata-mahapuranam-2/p/itm5c4929f88ae88?pid=9789390976522&lid=LSTBOK9789390976522IGLOGE&marketplace=FLIPKART&q=srimad+bhagavata+mahapuranam+-+vol+1&store=search.flipkart.com%2Fbks&srno=s_1_2&otracker=AS_Query_OrganicAutoSuggest_1_36_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_1_36_na_na_na&fm=organic&iid=50f3fddc-997e-403b-bdd7-b0dc55029d78.9789390976522.SEARCH&ppt=hp&ppn=homepage&ssid=tzzk9xgg9c0000001660726191779&qH=673d7235e59be3b4'
    }
  },
  {
    title: 'Yayaati Charitra',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: yayaati,
    formats: [formats.paperback],
    language: lang.hi,
    vendor: {
      amazon:
        'https://www.amazon.in/Yayaati-Charitra-ISKCON-Bhagavata-Mahavidyalaya/dp/9390976685/ref=sr_1_1?crid=3HN9M9W9RL6LB&keywords=Yayaati+Charitra&qid=1660725853&s=books&sprefix=yayaati+charitra%2Cstripbooks%2C356&sr=1-1',
      flipkart:
        'https://www.flipkart.com/yayaati-charitra/p/itm0e2fefb731315?pid=9789390976683&lid=LSTBOK9789390976683V5WZOT&marketplace=FLIPKART&q=Yayaati+Charitra&store=search.flipkart.com%2Fbks&srno=s_1_1&otracker=search&otracker1=search&fm=search-autosuggest&iid=92afa2e3-f46a-4a03-bc37-a6fa09720e69.9789390976683.SEARCH&ppt=sp&ppn=sp&ssid=51tycshsf40000001660726224036&qH=4389d22df3b29b17'
    }
  },
  {
    title: 'Bhakti Yog',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: bhakti,
    formats: [formats.paperback],
    language: lang.hi,
    vendor: {
      amazon:
        'https://www.amazon.in/Bhakti-Yog-ISKCON-Bhagavata-Mahavidyalaya/dp/939097660X/ref=sr_1_2?crid=1J0I6IW1RVEA7&keywords=Bhakti+Yog&qid=1660725876&s=books&sprefix=%2Cstripbooks%2C464&sr=1-2',
      flipkart:
        'https://www.flipkart.com/bhakti-yog/p/itmc10de6f9b7be1?pid=9789390976607&lid=LSTBOK9789390976607FTLJDL&marketplace=FLIPKART&q=Bhakti+Yog&store=search.flipkart.com%2Fbks&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=a38e0038-dfc1-42b7-9acf-9254ae645624.9789390976607.SEARCH&ppt=sp&ppn=sp&ssid=3xmqveb0kw0000001660726244552&qH=3664aedce9b2417a'
    }
  },
  {
    title: 'Sri Damodar Lila',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: shrida,
    formats: [formats.paperback, formats.kindle],
    language: lang.en,
    vendor: {
      amazon:
        'https://www.amazon.in/Damodar-Srimad-Radha-Govinda-Goswami/dp/9389604664/ref=sr_1_1?crid=3HOCFP7IN3SGI&keywords=Sri+Damodar+Lila&qid=1660725895&s=books&sprefix=sri+damodar+lila%2Cstripbooks%2C250&sr=1-1'
    }
  },
  {
    title: 'Putna Uddhar',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: putna,
    formats: [formats.paperback, formats.kindle],
    language: lang.hi,
    vendor: {
      amazon:
        'https://www.amazon.in/Putna-Uddhar-Srimad-Govinda-Goswami/dp/9389604966/ref=sr_1_1?crid=SJJFJ8PD5L4Y&keywords=Putna+Uddhar&qid=1660725922&s=books&sprefix=putna+uddhar%2Cstripbooks%2C283&sr=1-1'
    }
  },
  {
    title: 'Bhishma Stuti',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: bhisma,
    formats: [formats.paperback, formats.kindle],
    language: lang.hi,
    vendor: {
      amazon:
        'https://www.amazon.in/Shree-Bhishma-Srimad-Govinda-Goswami/dp/9390025249/ref=sr_1_1?crid=XHNQILEREA7H&keywords=Bhishma+Stuti&qid=1660725995&s=books&sprefix=bhishma+stuti%2Cstripbooks%2C224&sr=1-1'
    }
  },
  {
    title: 'Grihastho ke Sadachar',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: gahetsu,
    formats: [formats.paperback, formats.kindle],
    language: lang.hi,
    vendor: {
      amazon:
        'https://www.amazon.in/Grihastho-Sadachar-Srimad-Govinda-Goswami/dp/9390507405/ref=sr_1_1?crid=8BQS5WEKG559&keywords=Grihastho+ke+Sadachar&qid=1660726028&s=books&sprefix=grihastho+ke+sadachar%2Cstripbooks%2C265&sr=1-1'
    }
  },
  {
    title: 'Ajamil Upakhyan',
    author: 'ISKCON Bhagavata Mahavidyalaya',
    image: ajamil,
    formats: [formats.paperback],
    language: lang.hi,
    vendor: {
      amazon:
        'https://www.amazon.in/Ajamil-Upakhyan-Shrimad-Govind-Goswami/dp/9355300018/ref=sr_1_1?crid=17BI0HZPXLCNG&keywords=Ajamil+Upakhyan&qid=1660726054&s=books&sprefix=grihastho+ke+sadachar%2Cstripbooks%2C205&sr=1-1',
      flipkart:
        'https://www.flipkart.com/ajamil-upakhyan/p/itm8a6888feb7e92?pid=9789355300010&lid=LSTBOK9789355300010XKTTF6&marketplace=FLIPKART&q=Ajamil+Upakhyan&store=search.flipkart.com&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=7ab86d5e-7f82-4827-94f1-c9876a09c097.9789355300010.SEARCH&ppt=sp&ppn=sp&ssid=ksbm3kyscg0000001660726382587&qH=7609febf684865dc'
    }
  }
];
