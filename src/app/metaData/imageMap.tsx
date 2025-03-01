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

// COMMUNITY
import community_blog from '../images/community_blog.jpg'

// BLOG
import gettingBoulder_1 from '../images/blog/gettingBoulder_1.jpg'
import gettingBoulder_2 from '../images/blog/gettingBoulder_2.jpg'
import gettingBoulder_3 from '../images/blog/gettingBoulder_3.jpg'
import gettingBoulder_4 from '../images/blog/gettingBoulder_4.jpg'
import gettingBoulder_5 from '../images/blog/gettingBoulder_5.jpg'
import gettingBoulder_6 from '../images/blog/gettingBoulder_6.jpg'
import gettingBoulder_7 from '../images/blog/gettingBoulder_7.jpg'
import gettingBoulder_8 from '../images/blog/gettingBoulder_8.jpg'

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

    // COMMUNITY
    blog: { image: community_blog, alt: 'Original VertiGals Tank Tops' },

    // BLOG
    gettingBoulder1: {
        image: gettingBoulder_1,
        alt: 'Bat hanging on a boulder',
    },
    gettingBoulder2: {
        image: gettingBoulder_2,
        alt: 'Julie on Moonshine Roof',
    },
    gettingBoulder3: {
        image: gettingBoulder_3,
        alt: 'Beers at the end of the day',
    },
    gettingBoulder4: {
        image: gettingBoulder_4,
        alt: `This looks heinous, says Julie's face.`,
    },
    gettingBoulder5: {
        image: gettingBoulder_5,
        alt: 'That one that started in a bat hang, again',
    },
    gettingBoulder6: {
        image: gettingBoulder_6,
        alt: 'Climb Night Photo',
    },
    gettingBoulder7: {
        image: gettingBoulder_7,
        alt: 'VertiGals climbing (and not climbing) in Bishop during the Flash Foxy festival',
    },
    gettingBoulder8: {
        image: gettingBoulder_8,
        alt: 'Magical Bishop',
    },
}
