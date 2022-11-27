import React, { useState } from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';

function DialogAdd(props) {
    const { onHide } = props;

    const [manv, setManv] = useState('');
    const [tennv, setTennv] = useState('');
    const [sdt, setSDT] = useState('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [gt, setLGT] = useState('');
    const [sgt, setSGT] = useState('');
    const [nc, setNC] = useState('');
    const [img, setImg] = useState('');
    const [tthn, setTTHN] = useState('');
    const [sex, setSex] = useState('');
    const [address1, setAddress1] = useState('');
    const [address, setAddress] = useState('');
    const [nq, setNQ] = useState('');
    const [ns, setNs] = useState('');
    const [qt, setQt] = useState('');
    const [dt, setDt] = useState('');
    const [pb, setPb] = useState('');
    const [cv, setCv] = useState('');
    const [td, setTD] = useState('');
    const [bc, setBC] = useState('');
    const [cm, setCm] = useState('');


    function handleAddnv(e) {
        e.preventDefault();
        const newEmployee = {
            manv: manv,
            tennv: tennv,
            sdt: sdt,
            email: email,
            birth: birth,
            gt: gt,
            sgt: sgt,
            nc: nc,
            img: img,
            tthn: tthn,
            sex: sex,
            address1: address1,
            address: address,
            nq: nq,
            ns: ns,
            qt: qt,
            dt: dt,
            pb: pb,
            cv: cv,
            td: td,
            bc: bc,
            cm: cm
        };
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
            <Form action="" onSubmit={handleAddnv}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Thêm thông tin nhân viên</Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <p className='h6'>Những ô nhập có dấu <span className='text-danger h5'>*</span> là bắt buộc phải nhập</p>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputManv">
                            <Form.Label>Mã nhân viên</Form.Label>
                            <Form.Control
                                type="text"
                                value={manv}
                                placeholder="Mã nhân viên"
                                autoFocus
                                onChange={(e) => setManv(e.target.value)}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputTenNV">
                            <Form.Label>Tên nhân viên  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={tennv}
                                placeholder="Tên nhân viên"
                                autoFocus
                                onChange={(e) => setTennv(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputSDT">
                            <Form.Label>Số điện thoại  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={sdt}
                                placeholder="Số điện thoại"
                                autoFocus
                                onChange={(e) => setSDT(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputLGT">
                            <Form.Label>Loại giấy tờ tùy thân <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setLGT(e.target.value)}>
                                <option value='1'>Căn cước công dân</option>
                                <option value='2'>Chứng minh nhân dân</option>
                                <option value='3'>Hộ chiếu</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-8" controlId="ControlInputSgt">
                            <Form.Label>Số giấy tờ tùy thân  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={sgt}
                                placeholder="Nhập số giấy tờ tùy thân"
                                autoFocus
                                onChange={(e) => setSGT(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputNC">
                            <Form.Label>Nơi cấp  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={nc}
                                placeholder="Nơi cấp"
                                autoFocus
                                onChange={(e) => setNC(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputQt">
                            <Form.Label>Quốc tịch <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={qt}
                                placeholder="Quốc tịch"
                                autoFocus
                                onChange={(e) => setQt(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputDT">
                            <Form.Label>Dân tộc</Form.Label>
                            <Form.Control
                                type="text"
                                value={dt}
                                placeholder="Dân tộc"
                                autoFocus
                                onChange={(e) => setDt(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputEmail">
                            <Form.Label>Tài khoản Email  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={email}
                                placeholder="Email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputBirth">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control
                                type="date"
                                value={birth}
                                placeholder="Ngày sinh"
                                autoFocus
                                onChange={(e) => setBirth(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className="row">
                        <Form.Group className="mb-3 col-sm-6" controlId="ControlInputImg">
                            <Form.Label>Hình ảnh  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Control
                                type="file"
                                value={img}
                                placeholder="Hình ảnh"
                                autoFocus
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputSex">
                            <Form.Label>Giới tính  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setSex(e.target.value)}>
                                <option value='1'>Nam</option>
                                <option value='2'>Nu</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-3" controlId="ControlInputTTHN">
                            <Form.Label>Tình trạng hôn nhân  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setTTHN(e.target.value)}>
                                <option value='1'>Chưa kết hôn</option>
                                <option value='2'>Đã kết hôn</option>
                            </Form.Select>
                        </Form.Group>
                    </InputGroup>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputAddress1">
                        <Form.Label>Tạm trú  <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={address1}
                            placeholder="Tạm trú"
                            autoFocus
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-12" controlId="ControlInputAddress">
                        <Form.Label>Địa chỉ <span className='text-danger h5'>*</span></Form.Label>
                        <Form.Control
                            type="text"
                            value={address}
                            placeholder="Địa chỉ"
                            autoFocus
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </Form.Group>
                    <InputGroup className='row'>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputNQ">
                            <Form.Label>Nguyên quán</Form.Label>
                            <Form.Control
                                type="text"
                                value={nq}
                                placeholder="Nguyên quán"
                                autoFocus
                                onChange={(e) => setNQ(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputNs">
                            <Form.Label>Nơi sinh</Form.Label>
                            <Form.Control
                                type="text"
                                value={ns}
                                placeholder="Nơi sinh"
                                autoFocus
                                onChange={(e) => setNs(e.target.value)}
                            />
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className='row'>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputPB">
                            <Form.Label>Phòng ban  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setPb(e.target.value)}>
                                <option value='1'>Kế toán</option>
                                <option value='2'>Nhân sự</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputCV">
                            <Form.Label>Chức vụ  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setCv(e.target.value)}>
                                <option value='1'>Không</option>
                                <option value='2'>Giám đốc</option>
                                <option value='3'>Nhân viên</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputTD">
                            <Form.Label>Trình độ  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setTD(e.target.value)}>
                                <option value='1'>Không</option>
                                <option value='2'>Đại học</option>
                                <option value='3'>12/12</option>
                            </Form.Select>
                        </Form.Group>
                    </InputGroup>
                    <InputGroup className='row'>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputBC">
                            <Form.Label>Bằng cấp  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setBC(e.target.value)}>
                                <option value='1'>Không</option>
                                <option value='2'>Tiến sĩ Trí tuệ nhân tạo</option>
                                <option value='3'>Thạc sĩ</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-4" controlId="ControlInputBC">
                            <Form.Label>Chuyên môn  <span className='text-danger h5'>*</span></Form.Label>
                            <Form.Select onChange={(e) => setCm(e.target.value)}>
                                <option value='1'>Không</option>
                                <option value='2'>Chuyên viên thiết kế</option>
                                <option value='3'>Nhân viên kỹ thuật</option>
                            </Form.Select>
                        </Form.Group>
                    </InputGroup>
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
