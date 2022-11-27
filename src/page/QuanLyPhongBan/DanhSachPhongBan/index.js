import React, { useState } from 'react';
import {Button} from 'react-bootstrap'
import Table from '~/components/layouts/Table';
import DialogTableEmployee from '~/components/layouts/DialogTableEmployee';

const listdata = [{}];

const listTitlesPB = {
    id: 'Mã phòng ban',
    name: 'Tên phòng ban',
};
const listTitlesKV = {
    id: 'Mã khu vực',
    name: 'Tên khu vực',
};
const listTitlesCV = {
    id: 'Mã Chức vụ',
    name: 'Tên tên chức',
};

function DanhSachPhongBan() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className="content-wrapper">
            <div className="row">
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
                <div className="col-sm-12">
                    <Table title="Phòng ban" listTitles={listTitlesPB} listdata={listdata} />
                </div>
                <div className="col-sm-6">
                    <Table title="Khu vực" listTitles={listTitlesKV} listdata={listdata} />
                </div>
                <div className="col-sm-6">
                    <Table title="Chức vụ" listTitles={listTitlesCV} listdata={listdata} />
                </div>
            </div>
        </section>
    );
}

export default DanhSachPhongBan;
