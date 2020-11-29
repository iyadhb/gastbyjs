import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
   <div>
  <h1>Hello my name is {data.site.siteMetadata.person.name } I am {data.site.siteMetadata.person.age} years old
  </h1>
  </div>
  )
}

export default ComponentName
