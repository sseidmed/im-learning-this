// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'I\'m Learning This!',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: './tailwind.config.js',
        mainCssFile: './src/assets/main.css',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        // refs: {
        //   tags: {
        //     typeName: 'Tag',
        //     create: true
        //   }
        // },
        remark: {
          // remark options
        }
      }
    },
  ]
}
