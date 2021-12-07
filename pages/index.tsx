import Layout from "../src/components/Layout";
import Seo from "../src/components/Seo";
import { IMetaData, IPresent } from "../src/helpers/types";
import { getSanityData } from "../src/helpers/functions";
import GallerySection from "../src/components/GallerySection";
import ContentSection from "../src/components/ContentSection";

interface IHomePageProps {
  metaData: IMetaData;
  presents: IPresent[];
}

const Home = (props: IHomePageProps) => {
  const { metaData, presents } = props;
  return (
    <Layout
      pageTitle={metaData.mainHeading}
      catalogueURL={metaData.catalogueURL}
      footerHeading={metaData.contactsHeading}
      addressOneHeading={metaData.addressOneHeading}
      addressOneText={metaData.addressOneContent}
      addressTwoHeading={metaData.addressTwoHeading}
      addressTwoText={metaData.addressTwoContent}
    >
      <Seo
        title={metaData.title}
        description={metaData.description}
        twitterImageUrl={metaData.socialImageURL}
        canonicalUrl="some url"
      />
      <ContentSection
        heading={metaData.aboutUsHeading}
        text={metaData.aboutUsParagraph}
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
