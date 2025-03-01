export default interface NavigationProps {
    curLocation?: string;
    setLocation: (newLocation: string) => void;
}
