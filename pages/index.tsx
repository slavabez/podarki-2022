import Layout from "../src/components/Layout";
import Seo from "../src/components/Seo";
import { IHomePageProps, IMetaData, IPresent } from "../src/helpers/types";
import { generateImageUrl } from "../src/helpers/functions";

const Home = (props: IHomePageProps) => {
  const { metaData, presents } = props;
  return (
    <Layout pageTitle={metaData.mainHeading}>
      <Seo
        title={metaData.title}
        description={metaData.description}
        twitterImageUrl={generateImageUrl({ image: metaData.socialImage })}
        canonicalUrl="some url"
      />
      <img
        src={generateImageUrl({ image: presents[0].cover, height: 200 })}
        alt=""
      />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPresents = await fetch(
    "https://vw14nmwz.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'present'%5D"
  );
  const allData = await fetch(
    "https://vw14nmwz.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'siteSettings'%5D%5B0%5D"
  );

  const presents = (await allPresents.json()) as { result: IPresent[] };
  const metaData = (await allData.json()) as { result: IMetaData };

  return {
    props: { presents: presents.result, metaData: metaData.result },
  };
}
