import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import { Content } from "./collections/Content";
import { Events } from "./collections/Events";
import { PriceList } from "./collections/PriceList";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Content, Events, PriceList, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
