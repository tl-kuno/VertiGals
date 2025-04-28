import { StaticImageData } from 'next/image'

// HOME
import home_hero from '../images/home_banner.png'
import logo_black from '../images/logo_black.png'

// ABOUT
import about_banner from '../images/about_banner.png'
import andrea from '../images/board/andrea.jpg'
import brooke from '../images/board/brooke.jpg'
import claire from '../images/board/claire.jpg'
import colleen from '../images/board/colleen.jpg'
import kathryn from '../images/board/kathryn.jpg'
import marta from '../images/board/marta.png'
import taylor from '../images/board/taylor.jpg'

interface ImageMap {
    [key: string]: {
        image: StaticImageData
        alt: string
    }
}

export const ImageMap: ImageMap = {
    // HOME
    homeHero: { image: home_hero, alt: 'Climbing above icy Lake Superior' },
    mainLogo: { image: logo_black, alt: 'North Shore VertiGals Logo' },
    // ABOUT
    aboutHero: { image: about_banner, alt: 'Climber looking at Lake Superior' },
    andrea: { image: andrea, alt: 'Andrea' },
    brooke: { image: brooke, alt: 'Brooke' },
    claire: { image: claire, alt: 'Claire' },
    colleen: { image: colleen, alt: 'Colleen' },
    kathryn: { image: kathryn, alt: 'Kathryn' },
    marta: { image: marta, alt: 'Marta' },
    taylor: { image: taylor, alt: 'Taylor' },
}
