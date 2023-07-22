function NavBar() {
  return (
    <>
      <nav className="border-lines border-t border-tertiary text-tertiary">
        <div className="absolute block sm:hidden">
          <button className="flex items-center rounded-sm px-3">
            {/* <svg height="48" width="48" fill="white">
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg> */}
            {/* <svg v-else height="48" width="48" fill="white">
          <path
            d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg> */}
          </button>
        </div>
        <ul className="container flex h-screen flex-col items-center justify-center py-2 text-center sm:flex sm:h-auto sm:flex-row">
          <li className="cursor-pointer text-tertiary hover:text-white sm:mr-10">
            About me
          </li>
          <li className="cursor-pointer text-tertiary hover:text-white sm:mr-10">
            Skills
          </li>
          <li className="cursor-pointer text-tertiary hover:text-white sm:mr-auto">
            Passion projects
          </li>
          <a target="_blank">
            <li className="cursor-pointer rounded-sm bg-white px-2 py-1 font-bold text-primary-200 shadow hover:bg-primary-200 hover:text-white">
              Resume
            </li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
