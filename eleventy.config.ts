import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";

export default function (eleventyConfig: any) {
  eleventyConfig.addExtension(["11ty.tsx"], {
    key: "11ty.js",
    compile: function () {
      return async function (data: any) {
        let content = await this.defaultRenderer(data);
        return `<!doctype html>\n${renderToStaticMarkup(content)}`;
      };
    },
    compileOptions: {
      permalink: function () {
        return (data: any) => {
          if (data.page.fileSlug === "404") {
            return `/404.html`;
          }
          return undefined;
        };
      },
    },
  });

  eleventyConfig.addTemplateFormats("11ty.tsx");

  eleventyConfig.addPassthroughCopy({ "./public/": "/" });

  eleventyConfig.addWatchTarget("./components/");
  eleventyConfig.addWatchTarget("./content/");
  eleventyConfig.addWatchTarget("./public/");

  return {
    htmlTemplateEngine: "11ty.js",
    dir: {
      input: "content",
    },
  };
}
