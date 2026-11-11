# BÀI LÀM – HACKATHON 02

- **Mã đề:** 02
- **Họ tên:**
- **Lớp:**
- **Link repository:**
- **Hệ điều hành (Windows/macOS):**

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
# pwd
ls -Force
mv ghi_chu_ban_giao.txt .\docs\
mkdir backup
 cp data/thue_xe_thang_11.xlsx .\backup\
rm .*tmp 
cd ./logs
ls -Force
cd ..

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
d-----        11/11/2026  11:31 AM                backup                                                                                                          
d-----        11/11/2026  11:26 AM                data                                                                                                            
d-----        11/11/2026  11:29 AM                docs                                                                                                            
d-----        11/11/2026  11:24 AM                evidence                                                                                                        
d-----        11/11/2026  11:26 AM                logs                                                                                                            
d-----        11/11/2026  11:21 AM                web                                                                                                             
-a-h--         11/9/2026   1:59 PM             82 .env                                                                                                            
-a----         11/9/2026   1:59 PM           2409 bai_lam.md                                                                                                      
-a----         11/9/2026   1:59 PM             21 temp_003.tmp                                                                                                    


    Directory: K:\starter-kit-02 (1)\starter-kit\bikego-website\backup


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
-a----         11/9/2026   1:59 PM           6193 thue_xe_thang_11.xlsx                                                                                           


    Directory: K:\starter-kit-02 (1)\starter-kit\bikego-website\data


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
-a----         11/9/2026   1:59 PM           6193 thue_xe_thang_11.xlsx                                                                                           


    Directory: K:\starter-kit-02 (1)\starter-kit\bikego-website\docs


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
-a----         11/9/2026   1:59 PM            150 ghi_chu_ban_giao.txt                                                                                            


    Directory: K:\starter-kit-02 (1)\starter-kit\bikego-website\logs


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
-a----         11/9/2026   1:59 PM           1101 access.log                                                                                                      


    Directory: K:\starter-kit-02 (1)\starter-kit\bikego-website\web


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
d-----        11/11/2026  11:21 AM                images                                                                                                          
-a----         11/9/2026   1:59 PM            577 app.js                                                                                                          
-a----         11/9/2026   1:59 PM            501 index.html                                                                                                      
-a----         11/9/2026   1:59 PM            460 style.css                                                                                                       


    Directory: K:\starter-kit-02 (1)\starter-kit\bikego-website\web\images


Mode                 LastWriteTime         Length Name                                                                                                            
----                 -------------         ------ ----                                                                                                            
-a----         11/9/2026   1:59 PM           3104 bikego-logo.png                                                                                                 


```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=503

```shell
Select-String "status=503"  logs/access.log > logs/loi_503.txt

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
(logs\access.log:4:2026-11-02 08:13:38 POST /dat-xe status=503
logs\access.log:9:2026-11-02 08:37:22 POST /thanh-toan status=503)

```

### b) Lệnh đếm số dòng status=403 và kết quả

```shell
# (Get-Content ./logs/access.log | Select-String "status=403" | Measure-Object).count 

```

```text
(5)

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
#  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\tong_hop.ps1 
```

### Nội dung file logs/tong_hop.txt

```text
=== BAO CAO SU CO WEBSITE ===

2026-11-02 08:24:17 GET /admin status=403
2026-11-02 08:44:02 GET /backup.zip status=403
2026-11-02 09:03:37 GET /.git/config status=403
2026-11-02 09:19:09 GET /admin/login status=403
2026-11-02 09:42:49 GET /phpmyadmin status=403




Count    : 5
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 



```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x]EADME.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | network| 
| 2 |  |  |  |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** 
- **Expected:** 
- **Actual:** 
- **Log:** 

### Câu tìm kiếm Google

```text
(Ghi câu tìm kiếm vào đây – xoá dòng này)

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/thue_xe_thang_11.xlsx`, không cần ghi vào đây.
