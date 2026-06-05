import * as prismic from "@prismicio/client";

const REPOSITORY_NAME = process.env.PRISMIC_REPOSITORY_NAME;
if (!REPOSITORY_NAME) {
  throw new Error(
    "Missing environment variable PRISMIC_REPOSITORY_NAME."
  );
}

export const prismicClient = prismic.createClient(REPOSITORY_NAME, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export interface CakeDocument
  extends prismic.PrismicDocument<
    {
      cake_name: prismic.KeyTextField;
      description: prismic.RichTextField;
      price: prismic.NumberField;
      photo: prismic.ImageField;
    },
    "cake"
  > {}
