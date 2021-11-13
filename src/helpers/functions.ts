import { ISanityImage } from "./types";

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

  const [type, assetName, origWidthHeight, origFileFormat] =
    image.asset._ref.split("-");

  let url = `https://cdn.sanity.io/images/${sanityId}/${sanityDataset}/${assetName}-${origWidthHeight}.${origFileFormat}`;

  if (height) url = `${url}?h=${height}`;
  return url;
}
