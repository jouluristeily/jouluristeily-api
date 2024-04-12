import { CollectionConfig } from "payload/types";
import { slateEditor } from "@payloadcms/richtext-slate";

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
      editor: slateEditor({
        admin: {
          elements: ["h1", "h2", "h3", "h4", "link", "textAlign"],
        },
      }),
    },
    { name: "body2", type: "richText", required: true },
  ],
};
