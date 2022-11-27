<<<<<<< Updated upstream:src/page/QuanLyPhongBan/DanhSachPhongBan/index.js
import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
=======
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
>>>>>>> Stashed changes:src/page/DanhSach/ChucVu/index.js
import Table from '~/components/layouts/Table';
import DialogTableEmployee from '~/components/layouts/DialogTableEmployee';


const listdata = [{}];

const listTitles = {
    id: 'Mã chức vụ',
    name: 'Tên chức vụ',
    date: 'Ngày tạo',
    luongngay: 'Lương ngày',
    mota: 'Mô tả',
    nguoitao: 'Người tạo',
    nguoisua: 'Người sửa',
};

function ChucVu() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <section className="content-wrapper">
            <div className="row">
<<<<<<< Updated upstream:src/page/QuanLyPhongBan/DanhSachPhongBan/index.js
            <div className="col-sm-12">
                        <Button
                            variant="outline-primary"
                            className="ms-auto col-sm-2 float-end m-2"
                            onClick={() => setModalShow(true)}
                        >
                            Thêm
                        </Button>
                    </div>
                    <DialogTableEmployee show={modalShow} onHide={() => setModalShow(false)}/>
=======
                <div className="col-sm-12">
                    <Button
                        variant="outline-primary"
                        className="ms-auto col-sm-2 float-end m-2"
                        onClick={() => setModalShow(true)}
                    >
                        Tạo phòng ban
                    </Button>
                </div>
                <DialogTableEmployee show={modalShow} onHide={() => setModalShow(false)} />
>>>>>>> Stashed changes:src/page/DanhSach/ChucVu/index.js
                <div className="col-sm-12">
                    <Table title="Chức vụ" listTitles={listTitles} listdata={listdata} />
                </div>
            </div>
        </section>
    )
}

export default ChucVu
