import { Html, Head, Main, NextScript } from "next/document";
const document = () => {
  return (
    <Html>
      <Head>
        <title id="title">Maksym Kopych | Risk Viz</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Maksym Kopych: Risk Viz" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
