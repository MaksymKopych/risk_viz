import { Html, Head, Main, NextScript } from "next/document";
const document = () => {
  return (
    <Html>
      <Head>
        <title id="title">Maksym Kopych | Front End Developer</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          content="https://portfolio.maksymkopych.vercel.app/meta.jpeg"
          property="og:image"
          name="og:image"
        ></meta>
        <meta
          name="og:image"
          itemprop="image"
          content="https://portfolio.maksymkopych.vercel.app/meta.jpeg"
          property="og:image"
        ></meta>
        <meta
          name="twitter:image"
          content="https://portfolio.maksymkopych.vercel.app/meta.jpeg"
        />
        <meta
          name="twitter:image:src"
          content="https://portfolio.maksymkopych.vercel.app/meta.jpegg"
        />
        <meta property="og:site_name" content="Maksym Kopych: UI" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default document;
