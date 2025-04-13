import NavIcons from './navIcons';

export default function Footer() {
    return (
        <footer className="flex flex-column fc-center">
            <a
                className="hide-on-mobile"
                href="mailto:northshorvertigals@gmail.com"
            >
                northshorevertigals@gmail.com
            </a>
            <NavIcons location="footer" />
        </footer>
    );
}
