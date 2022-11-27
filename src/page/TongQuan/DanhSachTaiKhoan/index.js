import React from 'react';
import { Button } from 'react-bootstrap';
import Table from '~/components/layouts/Table';

const listdata = [
    {
        id: 'nv1',
        name: 'Sơn',
        img: 'images',
        username: 'thaison123',
        rolos: 'Admin',
    },
    {
        id: 'nv2',
        name: 'Vỉ',
        img: 'images',
        username: 'ThanhVi123',
        rolos: 'Nhân viên',
    },
];

const listTitles = {
    id: 'Mã nhân viên',
    name: 'Tên nhân viên',
    username: 'Tên đăng nhập',
    trangthai: 'Trạng thái',
    img: 'Hình ảnh',
    rolos: 'Quyền hạn',
    truycap: 'Truy cập',
    email: 'Email',
    sdt: 'Số điện thoại'
};

function DanhSachTaiKhoan() {
    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="mb-2">
                    <Button variant="outline-primary" className="ms-auto float-end">
                        Thêm tài khoản
                    </Button>
                </div>
                <Table title="Danh Sách tài khoản" listTitles={listTitles} listdata={listdata} />
            </div>
        </section>
    );
}

export default DanhSachTaiKhoan;
