# H2Script
## Giới thiệu
### Các chức năng:
- Block newsfeed thay thế bằng các câu ca dao, tục ngữ và thành ngữ của Việt Nam
- Gửi tin nhắn hàng loạt facebook messenger (chỉ hoạt động tại m.facebook.com) [thường dùng để chúc Tết]
- Lấy mã màu (đúng kiểu chỉ để làm màu)
## Hướng dẫn ([video](https://youtu.be/IBDeIA2s0wM))
### Bước 1:
#### Tải file json có khoảng 2,4k câu ca dao tục ngữ [ca-dao-tuc-ngu.json](https://github.com/iHoala/blogshare/blob/master/ca-dao-tuc-ngu.json)
### Bước 2:
#### Tạo realtime database bằng firebase (mọi người tự tim hiểu)
#### Nếu không có thể lên [H2Co Blog](https://www.h2.io.vn/) để tìm, mình đã có chia sẻ
### Bước 3:
#### Import file json vừa tải ở Bước 1 vào firebase

![image](https://github.com/iHoala/H2Script/assets/104571272/ca444a4d-6a42-46b4-ab81-0638fbc825f5)

#### Sau đó copy firebase url và thay thế vào trong extension tại file `src/content.js`

![image](https://github.com/iHoala/H2Script/assets/104571272/d49d90b8-2a1f-4a9b-a251-335abb144a10)

## Cuối cùng là tận hưởng thôi
