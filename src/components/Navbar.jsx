import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import vegalogo from "../assets/images/logo.png";

export default function NavbarWithSubmenu() {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const products = useSelector((state) => state.cart.products);
  const navigate = useNavigate();

  // Calculate total quantity of products in the cart
  const totalQuantity = products.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Handle result selection and navigate to product page
  const handleResultSelect = (selectedResult) => {
    navigate(`/product/${selectedResult.id}`);
    setResults([]);
    setInput("");
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 z-50 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <div className="relative flex flex-col items-center w-full">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <div className="absolute w-60 mt-2">
            <SearchResultsList
              results={results}
              onSelect={handleResultSelect}
            />
          </div>
        )}
      </div>

      {/* Navigation links */}
      <li className="flex items-center justify-center p-1 font-tertiary font-medium text-gray-800 lg:flex lg:items-center whitespace-nowrap">
        <Link to="/products/laptops" className="flex items-center">
          Ordinateurs portables
        </Link>
      </li>

      <li className="flex items-center justify-center p-1 font-tertiary font-medium text-gray-800 lg:flex lg:items-center whitespace-nowrap">
        <Link to="/products/components" className="flex items-center">
          Composants
        </Link>
      </li>

      <li className="flex items-center justify-center p-1 font-tertiary font-medium text-gray-800 lg:flex lg:items-center whitespace-nowrap">
        <Link to="/products/network" className="flex items-center">
          Réseaux
        </Link>
      </li>

      <li className="flex items-center justify-center p-1 font-tertiary font-medium text-gray-800 lg:flex lg:items-center whitespace-nowrap">
        <Link to="/products/mousePad" className="flex items-center">
          Mouse Pads
        </Link>
      </li>

      <li className="flex items-center justify-center p-1 font-tertiary font-medium text-gray-800 lg:flex lg:items-center whitespace-nowrap">
        <Link to="/products/accessories" className="flex items-center">
          Accessories
        </Link>
      </li>

      <li className="flex items-center justify-center p-1 font-tertiary font-medium text-gray-800 lg:flex lg:items-center whitespace-nowrap">
        <Link to="/products/printers" className="flex items-center">
          Imprimantes
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <Navbar className="fixed top-0 inset-x-0 bg-white z-50 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-6 shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            to="/"
            className="mr-4 cursor-pointer py-2 font-medium"
          >
            <img src={vegalogo} alt="Vega Tech Logo" className="h-7 w-auto" />
          </Typography>

          <div className="hidden items-center gap-x-2  lg:flex">
            <div className="relative flex w-full gap-2 md:w-max mr-6">
              <div className="relative flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-gray-800" />
                <span className="font-tertiary font-bold text-gray-900">
                  vega19.tech@gmail.com
                </span>
              </div>
              <div className="relative flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-800" />
                <span className="font-tertiary font-bold text-gray-900">
                  0660893554
                </span>
              </div>
            </div>
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => setOpenCart(!openCart)}
                className=""
              >
                <ShoppingCartIcon className="h-6 w-6 text-current cursor-pointer" />
              </button>
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                {totalQuantity}
              </span>
            </div>
          </div>
          <div className="flex items-center lg:hidden gap-x-2">
            <IconButton variant="text" onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenCart(!openCart)}
                className=""
              >
                <ShoppingCartIcon className="h-6 w-6 text-current cursor-pointer" />
              </button>
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
                {totalQuantity}
              </span>
            </div>
          </div>
          <div className="hidden lg:block">{navList}</div>
        </div>
        <Collapse open={openNav}>
          <div className="container mx-auto">
            <div className=" relative w-full text-black">
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && (
                <div className="absolute w-60 mt-[-20px] z-50">
                  <SearchResultsList
                    results={results}
                    onSelect={handleResultSelect}
                  />
                </div>
              )}
            </div>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <Typography
                as="li"
                variant="small"
                className="p-1 font-tertiary font-medium text-gray-800"
              >
                <Link to="/products/laptops" className="flex items-center">
                  Ordinateurs portables
                </Link>
              </Typography>

              <Typography
                as="li"
                variant="small"
                className="p-1 font-tertiary font-medium text-gray-800"
              >
                <Link to="/products/components" className="flex items-center">
                  Composants
                </Link>
              </Typography>
              <Typography
                as="li"
                variant="small"
                className="p-1 font-tertiary font-medium text-gray-800"
              >
                <Link to="/products/network" className="flex items-center">
                  Réseaux
                </Link>
              </Typography>
              <Typography
                as="li"
                variant="small"
                className="p-1 font-tertiary font-medium text-gray-800"
              >
                <Link to="/products/mousePad" className="flex items-center">
                  Mouse pad
                </Link>
              </Typography>
              <Typography
                as="li"
                variant="small"
                className="p-1 font-tertiary font-medium text-gray-800"
              >
                <Link to="/products/accessories" className="flex items-center">
                  Accessoires
                </Link>
              </Typography>

              <Typography
                as="li"
                variant="small"
                className="p-1 font-tertiary font-medium text-gray-800"
              >
                <Link to="/products/printers" className="flex items-center">
                  Imprimantes
                </Link>
              </Typography>
            </ul>
          </div>
        </Collapse>
      </Navbar>
      {openCart && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
            onClick={() => setOpenCart(false)}
          />
          <div className="fixed right-5 top-20 z-[9999] bg-white p-5 shadow-lg">
            <Cart closeCart={() => setOpenCart(false)} />
          </div>
        </>
      )}
    </>
  );
}
