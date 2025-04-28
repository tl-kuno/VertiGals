import {
    AiFillFacebook,
    AiFillInstagram,
    AiFillDiscord,
    AiFillMail,
} from 'react-icons/ai'

export const ExternalNavigationMap = {
    pages: ['Home', 'About', 'Community'],
    iconLinks: [
        {
            id: 'facebook',
            Icon: AiFillFacebook,
            link: 'https://www.facebook.com/NorthShoreVertiGals',
        },
        {
            id: 'instagram',
            Icon: AiFillInstagram,
            link: 'https://www.instagram.com/northshorevertigals',
        },
        {
            id: 'discord',
            Icon: AiFillDiscord,
            link: 'https://discord.com/channels/1080443344007733338/1080443344007733341',
        },
        {
            id: 'email',
            Icon: AiFillMail,
            link: 'mailto:northshorevertigals@gmail.com?subject=EmailList&body=Hello, please add me to your mailing list!',
        },
    ],
}
