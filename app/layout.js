// // app/layout.js

// import './globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export const metadata = {
//   title: 'Pankaj Khatri',
//   description: 'Portfolio website',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" type="image/x-icon" href="assets/PK-favicon.png" />
//         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" />
//         <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" type="text/css" />
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" />
//       </head>
//       <body>
//         {children}
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
//         <script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js"></script>
//         <script src="/js/scripts.js"></script>
//       </body>
//     </html>
//   );
// }


import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

export const metadata = {
  title: 'Pankaj Khatri',
  description: 'Portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="assets/PK-favicon.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.js" strategy="lazyOnload" />
        <Script src="/js/scripts.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

