import React, {useEffect, useState} from "react";
import {TableGenerator} from "../../utils/TableGenerator";
import LocalStorageUtils from "../../utils/LocalStorageUtils";
import {
  GET_CATEGORY_URL,
  GET_PRODUCT_URL,
  SUCCESS_RESPONSE_STATUS,
  UPDATE_OR_DELTE_PRODUCT,
} from "../../utils/constants";
import {authenticatedApiInstance} from "../../utils/ApiInstance";
import {ToastError, ToastSuccess} from "../../utils/Toastify";
import Pagination from "../../components/Pagination";
import queryString from "query-string";
import {CreateProductModal} from "../../components/Admin/Product/CreateProductModal";
import {UpdateProductModal} from "../../components/Admin/Product/UpdateProductModal";
import {formatToVnd} from "../../utils/NumberFormat";
import Swal from "sweetalert2";

export function ProductManagement() {
  const [productToUpdate, setproductToUpdate] = useState({
    productId: 0,
    name: "",
    costPrice: 0,
    categoryId: 0,
    status: "",
    description: "",
    imageSrc: "",
  });
  const accessToken = LocalStorageUtils.getToken();

  const HEADER_NAMES = [
    "ID",
    "Tên sản phẩm",
    "Mô tả",
    "Giá thành",
    "Trạng thái",
    "Loại vật liệu",
    "Thao tác",
  ];
  const [pagination, setPagination] = useState({
    page: 1,
    total: 1,
    size: 6,
  });
  const [filters, setFilters] = useState({
    size: 6,
    page: 1,
  });

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProduct().then((items) => {
      setProductList(items[0]);
      setPagination(items[1]);
    });
  }, [filters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const fetchProduct = async () => {
    try {
      const paramsString = queryString.stringify(filters);
      const response = await authenticatedApiInstance(accessToken).get(
        GET_PRODUCT_URL(paramsString),
      );
      const {items, size, page, total} = response.data;

      const _pagination = {size, page, total};

      return [items, _pagination];
    } catch (err) {
      await ToastError(err.response?.data["Error"]);
    }
  };

  const renderProduct = (products) => {
    return products.map((product) => (
      <tbody>
        <tr
          className="hover"
          onClick={(e) =>
            openUpdateProductModal(e, product, product.categoryName)
          }>
          <th>
            <a href="#">{product.id}</a>
          </th>
          <td>{product.name}</td>
          <td>{product.description}</td>
          <td>{formatToVnd(product.costPrice)}</td>
          <td
            className={`font-bold ${
              product.status === "Available" ? "text-green-500" : "text-red-500"
            }`}>
            {product.status}
          </td>
          <td>{product.categoryName}</td>
          <td data-column="action">
            <button
              data-column="action"
              className="btn btn-ghost"
              onClick={(e) => handleDeleteProduct(e, product.id, product.name)}>
              <svg
                data-column="action"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    ));
  };

  const handleDeleteProduct = async (e, id, name) => {
    e.preventDefault();

    Swal.fire({
      title: "Chắc chưa?",
      text: `Vật liệu ${name} sẽ bị xoá và không thể tái tạo!!!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id, name);
      }
    });
  };

  const deleteProduct = async (id, name) => {
    try {
      const response = await authenticatedApiInstance(accessToken).delete(
        UPDATE_OR_DELTE_PRODUCT(id),
      );
      if (SUCCESS_RESPONSE_STATUS.includes(response.status)) {
        await new Promise((r) => setTimeout(r, 60));
        await ToastSuccess(`Sản phẩm ${name} đã được delete`);
        window.location.reload();
      }
    } catch (err) {
      await ToastError(
        err.response.data["Error"] || err.response.data["title"],
      );
    }
  };

  const openUpdateProductModal = async (e, product, categoryName) => {
    e.preventDefault();
    console.log(e.target)
    console.log(e.target.getAttribute("data-column"))
    if (e.target.getAttribute("data-column") !== "action") {
      try {
        const response = await authenticatedApiInstance(accessToken).get(
          GET_CATEGORY_URL(`name=${categoryName}`),
        );
        const tempList = response.data.items;
        if (tempList.length > 0) {
          const categoryIdByName = response.data.items[0].id;
          setproductToUpdate({
            categoryId: categoryIdByName,
            name: product.name,
            description: product.description,
            status: product.status,
            imageSrc: product.image,
            costPrice: product.costPrice,
            productId: product.id,
          });
          window.document.getElementById("update_category_modal")?.showModal();
        } else {
          throw new Error("Không tìm thấy vật liệu tương ứng");
        }
      } catch (err) {
        await ToastError(err.response?.data["Error"] || err);
      }
    }
  };

  return (
    <div class="flex-1 p-4">
      <div class="">
        <div class="bg-white p-4 rounded-md mt-24">
          <div className="flex w-full justify-between">
            <h2 class="text-gray-500 text-lg font-semibold flex h-fit">
              Danh sách sản phẩm
            </h2>
            <button
              class="btn btn-outline "
              onClick={() =>
                document.getElementById("create_product_modal").showModal()
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
              </svg>
            </button>
            <CreateProductModal />
            <UpdateProductModal
              name={productToUpdate.name}
              description={productToUpdate.description}
              imageSrc={productToUpdate.imageSrc}
              status={productToUpdate.status}
              categoryId={productToUpdate.categoryId}
              costPrice={productToUpdate.costPrice}
              productId={productToUpdate.productId}
            />
          </div>

          <div class="my-1"></div>
          <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
          <div>
            <div>
              <TableGenerator
                headerNames={HEADER_NAMES}
                renderRowHandler={renderProduct}
                items={productList}
              />
              <Pagination
                pagination={pagination}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
