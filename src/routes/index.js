// TongQuan
import Thongke from '~/page/TongQuan/ThongKe';
import DanhSachNhanVien from '~/page/TongQuan/DanhSachNhanVien';
import DanhSachTaiKhoan from '~/page/TongQuan/DanhSachTaiKhoan';
// DanhSach
import PhongBan from '~/page/DanhSach/PhongBan';
import ChucVu from '~/page/DanhSach/ChucVu';
import TrinhDo from '~/page/DanhSach/TrinhDo';
import BangCap from '~/page/DanhSach/BangCap';
import ChuyenMon from '~/page/DanhSach/ChuyenMon';
import DanhSachHopDong from '~/page/DanhSach/HopDong';
// Cham Cong
import DanhSachChamCong from '~/page/DanhSachChamCong';
// Luong
import DanhSachBangLuong from '~/page/BangLuong/DanhSachBangLuong';

// He Thong

import CaiDatGioCong from '~/page/HeThong/CaiDatGioCong';
import ThietLap from '~/page/HeThong/ThietLap';



// Public thường dùng trước khi đăng nhập
const publicRoutes = [
    // Tong quan
    { path: '/', component: Thongke },
    { path: '/danhsachnhanvien', component: DanhSachNhanVien },
    { path: '/danhsachtaikhoan', component: DanhSachTaiKhoan },
    //Danh Sach
    { path: '/phongban', component: PhongBan },
    { path: '/chucvu', component: ChucVu },
    { path: '/trinhdo', component: TrinhDo },
    { path: '/bangcap', component: BangCap },
    { path: '/chuyenmon', component: ChuyenMon },
    { path: '/hopdong', component: DanhSachHopDong },

    // Cham cong
    { path: '/danhsachchamcong', component: DanhSachChamCong },

    // Luong
    { path: '/bangluong', component: DanhSachBangLuong },

    // He Thong
    { path: '/thietlaphethongnhansu', component: ThietLap },
    { path: '/caidatgiocong', component: CaiDatGioCong },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
