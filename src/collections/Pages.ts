import { CollectionConfig } from "payload/types";
import {
  AlignFeature,
  BoldTextFeature,
  HeadingFeature,
  ItalicTextFeature,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  UnderlineTextFeature,
  UnorderedListFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "updatedAt"],
    group: "Page Content",
  },

  defaultSort: "title",

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },

    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({}) => [
          BoldTextFeature(),
          ItalicTextFeature(),
          UnderlineTextFeature(),
          ParagraphFeature(),
          HeadingFeature({}),
          AlignFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          LinkFeature({}),
        ],
      }),
    },
  ],
};
