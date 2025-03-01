interface SectionMap {
    [key: string]: {
        title: string;
        link?: string;
    };
}

export const SectionMap: SectionMap = {
    about: { title: 'About' },
    community: { title: 'Our Community' },
    events: { title: 'Events' },
    merch: {
        title: 'Merch',
        link: 'https://dspondemand.com/collections/north-shore-vertigals-merch'
    }
};
