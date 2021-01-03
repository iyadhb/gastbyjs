import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import img from '../images/image-4.jpeg'
import Images from 'gatsby-image'

const Image = () => {
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic Image</h3>
            </article>
            <article className="single-image">
                <h3>Fixed Image/blur</h3>
            </article>
            <article className="single-image">
                <h3>fluid Image/svg</h3>
            </article>
        </section>
    )
}

export default Image
