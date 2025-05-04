import type { Photo } from 'react-photo-album'

const baseUrl = process.env.VG_BASE_URL || 'http://localhost:3000'
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48]

function imageLink(
    path: string,
    width: number,
    height: number,
    extension: string,
    subfolder: string
) {
    return `${baseUrl}/images/gallery/${subfolder}/${path}.${width}x${height}.${extension}`
}

const smallPaths = [
    'CommunityGallery1.480x633.jpg',
    'CommunityGallery2.480x640.jpg',
    'CommunityGallery3.480x640.jpg',
    'CommunityGallery4.853x480.jpg',
    'CommunityGallery5.480x640.jpg',
    'CommunityGallery6.480x640.jpg',
    'CommunityGallery7.640x480.jpg',
    'CommunityGallery9.480x480.jpg',
    'CommunityGallery8.480x641.jpg',
    'CommunityGallery10.600x480.jpg',
    'CommunityGallery11.626x480.jpg',
    'CommunityGallery12.480x640.jpg',
    'CommunityGallery13.719x480.jpg',
    'CommunityGallery14.480x720.jpg',
    'CommunityGallery15.480x640.jpg',
    'CommunityGallery16.720x480.jpg',
    'CommunityGallery17.480x480.jpg',
    'CommunityGallery18.480x640.jpg',
    'CommunityGallery19.480x717.png',
    'CommunityGallery20.480x600.jpg',
    'CommunityGallery21.480x734.jpg',
    'CommunityGallery22.640x480.jpg',
    'CommunityGallery23.480x640.jpg',
    'CommunityGallery24.480x640.jpg',
    'CommunityGallery25.640x480.jpg',
    'CommunityGallery26.853x480.jpg',
    'CommunityGallery27.640x480.jpg',
    'CommunityGallery28.600x480.jpg',
    'CommunityGallery29.480x640.jpg',
    'CommunityGallery30.683x480.jpg',
    'CommunityGallery31.853x480.jpg',
    'CommunityGallery32.640x480.jpg',
    'CommunityGallery33.480x600.jpg',
    'CommunityGallery34.720x480.jpg',
    'CommunityGallery35.640x480.jpg',
    'CommunityGallery36.480x640.jpg',
    'CommunityGallery37.480x720.jpg',
    'CommunityGallery38.480x720.jpg',
    'CommunityGallery39.720x480.jpg',
    'CommunityGallery40.853x480.jpg',
    'CommunityGallery41.853x480.jpg',
    'CommunityGallery42.854x419.jpeg',
    'CommunityGallery43.480x640.jpg',
    'CommunityGallery45.480x640.jpg',
    'CommunityGallery46.480x600.jpg',
    'CommunityGallery47.480x480.jpg',
    'CommunityGallery48.480x640.jpg',
    'CommunityGallery49.720x480.jpg',
    'CommunityGallery50.689x480.jpg',
    'CommunityGallery51.480x640.jpg',
    'CommunityGallery52.640x480.jpg',
    'CommunityGallery53.480x640.jpg',
    'CommunityGallery54.385x854.jpg',
    'CommunityGallery55.480x640.jpg',
    'CommunityGallery56.480x640.jpg',
    'CommunityGallery57.480x640.jpg',
    'CommunityGallery58.480x720.jpg',
    'CommunityGallery59.640x480.jpg',
    'CommunityGallery60.577x480.jpg',
    'CommunityGallery61.480x640.jpg',
    'CommunityGallery62.640x480.jpg',
    'CommunityGallery63.480x640.jpg',
    'CommunityGallery64.640x480.jpg',
    'CommunityGallery65.640x480.jpg',
    'CommunityGallery66.480x640.jpg',
    'CommunityGallery67.480x599.jpg',
    'CommunityGallery68.480x720.jpg',
    'CommunityGallery69.720x480.jpg',
    'CommunityGallery70.640x480.jpg',
    'CommunityGallery71.480x720.jpg',
    'CommunityGallery72.720x480.jpeg',
    'CommunityGallery73.640x480.jpg',
    'CommunityGallery74.640x480.jpg',
    'CommunityGallery75.480x640.jpg',
    'CommunityGallery76.480x640.jpg',
    'CommunityGallery77.480x640.jpg',
    'CommunityGallery78.620x349.jpg',
    'CommunityGallery79.640x480.jpg',
    'CommunityGallery80.480x640.png',
    'CommunityGallery81.480x640.jpg',
    'CommunityGallery82.480x640.jpg',
    'CommunityGallery83.480x640.jpg',
    'CommunityGallery84.480x480.jpg',
    'CommunityGallery85.470x854.jpg',
    'CommunityGallery86.640x480.jpg',
    'CommunityGallery87.480x640.jpg',
    'CommunityGallery88.640x480.jpg',
    'CommunityGallery89.480x640.jpg',
    'CommunityGallery90.640x480.jpg',
    'CommunityGallery91.480x640.jpg',
    'CommunityGallery92.480x640.jpg',
    'CommunityGallery93.558x480.jpg',
    'CommunityGallery94.539x404.jpg',
    'CommunityGallery95.480x640.jpg',
    'CommunityGallery96.720x480.jpg',
    'CommunityGallery97.480x640.jpg',
    'CommunityGallery98.640x480.jpg',
    'CommunityGallery100.480x480.jpg',
    'CommunityGallery101.480x640.jpg',
    'CommunityGallery102.480x853.jpg',
    'CommunityGallery103.480x852.jpg',
    'CommunityGallery104.480x853.jpg',
    'CommunityGallery105.480x640.jpg',
    'CommunityGallery106.480x640.jpg',
    'CommunityGallery107.480x640.jpg',
    'CommunityGallery108.853x480.jpg',
    'CommunityGallery109.480x853.jpg',
    'CommunityGallery110.480x640.jpg',
    'CommunityGallery111.480x640.jpeg',
    'CommunityGallery112.853x480.jpg',
    'CommunityGallery113.640x480.jpg',
    'CommunityGallery114.480x640.jpg',
    'CommunityGallery115.640x480.jpg',
]

function getArrayOfImages(arrayOfPaths: string[], subfolder: string) {
    const images = arrayOfPaths.map((src) => {
        const matcher = src.match(/^(.*)\.(\d+)x(\d+)\.(.*)$/)!

        const path = matcher[1]
        const width = Number.parseInt(matcher[2], 10)
        const height = Number.parseInt(matcher[3], 10)
        const extension = matcher[4]

        return {
            src: imageLink(path, width, height, extension, subfolder),
            width,
            height,
            srcSet: breakpoints.map((breakpoint) => ({
                src: imageLink(path, width, height, extension, subfolder),
                width: breakpoint,
                height: Math.round((height / width) * breakpoint),
            })),
        } as Photo
    })
    return images
}

const smallImages = getArrayOfImages(smallPaths, 'small')

export default smallImages
