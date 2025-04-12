import Image from 'next/image';

import { ImageMap } from '../metaData/imageMap';

interface ResponsiveImageProps {
    image: string;
    radius: 'wavy' | 'rounded' | 'none';
}

export default function ResponsiveImage(props: ResponsiveImageProps) {
    const { image, radius } = props;
    const imageSrc = ImageMap[image]?.image;
    const imageAlt = ImageMap[image]?.alt;
    
    const radiusStyles = {
        wavy: '50% 20% / 10% 40%',
        rounded: '10px',
        none: '0px',
    };

    const borderRadius = radiusStyles[radius];
    const additionalStyles = {
        width: '100%',
        height: 'auto',
        borderRadius: borderRadius,
    };

    return <Image src={imageSrc} alt={imageAlt} style={additionalStyles} />;
}
