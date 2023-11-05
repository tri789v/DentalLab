import { useEffect, useState } from "react";
import MenuNavbar from "../components/MenuNavbar";
import Footer from "../components/Footer";
import { authenticatedApiInstance } from "../utils/ApiInstance";
import { GET_PRODUCTS_BY_CATEGORY } from "../utils/constants";
import { ToastError } from "../utils/Toastify";
import { Card, CardProduct } from "../components/Card";
import { useParams } from "react-router-dom";
import React from "react";

const Category = (props) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchProductsByCategory().then((items) => setProducts(items));
  }, []);

  const fetchProductsByCategory = async () => {
    const accessToken = localStorage.getItem("token");
    try {
      const url = GET_PRODUCTS_BY_CATEGORY(id);
      const response = await authenticatedApiInstance(accessToken).get(url);
      return response.data["items"];
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const renderProductList = (products) => {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-20">
          {products.map((product) => (
            <CardProduct cardItem={product} />
          ))}
        </div>
      </div>
    );
  };

  const renderEmptyList = () => {
    return (
      <div className="hero min-h-screen bg-base-200 bg-white">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Chưa có sản phẩm</h1>
            <p className="py-5 pb-6">
              Sản phẩm đang trong quá trình hoàn thiện
              <br /> chúng tôi sẽ cố gắng cập nhật nhanh nhất có thể.
            </p>

            <a className="btn btn-active btn-accent text-white" href="/categories">Quay trở lại</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MenuNavbar />
      <div className="bg-white mt-10">{products.length > 0 ? renderProductList(products) : renderEmptyList()}</div>
      <Footer />
    </>
  );
};

export default Category;
