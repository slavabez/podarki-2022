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
  outOfStock?: boolean;
  orderOnly?: boolean;
}

export interface IMetaData {
  aboutUsHeading: string;
  aboutUsParagraph: string;
  addressOneContent: string;
  addressOneHeading: string;
  addressTwoContent: string;
  addressTwoHeading: string;
  catalogue: ISanityFile;
  catalogueURL: string;
  catalogueHeading: string;
  contactsHeading: string;
  description: string;
  mainHeading: string;
  socialImage: ISanityImage;
  socialImageURL: string;
  title: string;
}
