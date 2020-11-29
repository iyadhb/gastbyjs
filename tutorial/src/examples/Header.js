import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const getData = graphql`
{
  site {
    siteMetadata {
      author
      data
      description
      person {
        age
        name
      }
      title
    }
  }
}
`
const Header = () => {
 const {site:{siteMetadata:{title,person:{name}}}} = useStaticQuery(getData)
 return (
  <div>
   {/* <h1>title: {data.site.siteMetadata.title}</h1>
 <h1>name: {data.site.siteMetadata.person.name}</h1> */}
 <h1>Title : {title}</h1>
 <h1>Name : {name}</h1>
  </div>
 )
}

export default Header
