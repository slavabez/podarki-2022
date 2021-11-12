import type { NextPage } from "next";
import Layout from "../src/components/Layout";
import Seo from "../src/components/Seo";

interface IHomePageProps {
  metaData: {
    aboutUsHeading: string;
    aboutUsParagraph: string;
    addressOneContent: string;
    addressOneHeading: string;
    addressTwoContent: string;
    addressTwoHeading: string;
    catalogue: string;
    catalogueHeading: string;
    contactsHeading: string;
    description: string;
    mainHeading: string;
    socialImage: any;
    title: string;
  },
  presents: any;
}

const Home = (props: IHomePageProps) => {
  const {
    metaData,
    presents
  } = props;
  return <Layout
    pageTitle={metaData.title}
  >
    <Seo
      title={metaData.title}
      description={metaData.description}
      twitterImageUrl={metaData.socialImage}
      canonicalUrl="some url"
      />
  </Layout>;
};

export default Home;

export async function getStaticProps() {
  const allPresents = await fetch('https://vw14nmwz.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20\'present\'%5D');
  const allData = await fetch('https://vw14nmwz.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20\'siteSettings\'%5D%5B0%5D');

  const presents = await allPresents.json();
  const metaData = await allData.json();

  return {
    props: { presents, metaData: metaData.result },
  }
}
