import moment from "moment/moment";

export const OrderTable = ({ orders }) => {
  const formatDate = (value = "", formatType = "") => {
    if (value === null) {
      return "";
    } else {
      return moment(value).format(formatType);
    }
  };

  return (
    <>
      <div>
        <div class="mt-6 border-b-1 border-blueGray-300">
          <div className="overflow-x-auto ">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã hoá đơn</th>
                  <th>Tên bác sĩ</th>
                  <th>Tên bệnh nhân</th>
                  <th>Ghi chú của bác sĩ</th>
                  <th>Trạng thái</th>
                  <th>Thành tiền</th>
                  <th>Ngày tạo đơn</th>
                  <th>Ngày hoàn thành</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr className="hover">
                    <th><a href="#">{order.id}</a></th>
                    <td>{order.dentistName}</td>
                    <td>{order.patientName}</td>
                    <td>{order.dentistNote}</td>
                    <td>{order.status}</td>
                    <td>{order.finalAmount}</td>
                    <td>{formatDate(order.createdDate, "LL")}</td>
                    <td>{formatDate(order.completedDate, "LL")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="join flex">
        <button className="join-item btn ">1</button>
      </div>
    </>
  );
};
