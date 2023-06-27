/* 
for loop
+ ứng dụng vong lặp for lấy phần từ của 1 mảng ra
+ giải thích vòng lặp  
(
    + khai báo biến nhằm mục đích lấy index của mảng 
    + điều kiện 2 sẽ xác định đc độ dài mảng 
    + điều kiện 3 giúp tăng vị trí index trong mảng
    + khối lệnh thực thi : gọi biến i vào nằm trong cú pháp truy xuất mảng giúp luôn lấy đúng giá trị  
    
* lưu ý : nói về hiệu năng thi sẽ chậm và không đc nhanh vì phải đọc lại độ dài mảng 
+ cách xử lý tách nó ra ngoài : var arrayleangth = myArray.length
+ vì code nó sẽ chạy từ trên xuống dưới nên nó sẽ chỉ đọc 1 lần 
vì đã lưu cái thuộc tính lại rồi không cần xem lại length nữa
) */

var myArray = ["javascript", "php", "java", "dart"];

var arraylength = myArray.length;
for (var i = 0; i < arraylength; i++) {
  console.log(myArray[i]);
}
