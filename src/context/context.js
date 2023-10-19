import {createContext, useState} from "react";


export const ApplicationContext = createContext({
    productCategories:null,
    setProductCategories: ()=>null,
    productsForCategory:null,
    setProductsForCategory:()=>null,
    selectedCategory:null,
    setSelectedCategory:()=>null,
    cartCount:null,
    setCartCount:()=>null,
    setSelectedProduct:()=>null,
    selectedProduct:null,
    setShowCart:()=>null,
    showCart:null,
    setCartItems:()=>null,
    cartItems:null
});

export const AppicationContextProvider = ({children}) =>{
    const [productCategories,setProductCategories] = useState(null);
    const [productsForCategory,setProductsForCategory] = useState(null);
    const [selectedCategory,setSelectedCategory]= useState(null);
    const [cartCount,setCartCount] = useState(0);
    const [selectedProduct,setSelectedProduct] = useState(0);
    const [showCart,setShowCart] =useState(false);
    const [cartItems,setCartItems] = useState([]);

    const value = {
        productCategories,
        setProductCategories,
        productsForCategory,
        setProductsForCategory,
        selectedCategory,
        setSelectedCategory,
        cartCount,
        setCartCount,
        selectedProduct,
        setSelectedProduct,
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
    }
    return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>
}