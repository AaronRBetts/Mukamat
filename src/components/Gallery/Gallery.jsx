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
                originalHeight: '500px',
                thumbnailHeight: '50px'})
        ))
    }

    createImagesArray(product)

    return <ImageGallery items={images} 
    showPlayButton={false} 
    showThumbnails={false} 
    showBullets={true} 
    autoPlay={false} />;
}

export default Gallery