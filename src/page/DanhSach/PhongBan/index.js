import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap'
import Table from '~/components/layouts/Table';
import DialogTableEmployee from '~/components/layouts/DialogTableEmployee';

const listdata = [{}];

const listTitles = {
    id: 'Mã phòng ban',
    name: 'Tên phòng ban',
    date: 'Ngày tạo',
    mota: 'Mô tả',
    nguoitao: 'Người tạo',
    nguoisua: 'Người sửa',
};


function DanhSachPhongBan() {

    const [mapb, setMaPb] = useState('');
    const [tenpb, setTenPb] = useState('');
    const [nd, setND] = useState('');

    function handleAddPB(e){
        e.preventDefault();
    }

    return (
        <section className="content-wrapper">
            <div className="row">
                <div className="col-sm-12">
                    <Table title="Phòng ban" listTitles={listTitles} listdata={listdata} />
                </div>
                <Form action='' method='post'>
                    <div className='col-lg-12 grid-margin stretch-card'>
                        <div className='card'>
                            <InputGroup className='card-body row'>
                                <Form.Group className="mb-3 col-sm-2" controlId="ControlInputMaPb">
                                    <Form.Label>Mã Phòng ban</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Mã Phòng ban"
                                        autoFocus
                                        value={mapb}
                                        onChange={(e) => setMaPb(e.target.value)}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col-sm-4" controlId="ControlInputTenPb">
                                    <Form.Label>Tên Phòng ban</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Ten Phòng ban"
                                        autoFocus
                                        value={tenpb}
                                        onChange={(e) => setTenPb(e.target.value)}
                                    />
                                </Form.Group>
                            </InputGroup>
                            <Form.Group className="mb-3 card-body" controlId="ControlInputTenPb">
                                <Form.Label>Nội dung</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Nội dung"
                                    autoFocus
                                    value={nd}
                                    onChange={(e) => setND(e.target.value)}
                                />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <Button
                            type="submit"
                            variant="outline-primary"
                            className="ms-auto col-sm-2 float-end m-2"
                            onClick={() => handleAddPB()}
                        >
                            Tạo phòng ban
                        </Button>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default DanhSachPhongBan;
