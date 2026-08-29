import { type SchemaTypeDefinition } from 'sanity';
import { seoType } from './seoType';
import { authorType } from './authorType';
import { categoryType } from './categoryType';
import { postType } from './postType';
import { caseStudyType } from './caseStudyType';
import { siteSettingsType } from './siteSettingsType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    seoType,
    authorType,
    categoryType,
    postType,
    caseStudyType,
    siteSettingsType,
  ],
};
