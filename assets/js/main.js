import { tinhDiemTuyenSinh, hienThiKetQuaTuyenSinh, tinhTienDien, tinhTNCT, tinhThueTNCN, tinhTienCap } from '../js/method/method.js';

let btnKetQua = document.querySelector('#btnKetQua');
let btnTinhTienDien = document.querySelector('#btnTinhTienDien');
let btnTinhTienThue = document.querySelector('#btnTinhTienThue');
let btnTinhTienCap = document.querySelector('#btnTinhTienCap');

// BT 1
btnKetQua.addEventListener('click', () => {
    let diemChuan = +document.querySelector('#diemChuan').value;
    let khuVuc = document.querySelector('#khuVuc').value;
    let doiTuong = document.querySelector('#doiTuong').value;
    let mon1 = +document.querySelector('#mon1').value;
    let mon2 = +document.querySelector('#mon2').value;
    let mon3 = +document.querySelector('#mon3').value;
    let ketQuaTuyenSinh = document.querySelector('#ketQuaTuyenSinh');

    let diemTB = tinhDiemTuyenSinh(khuVuc, doiTuong, mon1, mon2, mon3);
    hienThiKetQuaTuyenSinh(diemChuan, diemTB, ketQuaTuyenSinh);
});

// BT 2
btnTinhTienDien.addEventListener('click', () => {
    let hoTen = document.querySelector('#hoTen').value;
    let soKw = +document.querySelector('#soKw').value;
    let tongTienDien = document.querySelector('#tongTienDien');

    tongTienDien.innerHTML = `Họ tên: ${hoTen}; Tiền điện: ${tinhTienDien(soKw)}`;
});

// BT 3
btnTinhTienThue.addEventListener('click', () => {
    let hoTen3 = document.querySelector('#hoTen3').value;
    let thuNhapNam = +document.querySelector('#thuNhapNam').value;
    let soNguoiPhuThuoc = +document.querySelector('#soNguoiPhuThuoc').value;
    let tongTienThue = document.querySelector('#tongTienThue');
    let thuNhapChiuThue = tinhTNCT(thuNhapNam, soNguoiPhuThuoc);
    let tienthue = tinhThueTNCN(thuNhapChiuThue);

    tongTienThue.innerHTML = `Họ tên: ${hoTen3}; Tiền thuế: ${tienthue}`;
});

// BT 4
btnTinhTienCap.addEventListener('click', () => {
    let loaiKhachHang = document.querySelector('#loaiKhachHang').value;
    let maKH = document.querySelector('#maKH').value;
    let soKenh = +document.querySelector('#soKenh').value;
    let soKetNoi = +document.querySelector('#soKetNoi').value;
    let tongTienCap = document.querySelector('#tongTienCap');
    let tienCap = tinhTienCap(soKenh, soKetNoi, loaiKhachHang);

    tongTienCap.innerHTML = `Mã khách hàng: ${maKH}; Tiền cáp: ${tienCap}`;
});



window.onLoaiKH = function (value) {
    let soKetNoi = document.querySelector('#soKetNoi');

    switch (value) {
        case '2':
            soKetNoi.style.display = 'block';
            break;
        default:
            soKetNoi.style.display = 'none';
            break;
    }
}





