import Image, { ImageProps, StaticImageData } from 'next/image'
import type { Photo } from 'react-photo-album'

import { ImageMap } from '../metaData/imageMap'

interface ResponsiveImageProps {
    className?: string
    containerClassName?: string
    image: string | Photo
    radius?: 'wavy' | 'rounded' | 'none'
    photoCredit?: string
}

type ExtendedImageProps = ResponsiveImageProps & Omit<ImageProps, 'src' | 'alt'>

export default function ResponsiveImage(props: ExtendedImageProps) {
    const {
        image,
        radius = 'none',
        className,
        containerClassName,
        photoCredit,
        ...rest
    } = props

    let imageSrc: StaticImageData | string | undefined
    let imageAlt = ''

    if (typeof image === 'object') {
        imageSrc = image?.src
        imageAlt = image?.alt || 'untitled image'
    } else {
        imageSrc = ImageMap[image]?.image
        imageAlt = ImageMap[image]?.alt
    }

    const radiusStyles = {
        wavy: '50% 20% / 10% 40%',
        rounded: '10px',
        none: '0px',
    }

    const borderRadius = radiusStyles[radius]
    const additionalStyles = {
        width: '100%',
        height: 'auto',
        borderRadius: borderRadius,
    }

    return (
        <div className={containerClassName}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                className={className}
                style={additionalStyles}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                {...rest}
            />
            {photoCredit && (
                <p className="blog-photo-credit">Photo: {photoCredit}</p>
            )}
        </div>
    )
}
