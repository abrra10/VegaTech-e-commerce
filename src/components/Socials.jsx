import React from "react";
import { ImFacebook, ImInstagram } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Socials() {
  return (
    <div className=" xl:flex flex-col py-8 items-center justify-center">
      <h1 className="text-yellow-500 font-Primary text-2xl mb-2 text-bold">
        Trouvez-nous
      </h1>
      <ul className="flex gap-x-4 items-center justify-center">
        {/* Facebook */}
        <li>
          <a
            href="https://web.facebook.com/profile.php?id=100095493912803"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImFacebook className="text-yellow-500 text-3xl transition-transform transform hover:scale-110" />
          </a>
        </li>

        {/* WhatsApp */}
        <li>
          <a
            href="https://wa.me/+213660893554"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="text-yellow-500 text-4xl transition-transform transform hover:scale-110" />
          </a>
        </li>

        {/* Instagram */}
        <li>
          <a
            href="https://www.instagram.com/vega_tech_store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImInstagram className="text-yellow-500 text-3xl transition-transform transform hover:scale-110" />
          </a>
        </li>
      </ul>
    </div>
  );
}
