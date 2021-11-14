import { IMetaData, IPresent, ISanityImage } from "./types";
import mockMetadata from "./metadata_mock.json";
import mockProducts from "./products_mock.json";

interface IParams {
  image: ISanityImage;
  height?: number;
}

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
    console.error(image);
    console.error(e);
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
    "https://vw14nmwz.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'present'%5D"
  );
  const allData = await fetch(
    "https://vw14nmwz.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'siteSettings'%5D%5B0%5D"
  );

  const presents = (await allPresents.json()) as { result: IPresent[] };
  const metaData = (await allData.json()) as { result: IMetaData };

  return {
    presents: presents.result,
    metaData: metaData.result,
  };
}
