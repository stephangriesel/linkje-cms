import { defineConfig } from "astro/config";
import NetlifyCMS from "astro-netlify-cms";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      path: "./custom-config.cjs"
    }
  }), NetlifyCMS({
    config: {
      // Use Netlify’s “Git Gateway” authentication and target our default branch
      backend: {
        name: "git-gateway",
        branch: "latest"
      },
      // Logo for backend
      logo_url: `https://res.cloudinary.com/stephangriesel/image/upload/v1687318146/logo_cqhhz9.png`,
      // Configure where our media assets are stored & served from
      media_folder: "public/upload",
      public_folder: "/upload",
      // Configure the content collections
      collections: [
        {
          name: "Profile Photo",
          label: "Profile Photo",
          label_singular: "Profile Photo",
          folder: "src/pages/content/profilephoto",
          create: true,
          delete: true,
          fields: [
            {
              name: "title",
              widget: "string",
              label: "Title",
              required: true
            },
            {
            name: "profilephoto",
            widget: "image",
            label: "Profile Photo",
            required: true
          },
        ],
        },
        {
        name: "homeintro",
        label: "Home Intro",
        label_singular: "intro",
        folder: "src/pages/content/homeintro",
        create: true,
        delete: true,
        fields: [{
          name: "title",
          widget: "string",
          label: "Post Title"
        }, {
          name: "description",
          widget: "string",
          label: "Description",
          required: true
        }, {
          name: "tagline",
          widget: "string",
          label: "Tagline",
          required: true
        }, {
          name: "layout",
          widget: "select",
          default: "../../../layouts/General.astro",
          options: [{
            label: "General",
            value: "../../../layouts/General.astro"
          }]
        }]
      }, {
        name: "socials",
        label: "Social Posts",
        label_singular: "Social Post",
        folder: "src/pages/content/social",
        create: true,
        delete: true,
        fields: [
          {
          name: "socialimg",
          widget: "image",
          label: "Social Image",
          required: true
          },
          {
          name: "title",
          widget: "string",
          label: "Title",
          required: true
        }, {
          name: "icon",
          widget: "string",
          label: "Icon",
          required: true
        }, {
          name: "url",
          widget: "string",
          label: "Url",
          required: true
        }, {
          name: "layout",
          widget: "select",
          default: "../../../layouts/General.astro",
          options: [{
            label: "General Post",
            value: "../../../layouts/General.astro"
          }]
        }]
      },
      {
        name: "Footer Image",
        label: "Footer Image",
        label_singular: "Footer Image",
        folder: "src/pages/content/footerimage",
        create: true,
        delete: true,
        fields: [
          {
            name: "title",
            widget: "string",
            label: "Title",
            required: true
          },
          {
          name: "footerimage",
          widget: "image",
          label: "Footer Image",
          required: true
        }],
      },
    ]
    }
  }), icon()]
});