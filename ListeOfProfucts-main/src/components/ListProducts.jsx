import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
export default function ListProducts() {
  const [Products, setProducts] = useState([]);
  const [ProductsFiltered , setProductsFiltered] = useState([]);
  const [InputName , setInputName]=useState('');


 
  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);  
        });  
  }, []);


  const FilterProductsByName = (e) => {
    e.preventDefault();
    const FilteredProducts = Products.filter((Pro)=>{
        return Pro.title.toLowerCase().includes(InputName.toLocaleLowerCase());
       }
    );
    setProductsFiltered(FilteredProducts);
    
  }


  return (

    <div className="flex flex-col">
      <div className="py-6 px-[10%] fixed bg-white w-full  ">
        <form action="" className="flex gap-4">
          <input
          value={InputName}
          onChange={(e) => setInputName(e.target.value)}
            id="InputText"
            type="text"
            required
            placeholder="Enter product"
            className="border border-gray-400 rounded-lg px-4 py-1"
          />
          <button onClick={FilterProductsByName} className="bg-blue-800 text-gray-100 px-6 py-1 rounded-2xl">
            Search
          </button>
        </form>
      </div>
      <div className="px-[10%] overflow-x-hidden mt-20">
        <div className="overflow-auto">
          <table className="py-2 px-4">
            <thead className="text-center text-xl">
              <tr className="border border-gray-400 bg-blue-700 text-gray-100">
                <th className="border border-blue-900 px-6 py-3">*ID</th>
                <th className="border border-blue-900 px-6 py-3">Title</th>
                <th className="border border-blue-900 px-6 py-3">Price</th>
                <th className="border border-blue-900 px-6 py-3">Category</th>
                <th className="border border-blue-900 px-6 py-3">
                  Description
                </th>
                <th className="border border-blue-900 px-6 py-3">Image</th>
                <th className="border border-blue-900 px-6 py-3">Rating</th>
              </tr>
            </thead>

            <tbody className="text-center">
            {( ProductsFiltered.length > 0 ? ProductsFiltered : Products).map((Product) => {
                return (
                  <tr key={Product.id} className="border border-gray-400">
                    <td className="border border-gray-400 py-2 px-4 font-semibold text-xl">
                      {Product.id}
                    </td>
                    <td className="border border-gray-400 py-2 px-4">
                      {Product.title}{" "}
                    </td>
                    <td className="border border-gray-400 py-2 px-4">
                      <span className="text-lg">{Product.price} </span> <span className="font-semibold">{" Dh"}</span>
                    </td>
                    <td className="border border-gray-400 py-2 px-4">
                      {Product.category}{" "}
                    </td>
                    <td className="border border-gray-400 py-2 px-4">
                      {Product.description}{" "}
                    </td>
                    <td className="border-gray-400 py-2 grid place-items-center">
                      <img
                        className="w-[60%]"
                        src={Product.image}
                        alt={Product.title}
                      />
                    </td>
                    <td className="border border-gray-400 py-2 px-4">
                      <h1 className="inline-flex items-center text-lg font-semibold">
                        {Product.rating.rate}
                        <span className="ml-1 text-yellow-500">
                          <FaStar />
                        </span>
                      </h1>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
