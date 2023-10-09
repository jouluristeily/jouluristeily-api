import { CollectionConfig } from "payload/types";

export const Events: CollectionConfig = {
  slug: "events",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    group: "Events",
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
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "startTime",
      type: "date",
      required: true,
      admin: {
        date: { pickerAppearance: "timeOnly" },
      },
    },
    {
      name: "endTime",
      type: "date",
      required: true,
      admin: {
        date: { pickerAppearance: "timeOnly" },
      },
    },
    {
      name: "location",
      type: "text",
    },
  ],
};
