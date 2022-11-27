import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

function DialogAdd(props) {
    const { onHide } = props;

    const [manv, setManv] = useState('');
    const [tennv, setTennv] = useState('');
    const [sdt, setSDT] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [address1, setAddress1] = useState('');
    const [address, setAddress] = useState('');

    function handleAddnv(e) {
        e.preventDefault();
        const newEmployee = {
            manv: manv,
            tennv: tennv,
            sdt: sdt,
            email: email,
            birth: birth,
            address1: address1,
            address: address,
        };
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Form action="" onSubmit={handleAddnv}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Thêm thông tin nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputManv">
                            <Form.Label>Mã nhân viên</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Mã nhân viên"
                                autoFocus
                                onChange={(e) => setManv(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputTenNV">
                            <Form.Label>Tên nhân viên</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tên nhân viên"
                                autoFocus
                                onChange={(e) => setTennv(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputSDT">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Số điện thoại"
                                autoFocus
                                onChange={(e) => setSDT(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputEmail">
                            <Form.Label>Tài khoản Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputBirth">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Ngày sinh"
                                autoFocus
                                onChange={(e) => setBirth(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputAddress1">
                        <Form.Label>Địa chỉ tạm trú</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Địa chỉ tạm trú"
                            autoFocus
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputAddress">
                        <Form.Label>Địa chỉ lưu trú</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Địa chỉ lưu trú"
                            autoFocus
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onHide}>
                        Đóng
                    </Button>
                    <Button type="submit" variant="primary">
                        Thêm nhân viên
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default DialogAdd;
