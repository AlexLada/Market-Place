import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "./drawer";
import SearchBox from "./searchBox";
import Hamburger from "hamburger-react";

import { Menu, MenuItem, MenuButton, MenuHeader, SubMenu,MenuDivider } from "@szhsin/react-menu";

import { useCart } from "react-use-cart";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import CartModal from "./cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function NavBar({ navigationData }) {


  const [drawer, setDrawer] = useState(false);
  const [cart, setCart] = useState(false);

  const { addItem, emptyCart, totalItems  } = useCart();
  
  let counter = 10;
  
  
  return (
    <>
      <div className="absolute flex visible xl:invisible lg:invisible z=[11000]">
        <div className="text-[#98cc61]  pt-12 pl-4">
          <Hamburger toggled={drawer} toggle={setDrawer} />
        </div>
        <Drawer isOpen={drawer} setIsOpen={setDrawer} />

        {/* <Link href="/">
          <div className="flex pl-32 w-11/12 visible xl:invisible lg:invisible md:invisible">
            <img
              src="/design_parts/logo_new.png"
              href="/"
              height={48}
              width={96}
              alt="/"
            />
          </div>
        </Link> */}
      </div>

      <nav className="invisible xl:visible lg:visible md:visible w-full border-b-4 border-[#98cc61] z-[10000]  top-0 lg:sticky  px-4 justify-between h-18 sm:h-24 bg-[#fff]">
        <div className="flex  space-x-16 justify-center mx-0  lg:max-w-full items-center md:px-8">
          {/*//! Левая панель !//*/}

          <div>
            {/*//! Лого !//
              
               */}
            <Link href="/">
              <div className="relative object-cover flex justify-between  cursor-pointer invisible xl:visible lg:visible md:visible">
                <img
                  src="/design_parts/logo_new.png"
                  href="/"
                  height={96}
                  width={96}
                  alt="/"
                />
              </div>
            </Link>
          </div>
        
          
           {/* className="invisible xl:visible lg:visible group relative inline-flex items-center overflow-hidden rounded-full border-2 w-36 hover:scale-110 ease-in-out duration-300 border-[#98CC61] px-10 py-2  focus:outline-none hover:bg-[#98CC61]/40" */}
              {/* Каталог лого */}

              {/* <span className="text-lg sticky z-[10000] w-1/3 text-[#0000007b] font-bold ">
                <Popup className="  h-full"
                  trigger={<button className="sticky z-[10000]" > Каталог </button>}
                  position="bottom center">
                    <div className="container sticky z-[10000]">
                  <button >Click herez-[10000] z-[10000] z-[10000] z-[10000] z-[10000] z-[10000] z-[10000] z-[10000] </button>
                </div>
                </Popup>
              </span> */}
              <Menu
                menuClassName="w-fit absolute z-[10000]  rounded-xl"
                menuButton={
                  <MenuButton className="pr-3 invisible xl:visible lg:visible md:visible text-2xl justify-center border-2  text-[#0000007b] flex flex-row border-[#98cc61] rounded-xl">
                    <span className="pt-2 px-3 ">
                      <svg
                        width="22"
                        height="14"
                        viewBox="0 0 22 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1H10.7374H20.4748M1 6.82492H20.4748M1 12.6498H20.4748"
                          stroke="#98CC61"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    Каталог
                  </MenuButton>
                }
              >
                <div className="flex  ">
        <div className=" p-2 space-y-3 bg-[#d3ffd2ce] rounded-xl flex flex-row">
      <div className="flex flex-col"> 
        <MenuHeader className="text-2xl text-[#0000007b] pt-3 pl-2 ">Категории</MenuHeader>

        <div className="flex flex-row pl-12">
          <div className="flex flex-col ">
        <MenuItem className="flex justify-center bg-white
              p-1 m-2 w-52
              border-b-2 border-[#98CC61]
              rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer first-letter:text-3xl"><p className= "first-letter:font-bold first-letter:text-orange-600">БАДы и суперфуд</p> </MenuItem>
        <MenuItem className="flex justify-center first bg-white
              p-1 m-2 w-52
              border-b-2 border-[#98CC61] rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Продукты и напитки</MenuItem>
        <MenuItem className="flex  bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-52
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Спортивные добавки</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61] 
              p-1 m-2 w-52
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Дом и уют</MenuItem></div>

         <div className="flex flex-col pl-12">
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Красота</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Средство гигиены</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Домашние питомцы</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Дети и младенцы</MenuItem>
              </div>
        </div> </div>
        

        
        <div className="flex flex-col pl-8">
        <MenuHeader className="text-2xl text-[#0000007b] ">Организм</MenuHeader>
      <div className="flex flex-row">
      <div className="flex flex-col pl-12">
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Иммунитет</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Тонус и энергия</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Сон и гармония</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Сердце и сосуды</MenuItem>
              
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Зрение</MenuItem></div>
              
              <div className="flex flex-col">
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-64
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Репродуктивная система</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-64
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Мозговая деятельность</MenuItem>
        
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-64
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Волосы,Кожа и Ногти</MenuItem>
              
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Детокс</MenuItem>
        <MenuItem className="flex justify-center bg-white border-b-2 border-[#98CC61]
              p-1 m-2 w-48
               rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer">Аллергия</MenuItem>
              </div>
              
              </div>
        </div>
        </div>
          
         

        </div>
        
                 
              </Menu>
            

          <div className="invisible xl:visible lg:visible flex w-4/12 justify-center">
            <SearchBox />
          </div>

          <div>
            
            
            

            <div className="flex-1  pb-2  justify-self-center  invisible xl:visible lg:visible md:visible">
              <ul className="items-center mx-auto flex lg:space-x-8 lg:space-y-0">
                <li className="appearance-none text-[#0000007b] text-lg font-bold hidden lg:block hover:text-orange-400">
                  <Link className="flex flex-col" href="lk/my_acc">
                    {/* Профиль лого */}
            <span className=" flex mx-auto cursor-pointer hover:scale-105 transition duration-500 invisible xl:visible lg:visible">
              <svg
                width="37"
                height="41"
                viewBox="0 0 37 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 20.3405C23.7163 20.3405 27.945 16.2349 27.945 11.1703C27.945 6.10566 23.7163 2 18.5 2C13.2836 2 9.05493 6.10566 9.05493 11.1703C9.05493 16.2349 13.2836 20.3405 18.5 20.3405Z"
                  stroke="#C17A0F"
                  stroke-width="3"
                />
                <path
                  d="M27.945 24.3276H28.6094C31.4673 24.3276 33.8781 26.3939 34.2326 29.1473L34.9703 34.8769C35.2521 37.0662 33.4938 39 31.2213 39H5.77857C3.50611 39 1.74787 37.0662 2.02973 34.8769L2.76739 29.1473C3.12188 26.3939 5.53265 24.3276 8.39067 24.3276H9.05494"
                  stroke="#C17A0F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
                    Профиль</Link>
                </li>
                <li className="text-[#0000007b] hidden text-lg font-bold lg:block hover:text-orange-400 ">
                  <Link className="flex flex-col" href="/payment">
                    {/* Избранное лого */}
            <span className="flex mx-auto">
              <svg
                width="40"
                height="39"
                viewBox="0 0 40 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2C6.02944 2 2 6.3753 2 11.7725C2 16.1297 3.57439 26.4702 19.0775 36.925C19.6389 37.3037 20.3611 37.3037 20.9225 36.925C36.4255 26.4702 38 16.1297 38 11.7725C38 6.3753 33.9705 2 29 2C24.0295 2 20 7.92274 20 7.92274C20 7.92274 15.9706 2 11 2Z"
                  stroke="#C17A0F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
                     Избранное</Link>
                </li>
                
                <li className="text-[#0000007b] hidden text-lg font-bold lg:block hover:text-orange-400 ">
                  <Link className="flex relative flex-col" href="/payment">
                    {/* Корзина лого */}
            <span className="flex mx-auto">
            <svg width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.69138 16.9403C3.77126 15.786 4.60123 14.8966 5.59846 14.8966H32.2004C33.1978 14.8966 34.0277 15.786 34.1075 16.9403L35.7864 41.1999C35.9652 43.7859 34.2064 45.999 31.9721 45.999H5.82669C3.59256 45.999 1.83358 43.7859 2.01254 41.1999L3.69138 16.9403Z" stroke="#C17A0F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5524 21.5615V10.4535C26.5524 5.54571 23.126 1.56714 18.8995 1.56714C14.6729 1.56714 11.2466 5.54571 11.2466 10.4535V21.5615" stroke="#C17A0F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
            </span>
             Корзина
             <div className="bg-orange-700 text-center align-middle rounded-full h-6 w-6 right-0 absolute"> 
             {totalItems}
             </div>
             </Link>
                </li>
               
              </ul>
            </div>
          </div>

          
            

          <div className="flex">
            <CartModal open={cart} setOpen={setCart} />
          </div>
        </div>
      </nav>
    </>
  );
}

{/* <button
                  onClick={() => {
                    setCart(true);
                  }}
                  className=" hover:text-white block justify-between border border-[#98cc61] rounded-lg justify-items-center   "
                >
                  <div className="invisible text-[#0000007b] font-bold text-lg hidden lg:block lg:visible">
                    Избранное
                  </div>
                  <div className="visible lg:hidden text-4xl flex cursor-pointer ">
                    <AiOutlineShoppingCart />
                  </div>
                </button> */}






/*
!! Отдел отходов

<div className="flex flex-row text-xl z-[10000] justify-evenly    pl">
                  <div className="flex flex-col  items-center text-[#000000ab] ">
                  <div className="flex flex-col   text-[#000000ab] ">
                    <img
                      src="/design_parts/1_ex.jpg"
                      href="/"
                      height={170}
                      width={176}
                      alt="/"
                    />
                    <img
                      src="/design_parts/1_ex.jpg"
                      href="/"
                      height={170}
                      width={176}
                      alt="/"
                    />
                    <img
                      src="/design_parts/1_ex.jpg"
                      href="/"
                      height={170}
                      width={176}
                      alt="/"
                    />
                    <MenuItem className="pt-0 rounded-xl border-2 border-green ">
                      Чаи
                    </MenuItem>

*/