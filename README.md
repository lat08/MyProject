# MyProject - Next.js với Heroku

Ứng dụng Next.js đơn giản được triển khai trên Heroku với CI/CD tự động.

## Mô tả
Dự án Next.js với tích hợp Heroku deployment và GitHub Actions CI/CD pipeline.

## Tính năng
- ✅ Next.js 14 với React 18
- ✅ Triển khai tự động lên Heroku
- ✅ CI/CD pipeline với GitHub Actions
- ✅ Cấu hình secrets bảo mật
- ✅ Testing với Jest

## Cấu trúc thư mục
- `pages/`: Next.js pages (routing)
- `styles/`: CSS modules và global styles
- `public/`: Static files
- `tests/`: File kiểm thử
- `docs/`: Tài liệu

## Cài đặt Local

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Chạy production server
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

## Testing

```bash
# Chạy tests
npm test

# Chạy tests với coverage
npm run test:coverage
```

## Triển khai lên Heroku

### 1. Chuẩn bị Heroku

1. Tạo tài khoản Heroku tại [heroku.com](https://www.heroku.com)
2. Cài đặt Heroku CLI: [devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)

### 2. Tạo ứng dụng Heroku

```bash
# Login vào Heroku
heroku login

# Tạo ứng dụng mới
heroku create your-app-name

# Hoặc sử dụng ứng dụng đã có
heroku git:remote -a your-app-name
```

### 3. Cấu hình GitHub Secrets

Để tự động triển khai qua GitHub Actions, bạn cần thêm các secrets sau vào GitHub repository:

**Vào Settings → Secrets and variables → Actions → New repository secret**

Thêm các secrets sau:

1. **HEROKU_API_KEY**: 
   - Lấy từ: https://dashboard.heroku.com/account
   - Click vào "Reveal" để xem API Key

2. **HEROKU_APP_NAME**: 
   - Tên ứng dụng Heroku của bạn (ví dụ: `myproject-app`)

3. **Các secrets tùy chỉnh** (nếu cần):
   - `DATABASE_URL`: URL kết nối database
   - `API_KEY`: API key cho các service bên ngoài
   - `SECRET_KEY`: Secret key cho authentication
   - Và các biến môi trường khác...

### 4. Cấu hình Heroku Config Vars

Bạn có thể cấu hình các biến môi trường trực tiếp trên Heroku:

```bash
# Set environment variables
heroku config:set NODE_ENV=production -a your-app-name
heroku config:set DATABASE_URL=your-database-url -a your-app-name

# Xem tất cả config vars
heroku config -a your-app-name
```

Hoặc qua Heroku Dashboard:
- Vào Settings → Config Vars → Reveal Config Vars
- Thêm các biến môi trường cần thiết

### 5. Deploy

#### Deploy thủ công:
```bash
git push heroku main
```

#### Deploy tự động:
Khi push code lên branch `main`, GitHub Actions sẽ tự động:
1. Chạy tests
2. Build ứng dụng
3. Deploy lên Heroku
4. Cấu hình secrets từ GitHub Secrets

### 6. Kiểm tra deployment

```bash
# Mở ứng dụng trong browser
heroku open -a your-app-name

# Xem logs
heroku logs --tail -a your-app-name
```

## GitHub Actions Workflow

Workflow tự động sẽ:
- ✅ Chạy tests trên Node.js 18.x
- ✅ Build ứng dụng Next.js
- ✅ Deploy lên Heroku khi push vào `main`
- ✅ Cấu hình secrets từ GitHub Secrets
- ✅ Tạo test coverage reports

## Bảo mật

⚠️ **Quan trọng**: 
- Không commit các file chứa secrets (`.env`, `.env.local`)
- Sử dụng GitHub Secrets để lưu trữ thông tin nhạy cảm
- Sử dụng Heroku Config Vars cho production secrets
- File `.gitignore` đã được cấu hình để loại trừ các file nhạy cảm

## Troubleshooting

### Lỗi build trên Heroku
```bash
# Kiểm tra logs
heroku logs --tail -a your-app-name

# Kiểm tra Node version
heroku node:version -a your-app-name
```

### Lỗi deployment từ GitHub Actions
- Kiểm tra GitHub Secrets đã được cấu hình đúng
- Kiểm tra HEROKU_API_KEY có quyền truy cập ứng dụng
- Kiểm tra HEROKU_APP_NAME đúng với tên ứng dụng

## Tài liệu tham khảo

- [Next.js Documentation](https://nextjs.org/docs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [GitHub Actions](https://docs.github.com/en/actions)