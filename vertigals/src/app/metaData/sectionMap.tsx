interface SectionMap {
    [key: string]: {
        title: string;
        link?: string;
        popUpType?: string;
    };
}

export const SectionMap: SectionMap = {
    about: { title: 'About', link: '/about' },
    community: { title: 'Our Community', link: '/community' },
    events: { title: 'Events', popUpType: 'calendar' },
    merch: {
        title: 'Merch',
        link: 'https://dspondemand.com/collections/north-shore-vertigals-merch'
    }
};
