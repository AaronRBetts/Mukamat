import ImageGallery from 'react-image-gallery';
import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = ({ product }) => {


    const images = []

    function createImagesArray(product) {
        product.assets.map((image) => (
            images.push({
                original: image.url, 
                thumbnail: image.url, 
                originalHeight: '600px',
                thumbnailHeight: '100px'})
        ))
    }

    createImagesArray(product)

    console.log(images)

    return <ImageGallery items={images} showPlayButton={false} />;
}

export default Gallery