import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Order from "./pages/Order/Order";
import Service from "./pages/Service";
import ViewOrder from "./pages/Order/ViewOrder";
import { NotFound } from "./pages/NotFound";
import OrderDetail from "./pages/Order/OrderDetail";
import LocalStorageUtils from "./utils/LocalStorageUtils";
import Dashboard from "./pages/Admin/Dashboard";
import Stage from "./pages/Stage";
import { CategoryManagement } from "./components/Admin/CategoryManagement";
import { UsersManagement } from "./components/Admin/UsersManagement";
import { ProductManagement } from "./components/Admin/ProductManagement";

function App() {
    const EMPLOYEE_ROLE = ["admin", "staff", "reception"]

    const renderLoginRoute = () => {
        if (!LocalStorageUtils.getToken()) {
            return <Route path="/login" element={<Login />}></Route>;
        } else {
            return <Route path="/login" element={<Home />}></Route>;
        }
    };

    const renderAdminRoutes = () => {
        if (
            LocalStorageUtils.getCurrentUser() &&
            EMPLOYEE_ROLE.includes(LocalStorageUtils.getCurrentUser().role.toLowerCase())
        ) {
            return (<>
                <Route path="/dashboard" element={<Dashboard componentChild={<UsersManagement />} />}></Route>
                <Route path="/dashboard/category" element={<Dashboard componentChild={<CategoryManagement />} />}></Route>
                <Route path="/dashboard/product" element={<Dashboard componentChild={<ProductManagement />} />}></Route>
            </>)
        } else {
            <Route path="/login" element={<NotFound />}></Route>;
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {renderLoginRoute()}
                {renderAdminRoutes()}
                <Route path="/categories" element={<CategoryList />}></Route>
                <Route path="/categories/:id" element={<Category />}></Route>
                <Route path="/service" element={<Service />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/viewOrder" element={<ViewOrder />}></Route>
                <Route path="/orders/:id" element={<OrderDetail />} />
                <Route path="/stage" element={<Stage />}></Route>
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
