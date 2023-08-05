import { Github, LinkedinIcon, Mail } from 'lucide-react';
const currentYear = new Date().getFullYear();

function FooterNav() {
  return (
    <div className="border-lines border-t py-0 text-sm text-tertiary sm:py-1">
      <footer className="container flex flex-col items-center py-2 sm:flex-row">
        <ul className="my-2 flex items-center gap-8 sm:m-0 sm:mr-auto sm:flex-row">
          <li>
            <a
              href="https://www.linkedin.com/in/zouhairelmariami/"
              target="_blank"
            >
              <LinkedinIcon
                width={20}
                className="text-white transition-colors hover:text-tertiary"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/ZouhairEM/" target="_blank">
              <Github
                width={20}
                className="text-white transition-colors hover:text-tertiary"
              />
            </a>
          </li>
          <li>
            <a href="mailto:zouhairelmariami@gmail.com" target="_blank">
              <Mail
                width={20}
                className="text-white transition-colors hover:text-tertiary"
              />
            </a>
          </li>
        </ul>
        <div className="mb-3 text-white sm:mb-0">
          Zouhair El-Mariami {currentYear} ©
        </div>
      </footer>
    </div>
  );
}

export default FooterNav;
