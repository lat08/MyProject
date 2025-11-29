# Hướng dẫn Triển khai Heroku

## Cấu hình GitHub Sesdcsdccrets

Để tự động triển khai qua GitHub Actions, bạn cần cấu hình các secrets sau:

### Bước 1: Lấy Heroku API Key

1. Đăng nhập vào [Heroku Dashboard](https://dashboard.heroku.com)
2. Vào **Account settings** (click vào avatar → Account settings)
3. Scroll xuống phần **API Key**
4. Click **Reveal** để hiển thị API Key
5. Copy API Key

### Bước 2: Thêm Secrets vào GitHub

1. Vào repository trên GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**

#### Secret 1: HEROKU_API_KEY
- **Name**: `HEROKU_API_KEY`
- **Value**: API Key đã copy ở bước 1
- Click **Add secret**

#### Secret 2: HEROKU_APP_NAME
- **Name**: `HEROKU_APP_NAME`
- **Value**: Tên ứng dụng Heroku của bạn (ví dụ: `myproject-app`)
- Click **Add secret**

### Bước 3: Thêm Secrets tùy chỉnh (nếu cần)

Nếu ứng dụng của bạn cần các biến môi trường bổ sung:

#### DATABASE_URL
- **Name**: `DATABASE_URL`
- **Value**: URL kết nối database
- Sau đó uncomment dòng trong workflow:
  ```yaml
  heroku config:set DATABASE_URL="${{ secrets.DATABASE_URL }}" -a $HEROKU_APP_NAME
  ```

#### API_KEY
- **Name**: `API_KEY`
- **Value**: API key của bạn
- Uncomment trong workflow nếu cần

#### SECRET_KEY
- **Name**: `SECRET_KEY`
- **Value**: Secret key cho authentication
- Uncomment trong workflow nếu cần

## Cấu hình Heroku Config Vars

Bạn có thể cấu hình trực tiếp trên Heroku Dashboard:

1. Vào ứng dụng trên [Heroku Dashboard](https://dashboard.heroku.com/apps)
2. Click vào ứng dụng của bạn
3. Vào tab **Settings**
4. Scroll xuống phần **Config Vars**
5. Click **Reveal Config Vars**
6. Thêm các biến môi trường cần thiết:
   - `NODE_ENV`: `production`
   - `DATABASE_URL`: (nếu có)
   - Các biến khác...

## Kiểm tra Deployment

Sau khi push code lên branch `main`:

1. Vào tab **Actions** trên GitHub
2. Xem workflow đang chạy
3. Kiểm tra các bước:
   - ✅ build-and-test: Chạy tests và build
   - ✅ deploy-heroku: Deploy lên Heroku
4. Nếu thành công, ứng dụng sẽ có tại: `https://YOUR_APP_NAME.herokuapp.com`

## Troubleshooting

### Lỗi: "Invalid credentials"
- Kiểm tra HEROKU_API_KEY đã đúng chưa
- Đảm bảo API Key chưa hết hạn

### Lỗi: "App not found"
- Kiểm tra HEROKU_APP_NAME đúng với tên ứng dụng
- Đảm bảo ứng dụng đã được tạo trên Heroku

### Lỗi: "Permission denied"
- Kiểm tra API Key có quyền truy cập ứng dụng
- Đảm bảo bạn là owner hoặc collaborator của ứng dụng

### Lỗi build trên Heroku
- Kiểm tra `package.json` có đúng scripts
- Kiểm tra Node version trong `package.json` (engines)
- Xem logs: `heroku logs --tail -a YOUR_APP_NAME`

