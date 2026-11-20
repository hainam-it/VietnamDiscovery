# 🇻🇳 Vietnam Discovery

> **Discover the Beauty of Vietnam** — Nền tảng khám phá du lịch Việt Nam, hỗ trợ người dùng tìm kiếm địa điểm, khám phá văn hóa và trải nghiệm những điểm đến nổi bật trên khắp Việt Nam.

**Project Developer:** Nguyễn Trọng Hải Nam

---

## 📌 Giới thiệu dự án

**Vietnam Discovery** là nền tảng web du lịch được xây dựng theo kiến trúc **Microservices**, đóng gói toàn bộ dịch vụ thông qua **Docker Compose**. Người dùng có thể tra cứu 63/34 tỉnh thành, khám phá địa điểm du lịch, đọc và đăng bài đánh giá cộng đồng, trò chuyện với trợ lý AI và lập lịch trình du lịch thông minh.

### 🎯 Mục tiêu sản phẩm

- Cung cấp cổng thông tin du lịch Việt Nam trực quan, hiện đại, responsive.
- Kết nối cộng đồng du lịch: đăng bài, đánh giá, bình luận và tương tác địa điểm.
- Hỗ trợ tra cứu thông tin tỉnh thành, địa điểm theo vùng miền.
- Tích hợp AI hỗ trợ lập lịch trình và tư vấn du lịch.

---

## 🏛️ Kiến Trúc Hệ Thống (Microservices Architecture)

| Service | Công nghệ / Nền tảng | Cổng nội bộ | Mô tả nhiệm vụ |
| :--- | :--- | :--- | :--- |
| **API Gateway** | Nginx Reverse Proxy | `2222` (Host: 2222 -> 80) | Cổng giao tiếp trung tâm, định tuyến request giữa Frontend & các Services |
| **Frontend** | React 18, Vite, Lucide Icons | `80` | Giao diện người dùng hiện đại, responsive, hỗ trợ đăng nhập Google OAuth, tìm kiếm & đánh giá |
| **Province Service** | Node.js, Express, MySQL | `3001` | Quản lý danh mục 63 tỉnh/thành phố, diện tích, dân số, thông tin vùng miền |
| **Location Service** | Node.js, Express, MySQL | `3002` | Quản lý danh sách địa điểm du lịch, hình ảnh, bài đánh giá, duyệt bài đăng |
| **Media Service** | Node.js, Express | `3003` | Xử lý tải lên và phân phối tài nguyên hình ảnh đa phương tiện |
| **AI Service** | Node.js, Express, Google Gemini AI | `3004` | Chatbot tư vấn lịch trình, gợi ý điểm đến và giải đáp du lịch thông minh |
| **User Service** | Node.js, Express, JWT, Bcrypt | `3005` | Xác thực người dùng, phân quyền (User/Admin), xác minh tài khoản qua OTP Email, Google Login |
| **Database** | MySQL | `3306` | Lưu trữ cơ sở dữ liệu hệ thống, khởi tạo tự động bằng `db/init.sql` |

---

## ✨ Chức năng chính

- **Đăng ký, đăng nhập, đăng xuất** — xác thực bằng JWT, hỗ trợ Google OAuth 2.0 và xác minh OTP qua email.
- **Quản lý tài khoản** — hồ sơ cá nhân, quản lý người dùng (Admin).
- **Tra cứu tỉnh thành** — danh mục 63/34 tỉnh thành, bản đồ, chi tiết vùng miền.
- **Quản lý địa điểm du lịch** — danh sách, chi tiết, hình ảnh, thẻ phân loại.
- **Tìm kiếm và lọc địa điểm** — theo tỉnh, loại địa điểm, từ khóa.
- **Đăng bài & duyệt nội dung** — người dùng gửi địa điểm mới, Admin duyệt/từ chối (kèm thông báo realtime).
- **Bình luận & tương tác** — bình luận, phản hồi (reply), cảm xúc (like) cho địa điểm.
- **Thông báo** — hệ thống thông báo realtime khi có bình luận, duyệt bài, tương tác.
- **Chat hỗ trợ** — chat giữa người dùng và Admin hỗ trợ realtime.
- **Trợ lý AI du lịch** — chatbot tư vấn và lập lịch trình du lịch (Google Gemini AI).
- **Quản trị** — trang quản trị duyệt bài, quản lý chat hỗ trợ.

---

## 📁 Cấu Trúc Thư Mục

