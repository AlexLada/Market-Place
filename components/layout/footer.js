import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full block bottom-0 inset-y-0">
      <footer className="text-white h-12 bg-green-700">
        <div className="border-t h-12 sm:px-6 lg:px-8 border-white/25 sm:items-center sm:justify-between sm:flex">
          <nav className="flex justify-center text-sm font-medium space-x-4 sm:justify-start">
            <Link href="/retailer" className="hover:opacity-75">
              Главная страница ретейлера
            </Link>
            <Link href="/retailer/lk" className="hover:opacity-75">
              Личный кабинет
            </Link>
            <Link href="/client" className="hover:opacity-75">
              Маркетплейс
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
