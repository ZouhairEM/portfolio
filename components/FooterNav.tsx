import Image from 'next/image';

const currentYear = new Date().getFullYear();

function FooterNav() {
  return (
    <div className="border-lines border-t py-0 text-sm text-tertiary sm:py-1">
      <div className="container flex flex-col items-center sm:flex-row">
        <ul className="flex items-center sm:mr-auto sm:flex-row">
          <li className="flex flex-row gap-2 sm:gap-0">
            <span className="my-3 mr-0 flex flex-row sm:my-0 sm:mr-2">
              <a href="#" target="_blank">
                <Image
                  src="/../public/me.jpeg"
                  width={25}
                  height={25}
                  alt="#"
                  className="opacity-80 transition-colors hover:opacity-100"
                />
              </a>
            </span>
          </li>
        </ul>
        <div className="mb-3 text-white sm:mb-0">
          Zouhair El-Mariami {currentYear} ©
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
