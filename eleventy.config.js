const bundlePlugin = require('@11ty/eleventy-plugin-bundle')
const tocPlugin = require('eleventy-plugin-nesting-toc')
const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
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
