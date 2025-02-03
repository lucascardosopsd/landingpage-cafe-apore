import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload";

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    plural: "Notícias",
    singular: "Notícia",
  },
  fields: [
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "title",
      type: "text",
      label: "Título",
      required: true,
    },
    {
      name: "description",
      type: "text",
      label: "Descrição",
      required: true,
      maxLength: 240,
    },
    {
      name: "content",
      label: "Conteúdo",
      type: "richText",
      editor: lexicalEditor({}),
    },
    {
      name: "slug",
      type: "text",
      label: "Slug (Automático)",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        data.slug = data.title.toLowerCase().replace(/\s+/g, "-");

        return data;
      },
    ],
  },
};
