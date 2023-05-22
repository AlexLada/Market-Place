'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useWishlist } from "react-use-wishlist";
import { useCart } from "react-use-cart";
import Router from "next/router";
import Rating from "react-rating";
export default function ProductCard({
  id,
  title,
  category,
  rating,
  price,
  src
}) {
  const {
    addWishlistItem,
    removeWishlistItem,
    inWishlist,
    totalWishlistItems,
    emptyWishlist,
  } = useWishlist();
  const [isFav, setFav] = useState(inWishlist(id.toString()));
  const { addItem, getItem, items, updateItemQuantity, cartTotal, inCart, removeItem } = useCart();
  
  function handler() {
    setFav(!isFav);
    isFav
      ? setTimeout(removeWishlistItem(id.toString()), 500)
      : setTimeout(
          addWishlistItem({ id: id.toString(), name: title, price: price }),
          500
        );
  }
  return (
    <div className="select-none border border-sky-500 w-full p-2 my-2">
      <div className="relative ">
        <Image
          src={src}
          className="object-cover  select-none bg-[#8bb960] h-64 w-64  "
          height={256}
          width={256}
        />
        <button
          className={"z-10 bg-[#8bb960] absolute top-0 left-0 rounded-full bg-transparent p-2 m-2 text-green-700 transition-all hover:scale-110 focus:outline-none "+(inWishlist(id.toString())?"animate-pulse":"")}
          type="button"
          onClick={handler}
        >
          <Image
            width={32}
            height={32}
            src={
              inWishlist(id.toString())
                ? "/design_parts/heartActive.png"
                : "/design_parts/heart.png"
            }
          />
        </button>
        </div>
      <div className="flex justify-between items-start px-2 pt-2">
        <div className="p-2 flex-grow">
          <a className=" text-xl" href="/product/1">
            {price} руб.
          </a>
          <h2 className="text-lg font-bold text-gray-700">
           <a className="hover:text-yellow-600" href={`/product/${id}`}> {title}</a>/<a className="hover:text-yellow-600" href={`/searchResult/${id}`}> {category}</a>
          </h2>
          <a className="flex justify-items-start pt-2 pb-2 hover:text-yellow-600 " href={`/product/${id}#review`}>
            <Rating
              initialRating={rating}
              readonly
              emptySymbol={<BsStar className="text-[#95c966]" />}
              fullSymbol={<BsStarFill className="text-[#95c966]" />}
            />
            <span className="px-4"> 388</span>
          </a>
        </div>
      </div>

      <div className="flex justify-left items-center px-2 pb-2">
        <div className="flex">
          {inCart(id.toString())? <div className=" ml-4 h-10 w-32">
  <div className="flex border border-black flex-row h-10 w-full rounded-md relative mt-1">
    <button onClick={() => updateItemQuantity(id.toString(), getItem(id.toString()).quantity - 1)}  className=" bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    
    <input type="number" readOnly className=" text-center w-full border-white bg-white font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700  outline-none" value={getItem(id.toString()).quantity} />
  <button onClick={() => {
              addItem({
                id: id.toString(),
                name: title,
                price: price,
                src: src,
                category,
              });
            }} className="bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div></div>:<button
            onClick={() => {
              addItem({
                id: id.toString(),
                name: title,
                price: price,
                src: src,
                category: category,
              });
            }}
            className="block-inline text-md text-white w-full bg-[#8bb960] hover:bg-[#8be460]   px-3 py-2 rounded-full  "
          >
            В корзину
          </button>}
          
            
         
        </div>
      </div>
    </div>
  );
}
{
  /* */
}
