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
});

export const AppicationContextProvider = ({children}) =>{
    const [productCategories,setProductCategories] = useState(null);
    const [productsForCategory,setProductsForCategory] = useState(null);
    const [selectedCategory,setSelectedCategory]= useState(null);
    const [cartCount,setCartCount] = useState(0);

    const value = {
        productCategories,
        setProductCategories,
        productsForCategory,
        setProductsForCategory,
        selectedCategory,
        setSelectedCategory,
        cartCount,
        setCartCount,
    }
    return <ApplicationContext.Provider value={value}>{children}</ApplicationContext.Provider>
}