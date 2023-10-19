import axios from "axios";

let baseUrl = "https://fakestoreapi.com";

export const getProductCategories = async () => {
  try {
    let res = await axios
      .get(`${baseUrl}/products/categories`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return res;
  } catch (error) {
    return error;
  }
};

export const getProductByCategory = async (category) => {
  try {
    let res = await axios
      .get(`${baseUrl}/products/category/${category}`)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return res;
  } catch (error) {
    return error;
  }
};
