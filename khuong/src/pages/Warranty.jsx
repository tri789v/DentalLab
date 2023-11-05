import Footer from "../components/Footer";
import MenuNavbar from "../components/MenuNavbar";

function Warranty() {

    return (
        <>
            <MenuNavbar />
            <div className="bg-white">





                <div class="pt-10 pb-20">
                    <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl text-maincolor mt-20 mb-10">BẢO HÀNH</h2>


                    <div class="mx-48">

                        <div className="x-auto mt-10 ">
                            <table className="table table-zebra">

                                <thead className="text-center">
                                    <tr>
                                        <th>Mã</th>
                                        <th>Logo</th>
                                        <th>Tên vật liệu</th>
                                        <th>Xuất xứ</th>
                                        <th>Bảo hành</th>
                                        <th>Mô tả</th>

                                    </tr>
                                </thead>
                                <tbody className="text-center">

                                    <tr>
                                        <th>1</th>
                                        <td><div className="flex items-center space-x-3" />
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src="/imgMenu/312679b8fcd3288d71c2-removebg-preview-1.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>QualityControl Specialist</td>
                                        <td>Blue</td>
                                        <th>1 năm</th>
                                        <td>Cy Ganderton</td>

                                    </tr>

                                    <tr>
                                        <th>2</th>
                                        <td><div className="flex items-center space-x-3" />
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src="/imgMenu/312679b8fcd3288d71c2-removebg-preview-1.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Desktop Support Technician</td>
                                        <td>Purple</td>
                                        <th>5 năm</th>
                                        <td>Cy Ganderton</td>

                                    </tr>

                                    <tr>
                                        <th>3</th>
                                        <td><div className="flex items-center space-x-3" />
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src="/imgMenu/312679b8fcd3288d71c2-removebg-preview-1.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>Tax Accountant</td>
                                        <td>Red</td>
                                        <th>10 năm</th>
                                        <td>Cy Ganderton</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>







                    </div>




                </div>
            </div >








            <Footer />
        </>
    );
}
export default Warranty