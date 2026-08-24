import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Codesoftic Content Studio',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool()],
});
