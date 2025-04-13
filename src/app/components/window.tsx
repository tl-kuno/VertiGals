import { WindowMap } from '../metaData/windowMap';
interface WindowProps {
    popUpContent: string | null;
    onClose: () => void;
}

export default function Window(props: WindowProps) {
    const { popUpContent, onClose } = props;

    if (!popUpContent) {
        return null;
    }

    const popUpProps = WindowMap[popUpContent];
    const { component, title } = popUpProps;

    return (
        <div className="popUpMask">
            <div className="popUp fc-center gap-2">
                <h1 className="h2-accent">{title}</h1>
                {component ? component : null}
                <button className="button-primary" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
