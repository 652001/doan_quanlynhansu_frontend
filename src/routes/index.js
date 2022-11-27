import HomePage from '~/page/HomePage';
import DanhSachNhanVien from '~/page/DanhSach/DanhSachNhanVien';
import DanhSachChamCong from '~/page/DanhSach/DanhSachChamCong';
import DanhSachHopDong from '~/page/DanhSach/DanhSachHopDong';
import DanhSachTaiKhoan from '~/page/DanhSach/DanhSachTaiKhoan';
import DanhSachPhongBan from '~/page/QuanLyPhongBan/DanhSachPhongBan';
import ThietLap from '~/page/HeThong/ThietLap';
import CaiDatGioCong from '~/page/HeThong/CaiDatGioCong';

// Public thường dùng trước khi đăng nhập
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/danhsachnhanvien', component: DanhSachNhanVien },
    { path: '/danhsachchamcong', component: DanhSachChamCong },
    { path: '/danhsachhopdong', component: DanhSachHopDong },
    { path: '/danhsachtaikhoan', component: DanhSachTaiKhoan },
    { path: '/danhsachphongban', component: DanhSachPhongBan },
    { path: '/thietlaphethongnhansu', component: ThietLap },
    { path: '/caidatgiocong', component: CaiDatGioCong },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
