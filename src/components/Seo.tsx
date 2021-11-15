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
