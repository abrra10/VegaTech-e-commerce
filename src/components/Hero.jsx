import React from "react";
import gaming from "../assets/images/gaming.jpg";
import laptop from "../assets/images/laptop.jpg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const ProductSection = ({ onScrollToPromotions }) => {
  return (
    <section className="mx-auto p-4 my-9">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
          {/* Laptop */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
            <Link
              to="/products/laptops"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src={laptop}
                alt="Ordinateurs portables"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="text-2xl font-Primary text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">
                Laptops
              </h3>
              <p className="absolute font-Secondary bottom-14 left-4 mx-4 sm:mt-2 text-white hover:text-yellow-400 font-bold text-sm">
                Explorez une large gamme d'ordinateurs portables, conçus pour
                répondre à tous vos besoins.
              </p>
              <div className="absolute bottom-4 right-4">
                <HiOutlineArrowLongRight
                  size={44}
                  className="text-white hover:text-yellow-400"
                />
              </div>
            </Link>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <div className="absolute inset-0 bg-stone-950 flex items-center justify-center">
                <Socials />
              </div>
            </div>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 ">
              {/* Accessories */}
              <Link
                to="/products/accesories"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-500 via-yellow-300 to-yellow-100"></div>
                <h3 className="z-10 font-Secondary font-bold text-black absolute top-0 left-0 p-4 text-[20px] xs:text-[18px] sm:text-[22px]">
                  + 200 Accessoires en vente
                </h3>
                <div className="absolute bottom-4 right-4">
                  <HiOutlineArrowLongRight
                    size={44}
                    className="text-black group-hover:text-slate-100"
                  />
                </div>
              </Link>

              {/* Offers */}
              <div
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 cursor-pointer"
                onClick={onScrollToPromotions}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === "Space") {
                    onScrollToPromotions();
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-yellow-300 to-yellow-100"></div>
                <h3 className="z-10 font-Secondary font-bold text-black absolute top-0 left-0 p-4 text-[20px] xs:text-[18px] sm:text-[22px]">
                  Remises et offres à durée limitée
                </h3>

                <div className="absolute bottom-4 right-4">
                  <HiOutlineArrowLongRight
                    size={44}
                    className="text-black group-hover:text-slate-100"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mouse Pad */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
            <Link
              to="/products/mousePad"
              className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
            >
              <img
                src={gaming}
                alt="Gaming"
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <h3 className="text-2xl font-Primary text-yellow-500 absolute top-0 left-0 p-4 xs:text-xl md:text-2xl">
                Mouse Pad
              </h3>
              <p className="absolute font-Secondary bottom-14 left-4 mx-4 text-white hover:text-yellow-400 font-bold text-sm">
                Découvrez une large sélection de Mouse pads.
              </p>
              <div className="absolute bottom-4 right-4">
                <HiOutlineArrowLongRight
                  size={44}
                  className="text-white hover:text-yellow-400"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
