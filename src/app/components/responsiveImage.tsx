import Image, { ImageProps, StaticImageData } from 'next/image'
import type { Photo } from 'react-photo-album'

import { ImageMap } from '../metaData/imageMap'

interface ResponsiveImageProps {
    className?: string
    image: string | Photo
    radius: 'wavy' | 'rounded' | 'none'
}

type ExtendedImageProps = ResponsiveImageProps & Omit<ImageProps, 'src' | 'alt'>

export default function ResponsiveImage(props: ExtendedImageProps) {
    const { image, radius, className, ...rest } = props

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
        <Image
            src={imageSrc}
            alt={imageAlt}
            className={className}
            style={additionalStyles}
            {...rest}
        />
    )
}
