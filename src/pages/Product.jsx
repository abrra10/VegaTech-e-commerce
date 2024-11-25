import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";
import useFetch from "../hooks/useFetch";

import {
  ShoppingCartIcon,
  HeartIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const Product = () => {
  const { id } = useParams();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="flex flex-col md:flex-row gap-12 p-8 md:p-12">
      {loading ? (
        "Chargement..."
      ) : (
        <>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1">
              <img
                src={`${import.meta.env.VITE_UPLOAD_URL}${
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }`}
                alt=""
                className="w-full lg:h-[650px] md:h-[650px] h-[296px] object-cover"
              />
            </div>

            <div className="flex gap-4 justify-center mt-4">
              {["img", "img2", "img3", "img4"].map((imgKey, index) => (
                <div className="w-24 h-24 relative" key={index}>
                  <img
                    src={`${import.meta.env.VITE_UPLOAD_URL}${
                      data?.attributes[imgKey]?.data?.attributes?.url
                    }`}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    onClick={() => setSelectedImg(imgKey)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">
              {data?.attributes?.title}
            </h1>
            <span className="text-2xl font-medium text-blue-500">
              {data?.attributes?.price} DA
            </span>
            <p className="text-lg font-light text-justify whitespace-pre-line">
              {data?.attributes?.desc}
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md"
              >
                -
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-md"
              >
                +
              </button>
            </div>
            <button
              className="w-64 py-3 bg-blue-500 text-white font-Secondary flex items-center justify-center gap-4 font-medium rounded-md mt-4"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <ShoppingCartIcon className="w-5 h-5" /> AJOUTER AU PANIER
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
