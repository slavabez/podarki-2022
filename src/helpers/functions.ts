import { IMetaData, IPresent, ISanityImage } from "./types";
import mockMetadata from "./metadata_mock.json";
import mockProducts from "./products_mock.json";

interface IParams {
  image: ISanityImage;
  height?: number;
}

const getSanityBaselineUrl = () => {
  const sanityId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!sanityDataset || !sanityId)
    throw new Error(`Sanity project ID or dataset not defined`);

  return `https://${sanityId}.api.sanity.io/v1/data/query/${sanityDataset}`;
};


export function generateImageUrl(params: IParams) {
  const { image, height } = params;
  const sanityId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

  if (!sanityDataset || !sanityId)
    throw new Error(`Sanity project ID or dataset not defined`);

  try {
    const [_, assetName, origWidthHeight, origFileFormat] =
      image.asset._ref.split("-");

    let url = `https://cdn.sanity.io/images/${sanityId}/${sanityDataset}/${assetName}-${origWidthHeight}.${origFileFormat}`;

    if (height) url = `${url}?h=${height}`;
    return url;
  } catch (e) {
    console.error(`Failed to generate image from this object`);
    console.error(params);
    return "";
  }
}

export async function getSanityData() {
  if (process.env.NODE_ENV !== "production") {
    return {
      presents: mockProducts.result,
      metaData: mockMetadata.result,
    };
  }
  const allPresents = await fetch(
    `${getSanityBaselineUrl()}?query=*%5B_type%20%3D%3D%20'present'%5D%20%7C%20order(price)`
  );
  const allData = await fetch(
    `${getSanityBaselineUrl()}?query=*%5B_type%20%3D%3D%20'siteSettings'%5D%20%7B%0A%20%20...%2C%0A%20%20%22catalogueURL%22%3A%20catalogue.asset-%3Eurl%2C%0A%20%20%22socialImageURL%22%3A%20socialImage.asset-%3Eurl%0A%7D%5B0%5D`
  );

  const presents = (await allPresents.json()) as { result: IPresent[] };
  const metaData = (await allData.json()) as { result: IMetaData };

  return {
    presents: presents.result,
    metaData: metaData.result,
  };
}
