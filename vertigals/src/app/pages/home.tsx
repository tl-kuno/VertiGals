export default function Home() {
  const sections = [
    { id: 'about', title: 'About', photoID: '', onNav: '' },
    { id: 'community', title: 'Our Community', photoID: '', onNav: '' },
    {
      id: 'events',
      title: 'Events',
      photoID: '',
      onNav:
        'https://calendar.google.com/calendar/u/2?cid=bm9ydGhzaG9yZXZlcnRpZ2Fsc0BnbWFpbC5jb20',
    },
    {
      id: 'merch',
      title: 'Merch',
      photoID: '',
      onNav: 'https://dspondemand.com/collections/north-shore-vertigals-merch',
    },
  ];

  const sectionMap = sections.map((section) => {
    return (
      <div key={section.id} className={`grid-link ${section.id}`}>
        <h1 className="hi-primary">{section.title}</h1>
      </div>
    );
  });

  const bodyText =
    'Supporting information about NSVG Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.';

  return (
    <>
      <div className="home-hero" />
      <div className="grid-container full">
        <h1 className="h1-accent">
          A Women&apos;s Climbing Community on the North Shore of Lake Superior
        </h1>
        <p className="copy-primary">{bodyText}</p>
        <div className="grid-container halves u-vw80">{sectionMap}</div>
        <h2 className="h2-accent">
          Want to stay up-to-date with the North Shore VertiGals?
        </h2>
        <p className="copy-primary">
          Join our email list to get the latest news!
        </p>
        <div className="flex flex-row fr-center">
          <input type="text" placeholder="Email address" />
          <button className="button-primary">Sign up</button>
        </div>
      </div>
    </>
  );
}
