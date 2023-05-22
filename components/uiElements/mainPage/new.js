// import TopProductCarousel from "../productDetailPage/topCarousel";
import Heading from "../productDetailPage/title";
import products from "../../test_data/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../productDetailPage/productCard";

const responsive = {
  bigger: {
    breakpoint: { max: 4000, min: 2560 },
    items: 7,
  },
  biggers: {
    breakpoint: { max: 2560, min: 2180 },
    items: 6,
  },
  bigger: {
    breakpoint: { max: 2180, min: 1600 },
    items: 5,
  },
  superLargeDesktop: {
    breakpoint: { max: 1600, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function NewBlock() {
  const productes = products;
  return (
    <div className="p-2 m-2">
      <Heading text="Новинки" />
      <br />
      <Carousel
        responsive={responsive}
        ssr
        showDots
        deviceType="desktop"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {productes.list.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            category={item.category}
            src={item.images[0]}
          />
        ))}
      </Carousel>
    </div>
  );
}
