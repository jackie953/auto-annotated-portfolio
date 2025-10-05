// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.7.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      // your content lives in the "content" folder
      contentDirs: ['content'],
      // tell Stackbit how your pages are stored: Markdown files in content/pages
      models: [
        {
          name: 'Page',
          type: 'page',
          // /content/pages/index.md -> "/" ; /content/pages/info.md -> "/info"
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },   // frontmatter "title"
            { name: 'body', type: 'markdown' }                   // the Markdown body
          ]
        }
      ],
      // static assets (if/when you upload images from the editor)
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'images',
        publicPath: '/'
      }
    })
  ]
});
