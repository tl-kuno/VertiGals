interface NavigationProps {
    curLocation?: string;
    setLocation: (newLocation: string) => void;
    openPopUp?: (popUpType: string) => void;
}

interface WindowProps {
    popUpContent: string | null;
    onClose: () => void;
}

export type { NavigationProps, WindowProps };
