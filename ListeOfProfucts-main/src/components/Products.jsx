import React from "react";
import { useEffect, useState } from "react";

export default function Products({Products}){


    return(
      <>
      <tbody className="text-center">
            </tbody>
        {Products.map((Product) => {
            return (
              <tr key={Product.id} className="border border-gray-400">
                <td className="border border-gray-400 py-2">
                  {Product.id}
                </td>
                <td className="border border-gray-400 py-2">
                  {Product.title}{" "}
                </td>
                <td className="border border-gray-400 py-2">
                  {Product.price}{" "}
                </td>
                <td className="border border-gray-400 py-2">
                  {Product.category}{" "}
                </td>
                <td className="border border-gray-400 py-2">
                  {Product.description}{" "}
                </td>
                <td className="border-gray-400 py-2 grid place-items-center">
                  <img
                    className="w-[60%]"
                    src={Product.image}
                    alt={Product.title}
                  />
                </td>
                <td className="border border-gray-400 py-2">
                  {/* <h1 className="inline">{Product.rating.rate} <span><FaStar /></span></h1> */}
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
    
      </>
      );
           
}