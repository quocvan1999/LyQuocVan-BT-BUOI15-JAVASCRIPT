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

    let diemTB = tinhDiem(khuVuc, doiTuong, mon1, mon2, mon3);
    hienThiKetQua(diemChuan, diemTB, ketQuaTuyenSinh);
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

// FUNCTIONS
function tinhTienCap(soKenh, soKetNoi, loaiKhachHang) {
    let phiHoaDon = 0;
    let phiDichVuCoBan = 0;
    let thueKenhCaoCap = 0;
    let tongTienCap = 0;

    if (loaiKhachHang === '1') {
        phiHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        thueKenhCaoCap = soKenh * 7.5;
    } else if (loaiKhachHang === '2') {
        phiHoaDon = 15;
        if (soKetNoi <= 10) {
            phiDichVuCoBan = 75;
        } else if (soKetNoi > 10) {
            phiDichVuCoBan = 75 + ((soKetNoi - 10) * 5);
        }
        thueKenhCaoCap = soKenh * 50;

    } else {
        alert('Vui lòng chọn loại khách hàng')
    }

    console.log(tongTienCap);

    tongTienCap = phiHoaDon + phiDichVuCoBan + thueKenhCaoCap;

    return tongTienCap;
}

function onLoaiKH(value) {
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

function tinhTNCT(thuNhapNam, soNguoiPhuThuoc) {
    let thueTNCN = thuNhapNam - 4e+6 - soNguoiPhuThuoc * 16e+5;
    return thueTNCN;
}

function tinhThueTNCN(thuNhapChiuThue) {
    let tongTienThue = 0;

    if (thuNhapChiuThue <= 6e+7) {
        tongTienThue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue > 6e+7 && thuNhapChiuThue <= 12e+7) {
        tongTienThue = (6e+7 * 0.05) + ((thuNhapChiuThue - 6e+7) * 0.1);
    } else if (thuNhapChiuThue > 12e+7 && thuNhapChiuThue <= 21e+7) {
        tongTienThue = (6e+7 * 0.05) + (6e+7 * 0.1) + ((thuNhapChiuThue - 12e+7) * 0.15);
    } else if (thuNhapChiuThue > 21e+7 && thuNhapChiuThue <= 384e+6) {
        tongTienThue = (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + ((thuNhapChiuThue - 21e+7) * 0.2);
    } else if (thuNhapChiuThue > 384e+6 && thuNhapChiuThue <= 624e+6) {
        tongTienThue = (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + (174e+6 * 0.2) + ((thuNhapChiuThue - 384e+6) * 0.25);
    } else if (thuNhapChiuThue > 624e+6 && thuNhapChiuThue <= 960e+6) {
        tongTienThue = (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.5) + ((thuNhapChiuThue - 624e+6) * 0.3);
    } else if (thuNhapChiuThue > 960e+6) {
        (6e+7 * 0.5) + (6e+7 * 0.1) + (9e+7 * 0.15) + (174e+6 * 0.2) + (240e+6 * 0.5) + (336e+6 * 0.35)
    }

    return toVND(tongTienThue);
}

function hienThiKetQua(diemChuan, diemTB, ketQua) {
    if (diemChuan <= 0 || diemChuan > 30) {
        alert('Nhập lại điểm chuẩn. Điểm chuẩn phải nằm trong khoảng 0 -> 30.')
    } else {
        if (diemTB < diemChuan) {
            ketQua.innerHTML = `Bạn đã rớt. Điểm của bạn là ${diemTB}`;
        } else {
            ketQua.innerHTML = `Bạn đã đậu. Điểm của bạn là ${diemTB}`;
        }
    }
}

function tinhDiem(khuVuc, doiTuong, mon1, mon2, mon3) {
    let diemKhuVuc = xetDiemKhuVuc(khuVuc);
    let diemDoiTuong = xetDiemDoiTuong(doiTuong);
    let diemTuyenSinh = 0;

    if (mon1 <= 0 || mon2 <= 0 || mon3 <= 0) {
        return diemTuyenSinh;
    } else {
        let diemTB = mon1 + mon2 + mon3;
        diemTuyenSinh = diemDoiTuong + diemKhuVuc + diemTB;

        return diemTuyenSinh;
    }
}

function xetDiemDoiTuong(doiTuong) {
    let diemDoiTuong = 0;
    switch (doiTuong) {
        case '1':
            diemDoiTuong = 2.5;
            break;
        case '2':
            diemDoiTuong = 1.5;
            break;
        case '3':
            diemDoiTuong = 1;
            break;
        default:
            diemDoiTuong = 0;
            break;
    }

    return diemDoiTuong;
}

function xetDiemKhuVuc(khuVuc) {
    let diemKhuVuc = 0;
    switch (khuVuc) {
        case 'A':
            diemKhuVuc = 2;
            break;
        case 'B':
            diemKhuVuc = 1;
            break;
        case 'C':
            diemKhuVuc = 0.5;
            break;
        default:
            diemKhuVuc = 0;
            break;
    }

    return diemKhuVuc;
}

function tinhTienDien(soKw) {
    let tienDien = 0;

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 50 * 500 + (soKw - 50) * 650;
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (soKw - 200) * 1100;
    } else if (soKw > 350) {
        tienDien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKw - 350) * 1300;
    }

    return toVND(tienDien);
}

function toVND(money) {
    return money.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    });
}

function getStyle(element) {
    return window.getComputedStyle(element);
}

