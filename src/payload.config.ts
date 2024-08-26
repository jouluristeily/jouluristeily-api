import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import path from "path";
import Users from "./collections/Users";
import { Content } from "./collections/Content";
import { Pages } from "./collections/Pages";
import { Events } from "./collections/Events";
import { PriceList } from "./collections/PriceList";

dotenv.config();

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { webpackBundler } from "@payloadcms/bundler-webpack";

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
    user: Users.slug,
  },
  editor: lexicalEditor({}),
  rateLimit: {
    trustProxy: true,
  },
  collections: [Content, Pages, Events, PriceList, Users],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});

/* export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  rateLimit: {
    trustProxy: true,
  },
  collections: [Content, Events, PriceList, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
 */
