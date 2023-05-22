import Link from "next/link";
import Image from "next/image";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { useState } from "react";
import Select from "react-select";
export default function CheckoutPage() {
  const {items, isEmpty, getItem, removeItem, addItem} = useCart();
  const {
    addWishlistItem,
    removeWishlistItem,
    inWishlist
  } = useWishlist();
  function handler({id, name, price}) {
    inWishlist(id)
      ? setTimeout(removeWishlistItem(id), 500)
      : setTimeout(
          addWishlistItem({ id: id, name: name, price: price }),
          500
        );
  }
  const optionsDelivery = [
    { value: 'Самовывоз', label: 'Самовывоз' },
    { value: 'Доставка', label: 'Доставка' },
  ];
  const optionsPayment = [
    { value: 'онлайн', label: 'Онлайн' },
    { value: 'наличные', label: 'Наличные' },
  ];
  const [delivery, setDelivery] = useState("");
  const [payment, setPayment] = useState("");

  return (
    <div>
      <h2 className="text-3xl m-8 p-8 font-bold ">Корзина</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 mx-14">
          {isEmpty? <div className="text-xl p-4 m-4">К сожалению, в корзине ничего нет </div> : <><div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y overflow-auto divide-gray-200">{items.map((product) => (
                               <li key={product.id} className="flex py-6">
                                <input type="checkbox" className="flex justify-self-center rounded-md p-4 m-4 text-green-500" defaultChecked/>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <div className="h-full relative w-full object-center">
                                  <Image
                                    src={product.src}
                                    layout="fill"
                                    objectFit="cover"
                                  />
                                  </div>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href='product/1'>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">Цена: {product.price} руб</p>
                                      <div className=" ml-4 h-10 w-32">
  <div className="flex border border-black flex-row h-10 w-full rounded-md relative mt-1">
    <button onClick={() => updateItemQuantity(product.id.toString(), getItem(product.id.toString()).quantity - 1)}  className=" bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span className="m-auto text-2xl font-thin">−</span>
    </button>
    
    <input type="number" className=" text-center w-full border-white bg-white font-semibold text-md hover:text-black focus:text-black flex items-center text-gray-700  outline-none" value={getItem(product.id.toString()).quantity}></input>
  <button onClick={() => {
              addItem({
                id: product.id.toString(),
                name: product.name,
                price: product.price,
                src: product.src,
                category:product.category,
              });
            }} className="bg-white text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span className="m-auto text-2xl font-thin">+</span>
  </button>
</div></div>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500 font-bold">{product.category}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    
                                  <div className="flex ">
                                      
                                      <button
          className={` relative bottom-0  right-0 rounded-lg m-4 p-4 text-green-700 transition-all hover:scale-110 focus:outline-none `+(inWishlist(product.id.toString())?"animate-pulse":"bg-green-200 border-green-400")}
          type="button"
          onClick={()=>handler({id: product.id.toString(), name: product.name, price: product.price})}
        >
          <Image
            layout="fill"
            objectFit="cover"
            src={
              inWishlist(product.id.toString())
                ? "/design_parts/heartActive.png"
                : "/design_parts/heart.png"
            }
          />
        </button>
                                      <button
                                        type="button"
                                        onClick={()=>{removeItem(product.id.toString())}}
                                        className="font-medium p-1 m-1 text-indigo-600 hover:text-indigo-500"
                                       
                                      >
                                        убрать 
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}</ul></div></div></>}
        </div>
        <div className="col-span-1 m-4 p-4 lg:fixed lg:w-1/3 right-10">
        <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Способ доставки:
      </label>
    </div>
    <div id="inline-full-name" className="md:w-2/3">
    <Select  onChange={setDelivery}
        placeholder={"Выберите способ доставки"}
        options={optionsDelivery}/>
      </div>
  </div>
        <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Способ оплаты: 
      </label>
    </div>
    <div id="inline-full-name" className="md:w-2/3">
    <Select  onChange={setPayment}
        placeholder={"Выберите способ оплаты"}
        
        options={optionsPayment}/>
       </div>
  </div>
        <div className="md:flex md:items-center mb-6">
    <button className="rounded-lg bg-green-500 p-4 flex m-auto text-white font-bold "  >Продолжить оплату</button>
  </div>
        </div>
        <div className="h-24"></div>
      </div>
    </div>
  );
}
