import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import Order from "./pages/Order/Order";
import Service from "./pages/Service";
import ViewOrder from "./pages/Order/ViewOrder";
import {NotFound} from "./pages/NotFound";
import OrderDetail from "./pages/Order/OrderDetail";

function App() {
  const needLoginPage = () => {
    if (!!localStorage.getItem("token")) {
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        {true && (
          <Route path="/login" element={<Login />}>
            {" "}
          </Route>
        )}
        <Route path="/categories" element={<CategoryList />}>
          {" "}
        </Route>
        <Route path="/categories/:id" element={<Category />}>
          {" "}
        </Route>
        <Route path="/service" element={<Service />}>
          {" "}
        </Route>
        <Route path="/order" element={<Order />}>
          {" "}
        </Route>
        <Route path="/signup" element={<SignUp />}>
          {" "}
        </Route>
        <Route path="/profile" element={<Profile />}>
          {" "}
        </Route>
        <Route path="/viewOrder" element={<ViewOrder />}>
          {" "}
        </Route>
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// cai chu App no phai co mau vang a fen
