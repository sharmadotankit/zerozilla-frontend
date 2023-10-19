import React, { useContext, useEffect } from "react";
import { ApplicationContext } from "../../context/context";
import Loading from "../../component/Loading/Loading";
import CardComponent from "../../component/CardComponent/CardComponent";
import useDocumentTitle from "../../utils/actions/useDocumentTitle";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { productCategories, setSelectedCategory,setProductsForCategory } = useContext(
    ApplicationContext
  );
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setProductsForCategory([]);
    setSelectedCategory(category);
    navigate("/product-for-category")
  };

  useDocumentTitle("Home");
  return (
    <div>
    <h1>Select Category of Products</h1>
      {productCategories && productCategories?.length > 0 ? (
        <div className="card-container">
          {productCategories.map((item, i) => {
            return (
              <span onClick={() => handleCategoryClick(item)} key={i}>
                <CardComponent
                  category={item}
                />
              </span>
            );
          })}
        </div>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}
