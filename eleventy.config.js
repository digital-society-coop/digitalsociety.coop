import bundlePlugin from '@11ty/eleventy-plugin-bundle'
import tocPlugin from 'eleventy-plugin-nesting-toc'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ './public/': '/' })

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addPlugin(bundlePlugin)
  eleventyConfig.addPlugin(tocPlugin, {
    wrapperClass: '',
  })

  eleventyConfig.addWatchTarget("./public/")

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '../_includes'
    }
  }
}
