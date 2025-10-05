import { defineStackbitConfig } from "@stackbit/types";
import { FileSystemContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  stackbitVersion: "~1.0.0",
  contentSources: [
    new FileSystemContentSource({
      rootPath: __dirname,
      contentDirs: ["content"],
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.md",
          fields: [{ name: "title", type: "string", required: true }]
        }
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
