import React from 'react'

export default function Figure({imageUrl, caption}) {
    return (
      <figure>
        <img src={imageUrl} />
        <figcaption>Awesome pic taken on {caption}</figcaption>
      </figure>
    )
    }