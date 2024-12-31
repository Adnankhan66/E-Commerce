import React, { useEffect, useState } from 'react';
import ProductItems from './ProductItems'

const ExploreMenu = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // console.log(counter)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/categories');
        const data = await response.json();

        const productResponse = await fetch('https://api.escuelajs.co/api/v1/products');
        const productData = await productResponse.json();
        setProducts(productData);

        const categoriesWithProducts = data.filter((category) =>
          productData.some((product) => product.category.id === category.id)
        );

        setCategories(categoriesWithProducts);
        setFilteredProducts(productData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    const filtered = products.filter((product) => product.category.id === categoryId);
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <div id='menu'>
        <h1 className="text-3xl font-bold mt-16 mb-6 text-center">Filtered Categories</h1>
        <p  className='text-neutral-500 font-medium text-center pb-5 px-32'>Experience effortless online shopping with our curated selection of quality products, fast shipping, secure payments, and dedicated customer support. Shop now for a seamless and satisfying experience!</p>
        <div className="mx-32 overflow-x-auto" >
            <div className="flex space-x-6">
            {categories.map((category) => (
                <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="cursor-pointer text-center flex-shrink-0 mt-5"
                >
                <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 ml-1 mx-auto rounded-full object-cover hover:outline shadow-lg transition-shadow duration-300"
                />
                <p className="mt-4 text-lg font-medium">{category.name}</p>
                </div>
            ))}
            </div>
        </div>
      </div>

      <div id='product'>
        <h1 className="text-3xl font-bold mt-24 mb-6 text-center">Products</h1>
        <p className='text-neutral-500 font-medium text-center pb-10 px-32'>Explore top-quality products designed to match your style and needs. Enjoy competitive prices and fast, reliable delivery. Shop with confidence, knowing your satisfaction is our priority. Find exactly what you need today!</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shrink-0 gap-6 mx-32">
            {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 16).map((product) => (
              <ProductItems id={product.id} image={product.images[0]} title={product.title} categore={product.category.name} desc={product.description} price={product.price}/>
                
            ))
            ) : (
            <p className="text-gray-500 text-center col-span-4">
                No products available for this category.
            </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;


