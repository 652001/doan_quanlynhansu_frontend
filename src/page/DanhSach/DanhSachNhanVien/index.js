import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import Table from '~/components/layouts/Table';
import DialogTableEmployee from '~/components/layouts/DialogTableEmployee';

const listdata = [
    {
        id: 'nv1',
        name: 'Sơn',
        trangthai: true,
        img: 'images',
        email: 'son123@gmail.com',
        tk: '02412911231',
        ngaysinh: '06/05/2001',
    },
    {
        id: 'nv2',
        name: 'Vỉ',
        trangthai: true,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv3',
        name: 'Vỉ',
        trangthai: true,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv4',
        name: 'Vỉ',
        trangthai: true,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv5',
        name: 'Vỉ',
        trangthai: false,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv6',
        name: 'Vỉ',
        trangthai: true,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv7',
        name: 'Vỉ',
        trangthai: false,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv8',
        name: 'Vỉ',
        trangthai: false,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv9',
        name: 'Vỉ',
        trangthai: true,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
    {
        id: 'nv10',
        name: 'Vỉ',
        trangthai: false,
        img: 'images',
        email: 'vi123@gmail.com',
        tk: '0431902318242',
        ngaysinh: '22/10/2001',
    },
];

const listTitles = {
    id: 'Mã nhân viên',
    name: 'Tên nhân viên',
    trangthai: 'Trạng thái',
    email: 'Email',
    tk: 'Số tài khoản',
    img: 'Hình ảnh',
    date: 'Ngày sinh',
    sdt: 'Số điện thoại',
    luong: 'Tiền lương',
    chucvu: 'Chức vụ',
    khuvu: 'Khu vực',
    phongban: 'Phòng ban',
};
function DanhSachNhanVien() {
    const [modalShow, setModalShow] = useState(false);
    const [rdoTrangThai, setRdoTrangThai] = useState('Tất cả');
    const [rdoTimKiem, setRdoTimKiem] = useState('Mã nhân viên');

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="mb-2 row">
                    <Form className="col-sm-6 my-2">
                        <Form.Group controlId="controlIDTrangThai">
                            <div className="row align-items-center">
                                <Form.Label className="col-sm-3 p-0 h5">Trạng thái</Form.Label>
                                {['Tất cả', 'Đang làm việc', 'Nghỉ'].map((key, index) => {
                                    return (
                                        <div key={index} className="form-check col-sm-3">
                                            <label className="form-check-label m-0">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="trangthai"
                                                    id={'trangthai' + index}
                                                    value={key}
                                                    checked={rdoTrangThai === key}
                                                    onChange={e => setRdoTrangThai(e.currentTarget.value)}
                                                />
                                                {key}
                                                <i className="input-helper" />
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </Form.Group>
                    </Form>
                    <Form className="col-sm-12 row my-2">
                        <Form.Group controlId="controlIDTimKiem" className="col-sm-6">
                            <div className="row align-items-center">
                                <Form.Label className="col-sm-3 p-0 h5">Tìm kiếm</Form.Label>
                                {['Mã nhân viên', 'Tên nhân viên', 'Phòng ban'].map((key, index) => {
                                    return (
                                        <div key={index} className="form-check col-sm-3">
                                            <label className="form-check-label m-0">
                                                <input
                                                    type="radio"
                                                    className="form-check-input"
                                                    name="timkiem"
                                                    id={'timkiem' + index}
                                                    value={key}
                                                    checked={rdoTimKiem === key}
                                                    onChange={e => setRdoTimKiem(e.currentTarget.value)}
                                                />
                                                {key}
                                                <i className="input-helper" />
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </Form.Group>
                        <Form.Group className="col-sm-5">
                            <div className="input-group">
                                <Form.Control type="text" placeholder={rdoTimKiem} aria-label="Recipient's username" />
                                <div className="input-group-append">
                                    <Button
                                        variant="outline-primary btn-sm"
                                        className="ms-2"
                                    >
                                        Tìm kiếm
                                    </Button>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                    <div className="col-sm-12">
                        <Button
                            variant="outline-primary"
                            className="ms-auto col-sm-2 float-end m-2"
                            onClick={() => setModalShow(true)}
                        >
                            Thêm nhân viên
                        </Button>
                        <Button type="button" variant="outline-danger" className="btn-icon-text m-2 float-end">
                            Xuất/In
                            <i className="ti-printer btn-icon-append" />
                        </Button>
                    </div>
                    <DialogTableEmployee show={modalShow} onHide={() => setModalShow(false)}/>
                </div>
                <Table title="Danh Sách nhân viên" listTitles={listTitles} listdata={listdata} hideButton/>
            </div>
        </section>
    );
}

export default DanhSachNhanVien;
