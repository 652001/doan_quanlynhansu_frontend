import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">
                        <i className="mdi mdi-grid-large menu-icon" />
                        <span className="menu-title">Tổng quan</span>
                    </Link>
                </li>

                <li className="nav-item nav-category">Quản lý nhân viên</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#tables"
                        aria-expanded="false"
                        aria-controls="tables"
                    >
                        <i className="menu-icon mdi mdi-table" />
                        <span className="menu-title">Danh sách</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="tables">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachnhanvien">
                                    Danh sách Nhân viên
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachchamcong">
                                    Danh sách Chấm công
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachhopdong">
                                    Danh sách Hợp đồng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/danhsachtaikhoan">
                                    Danh sách Tài khoản
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item nav-category">Quản lý phòng ban</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#form-elements"
                        aria-expanded="true"
                        aria-controls="form-elements"
                    >
                        <i className="menu-icon mdi mdi-card-text-outline" />
                        <span className="menu-title">Phòng ban</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse show" id="form-elements" style={{}}>
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to='/danhsachphongban'>
                                    Danh sách Phòng ban
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item nav-category">Hệ Thống</li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-bs-toggle="collapse"
                        href="#charts"
                        aria-expanded="false"
                        aria-controls="charts"
                    >
                        <i className="menu-icon mdi mdi-chart-line" />
                        <span className="menu-title">Hệ thống</span>
                        <i className="menu-arrow" />
                    </a>
                    <div className="collapse" id="charts">
                        <ul className="nav flex-column sub-menu">
                            <li className="nav-item">
                                <Link className="nav-link" to="/thietlaphethongnhansu">
                                    Thiết lập hệ thống nhân sự
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/caidatgiocong">
                                    Cài đặt giờ công
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
