import { createClient } from 'contentful';

if (!process.env.CONTENTFUL_SPACE_ID ||!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    'Переменные окружения CONTENTFUL_SPACE_ID и CONTENTFUL_ACCESS_TOKEN должны быть определены.'
  );
}

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

console.log('SPACE:', process.env.CONTENTFUL_SPACE_ID);
console.log('TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN);
