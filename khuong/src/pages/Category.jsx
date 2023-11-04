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
        fetchProductsByCategory().then(items => setProducts(items))
    }, [])

    const fetchProductsByCategory = async () => {
        const accessToken = localStorage.getItem('token');
        try {
            const response = await authenticatedApiInstance(accessToken).get(`${GET_PRODUCTS_BY_CATEGORY(id)}`);
            return response.data['items'];
        } catch (err) {
            await ToastError(err.response?.data['Error']);
        }
    }

    return (
        <>
            <MenuNavbar />
            <div className="bg-white mt-10">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-20">
                        {products.map((product) => <CardProduct cardItem={product} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Category;