import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, resetCart } from "../redux/cartReducer";
import { TrashIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  return (
    <div className="fixed right-5 top-20 ml-4 z-[999] bg-white p-5 shadow-lg overflow-y-scroll max-h-[400px]">
      <h1 className="mb-7 text-2xl font-Secondary text-gray-900">
        Produits dans votre panier
      </h1>

      {products.length > 0 ? (
        <>
          {products.map((item) => (
            <div className="flex items-center gap-4 mb-7" key={item.id}>
              <img
                src={`${import.meta.env.VITE_UPLOAD_URL}${item.img}`}
                alt=""
                className="w-[60px] h-[60px] object-cover"
              />
              <div className="flex-1">
                <h1 className="text-lg font-medium">{item.title}</h1>

                <div className="text-blue-600">
                  {item.quantity} x {item.price} DA
                </div>
              </div>
              <TrashIcon
                className="w-7 h-7 text-red-500 cursor-pointer"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}

          <div className="flex text-black font-Secondary justify-between font-medium text-lg mb-5">
            <span>TOTAL</span>
            <span>{totalPrice()} DA</span>
          </div>

          <Link
            to="/form"
            className="w-full p-3 flex items-center font-Secondary justify-center bg-blue-600 text-white font-medium mb-5"
          >
            PASSER À LA CAISSE
          </Link>
          <span
            className="text-red-500 text-s cursor-pointer mx-auto font-Secondary"
            onClick={() => dispatch(resetCart())}
          >
            Réinitialiser le panier
          </span>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-500 mb-5">
            Votre panier est vide. Ajoutez des produits pour continuer.
          </p>
          <button
            disabled
            className="w-full p-3 flex items-center font-Secondary justify-center bg-gray-400 text-white font-medium mb-5 cursor-not-allowed"
          >
            PASSER À LA CAISSE
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
