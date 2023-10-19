import { useContext, useEffect, } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetails.scss";
import { ApplicationContext } from "../../context/context";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { selectedProduct,cartItems,setCartItems  } = useContext(ApplicationContext);
  const {category,description,image,price,rating,title}=selectedProduct;

  const handleAddToCart = async () => {
    try {
      let isItemAlreadyInCart = false;
      cartItems?.forEach(item => {if(item.id === selectedProduct.id){
        isItemAlreadyInCart=true;
      }});


      if(isItemAlreadyInCart){
        let selectProducValue = cartItems.filter(item => item.id===selectedProduct.id);
        let selectedProductObject = {...selectProducValue[0],quantity:selectProducValue[0].quantity+1};
        let newCartItems =[...cartItems];
        for(let i=0;i<newCartItems.length;i++){
          if(newCartItems[i].id==selectedProductObject.id){
            newCartItems[i] = selectedProductObject;
          }
        }
        
        setCartItems(newCartItems);
      }else{
        let newCartItems = [...cartItems,{...selectedProduct,quantity:1}];
        setCartItems(newCartItems);
      }

    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(()=>{
    if(!selectedProduct.title){
      navigate('/home')
    }
  },[selectedProduct])


  return (
    (<div style={{ textAlign: "center", margin: "auto" }}>
      <h1
        style={{
          textDecoration: "underline",
          fontSize: "2rem",
          color: "#1D5D9B",
        }}
      >
        {title}
      </h1>

      <div className="product-description-div">
        <div className="div-left">
          <img src={image} alt="product-image" />
        </div>

        <div className="description-div">
          <table>
            <tr>
              <td className="label-name">Description </td>
              <td>
                {description}
              </td>
            </tr>
                <tr>
                  <td className="label-name">Category </td>
                  <td>
                  {category}
                  </td>
                </tr>


                <tr>
                  <td className="label-name">Price </td>
                  <td>
                    $ {" "}{price}
                  </td>
                </tr>

                <tr>
                  <td className="label-name">Rating </td>
                  <td>
                    {rating?.rate}
                  </td>
                </tr>

                <tr>
                  <td className="label-name">Reviews </td>
                  <td>{rating?.count}
                  </td>
                </tr>

          </table>

          <div className="button-div">
 
            <button className="begin-product" onClick={handleAddToCart}>
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </div>)
  );
};

export default ProductDetails;
