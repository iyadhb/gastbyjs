import React from 'react'
import Layout from '../components/Layout'
import Header from '../examples/Header'
import { compose, graphql } from 'gatsby'


const examples = ({data}) => {
    const {site:{info:{author}}} = data
 return (
  <Layout>
   <p>Hello from exaples page</p>
   <Header />
   <p>author: {author}</p>
  </Layout>
 )
}

export const data = graphql`
query MyQuery {
site {
  info:siteMetadata {
    person {
      age
      name
    }
    author
    data
    description
    title
  }
}
}
`

export default examples