```text
webdulich-mcs/
├── .env.example               # Mẫu biến môi trường
├── .gitignore                 # Danh sách file bỏ qua khi commit (loại trừ .env)
├── docker-compose.yml         # File điều phối khởi chạy toàn bộ hệ thống
├── README.md                  # Tài liệu hướng dẫn dự án
├── api-gateway/               # Cấu hình Nginx API Gateway & Dockerfile
├── frontend/                  # Mã nguồn ứng dụng React + Vite
├── province-service/          # Microservice quản lý tỉnh thành
├── location-service/          # Microservice quản lý địa điểm
├── media-service/             # Microservice upload và lưu trữ media
├── ai-service/                # Microservice tích hợp Gemini AI
├── user-service/              # Microservice xác thực và quản lý tài khoản
├── e2e/                       # Bộ kiểm thử tự động E2E (Playwright)
├── scripts/                   # Script triển khai (seed data, EC2, SSL)
└── db/
    ├── init.sql               # Script khởi tạo cơ sở dữ liệu
    └── backup_xampp.sql       # Bản sao lưu dữ liệu mẫu
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Yêu cầu tiên quyết

- [Docker](https://www.docker.com/) và **Docker Compose** đã được cài đặt trên máy.
- File `.env` đặt tại thư mục gốc dự án (xem phần cấu hình môi trường bên dưới).

### 2. Chuẩn bị file môi trường (`.env`)

> [!IMPORTANT]
> **🔐 LƯU Ý BẢO MẬT VỀ FILE MÔI TRƯỜNG (`.env`)**
>
> Hệ thống tích hợp các dịch vụ bên ngoài như **Google Gemini AI API**, **Google OAuth 2.0**, **Hệ thống gửi mã OTP qua Gmail SMTP** và **JWT Secret Key**.
>
> Vì lý do bảo mật, file `.env` chứa các khóa bí mật thực tế **KHÔNG ĐƯỢC ĐƯA LÊN GITHUB**.
>
> 👉 Sao chép từ file mẫu `.env.example` và tự điền thông tin của bạn:
> ```bash
> cp .env.example .env
> ```

### 3. Khởi chạy toàn bộ hệ thống với Docker Compose

```bash
# 1. Clone repository về máy
git clone <repository-url>
cd webdulich-mcs

# 2. Chuẩn bị file môi trường (xem bước 2 ở trên)

# 3. Build và khởi động toàn bộ containers
docker-compose up --build -d

# 4. Kiểm tra trạng thái các container
docker-compose ps
```

> 💡 Cơ sở dữ liệu được khởi tạo tự động bằng `db/init.sql` khi container MySQL lần đầu chạy (Database: `vietnamdiscovery`).

### 4. Truy cập ứng dụng

- Mở trình duyệt và truy cập: **`http://localhost:2222`**

### 5. Chạy dịch vụ ở môi trường phát triển (không dùng Docker)

```bash
# Ví dụ với frontend
cd frontend
npm install
npm run dev        # Chạy tại http://localhost:3000

# Ví dụ với một microservice
cd user-service
npm install
npm start
```

---

## 🔑 Tài Khoản Quản Trị Mặc Định

Sau khi import cơ sở dữ liệu từ file `db/init.sql`, hệ thống có sẵn tài khoản quản trị:

- **Username:** `admin`
- **Email:** `admin@vietnamtourism.vn`
- **Role:** `admin`

---

## 🖼️ Hình ảnh giao diện

> *Giao diện được thiết kế theo phong cách hiện đại, nền trắng kết hợp xanh lá đậm và xanh ngọc làm màu thương hiệu.*
>
> *(Bạn có thể chụp màn hình các trang chính: Trang chủ, Khám phá tỉnh thành, Chi tiết địa điểm, Lập lịch trình AI, Trang quản trị và đặt vào thư mục `docs/screenshots/` để hiển thị tại đây.)*

```markdown
![Trang chủ](docs/screenshots/home.png)
![Khám phá tỉnh thành](docs/screenshots/provinces.png)
```

---

## 🧪 Kiểm thử E2E

Dự án có bộ kiểm thử tự động Playwright tại thư mục `e2e/`:

```bash
cd e2e
npm install
npx playwright test
```

---

## 👥 Project Developer & Ghi nhận đóng góp

- **Project Developer:** Nguyễn Trọng Hải Nam
- **Cộng tác viên:** Bùi Nam Khánh, Nguyễn Quang Nam Anh, Phan Quang Minh
- **Nguồn gốc dự án:** Dự án được phát triển dựa trên repo gốc [`webdulich-mcs`](https://github.com/ngocanh2610/webdulich-mcs) của nhóm thực hiện ban đầu, sau đó được rebranding và phát triển tiếp thành **Vietnam Discovery**.

## 📄 Giấy phép

Dự án được phân phối cho mục đích học tập và tham khảo. Vui lòng giữ nguyên thông tin ghi nhận contributors và nguồn gốc dự án khi sử dụng hoặc phân phối lại.
