import { useRouter } from "next/router";
import { Button, Popup } from 'semantic-ui-react'
import Breadcrumb from "../../components/uiElements/productDetailPage/breadcrumb";
import CategoryList from "../../components/uiElements/productDetailPage/badge";
import ProductCard from "../../components/uiElements/productDetailPage/productCard";
import Image from "next/image";
import { ReactPhotoCollage } from "react-photo-collage";
import products from "../../components/test_data/Product";
import { useEffect } from "react";
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';



import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// const setting = {
//   width: "600px",
//   height: ["300px", "200px"],
//   layout: [1, 4],
//   photos: [
//     { source: "/design_parts/1_ex.jpg" },
//     { source: "/design_parts/2_ex.jpg" },
//     { source: "/design_parts/3_ex.jpg" },
//     { source: "/design_parts/4_ex.jpg" },
//     { source: "/design_parts/5_ex.jpg" },
//     { source: "/design_parts/6_ex.jpg" },
//   ],
//   showNumOfRemainingPhotos: true,
// };


const PopupExample = () => (
  <Popup content='Add users to your feed' trigger={<Button icon='add' />} />
)

export default function ProductPage() {
  // const router = useRouter()
  // const { productid } = router.query
  //   let product = products.list.find(x=>x.id == productid)

  return (
    // главная колонка
    <div className="flex flex-col ">
      {/* Cтрочка пути */}
      <div className="flex flex-row pb-6 ">
        <span className="pl-28 pt-6 ">
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 17.4831V10.4137C20 9.41998 19.5696 8.4701 18.8099 7.78762L11.805 1.49352C11.0727 0.835492 9.92734 0.835492 9.19498 1.49352L2.19002 7.78762C1.43043 8.4701 1 9.41998 1 10.4137V17.4831C1 18.4809 1.85066 19.2896 2.9 19.2896H18.1C19.1494 19.2896 20 18.4809 20 17.4831Z"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>

        <h3 className="text-md pl-6 pt-6 ">Главная</h3>
        <span className="pl-2 pt-8 ">
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"
              fill="black"
            />
          </svg>
        </span>
        <h3 className="text-md pl-2 pt-6 te">Каталог</h3>
        <span className="pl-2 pt-8 ">
          <svg
            width="15"
            height="8"
            viewBox="0 0 15 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z"
              fill="black"
            />
          </svg>
        </span>
        <h3 className="text-md pl-2 pt-6 te">Чаи</h3>
      </div>
      {/* одная большая главная строчка*/}
      <div className="flex flex-row px-40">
        {/* первый столбик */}
        <div className="flex flex-col">
          {/* галлерея */}
          <div className=" flex rounded-2xl  w-[750px] h-[600px] bg-slate-300 "></div>
          {/* колонка преимущества */}
          <div className="flex flex-row place-items-center justify-between pt-10 ">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24.5"
                cy="24.5"
                r="23"
                stroke="#C17A0F"
                stroke-width="3"
              />
              <path
                d="M24.5 9L27.3064 20.0557H36.3882L29.0409 26.8885L31.8473 37.9443L24.5 31.1115L17.1527 37.9443L19.9591 26.8885L12.6118 20.0557H21.6936L24.5 9Z"
                fill="#98CC61"
              />
            </svg>
            
            <h1 className="text-xl">Преимущества</h1>
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24.5"
                cy="24.5"
                r="23"
                stroke="#C17A0F"
                stroke-width="3"
              />
              <path
                d="M24.5 9L27.3064 20.0557H36.3882L29.0409 26.8885L31.8473 37.9443L24.5 31.1115L17.1527 37.9443L19.9591 26.8885L12.6118 20.0557H21.6936L24.5 9Z"
                fill="#98CC61"
              />
            </svg>
            <h1 className="text-xl">Преимущества</h1>
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24.5"
                cy="24.5"
                r="23"
                stroke="#C17A0F"
                stroke-width="3"
              />
              <path
                d="M24.5 9L27.3064 20.0557H36.3882L29.0409 26.8885L31.8473 37.9443L24.5 31.1115L17.1527 37.9443L19.9591 26.8885L12.6118 20.0557H21.6936L24.5 9Z"
                fill="#98CC61"
              />
            </svg>
            <h1 className="text-xl">Преимущества</h1>
          </div>
        </div>
        {/* второй столбик */}
        <div className="flex flex-col pl-14 w-1/2 ">
          <h3 className="text-lg font-semibold text-[#00000084]">
            Артикул 12312321
          </h3>
          <h1 className="text-4xl font-medium">Тонизирующий чай Лисма</h1>
          {/* строка отзывы */}
          <div className="flex flex-row pt-2">
            <svg
              class="w-5 h-5 text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              class="w-5 h-5 text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              class="w-5 h-5 text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              class="w-5 h-5 text-orange-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>

            <h3 className="pl-6">4 отзыва</h3>
          </div>
          {/* строка цена\вес */}
          <div className="flex flex-row justify-between pt-32">
            <div className="flex flex-row">
              <h3 className="text-3xl  ">18</h3>
              <h3 className="text-3xl text-[#98CC61] pl-6">₽</h3>
            </div>
            <div className="rounded border-2 h-2/3 border-[#98CC61]">
              12 Вес/г
            </div>
          </div>
          {/* кнопки строка */}
          <div className="flex flex-row space-x-5 pt-12">
            <div  className="flex basis-10/12 text-3xl  justify-center place-items-center rounded-3xl text-white bg-[#98CC61]">
              Добавить в корзину
              
            </div>
            <div  className="flex  basis-1/12 ">
              <svg
                width="82"
                height="52"
                viewBox="0 0 102 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="102" height="72" rx="36" fill="#98CC61" />
                <path
                  d="M41.5728 19C36.2859 19 32 23.5349 32 29.1289C32 33.645 33.6746 44.3627 50.1644 55.1988C50.7616 55.5913 51.5297 55.5913 52.1268 55.1988C68.6166 44.3627 70.2912 33.645 70.2912 29.1289C70.2912 23.5349 66.0053 19 60.7184 19C55.4316 19 51.1456 25.1388 51.1456 25.1388C51.1456 25.1388 46.8597 19 41.5728 19Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="basis-1/12 ">
              <svg
                width="82"
                height="52"
                viewBox="0 0 102 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="102" height="72" rx="36" fill="#98CC61" />
                <path
                  d="M53.5721 33.9908L63.9807 22"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M57.0416 22H63.9806V29.9939"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M63.9806 39.5866V47.5805C63.9806 49.3465 62.7379 50.778 61.205 50.778H51.4903H41.7756C40.2427 50.778 39 49.3465 39 47.5805V25.1976C39 23.4316 40.2427 22 41.7756 22H48.7147"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-40 pt-10 justify-between">
        <div className=" flex  rounded-2xl  w-[500px] h-[400px] bg-slate-300 "></div>
        <div className="flex flex-col px-0 w-1/2">
          <div className="flex flex-row space-x-3 ">
            <Tabs  className="flex flex-col  ">
    <TabList>
      <Tab>Описание</Tab>
      <Tab >Состав</Tab>
      <Tab>Применение</Tab>
      <Tab>Отзывы</Tab>
    </TabList>

    <TabPanel>
      <p>  
        <h3 className="text-[#00000084]">Артикул 12312321</h3>
          <h1 className="text-4xl font-medium">Тонизирующий чай Лисма</h1>
          <h2 className="break-words ">
            Те Гуань Инь – это элитны.Те Гуань Инь – это элитны.Те Гуань Инь –
            Те Гуань Инь – это элитны.Те Гуань Инь – это элитны.Те Гуань Инь –
            это элитны.Те Гуань Инь – это элитны.Те Гуань Инь – это элитны.Те
            Гуань Инь – это элитны.Те Гуань Инь – это элитны.Те Гуань Инь – это
            элитны.Те Гуань Инь – это элитны.Те Гуань Инь – это элитны.Те Гуань
            Инь – это элитны.
          </h2>
      </p>
      
    </TabPanel>
    <TabPanel>
      <p>
        <b>Состав</b>  
      </p>
      
    </TabPanel>
    <TabPanel>
      <p>
        <b>Применение</b> 
        
      </p>
      
    </TabPanel>
    <TabPanel>
      <p>
        <b>Отзывы</b> 
        
      </p>
    </TabPanel>
  </Tabs>
          </div>
          

    сьв
          
        </div>
      </div>
      
    </div>
  );
}



{
  /* <ReactPhotoCollage {...setting}/> */
}
{
  /* <div className="flex mx-auto col-span-1 p-4">
        <p className="text-2xl font-bold text-black">{productid}</p>
      </div> 
      
      
      <div className="border-2 text-lg rounded-xl  text-black border-[#98CC61] hover:bg-[#98CC61] hover:text-white ">
              Описание
            </div>
            <div className="border-2 text-lg rounded-xl  text-black border-[#98CC61] hover:bg-[#98CC61] hover:text-white ">
              Состав
            </div>
            <div className="border-2 text-lg rounded-xl  text-black border-[#98CC61] hover:bg-[#98CC61] hover:text-white">
              Применение
            </div>
            <div className="border-2 text-lg rounded-xl  text-black border-[#98CC61] hover:bg-[#98CC61] hover:text-white">
              Отзывы
            </div>

      
      */
}
