import { EmptyList, TableGenerator } from "../../utils/TableGenerator";
import React from "react";
import { formatToVnd } from "../../utils/NumberFormat";
import { formatDate } from "../../utils/StringFormat";

export const OrderTable = ({ orders }) => {
  const MAPPING_ORDER_STATUS_BADGE = {
    Producing: "primary",
    Pending: "secondary",
    Warrenty: "info",
    Completed: "success",
    Canceled: "error",
  };

  const ORDER_HEADER_NAMES = [
    "Mã hoá đơn",
    "Tên bác sĩ",
    "Tên bệnh nhân",
    "Ghi chú của bác sĩ",
    "Trạng thái",
    "Thành tiền",
    "Ngày tạo đơn",
    "Ngày hoàn thành",
  ];

  const renderStatusBadge = (status) => (
    <td className={`badge badge-${MAPPING_ORDER_STATUS_BADGE[status]}`}>
      {status}
    </td>
  );

  const renderOrderItem = (orders, formatDate) => {
    return orders.map((order) => (
      <tbody>
        <tr className="hover">
          <th>
            <a href={`/orders/${order.id}`}>{order.id}</a>
          </th>
          <td>{order.dentistName}</td>
          <td>{order.patientName}</td>
          <td>{order.dentistNote}</td>
          <td >{renderStatusBadge(order.status)}</td>
          <td>{formatToVnd(order.finalAmount)}</td>
          <td>{formatDate(order.createdDate, "LL")}</td>
          <td>{formatDate(order.completedDate, "LL")}</td>
        </tr>
      </tbody>
    ));
  };

  return (
    <>
      <div>
        <div class="mt-6 border-b-1 border-blueGray-300">
          <div className="overflow-x-auto ">
            <TableGenerator
              headerNames={ORDER_HEADER_NAMES}
              renderRowHandler={renderOrderItem}
              items={orders}
              block={formatDate}
            />
          </div>
        </div>
        <EmptyList
          items={orders}
          heading="Bạn chưa có đơn hàng nào"
          buttonMessage="Đặt đơn hàng đầu tiên"
          linkTo="/order"
        />
      </div>
    </>
  );
};
