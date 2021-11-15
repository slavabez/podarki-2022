import React from "react";
import Head from "next/head";

interface ISeoProps {
  title: string;
  description: string;
  twitterImageUrl: string;
  canonicalUrl: string;
}

function Seo(props: ISeoProps) {
  const { title, twitterImageUrl, canonicalUrl, description } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="application-name" content="Подарки 2022" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Подарки 2022" />
      <meta name="description" content="Сказка Подарки 2022 - онлайн каталог" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />

      <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/icons/touch-icon-ipad.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/icons/touch-icon-iphone-retina.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="/icons/touch-icon-ipad-retina.png"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={twitterImageUrl} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImageUrl} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default Seo;
