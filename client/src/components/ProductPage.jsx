import Sidebar from './Sidebar';
import FilteredProducts from './FilteredProducts'

const ProductPage = ({ AllProducts, Athleisure, Equipment, Lifestyle }) => {
  return (
    <>
      <div className="bg-gray-300 container mx-auto p-20">
        <div className="flex flex-col md:flex-row">
          <Sidebar />
          <FilteredProducts AllProducts={AllProducts} Athleisure={Athleisure} Equipment={Equipment} Lifestyle={Lifestyle} />
        </div>
      </div>
    </>
  );
};
export default ProductPage;