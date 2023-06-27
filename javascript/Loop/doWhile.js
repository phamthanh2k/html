/* do while
+ khi bắt đầu chạy nó sẽ lọt đoạn mã vào do trước
+ while dùng để đưa điều kiện vào trong này 
+ khác với vong lặp while với for là sẽ kiểm tra điều kiện từ vòng lặp 2 trở đi 
lưu ý : khi viết  vòng lặp phải tăng hặc giảm giá trị của biến , tránh cái việc trình duyệt bị treo

tính ứng dụng : nạp thẻ cào khi người dụng nhập mã thẻ cào và ấn nut nạp thẻ
trường hợp mạng yếu thì  re tuy  lại 3 lần 
nếu 3 lần thất bại thì mới thôi
vòng do while luôn chạy ít nhất 1 lần khi thất bại mới thử lại thôi
 */

var i = 0;
var isSucess = true;
do {
  i++;

  if (true) {
    console.log("đang nhap thanh cong " + i);
  }
} while (i <= 3 && !isSucess);
