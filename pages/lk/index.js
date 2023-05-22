// import { parseCookies } from "cookies";
import { useEffect } from "react";
import Router from "next/router";

export default function Lk() {
  // useEffect(()=>{
  //     const cookies = parseCookies();
  //     if (Object.entries(cookies).length == 0 && Object.entries(cookies)[0] != "session-key"){
  //       Router.push('/login');
  //     }
  //   })
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className=" w-11/12 h-96 mt-8 bg-[#98cc6133] border-b-8 border-t-2 border-[#98CC61] rounded-3xl">
            <a className="xl:pl-16 lg:pl-24 text-2xl text-[#000000b0] font-bold">
              Профиль:
            </a>

            <div className="flex flex-row space-x-6">
              <div className="rounded-full bg-white border-4 border-[#98cc61] w-24 h-24 mt-6 ml-20">
                <a className="flex justify-center pt-6 text-5xl font-bold text-[#C17A0F]">
                  И
                </a>
              </div>

              <div className="flex flex-row space-x-2">
                <div className="font-bold text-4xl pt-14">Ирина</div>

                <span className="pt-14">
                  <svg
                    className="w-7/12"
                    width="31"
                    height="38"
                    viewBox="0 -3 31 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.53604 26.1531L22.5866 3.71583C24.0607 1.88365 26.3165 1.98214 27.6252 3.93582C28.9338 5.88951 28.7998 8.95856 27.3259 10.7907L9.27523 33.2279C8.86343 33.7398 8.35262 34.0788 7.80718 34.2019L2.27077 35.4518L3.69005 28.0557C3.82989 27.327 4.12425 26.665 4.53604 26.1531Z"
                      fill="#C17A0F"
                      stroke="#C17A0F"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M4.73145 27.0193L8.65998 32.884Z" fill="#C17A0F" />
                    <path
                      d="M4.73145 27.0193L8.65998 32.884"
                      stroke="#C17A0F"
                      stroke-width="4"
                      stroke-linejoin="round"
                    />
                    <path d="M19.4805 8.68591L23.409 14.5506Z" fill="#C17A0F" />
                    <path
                      d="M19.4805 8.68591L23.409 14.5506"
                      stroke="#C17A0F"
                      stroke-width="4"
                    />
                    <line
                      x1="17.8711"
                      y1="6.71829"
                      x2="26.5136"
                      y2="15.1032"
                      stroke="white"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col space-x-6">
                <a className="ml-20 mt-10 text-xl">Email:</a>

                <a className="text-[#0000006c] pl-14 pt-4 text-sm">
                  Не указано
                </a>

                <div className="pl-12 w-72">
                  <div className="border border-[#000000c0]"></div>
                </div>
              </div>

              <div className="flex flex-col space-x-6">
                <a className="ml-20 mt-10 text-xl">Телефон:</a>

                <a className="text-[#0000006c] pl-14 pt-4 text-sm">
                  Не указано
                </a>

                <div className="pl-12 w-72">
                  <div className="border border-[#000000c0]"></div>
                </div>
              </div>

              <div className="flex flex-col space-x-6">
                <a className="ml-20 mt-10 text-xl">Пол:</a>

                <div className="flex flex-row pt-5 pl-14 space-x-8">
                  <div className="flex flex-row space-x-1">
                    <div className="border-2 rounded-full border-[#C17A0F] w-5 h-5 hover:bg-[#98cc61] hover:scale-105 ease-in-out duration-300 "></div>

                    <a className=" text-sm pt-1"> Муж. </a>
                  </div>
                  <div className="flex flex-row space-x-1">
                  <div className="border-2 rounded-full border-[#C17A0F] w-5 h-5 hover:bg-[#98cc61] hover:scale-105 ease-in-out duration-300 "></div>

                    <a className=" text-sm pt-1"> Жен. </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
