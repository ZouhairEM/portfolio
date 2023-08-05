import { useRouter } from 'next/router';
import { useState } from 'react';

function NavBar() {
  const router = useRouter();
  const [closed, setClosed] = useState(true);

  const scrollToId = (section: string) => {
    const targetElement = document.getElementById(section);

    if (router.pathname !== '/') {
      router.push('/');
      setTimeout(() => router.push(`/#${section}`), 100);
    }
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <div className="absolute left-2 block">
        <button
          className="flex items-center rounded-sm px-3 sm:hidden"
          onClick={() => setClosed(!closed)}
        >
          {closed ? (
            <svg role="hamburger-icon" height="48" width="48" fill="white">
              <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
            </svg>
          ) : (
            <svg data-testid="close-icon" height="48" width="48" fill="white">
              <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
            </svg>
          )}
        </button>
      </div>
      <nav className="border-lines border-t border-tertiary text-tertiary">
        <ul
          className={`container flex h-screen flex-col items-center justify-center gap-8 py-2 text-center sm:flex sm:h-auto sm:flex-row ${
            closed ? 'hidden' : ''
          }`}
        >
          <li
            className="cursor-pointer text-tertiary transition-colors hover:text-white"
            onClick={() => scrollToId('about')}
          >
            About me
          </li>
          <li
            className="cursor-pointer text-tertiary transition-colors hover:text-white"
            onClick={() => scrollToId('skills')}
          >
            Skills
          </li>
          <li
            className="cursor-pointer text-tertiary transition-colors hover:text-white sm:mr-auto"
            onClick={() => scrollToId('passion-projects')}
          >
            Passion projects
          </li>

          <li className="my-2 cursor-pointer rounded-sm bg-white px-2 py-1 font-bold text-primary-200 shadow transition-colors hover:bg-primary-200 hover:text-white">
            <a href="CV_Zouhair_El-Mariami.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
