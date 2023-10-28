# H2Script
## Giới thiệu
### Các chức năng:
- Block newsfeed thay thế bằng các câu ca dao, tục ngữ và thành ngữ của Việt Nam
- Gửi tin nhắn hàng loạt facebook messenger (chỉ hoạt động tại [m.facebook.com](https://m.facebook.com)) [thường dùng để chúc Tết]
- Lấy mã màu (đúng kiểu chỉ để làm màu)
## Hướng dẫn ([video](https://youtu.be/IBDeIA2s0wM))
### Bước 1:
#### Tải Extension về và giải nén ra [https://github.com/iHoala/H2Script/archive/refs/heads/main.zip](https://github.com/iHoala/H2Script/archive/refs/heads/main.zip)
![image](https://blogger.googleusercontent.com/img/a/AVvXsEi_kCCIlruCNS5Cy9PPWphlSt8elhqVh-q89rwFNI4cPBcv6d0HowJrr1uo4ySDSoNil08wQOPbWkVfAXTq0e7uOXIizVibWukb37d2N_I0nvBTYyeaHMkpqpY5WIoc3QcgEmK9Au1IDSVbeUeeiKnAL3nwKkNYzLPLCMqKhpKADgjHyFZ4pe9hXUXupHE)
### Bước 2:
#### Tại thanh tìm kiếm của trình duyệt gõ [chrome://extensions](chrome://extensions)
#### Phía bên góc phải trên của trình duyệt, để ý phần `Developer mode` (Chế độ cho nhà phát triển) => bật lên
![image](https://blogger.googleusercontent.com/img/a/AVvXsEjkunJPntnhahCr8zHvHrYWpLkdT81bgW1gKERW0ItHKNyAXu4veRndZTmrFaAinon70ek6zYZU-ArwzNjpwBwshkeGDWdd6QrTIcE5BnYKa2yDCAGaphX0KAgHcqPboAZp8jDkSod73myZ7T5zZId8A6wuAbzBhIFDxxnjqBMwXOzo3wYQys_soQRKPWo)
#### Tiếp theo đó bên góc trái sẽ hiện lên phần `Load Unpacked` => click vào, trỏ đến folder của Extension vừa giải nén => Select Folder
![image](https://blogger.googleusercontent.com/img/a/AVvXsEigs8YTD49YPphX4SGOZ1J6BizmerQqop97q5-5G7hqZDNcC9ElggwngVxOegl9NAJ5G7PZLoDaDCh35d9uVcWcGlRoH8BZYkLT7j2rYNQleX_ZfOdAiUaj4vAIZcbfmGtbMKAfpA2OkaYEaEI6ahQTL8dlsKgVQzml5hy6JKDceEFYjVuruHqcm-vHj_o)
![image](https://blogger.googleusercontent.com/img/a/AVvXsEjLZ2qm-IlG9Ymwha8lfYUY90dlAoJkk3FfVl3YRkiCSfsxzWnCbsTAhXKIqr1QaX4YfvybIZlli-iM8YMrJ3037LGDNtAXz5oQSeJxWGXcJ2vVVYbRY6RnDO1SR6RUBtPSO-AH3N5rTYBRORimTJZbCDCdROTQhC5Azv2HvJbzH928pT1uBrtGnHTnKj8)
#### Như thế này là đã thành công
![image](https://blogger.googleusercontent.com/img/a/AVvXsEhRCqODaV3xLuqCMLc-VygArnVkejBKaBetLLHmMJUhBJbZG1rwlbst9DpHBeOHTt95gDb-4z6uFUGzO4YF83YVv7nQGqUEK_i7nh4OJ452ZXee-8sUQVpkf9s13lP1xJnMUbbH68wiMaGIWh0HJ-XQdSfkE9rWS_ivvBdvc_Ly71tKsynu9x7M6YRLYyE)
#### Bước 3
#### Ghim Extension lên thanh công cụ bằng cách chọn ô Extension góc phải trên cùng thanh công cụ
![image](https://blogger.googleusercontent.com/img/a/AVvXsEiK4NnCBdnTSnH1LnXABXJ4K_aYE-lAPVy4Hyfe0VRgxawmU5gT-H5yP1Lqa2KNstwhnZ94dYJR14wlY7yI9RfojTaxAMpsnJuFGEZljyM1QSA7G8OFe9GMhU1NswpEZusPg7xSG9GMAaGf7WuTQu-ap6BwJvXCfSlp6MlViqwxXo8_1nJ6F7CZ6bT3krA)
### Bước 4:
#### Tải file json có khoảng 2,4k câu ca dao tục ngữ [ca-dao-tuc-ngu.json](https://github.com/iHoala/blogshare/blob/master/ca-dao-tuc-ngu.json)
### Bước 5:
#### Tạo realtime database bằng firebase (mọi người tự tim hiểu)
#### Nếu không có thể lên [H2Co Blog](https://www.h2.io.vn/) để tìm, mình đã có chia sẻ
### Bước 6:
#### Import file json vừa tải ở Bước 1 vào firebase

![image](https://blogger.googleusercontent.com/img/a/AVvXsEj-AasbtSpUsk5Vt-lthTidR8Sa3EZH8bxz8noriMDpSOQRt0sgVyweodE0uxUKjoOZHcs8RUQi2KcZvtqp-wtwbWbHU-1XJBV6oAyJcPfEV5PR_B-mtsIWmdaRaTLtO-RjWPNZMtaZjhvrDhib3f1TLCZA5rkfMCW4k8nFAI6s3m7slZFBfdjt2Yr7Qd0)

#### Sau đó copy firebase url và thay thế vào trong extension tại file `src/content.js`

![image](https://blogger.googleusercontent.com/img/a/AVvXsEh5HZC7Fq1VkeknrvaiIpbWIjzjssTNU3CTX7Hhdeohdc8591lA3WvFzu5vnNmjuFayz4NA3p6R6XNKkwmPmaUqCrdXPIc2T2jdZbhBU5F7Yqjq_XGNrh2xFwkIz3JyzOvyEC7Yb2ym7EwTDpiZprSRATdaetNvO70aPEKDp4MHrTJMa4GlxXfSX1st0q4)

## Cuối cùng là tận hưởng thôi
