import { useEffect, useState } from "react";
import React from "react";
import MenuNavbar from "../components/MenuNavbar";
import Footer from "../components/Footer";
import { authenticatedApiInstance } from "../utils/ApiInstance";
import { GET_CATEGORY_URL } from "../utils/constants";
import { ToastError } from "../utils/Toastify";
import { Card } from "../components/Card";

const CategoryList = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCategories().then(items => setCards(items))
    }, [])

    const fetchCategories = async () => {
        const accessToken = localStorage.getItem('token');
        try {
            const response = await authenticatedApiInstance(accessToken).get(GET_CATEGORY_URL("size=9999&status=Active"));
            console.log(response.data.items)
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
                        {cards.map((card) => <Card cardItem={card} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CategoryList;