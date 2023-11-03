import Footer from '../components/Footer';
import React from 'react';
import MenuNavbar from '../components/MenuNavbar';

function Home() {
    return (
        <>
            <MenuNavbar />
            <div className="hero min-h-screen mt-11" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-tooth-is-on-a-blue-background-image_2665689.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Emax</h1>
                        <p className="mb-5">Quản lý đơn hàng nhận từ nha sĩ, sản xuất, giao nhận, KCS, công nợ khách hàng, báo cáo thống kê. Đặc biêt,
                            tra cứu thông tin bảo hành qua web, app di động.  </p>
                        <a className="btn btn-ghost" href='#item2'>Xem thêm</a>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4 p-20 " id="item2">
                <img src='imgMenu/hinhmenu.png' className='col-span-2 px-10'></img>
                <div className='col-span-2 mt-20'>
                    <h1 className='text-3xl font-bold text-maincolor'>CÂU CHUYỆN VỀ EMAX DENTAL LAB</h1>
                    <div className="divider"></div>
                    <p>
                        Là đơn vị tiên phong trong lĩnh vực răng sứ thẩm mỹ tại Việt Nam,
                        Emax Dental Lab được thành lập từ năm 1998. Với 23 năm kinh nghiệm trong việc nghiên cứu, phát triển và ứng dụng các vật liệu chất lượng cao,
                        cũng như các công nghệ tiên tiến nhất vào các sản phẩm nha khoa. Detec tự hào được đánh giá là một trong những đơn vị cung cấp các sản phẩm phục
                        hình răng uy tín và dịch vụ chất lượng nhất trong lĩnh vực nha khoa hiện nay.
                    </p>
                    <br />
                    <p>
                        Tại Emax Dental Lab, chúng tôi xem con người làm yếu tố cốt lõi của sự phát triển bền vững. Bởi chúng tôi tin rằng hạnh phúc
                        của từng cá nhân là cơ sở của một xã hội phát triển. Vì vậy, Detec luôn tạo ra một môi trường làm việc thân thiện,
                        hòa đồng nhằm lan tỏa nguồn năng lượng tích cực đến nhân viên, tạo nền tảng kích thích sự phát triển của tập thể.
                    </p>
                </div>

            </div>
            <Footer />
        </>

    );
}
export default Home;
