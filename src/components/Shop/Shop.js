import React from "react";
import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    fetch("../../fakeData/products.JSON")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div></div>;
};

export default Shop;
