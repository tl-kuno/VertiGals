'use client'

import ResponsiveImage from './responsiveImage'
import {
    RenderImageContext,
    RenderImageProps,
    MasonryPhotoAlbum,
} from 'react-photo-album'
import 'react-photo-album/rows.css'

import photoGallery from '../metaData/photoGallery'

function renderNextImage(
    { title, sizes }: RenderImageProps,
    { photo, width, height }: RenderImageContext
) {
    return (
        <div
            style={{
                width: '100%',
                position: 'relative',
                aspectRatio: `${width} / ${height}`,
            }}
        >
            <ResponsiveImage
                fill
                radius="none"
                image={photo}
                title={title}
                sizes={sizes}
                placeholder={'blurDataURL' in photo ? 'blur' : undefined}
            />
        </div>
    )
}

export default function PhotoGallery() {
    return (
        <MasonryPhotoAlbum
            photos={photoGallery}
            render={{ image: renderNextImage }}
            defaultContainerWidth={1200}
            sizes={{
                size: '1168px',
                sizes: [
                    {
                        viewport: '(max-width: 1200px)',
                        size: 'calc(100vw - 32px)',
                    },
                ],
            }}
        />
    )
}
