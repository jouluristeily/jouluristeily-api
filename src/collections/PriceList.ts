import { CollectionConfig } from "payload/types";

export const PriceList: CollectionConfig = {
  slug: "price-list",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "price", "description", "type"],
    group: "Page Content",
    pagination: {
      defaultLimit: 50,
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        { label: "JR hytti", value: "jr_hytti" },
        { label: "Tuplis hytti", value: "tp_hytti" },
        { label: "Approlippu", value: "appro" },
      ],
      defaultValue: "jr_hytti",
    },
    {
      name: "price",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
  ],
};
