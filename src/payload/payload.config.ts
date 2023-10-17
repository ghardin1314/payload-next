import path from "path";
import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { viteBundler } from "@payloadcms/bundler-vite";

export default buildConfig({
  admin: {
    // COMMENT ME FOR WEBPACK
    bundler: viteBundler(),
  },
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI as string,
  }),
  editor: lexicalEditor(),
});
