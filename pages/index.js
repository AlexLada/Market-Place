import NewBlock from "../components/uiElements/mainPage/new";




export default function Index({ data }) {
  
  return (
    
    <>
    <div className="flex flex-col">
      <div className="flex flex-row pt-12 justify-center  ">
        <div className=" flex   w-[1700px] h-[600px] justify-between items-center rounded-3xl text-3xl border-4 bg-slate-300 border-[#98CC61] ">
          
          <span className="flex pl-8 ">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="37.5" cy="37.5" r="37.5" fill="white" />
              <path
                d="M42 23L29 37.2559L42 51.5118"
                stroke="#C17A0F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          Пейте чай!
          <span className="flex pr-8 ">
            <svg
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="37.5" cy="37.5" r="37.5" fill="white" />
              <path
                d="M34 24L47.8109 38.2559L34 52.5118"
                stroke="#C17A0F"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          
        </div>
      </div>
      
      <div className="flex flex-row justify-end   pt-10 pr-10">
        <a
          href="#"
          class="inline-flex items-center px-4 py-2  text-sm font-medium text-gray-500  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center px-4  text-sm font-medium text-gray-500  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex flex-col  ">
        <div className="flex flex-row pt-6 justify-center space-x-8  w-full">
          <div className=" flex rounded-tl-3xl rounded-br-3xl border-4 border-[#98CC61] w-[320px] h-[360px]">
            <div className="flex flex-col">
              <img
                src="/design_parts/1_ex.jpg"
                className="rounded-tl-3xl   w-[320px] h-[220px]"
              />
              <h3 className="pl-4 pt-2 text-[#00000084]">Тонизирующий чай</h3>

              <div className="flex flex-row">
                <h3 className="text-3xl pt-8 pl-8  ">18</h3>
                <h3 className="text-3xl pt-8 pl-6  text-[#98CC61]">₽</h3>
              </div>
            </div>
          </div>

          <div className=" flex rounded-tl-3xl rounded-br-3xl border-4 border-[#98CC61] w-[320px] h-[360px]">
            <div className="flex flex-col">
              <img
                src="/design_parts/4_ex.jpg"
                className="rounded-tl-3xl   w-[320px] h-[220px]"
              />
              <h3 className="pl-4 pt-2 text-[#00000084]">Тонизирующий чай</h3>
              <div className="flex flex-row">
                <h3 className="text-3xl pt-8 pl-8  ">18</h3>
                <h3 className="text-3xl pt-8 pl-6  text-[#98CC61]">₽</h3>
              </div>
            </div>
          </div>

          <div className=" flex rounded-tl-3xl rounded-br-3xl border-4 border-[#98CC61] w-[320px] h-[360px]">
            <div className="flex flex-col">
              <img
                src="/design_parts/3_ex.jpg"
                className="rounded-tl-3xl   w-[320px] h-[220px]"
              />
              <h3 className="pl-4 pt-2 text-[#00000084]">Тонизирующий чай</h3>
              <div className="flex flex-row">
                <h3 className="text-3xl pt-8 pl-8  ">18</h3>
                <h3 className="text-3xl pt-8 pl-6  text-[#98CC61]">₽</h3>
              </div>
            </div>
          </div>

          <div className=" flex rounded-tl-3xl rounded-br-3xl border-4 border-[#98CC61] w-[320px] h-[360px]">
            <div className="flex flex-col">
              <img
                src="/design_parts/2_ex.jpg"
                className="rounded-tl-3xl   w-[320px] h-[220px]"
              />
              <h3 className="pl-4 pt-2 text-[#00000084]">Тонизирующий чай</h3>
              <div className="flex flex-row">
                <h3 className="text-3xl pt-8 pl-8  ">18</h3>
                <h3 className="text-3xl pt-8 pl-6  text-[#98CC61]">₽</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row pt-12 justify-center ">
        <div className=" flex rounded-2xl  w-[1700px] h-[600px] justify-center items-center text-3xl bg-red-300 ">
          Пейте чай!
        </div>
      </div>
      <div className="flex flex-row justify-end  pt-10 pr-10">
        <a
          href="#"
          class="inline-flex items-center px-4 py-2  text-sm font-medium text-gray-500  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <a
          href="#"
          class="inline-flex items-center px-4  text-sm font-medium text-gray-500  rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="flex flex-col  ">
        <div className="flex flex-row pt-6 justify-center space-x-8  w-full">
          <div className=" flex rounded-tl-3xl rounded-br-3xl border-2 border-[#98CC61] w-[320px] h-[360px]">
            <img
              src="/design_parts/1_ex.jpg"
              className="rounded-tl-3xl  border w-[320px] h-[220px]"
            />
          </div>
          <div className=" flex rounded-tl-3xl rounded-br-3xl border-2 border-[#98CC61] w-[320px] h-[360px]"></div>
          <div className=" flex rounded-tl-3xl rounded-br-3xl border-2 border-[#98CC61] w-[320px] h-[360px]"></div>
          <div className=" flex rounded-tl-3xl rounded-br-3xl border-2 border-[#98CC61] w-[320px] h-[360px]"></div>
        </div>
      </div>
    </div>
    
    </>
  );
}
{
  /* wefewf*/
}
{
  /* <NewBlock />
      
      <NewBlock />
      
      <NewBlock />
      
      <NewBlock />  */
}
