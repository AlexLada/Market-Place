import { useRouter } from "next/router";

import products from "../../components/test_data/Product";
import Filter from "../../components/uiElements/resultPage/resultPage";
export default function ResultPage() {
  const router = useRouter()
  const { productid } = router.query
  let product = products.list.find(x=>x.id == productid)

  return (<> <div className="p-4 pl-12 border rounded text-green-700 bg-green-50 border-sky-900/10"
  role="alert">
      Результаты поиска по запросу: <div className="font-bold">"{router.query.text}"</div>
  </div>
    <Filter products={products} /></>
  );
}

