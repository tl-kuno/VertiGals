interface SectionMap {
    [key: string]: {
        title: string;
        link?: string;
        popUpWindow?: string;
    };
}

export const SectionMap: SectionMap = {
    about: { title: 'About' },
    community: { title: 'Our Community' },
    events: { title: 'Events', popUpWindow: 'calendar' },
    merch: {
        title: 'Merch',
        link: 'https://dspondemand.com/collections/north-shore-vertigals-merch'
    }
};
