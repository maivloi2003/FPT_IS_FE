import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Cột 1: Giới thiệu */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase">GIỚI THIỆU</h5>
                        <p className="small">
                            Brands Vietnam là Cộng đồng Marketing và Xây dựng Thương hiệu toàn diện tại Việt Nam,
                            với những sản phẩm và dịch vụ có kết nối chặt chẽ với nhau để phục vụ cho nhu cầu đa dạng
                            của marketers nói chung, người làm kinh doanh nói riêng.
                        </p>

                        {/* Icon mạng xã hội */}
                        <div>
                            <Link to="#" className="btn btn-primary btn-sm me-2"><i className="fa-brands fa-facebook"></i></Link>
                            <Link to="#" className="btn btn-info btn-sm me-2"><i className="fa-brands fa-linkedin"></i></Link>
                            <Link to="#" className="btn btn-danger btn-sm"><i className="fa-brands fa-youtube"></i></Link>
                        </div>
                    </div>

                    {/* Cột 2: Điều khoản */}
                    <div className="col-md-3">
                        <h5 className="text-uppercase">ĐIỀU KHOẢN</h5>
                        <ul className="list-unstyled">
                            <li><Link to="#" className="text-light text-decoration-none">Điều khoản Sử dụng</Link></li>
                            <li><Link to="#" className="text-light text-decoration-none">Quyền Riêng tư</Link></li>
                            <li><Link to="#" className="text-light text-decoration-none">Nội quy cộng đồng</Link></li>
                        </ul>
                    </div>

                    {/* Cột 3: Liên hệ */}
                    <div className="col-md-5">
                        <h5 className="text-uppercase">LIÊN HỆ</h5>
                        <p className="small mb-1">Lầu 3, tòa nhà Viet Solutions, số 125/11 Nguyễn Cửu Vân, phường 17, quận Bình Thạnh, TP. Hồ Chí Minh.</p>
                        <p className="small">
                            <i className="fa-solid fa-phone me-2"></i>(+84) (028) 3602 6800
                        </p>
                        <p className="small">
                            <i className="fa-solid fa-envelope me-2"></i>help@brandsvietnam.com
                        </p>
                    </div>
                </div>

                {/* Dòng bản quyền */}
                <hr className="border-light my-3" />
                <div className="text-center small">
                    © 2012 - 2025 Brands Vietnam. Bản quyền thuộc về Công ty TNHH WEBRAND.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
