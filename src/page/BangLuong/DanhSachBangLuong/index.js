import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Table from '~/components/layouts/Table'

const listdata = [{}];

const listTitles = {
  id: 'Mã số bảng lương',
  name: 'Tên nhân viên',
  idnv: 'Mã nhân viên',
  chucvu: 'Chức vụ',
  luongcb: 'Lương cơ bản',
  dayNhan: 'Ngày nhận lương',
  giolam: 'Số giờ làm',
  tangca: 'Số giờ tăng ca',
  phucap: 'Số tiền phụ cấp',
  khenthuong: 'Khen thưởng',
  kyluat: 'Kỹ luật',
  ungluong: 'Ứng lương',
  luongnhan: 'Lương nhận'
}

function DanhSachBangLuong() {
  return (
    <section className="content-wrapper">
      <div className="row">
        <div className="col-sm-12">
          <div className='mb-2'>
            <Form className="row">
              <h5 className="h5 col-sm-3">Tìm kiếm theo ngày</h5>
              <Form.Group controlId="dateTimeID1" className="col-sm-3">
                <InputGroup id="datepicker-popup" className="align-items-center">
                  <Form.Label>Từ ngày</Form.Label>
                  <Form.Control type="date" className="ms-2" />
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
          <Table title="Phòng ban" listTitles={listTitles} listdata={listdata} />
        </div>
      </div>
    </section>
  )
}

export default DanhSachBangLuong
