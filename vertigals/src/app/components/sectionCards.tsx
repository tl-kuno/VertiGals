import { SectionMap } from '../metaData/sectionMap';
import { NavigationProps } from '../metaData/propsInterface';

export default function SectionCards(props: NavigationProps) {
    const sections = Object.keys(SectionMap);

    const onClick = (section: string) => {
        const { setLocation, openPopUp } = props;
        const sectionInfo = SectionMap[section];
        const { link, popUpWindow } = sectionInfo;
        if (link) {
            window.open(link, '_blank');
        } else if (popUpWindow && openPopUp) {
            openPopUp(popUpWindow);
        } else if (setLocation) {
            setLocation(section);
        }
    };

    return sections.map((section) => {
        const sectionInfo = SectionMap[section];
        const { title } = sectionInfo;

        return (
            <div
                key={section}
                className={`grid-link ${section}`}
                onClick={() => onClick(section)}
            >
                <h1>{title}</h1>
            </div>
        );
    });
}
