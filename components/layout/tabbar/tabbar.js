import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";
import { useCallback } from "react";


export default function Tabbar({ navigationData, router }) {
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "/" :
        return <Link href="/">
        <div className="flex w-12">
          <img
            src="/design_parts/logo_new.png"
            href="/"
            height={96}
            width = {96}
            alt="/"
          />
        </div>
      </Link>

      case "/searchResult":
        return <span className="flex">
          <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.1507 24.2936L17.1693 18.8573M19.8785 11.4532C19.9068 17.2085 15.7266 21.9357 10.5417 22.0117C5.35684 22.0877 1.13075 17.4838 1.10247 11.7285C1.07419 5.97329 5.25443 1.24611 10.4393 1.17008C15.6241 1.09405 19.8503 5.69798 19.8785 11.4532Z"
          stroke="#C17A0F"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      </span>

      case "/order":
        return <span className="flex">
        <svg
          width="50"
          height="48"
          viewBox="-5 1 48 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.69138 18.9403C3.77126 17.786 4.60123 16.8966 5.59846 16.8966H32.2004C33.1978 16.8966 34.0277 17.786 34.1075 18.9403L35.7864 43.1999C35.9652 45.7859 34.2064 47.999 31.9721 47.999H5.82669C3.59256 47.999 1.83358 45.7859 2.01254 43.1999L3.69138 18.9403Z"
            stroke="#C17A0F"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.5524 23.5615V12.4535C26.5524 7.54571 23.126 3.56714 18.8995 3.56714C14.6729 3.56714 11.2466 7.54571 11.2466 12.4535V23.5615"
            stroke="#C17A0F"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <ellipse
            cx="35.2222"
            cy="14.2704"
            rx="12.7778"
            ry="12.973"
            fill="#C17A0F"
            fill-opacity="0.45"
          />
          <path
            d="M33.4571 16C33.3078 16 33.1771 15.9487 33.0651 15.846C32.9624 15.7433 32.9111 15.6127 32.9111 15.454V6.354L31.5111 6.844C31.4084 6.89067 31.3151 6.914 31.2311 6.914C31.0724 6.914 30.9418 6.86267 30.8391 6.76C30.7364 6.65733 30.6851 6.53133 30.6851 6.382C30.6851 6.27 30.7084 6.16733 30.7551 6.074C30.8111 5.98067 30.9044 5.91067 31.0351 5.864L33.1911 5.122C33.2378 5.10333 33.2844 5.08933 33.3311 5.08C33.3871 5.06133 33.4338 5.052 33.4711 5.052C33.6298 5.052 33.7558 5.108 33.8491 5.22C33.9518 5.32267 34.0031 5.44867 34.0031 5.598V15.454C34.0031 15.6127 33.9518 15.7433 33.8491 15.846C33.7464 15.9487 33.6158 16 33.4571 16Z"
            fill="black"
          />
        </svg>
      </span>

      case "/profile":
        return <span className="flex">
              <svg
                width="50"
                height="48"
                viewBox="-5 -2 48 48"
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
    }
  }, []);

  return (
    <nav className="fixed flex flex-row items-center justify-between visible h-16 w-full px-8 text-2xl bg-[#fff] border-t-4 rounded-t-xl border-[#a4c852] z-50 bottom-0 lg:hidden  lg:invisible">
      {navigationData.map((item, index) => (
        <Link key={index} href={item}>
          <div className=" container bg-transparent hover:scale-125 ease-in-out duration-500 flex items-center justify-center h-10 w-10  ">
            <span
              className={`
              ${router.pathname == item ? "border-2 rounded-2xl  border-[#a4c852]  " : ""}`
            }>
              <span className="-mb-1 ">{getTabIcon(item)}</span>
            </span>
          </div>
        </Link>
      ))}
    </nav>
  );
}
