import Link from "next/link";
import products from "../components/test_data/Product";
export default function DeliveryPage() {
  console.log(typeof products)
  return (
        <div className="relative rounded-lg border border-gray-200 p-8 text-center">
  <h2 className="text-2xl font-medium">Здесь ничего нет....</h2>

  <p className="mt-4 text-sm text-gray-500">
    Но скоро здесь информация о нас!
  </p>

  <a
    href="/"
    className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-500"
  >
    Вернуться на главную

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="ml-3 h-4 w-4 flex-shrink-0"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  </a>
</div>

 

  );
}