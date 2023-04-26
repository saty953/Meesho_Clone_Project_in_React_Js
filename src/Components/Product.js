import React, { useEffect, useState } from "react";
import { ProductCard } from "./PorductList";
import styled from "styled-components";
import { mobile, tab } from "../responsive";
const Products = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  ${mobile({ alignItems: "center", justifyContent: "center" })}
  ${tab({ alignItems: "center", justifyContent: "center" })}
`;
const PorductList = styled.div`
  width: 90%%;
  //  margin-left: 100px ;
  // margin-right: 100px ;
  display: flex;
  flex-direction: column;
  ${tab({ alignItems: "center", justifyContent: "center" })}
  ${mobile({ alignItems: "center", justifyContent: "center"})}
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  flex-basis: 25%;
  align-items: center;
  margin-left: 20px;
  gap: 25px;
  ${tab({ alignItems: "center", justifyContent: "center" })}
  ${mobile({ alignItems: "center", justifyContent: "center" })}
`;
const H4=styled.h4`
${mobile({ fontSize: "100px" })}
`;

export const Product = () => {
  let [data, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())

      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Products>
        <PorductList>
          <H4 style={{ fontSize: "1.5em" }}>Products for you</H4>
          {loading && <h1 style={{ color: "#ff0080" }}>loading......</h1>}
          <ProductsContainer>
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductsContainer>
        </PorductList>
      </Products>
    </>
  );
};
