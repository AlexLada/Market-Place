import Image from "next/image";
import a from "next/link";
import Hamburger from "hamburger-react";

const drawerList = [
  { index: 0, title: "Главная", keyword: "главная" },
  { index: 1, title: "Каталог", keyword: "каталог" },
  // { index: 2, title: "Лекарства", keyword: "лекарства" },
  // { index: 3, title: "Лечебные травы", keyword: "лечебные" },
  // { index: 4, title: "Чаи", keyword: "чаи" },
  // { index: 5, title: "Фрукты", keyword: "фрукты" },
  // { index: 6, title: "Злаки", keyword: "злаки" },
  // { index: 7, title: "Напитки", keyword: "напитки" },
];
export default function Drawer({ isOpen, setIsOpen }) {
  return (
    <div
      className={
        "fixed overflow-auto flex z-[1000] bg-black bg-opacity-60 inset-0 transform ease-in-out" +
        (isOpen
          ? " transition-opacity opacity-100 duration-100 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "container w-9/12 border-2 rounded-tr-lg rounded-br-lg border-[#98cc61] left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " -translate-x-full ")
        }
      >
        <div className="grid grid-cols-1  text-black ml-4">
          <div href="/">
            <div className="relative object-cover flex justify-between cursor-pointer  pt-2">
              <img
                src="/design_parts/logo_new.png"
                href="/"
                height={96}
                width={96}
                alt="/"
              />
            </div>
          </div>
          <div className="pt-4"></div>
        </div>
        {/* {drawerList.map((item) => (
            <a
              key={item.index}
              className="flex 
              p-2 m-2 w-10/12 ml-6
              border-2 rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer"
              href={`/searchResult/test`}
            >
              {item.title}
            </a>
          ))} */}

        <div className="flex justify-center ">
        <div className="container md:hidden text-black pl-4 space-y-3">
          <a
            className="flex 
              p-2 m-2 w-10/12
              border-2 rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer"
            href={`/searchResult/test`}
          >
            Главная
          </a>

          <a
            className="flex 
              p-2 m-2 w-10/12
              border-2 rounded-xl
              focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
              ease-in-out
              duration-500
              cursor-pointer"
            href={`/searchResult/test`}
          >
            Каталог
          </a>
          <div className="flex border-b-2 border-[#98cc61] w-11/12 "></div>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/payment"
          >
            Оплата
          </a>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/delivery"
          >
            Доставка
          </a>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/favourite"
          >
            Возврат
          </a>
          <div className="border-b-2 border-[#98cc61] w-11/12"></div>
          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/lk"
          >
            Акции
          </a>

          <a
            className="flex
            p-2 m-2 w-10/12
            border-2 rounded-xl
            focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
            ease-in-out
            duration-500
            cursor-pointer"
            href="/lk"
          >
            О нас
          </a>

          <a
            className="flex
         p-2 m-2 w-10/12
         border-2 rounded-xl
         focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
         ease-in-out
         duration-500
         cursor-pointer"
            href="/lk"
          >
            Вход/регистрация
          </a>

          <a
            className="flex
         p-2 m-2 w-10/12
         border-2 rounded-xl
         focus:outline-none focus:ring-0 focus:scale-105 focus:text-gray-600
         ease-in-out
         duration-500
         cursor-pointer"
            href="/lk"
          >
            Личный кабинет
          </a>

        </div>
        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
