import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home/Home";
import MyProfile from "./routes/MyProfile/MyProfile";
import ProductDetails from "./routes/ProductDetails/ProductDetails";
import { useContext, useEffect } from "react";
import { getProductByCategory, getProductCategories } from "./utils/actions/allActions";
import { ApplicationContext } from "./context/context";
import Navbar from "./routes/Navbar/Navbar";
import ProductsForCategory from "./routes/ProductsForCategory/ProductsForCategory";

function App() {
  const { productCategories,setProductCategories,selectedCategory,setProductsForCategory } = useContext(ApplicationContext);
  useEffect(()=>{
    try{
      fetchData();
    }catch(err){
      console.log("err",err)
    }
  },[]);

  useEffect(()=>{
    if(selectedCategory){
      fetchProductForCategory(selectedCategory)
    }
  },[selectedCategory])

  const fetchProductForCategory = async(selectedCategory)=>{
    try{
      const productForCategoryResponse = await getProductByCategory(selectedCategory);
      console.log(productForCategoryResponse)
      if(productForCategoryResponse.status===200){
        setProductsForCategory(productForCategoryResponse.data)
      }
    }catch(err){
      console.log("err",err)
    }
  }

  const fetchData=async()=>{
    try{
      const productCategoryResponse = await getProductCategories();
      if(productCategoryResponse.status===200){
        setProductCategories(productCategoryResponse.data)
      }      
    }catch(err){
      console.log("error",err)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/my-profile" element={<MyProfile />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route path="/product-for-category" element={<ProductsForCategory/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
