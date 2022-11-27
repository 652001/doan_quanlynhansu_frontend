// TongQuan
import Thongke from '~/page/TongQuan/ThongKe';
import DanhSachNhanVien from '~/page/TongQuan/DanhSachNhanVien';
import DanhSachTaiKhoan from '~/page/TongQuan/DanhSachTaiKhoan';
// DanhSach
import DanhSachPhongBan from '~/page/DanhSach/PhongBan';
import ChucVu from '~/page/DanhSach/ChucVu';
import TrinhDo from '~/page/DanhSach/TrinhDo';
import BangCap from '~/page/DanhSach/BangCap';
import ChuyenMon from '~/page/DanhSach/ChuyenMon';
import DanhSachHopDong from '~/page/DanhSach/HopDong';
// Cham Cong
import DanhSachChamCong from '~/page/DanhSach/DanhSachChamCong';
<<<<<<< Updated upstream
import DanhSachHopDong from '~/page/DanhSach/DanhSachHopDong';
import DanhSachTaiKhoan from '~/page/DanhSach/DanhSachTaiKhoan';
import DanhSachPhongBan from '~/page/QuanLyPhongBan/DanhSachPhongBan';
=======
// Luong
import DanhSachBangLuong from '~/page/BangLuong/DanhSachBangLuong';
// He Thong
>>>>>>> Stashed changes
import ThietLap from '~/page/HeThong/ThietLap';
import CaiDatGioCong from '~/page/HeThong/CaiDatGioCong';



// Public thường dùng trước khi đăng nhập
const publicRoutes = [
    // Tong quan
    { path: '/', component: Thongke },
    { path: '/danhsachnhanvien', component: DanhSachNhanVien },
    { path: '/danhsachtaikhoan', component: DanhSachTaiKhoan },
    //Danh Sach
    { path: '/phongban', component: DanhSachPhongBan },
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
