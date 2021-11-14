import Layout from "../src/components/Layout";
import Seo from "../src/components/Seo";
import { IHomePageProps } from "../src/helpers/types";
import { generateImageUrl, getSanityData } from "../src/helpers/functions";
import GallerySection from "../src/components/GallerySection";

const Home = (props: IHomePageProps) => {
  const { metaData, presents } = props;
  return (
    <Layout pageTitle={metaData.mainHeading}>
      <Seo
        title={metaData.title}
        description={metaData.description}
        twitterImageUrl={
          generateImageUrl({ image: metaData.socialImage }) ?? ""
        }
        canonicalUrl="some url"
      />
      <GallerySection presents={presents} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const { metaData, presents } = await getSanityData();
  return {
    props: { metaData, presents },
  };
}
