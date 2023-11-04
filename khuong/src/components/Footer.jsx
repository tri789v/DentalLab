import React from "react";

const Footer = () => {
    return (
        <footer className="bottom-0 footer p-10 bg-base-200 text-base-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
            </nav>
            <form>
                {/* <header className="footer-title">Newsletter</header> */}
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Nhập mã bảo hành để kiểm tra</span>
                    </label>
                    <div className="relative">
                        <input type="text" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-blue-500">Kiểm tra</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    )

}
export default Footer;