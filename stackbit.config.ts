import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'nextjs',
  nodeVersion: '18',
  contentSources: [
    {
      type: 'git',
      rootPath: '.',
      contentDirs: ['content', 'data'],
      models: [],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
      }
    }
  ],
  models: {},
  mapModels: ({ models }) => {
    return models;
  }
});
