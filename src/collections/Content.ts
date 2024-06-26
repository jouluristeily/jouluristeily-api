import { CollectionConfig } from "payload/types";

export const Content: CollectionConfig = {
  slug: "content",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Page Content",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "body",
      type: "richText",
      required: true,
      admin: {
        elements: ["h1", "h2", "h3", "h4", "link", "textAlign"],
      },
    },
  ],
};
