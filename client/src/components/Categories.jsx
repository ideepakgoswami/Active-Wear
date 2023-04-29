import CategoryCard from "./CategoryCard";
import { useNavigate } from 'react-router-dom';
import { useGetHomeCategoriesQuery } from "../features/productsApi";

const Categories = () => {
  const navigate = useNavigate()
  const { data } = useGetHomeCategoriesQuery()

  const handleCategoryClick = (category) => {
    switch (category) {
      case "Athleisure":
        navigate('/products/Athleisure')
        break;
      case "Equipment":
        navigate('/products/Equipment')
        break;
      case "Lifestyle":
        navigate('/products/Lifestyle')
        break;
      default:
        navigate('/products/AllProducts')
        break;
    }
  }

  return (
    <section section className="bg-gray-300 pt-20" >
      <div className="text-center">
        <h1 className="font-black text-5xl text-center text-navy font-mont ">
          Categories
        </h1>
      </div>
      <div className="flex min-h-screen items-center justify-center ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

          {data?.map((values, index) => {
            const { _id, image, title, description, category } = values;
            return (
              <CategoryCard
                key={_id}
                index={index}
                image={image}
                title={title}
                description={description}
                onclick={() => handleCategoryClick(category)}
              />
            )
          })}
        </div>
      </div>
    </section >
  );
};

export default Categories;