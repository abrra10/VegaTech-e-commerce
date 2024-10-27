import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const FOOTER_LINKS = [
  {
    title: "Produits",
    links: [
      { name: "Ordinateurs Portables", path: "/products/laptops" },
      { name: "Mouse Pads", path: "/products/mousePad" },
      { name: "Composants", path: "/products/components" },
      { name: "Accesoires", path: "/products/accessories" },
    ],
  },
];

export default function FooterWithLinks() {
  return (
    <footer className="relative w-full bg-gray-100">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {FOOTER_LINKS.map(({ title, links }, index) => (
            <div key={index} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold font-tertiary text-xl uppercase opacity-50 border-b-2 border-black pb-2"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map(({ name, path }, linkIndex) => (
                  <Typography
                    key={linkIndex}
                    as="li"
                    color="blue-gray"
                    className="font-normal uppercase"
                  >
                    <Link
                      to={path}
                      className="inline-block py-1 pr-2 font-tertiary text-lg transition-transform hover:scale-105"
                    >
                      {name}
                    </Link>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold font-tertiary text-xl uppercase opacity-50 border-b-2 border-black pb-2"
            >
              Contacts
            </Typography>
            <ul className="space-y-1">
              <div className="relative flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-800" />
                <span className="font-tertiary font-normal text-lg text-gray-900">
                  0660893554
                </span>
              </div>
              <div className="relative flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-gray-800" />
                <span className="font-tertiary font-normal text-lg text-gray-900">
                  vega19.tech@gmail.com
                </span>
              </div>
            </ul>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-bold font-tertiary text-xl uppercase opacity-50 border-b-2 border-black pb-2"
            >
              réseaux sociaux
            </Typography>
            <ul className="">
              <li>
                {" "}
                <Typography className="inline-block py-1 pr-2 font-tertiary text-lg transition-transform hover:scale-105">
                  <a
                    href="https://web.facebook.com/profile.php?id=100095493912803"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </Typography>
              </li>
              <li>
                <Typography className="inline-block py-1 pr-2 font-tertiary text-lg transition-transform hover:scale-105">
                  <a
                    href="https://www.instagram.com/vega_tech_store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Typography>
              </li>
              {/* <li>
                <Typography className="inline-block py-1 pr-2 font-tertiary text-lg transition-transform hover:scale-105">
                  <a
                    href="http://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tiktok
                  </a>
                </Typography>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-tertiary text-lg font-normal text-blue-gray-900 md:mb-0"
          >
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/taha-benacer-392192206/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg font-tertiary"
            >
              Taha Benacer
            </a>
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Social media icons or other footer content can be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
