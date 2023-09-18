import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import path from "path";
import Users from "./collections/Users";
import { Content } from "./collections/Content";
import { Events } from "./collections/Events";
import { PriceList } from "./collections/PriceList";

dotenv.config();

export default buildConfig({
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
