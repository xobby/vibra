const footerLinks = [
  ['About', 'https://chillspot.it/chisiamo'],
  ['Help Center', 'https://discord.gg/chillspot'],
  ['Privacy Policy', 'https://social.chillspot.it/privacy'],
  ['Cookie Policy', 'https://social.chillspot.it/cookie'],
  [
    'Ads Info',
    'https://social.chillspot.it/info'
  ],
  ['Careers', 'https://social.chillspot.it/careers'],
  ['Developers', 'https://social.chillspot.it/devs'],
  ['Settings', 'https://social.chillspot.it/settings']
] as const;

export function LoginFooter(): JSX.Element {
  return (
    <footer className='hidden justify-center p-4 text-sm text-light-secondary dark:text-dark-secondary lg:flex'>
      <nav className='flex flex-wrap justify-center gap-4 gap-y-2'>
        {footerLinks.map(([linkName, href]) => (
          <a
            className='custom-underline'
            target='_blank'
            rel='noreferrer'
            href={href}
            key={linkName}
          >
            {linkName}
          </a>
        ))}
        <p>© 2025, ChillSpot.</p>
      </nav>
    </footer>
  );
}
