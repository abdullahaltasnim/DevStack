import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Logo from "../assets/logo-text.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand information */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block">
              <img
                src={Logo}
                alt="Dev Stack"
                className="h-auto w-36"
              />
            </a>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-xl text-slate-500 transition hover:text-slate-900"
              >
                <FaGithub />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-xl text-slate-500 transition hover:text-sky-500"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-xl text-slate-500 transition hover:text-blue-600"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-900">
              Product
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a className="transition hover:text-pink-600" href="#">
                  Home
                </a>
              </li>

              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#technologies"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-900">
              Company
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#contact"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#careers"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-slate-900">
              Legal
            </h3>

            <ul className="space-y-3 text-slate-600">
              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#privacy"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  className="transition hover:text-pink-600"
                  href="#terms"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Dev Stack. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="transition hover:text-pink-600"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="transition hover:text-pink-600"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;