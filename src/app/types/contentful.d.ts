export type ContentfulAsset = {
  fields: {
    file: {
      url: string;
      contentType?: string;
      fileName?: string;
      details?: {
        size?: number;
        image?: {
          width: number;
          height: number;
        };
      };
    };
  };
};


export type ContentfulServiceFields = {
  slug: string;
  title: string;
  mainDescription: string;
  subServices: string[];
  poster: ContentfulAsset[];
  galleryVideos: ContentfulAsset[];
  galleryImage: ContentfulAsset;
  heroImage: ContentfulAsset;
};

export type ServiceProps = {
  service: ContentfulServiceFields
}


export type HomePageType = {
  heroImage: ContentfulAsset;
  mainDescription: string;
  mainText: string
}

export type LeistungType = {
    slug: string,
    name: string,
    description: string,
    image: ContentfulAsset[],
}

export type GalleryFields = {
  images: ContentfulAsset[];
  videos: ContentfulAsset[];
  vorherNacherImages: ContentfulAsset[];
  posters: ContentfulAsset[]
};

export type CommentsType = {
  images: ContentfulAsset[];
  name: string;
  date: string;
  description: string;
};

export type ContactsType = {
  telefon: string;
  email: string;
  adresse: string;
  tiktok: string;
  facebook: string;
};