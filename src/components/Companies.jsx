import React from "react";

// Importing logos from the assets folder
import APPLE from "../assets/logos/APPLE.png";
import ASUS from "../assets/logos/ASUS.png";
import CANON from "../assets/logos/CANON.png";
import CISCO from "../assets/logos/CISCO.png";
import DELL from "../assets/logos/DELL.png";
import EVGA from "../assets/logos/EVGA.png";
import GIGABYTE from "../assets/logos/GIGABYTE.png";
import HP from "../assets/logos/HP.png";
import INTEL from "../assets/logos/INTEL.png";
import LENOVO from "../assets/logos/LENOVO.png";
import LOGITECH from "../assets/logos/LOGITECH.png";
import MSI from "../assets/logos/MSI.png";
import NVIDIA from "../assets/logos/NVIDIA.png";
import RYZEN from "../assets/logos/RYZEN.png";
import SAMSUNG from "../assets/logos/SAMSUNG.png";
import RAZER from "../assets/logos/RAZER.png";

const Companies = () => {
  // Array of logos and their names
  const logos = [
    { id: 1, name: "APPLE", logo: APPLE },
    { id: 2, name: "ASUS", logo: ASUS },
    { id: 3, name: "CANON", logo: CANON },
    { id: 4, name: "CISCO", logo: CISCO },
    { id: 5, name: "DELL", logo: DELL },
    { id: 6, name: "EVGA", logo: EVGA },
    { id: 7, name: "GIGABYTE", logo: GIGABYTE },
    { id: 8, name: "HP", logo: HP },
    { id: 9, name: "INTEL", logo: INTEL },
    { id: 10, name: "LENOVO", logo: LENOVO },
    { id: 11, name: "LOGITECH", logo: LOGITECH },
    { id: 12, name: "MSI", logo: MSI },
    { id: 13, name: "NVIDIA", logo: NVIDIA },
    { id: 14, name: "RYZEN", logo: RYZEN },
    { id: 15, name: "SAMSUNG", logo: SAMSUNG },
    { id: 16, name: "RAZER", logo: RAZER },
  ];

  return (
    <div className="section">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] py-6">
        {/* First scrolling list of logos */}
        <ul className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {logos.map((company) => (
            <li key={company.id}>
              <img
                src={company.logo}
                alt={company.name}
                className="w-32 h-auto"
              />
            </li>
          ))}
        </ul>

        {/* Second scrolling list for smooth animation */}
        <ul
          className="flex items-center justify-center [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          aria-hidden="true"
        >
          {logos.map((company) => (
            <li key={`duplicate-${company.id}`}>
              <img
                src={company.logo}
                alt={company.name}
                className="w-32 h-auto"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Companies;
