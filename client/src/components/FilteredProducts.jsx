import React from 'react'
import ProductCard from './ProductCard'

const FilteredProducts = ({ AllProducts, Athleisure, Equipment, Lifestyle }) => {

    return (
        <div className="w-full md:w-3/4 px-4">
            <div className="flex items-center justify-between mb-8">
                <h2 className="font-semibold text-4xl font-mont text-navy">Products</h2>
                <div>
                    <label htmlFor="sort" className="inline-block font-medium mr-2">
                        Sort by:
                    </label>
                    <select id="sort" name="sort" className="rounded-lg">
                        <option value="price-asc">Price (low to high)</option>
                        <option value="price-desc">Price (high to low)</option>
                        <option value="name-asc">Name (A to Z)</option>
                        <option value="name-desc">Name (Z to A)</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
                {/* <!-- Product cards here --> */}

                {AllProducts?.map((item, index) => (
                    <ProductCard
                        key={item._id}
                        item={item}
                        id={item._id}
                        index={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}
                    />))}

                {Lifestyle?.map((item, index) => (
                    <ProductCard
                        key={item._id}
                        item={item}
                        id={item._id}
                        index={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}

                    />))}

                {Athleisure?.map((item, index) => (
                    <ProductCard
                        key={item._id}
                        item={item}
                        id={item._id}
                        index={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}

                    />))}

                {Equipment?.map((item, index) => (
                    <ProductCard
                        key={item._id}
                        item={item}
                        id={item._id}
                        index={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        oldPrice={item.oldPrice}

                    />))}
            </div>
        </div>
    )
}

export default FilteredProducts