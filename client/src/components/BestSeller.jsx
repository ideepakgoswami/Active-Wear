import { useGetAllProductsQuery } from "../features/productsApi";
import ProductCard from "./ProductCard";

const BestSeller = () => {
  const { data: allProducts } = useGetAllProductsQuery()

  return (
    <section className="bg-gray-300 pb-20">
      <div className="text-center p-10">
        <h1 className="font-black text-5xl mb-4 text-center text-navy font-mont ">
          Best Seller
        </h1>
      </div>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
        {allProducts?.slice(0, 6).map((item, index) =>
          < ProductCard
            key={item._id}
            id={item._id}
            item={item}
            index={index}
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
          />
        )}
      </section>
    </section>
  );
};

export default BestSeller;