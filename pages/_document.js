import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;800;900&display=swap|DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&isplay=swap"
          rel="stylesheet"
        />
        {/* <script>
          dangerouslySetInnerHTML=
          {{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWV1GM1VDT
            
            ', {
              page_path: window.location.pathname,
            });
          `,
          }}
        </script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
