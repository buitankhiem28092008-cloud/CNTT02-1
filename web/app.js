const danhSachXe = [
  { ma: "XD-01", ten: "Xe dap thanh pho", gia: 30000 },
  { ma: "XD-02", ten: "Xe dap dia hinh", gia: 50000 },
  { ma: "XM-01", ten: "Xe may dien", gia: 80000 },
  { ma: "XM-02", ten: "Xe may dien cao cap", gia: 120000 },
];

function hienThiBangGiaXe() {
  const bang = document.getElementById("bang-gia");
  for (const xe of danhSachXe) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = xe.ma;
    dong.insertCell().textContent = xe.ten;
    dong.insertCell().textContent = xe.gia.toLocaleString("vi-VN");
  }
}

hienThiBangGiaXe()
