import Footer from "../components/Footer";
import React from "react";
import MenuNavbar from "../components/MenuNavbar";

function Service() {
    return (
        <>
            <MenuNavbar />
            <div class="border-hidden text-center pt-40">
                <h1 className="text-5xl font-bold font-arial text-5xl text-[#40A8AF]">QUY TRÌNH VÀ ĐIỀU KIỆN BẢO HÀNH SẢN PHẨM</h1>
                <div>
                    <p class="text-center pt-10 pb-10">Khi có sản phẩm cần bảo hành, Quý Khách hàng vui lòng gửi tới chúng tôi thẻ bảo hành kèm theo
                        <br></br>mẫu hàm và sản phẩm bị hư, hỏng. để bên chúng tôi kiểm tra các thông tin về bệnh nhân
                        <br></br>sản phẩm có nhu cầu bảo hành.
                    </p>
                </div>
                <br></br>

            </div>


            <div class="grid grid-cols-2 divide-x gap-20 gap-x-8 gap-y-10 border-none">
                <div className="pl-60">
                    <img src="./imgMenu/dichvu1.png" className="max-w-sm rounded-lg shadow-none right-50" />
                </div>

                <div class="border-hidden"><br></br>
                    <h1 className="text-lg font-bold pl-20">EMAX BẢO HÀNH SẢN PHẨM THEO CÁC TIÊU CHUẨN SAU</h1>
                    <p class="text-left pl-20">Sản phẩm bị vỡ, nứt, biến dạng trong quá trình sử dụng sau
                        <br></br> khi đã phục hình vĩnh viễn cho bệnh nhân mà không thuộc
                        <br></br>các trường hợp từ chối bảo hành được liệt kê bên dưới.
                        <br></br>Thẻ bảo hành hợp lệ và sản phẩm còn trong thời hạn bảo hành.</p>
                </div>


                <div class="border-hidden">
                    <h1 className="text-lg font-bold pl-60 pt-10">EMAX TỪ CHỐI BẢO HÀNH TRONG CÁC TRƯỜNG HỢP SAU</h1>
                    <p class="text-left pl-60">Phục hình bị nứt, vỡ, do nha sĩ điều chỉnh làm rơi, va chạm
                        <br></br>trong quá trình gắn lên miệng bệnh nhân.
                        <br></br>Phục hình bị bong, tuột… do gắn sai quy cách hoặc tổ chức
                        <br></br>bám không đủ.
                        <br></br>Bệnh nhân phải tháo phục hình do đau nhức, viêm tủy hay do
                        <br></br>các nguyên nhân bệnh lý khác sau khi đã gắn cố định trên miệng
                        <br></br>Phục hình bị nứt, vỡ… do bệnh nhân bị ngã, tai nạn hoặc sử
                        <br></br>dụng sai như cắn vật cứng, mở nắp bia hay tự ý gỡ bỏ phục hình.
                        <br></br>Thẻ bảo hành không hợp lệ (không phải thẻ bảo hành do
                        <br></br>DETEC cấp, thẻ bảo hành bị nhàu, nát, rách,… không thể xác
                        <br></br>định được thông tin trên đó).
                        <br></br>Sản phẩm đã hết hạn bảo hành.
                    </p>

                </div>

                <div class="border-hidden pl-20">
                    <img src="./imgMenu/dichvu2.png" className="max-w-sm rounded-lg shadow-none right-50 border-none" />
                </div>

            </div>

            <div class="border-hidden text-center pt-40 pb-10">
                <h1 className="text-5xl font-bold font-serif text-5xl text-[#40A8AF]">QUY TRÌNH ĐẶT HÀNG & GIAO NHẬN HÀNG</h1>
                <br></br>

            </div>



            <div class="grid grid-cols-2 divide-x gap-8 border-none pt-10 pb-10">

                <div>
                    <h1 className="text-2xl font-bold  text-center ">ĐỐI VỚI KHÁCH HÀNG TRONG NƯỚC</h1>
                    <div class="divide-y divide-none pl-40">
                        <br></br>
                        <br></br>
                        <div className="inline-flex items-start pl-[32.38px] pr-[32.18px] pt-[10px] pb-[12px]  bg-[#7e127b] rounded-[30px_5px_30px_5px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[20px] text-center tracking-[-0.48px] leading-[36px] whitespace-nowrap">
                                Bước 1
                            </div>
                        </div>
                    </div>


                    <div className="text-left pl-80 text-xl">Quý khách vui lòng điền đầy đủ
                        <br></br>thông tin vào phiếu đặt hàng và
                        <br></br>chuẩn bị mẫu hàm gửi cho công
                        <br></br> ty.
                    </div>
                    <div class="divide-y divide-none pl-40">
                        <br></br>

                        <div className="inline-flex items-start pl-[32.38px] pr-[32.18px] pt-[10px] pb-[12px]  bg-[#001242] rounded-[30px_5px_30px_5px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[20px] text-center tracking-[-0.48px] leading-[36px] whitespace-nowrap">
                                Bước 2
                            </div>
                        </div>
                    </div>
                    <div className="text-left pl-80">
                        <br></br>Đối với khách hàng nội thành Hà
                        <br></br>Nội, quý khách vui lòng liên lạc với
                        <br></br>công ty để cử nhân viên đến tận
                        <br></br>nơi lấy mẫu. Đối với khách ở ngoại
                        <br></br>thành Hà Nội, quý khách vui lòng
                        <br></br>gửi mẫu hàm kèm phiếu đặt hàng
                        <br></br>qua bến xe, sau đó liên lạc với
                        <br></br>công ty để thông báo và nhân
                        <br></br>viên giao hàng của công ty sẽ đến
                        <br></br>bến xe lấy mẫu. Số Hotline để liên
                        <br></br>lạc giao nhận mẫu của công ty:
                        <br></br>18006038

                    </div>

                    <div class="divide-y divide-none pl-40">
                        <br></br>
                        <div className="inline-flex items-start pl-[32.38px] pr-[32.18px] pt-[10px] pb-[12px]  bg-[#fdb813] rounded-[30px_5px_30px_5px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[20px] text-center tracking-[-0.48px] leading-[36px] whitespace-nowrap">
                                Bước 3
                            </div>
                        </div>
                    </div>
                    <div className="text-left pl-80">
                        <br></br>Sau khoảng 03 ngày kể từ khi
                        <br></br>nhận hàng, công ty sẽ liên lạc và
                        <br></br>gửi trả sản phẩm hoàn thiện cho
                        <br></br>khách hàng.
                    </div>

                </div>
                {/* cot 2 */}


                <div>
                    <h1 className="text-2xl font-bold  text-center">ĐỐI VỚI KHÁCH HÀNG NGOÀI NƯỚC</h1>
                    <div class="divide-y divide-none pl-40">
                        <br></br>
                        <br></br>
                        <div className="inline-flex items-start pl-[32.38px] pr-[32.18px] pt-[10px] pb-[12px]  bg-[#7e127b] rounded-[30px_5px_30px_5px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[20px] text-center tracking-[-0.48px] leading-[36px] whitespace-nowrap">
                                Bước 1
                            </div>
                        </div>
                    </div>
                    <div className="text-left pl-80">Quý khách vui lòng điền vào Rx
                        <br></br>form và gửi qua email công ty. Và
                        <br></br>khách hàng gửi mẫu về cho công
                        <br></br>ty bằng đường Chuyển phát nhanh
                    </div>
                    <div class="divide-y divide-none pl-40">
                        <br></br>
                        <br></br>
                        <div className="inline-flex items-start pl-[32.38px] pr-[32.18px] pt-[10px] pb-[12px]  bg-[#001242] rounded-[30px_5px_30px_5px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[20px] text-center tracking-[-0.48px] leading-[36px] whitespace-nowrap">
                                Bước 2
                            </div>
                        </div>
                    </div>
                    <div className="text-left pl-80">
                        <br></br>Công ty sẽ gửi mail xác nhận đơn
                        <br></br>hàng và thời gian cụ thể giao trả
                        <br></br>hàng cho khách hàng. Đồng thời,
                        <br></br>công ty cũng sẽ gửi phiếu yêu cầu
                        <br></br>thanh toán đến khách hàng.
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>

                    <div class="divide-y divide-none pl-40">
                        <br></br>
                        <div className="inline-flex items-start pl-[32.38px] pr-[32.18px] pt-[10px] pb-[12px]  bg-[#fdb813] rounded-[30px_5px_30px_5px]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-[20px] text-center tracking-[-0.48px] leading-[36px] whitespace-nowrap">
                                Bước 3
                            </div>
                        </div>
                    </div>
                    <div className="text-left pl-80">
                        <br></br>Sau khi hoàn tất, công ty sẽ gửi
                        <br></br>sản phẩm qua các dịch vụ chuyển
                        <br></br>phát nhanh, đồng thời gửi mail
                        <br></br>thông báo cho khách hàng.
                    </div>

                </div>

            </div>
            <div class="grid grid-cols-3 px-40 pt-10 pb-10 pr-20">
                <div>
                    <img src="/imgMenu/dichvu3.png" className="max-w-xs img-center" />
                    <div className="text-justify pt-2 pr-6 font-bold text-blue-800">Dịch vụ hỗ trợ chuyên môn cho các khách<br></br> hàng</div>
                </div>
                <div>
                    <img src="/imgMenu/dichvu4.png" className="max-w-xs" />
                    <div className="text-justify pt-2 pr-6 font-bold text-blue-800">Dịch vụ hỗ trợ xây dựng quy trình quản lý<br></br> phòng khám</div>
                </div>
                <div>
                    <img src="/imgMenu/dichvu5.png" className="max-w-xs" />
                    <div className="text-justify pt-2 pr-6 font-bold text-blue-800">Dịch vụ tư vấn thiết kế và thi công phòng <br></br>khám</div>
                </div>
            </div>


            <Footer />



        </>
    );

} export default Service