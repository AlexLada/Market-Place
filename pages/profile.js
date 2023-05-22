import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const [cart, setCart] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-white ">
      <div className="flex justify-end ">
          <div className="container top-0 absolute border-2 w-48 h-24 bg-[#98CC61]">
          </div>
          </div>
        <div className="flex flex-row">
          <Link href="/">
            <button
              onClick={() => {
                setCart(true);
              }}
              className=" hover:text-white block justify-between border border-[#98cc61] rounded-lg justify-items-center   "
            >
              <div className="visible lg:hidden text-4xl flex cursor-pointer ">
                <svg
                  className="absolute top-0 pt-2 ml-5 h-12 w-12 text-[#98CC61]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                  <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                </svg>
              </div>
            </button>
          </Link>

          
        </div>
        
        
      </div>
    </>
  );
}
