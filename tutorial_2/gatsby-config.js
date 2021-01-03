/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:'Gatsby Tutorial',
    description:'Some random description',
    author:'Iyad Barakat',
    data:['item 1', 'Item 2'],
    person:{name: "Peter", age: 32}
  }
  ,
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
],
}
