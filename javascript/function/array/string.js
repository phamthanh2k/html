/* 
chuỗi trong javasscrip 
1. tạo chuỗi 
- các cách tạo chuỗi 
+ cách 1   var chuỗi = ''
+ cách 2 sử dụng đối tượng string và thêm từ khóa new 
nên dùng cách nào ? lý do ? 
 khi sử dụng từ khóa new thì sẽ tạo ra kiểu dữ liệu object
_ kiểm tra datatype 
2 . một  số case sử dụng backlash (\)
3. xe độ dài chuỗi 
sử dụng thuộc tính length để xem độ dài chuỗi 
4 . chú ý độ dài viết chuỗi 
+  chuỗi quá dài nên sử dụng toán tử nối chuỗi và xuống dòng 
5. template string es6 
+ sử dụng 2 dấu `` 
+ sủ dụng dấu ${đưa biến vào đây}
+ kiểu dữ liệu bắt buộc là string : không thì convert sang string
*/
// backslash để in ra dấu nháy
var fullName = "day la dau";

console.log(fullName.length);

var firstName = "son";
var lasName = "dang";
console.log(`toi la : ${firstName} + ${lasName} `);
