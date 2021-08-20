import ImageGallery from 'react-image-gallery';
import React from 'react'

const Gallery = ({ product }) => {
    console.log(product)
    return <ImageGallery items={product.} />;
}

export default Gallery


class Gallery extends React.Component {
  render() {
  }
}