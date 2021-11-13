export interface ISanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface ISanityFile {
  _type: "file";
  asset: {
    _ref: string;
    _type: "reference;";
  };
}

export interface IPresent {
  _id: string;
  cover: ISanityImage;
  images: ISanityImage[];
  price: string;
  title: string;
  weight: string;
}

export interface IMetaData {
  aboutUsHeading: string;
  aboutUsParagraph: string;
  addressOneContent: string;
  addressOneHeading: string;
  addressTwoContent: string;
  addressTwoHeading: string;
  catalogue: ISanityFile;
  catalogueHeading: string;
  contactsHeading: string;
  description: string;
  mainHeading: string;
  socialImage: ISanityImage;
  title: string;
}

export interface IHomePageProps {
  metaData: IMetaData;
  presents: IPresent[];
}
