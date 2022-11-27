import React, { useEffect, useState } from 'react';
import { Image, Form, Button, Modal } from 'react-bootstrap';
import DialogTableEmployee from '~/components/layouts/DialogTableEmployee';
import UseTable from './UseTable';
import TableFooter from './TableFooter';

function Table({ title, listTitles, listdata, hideButton }) {
    let titles = Object.keys(listTitles);

    const [rdoFocus, setRdoFocus] = useState('');
    const [smShow, setSmShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [page, setPage] = useState(1);
    const [id, setID] = useState();
    const [user, setUser] = useState({})

    const [data] = useState([...listdata])

    useEffect (() => {

        
    },[data]);
    
    const { slice, range } = UseTable(data, page, 6);

    function handleView() {
        return rdoFocus === '' ? setSmShow(true) : setModalShow(true);
    }

    function handleDel(){

    }

    return (
        <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h3 className="h3">{title}</h3>
                        <div className='d-flex flex-row-reverse bd-highlight'>
                            <div className='col-md-2'>
                                <Button
                                    type="button"
                                    variant="danger"
                                    className={`'btn-icon-text' + ${hideButton? '' : 'collapse'}`}
                                    onClick={() => handleView()}
                                >
                                    Xem thông tin
                                    <i className="ti-file btn-icon-prepend ms-1" />
                                </Button>
                            </div>
                            <div className='col-md-1'>
                                <Button
                                    type="button"
                                    variant="info"
                                    className={`'btn-icon-text' + ${rdoFocus? '' : 'collapse'}`}
                                    onClick={() => handleDel()}
                                >
                                    Xóa
                                    <i className="mdi mdi-delete-forever btn-icon-prepend ms-1"/>
                                </Button>
                            </div>
                            <Modal
                                size="sm"
                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">Thông báo</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Bạn chưa nhấn chọn</Modal.Body>
                            </Modal>
                            <DialogTableEmployee show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th></th>
                                    {listTitles.img ? <th className='text-center'>{listTitles.img}</th> : null}
                                    {titles.map((key) => {
                                        return key !== 'img' ? (
                                            <th key={key} className="text-center">
                                                {listTitles[key]}
                                            </th>
                                        ) : null;
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {slice.map((data) => {
                                    let keys = Object.keys(data);
                                    return (
                                        <tr key={data.id} onClick={() => setRdoFocus(data.id)} className={data.id? '' : 'collapse'}>
                                            <td>
                                                <Form.Check
                                                    type="radio"
                                                    name="rdoFocus"
                                                    id={'rdoFocus' + data.id}
                                                    checked={data.id === rdoFocus}
                                                    onChange={() => setRdoFocus(data.id)}
                                                />
                                            </td>
                                            {data.img ? (
                                                <td className="text-center">
                                                    <Image src={data.img} />
                                                </td>
                                            ) : null}
                                            {keys.map((key) => {
                                                if (key === 'trangthai') {
                                                    return (
                                                        <td key={key} className="text-center">
                                                            <Form.Check
                                                                type="checkbox"
                                                                name={'trangthai' + data.id}
                                                                id={'trangthai' + data.id}
                                                                checked={data.trangthai}
                                                                disabled
                                                            />
                                                        </td>
                                                    );
                                                } else if (key !== 'img') {
                                                    return (
                                                        <td key={key} className="text-center">
                                                            {data[key]}
                                                        </td>
                                                    );
                                                } else return null;
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="p-2">
                    <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
                </div>
            </div>
        </div>
    );
}

export default Table;
