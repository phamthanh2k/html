/* 
làm việc với mảng 
keyword : javascript array methor

1.toString  
+ chuyển đổi array sang chuỗi 
+ không thể bỏ dấu phẩy vì tự động đưa dấu phẩy
2. join
+ biến array thành 1 chuỗi 
+ chuyền 1 ký tự vào thì nó sẽ lấy ký tự đó đưa vào giữa 2 giá trị 

==========================tương tác với array sâu hơn
3. pop 
+ xóa đi phần tử cuối bảng
+ trả về các phần tử dã xóa 
+ mảng gốc không còn phần tử đã xóa
+  khi đã xóa hết cả mảng thì chả ra là undefined
4. push
+ thêm 1 hoặc nhiều phần tử vào cuối mảng
5. shift
+ xóa 1 phần tử ở đầu mảng  và trả về phần tử đã xóa
+ và phần sau tương tự như pop
6.unshift 
+ thêm 1 hoặc nhiều phần tử mới vào đầu mảng 
 và trả về độ dài phần tử mới của mảng
7. splicing
+ xóa ,cắt ,hoặc chèn phần tử mới vào mảng
+ tham số  : 1 chọn vị trí con trỏ đi vào 
 2 : số lượng cần xóa bắt đầu vị trí đó
tham số thứ 3 : chèn  dựa vào tham số thứ nhất , nằm ở vị trí ở tham số 1
+ khi sử dụng sẽ là splice
//  Lưu ý : kết hợp 3 tham số  : languager.splice(1, 2, "dart","java");
8. concat 
+  nối 2 mảng 
+  cách dụng : đưa tham số là array cần nối vào 
9 .slicing : lấy ra 1 vài phần tử của mảng
+ cắt 1 vài phần tử hoặc toàn bộ mảng 
+ tham số 1 vị trí bắt đầu cắt và tham số 2 ngừng cái vị trí cắt
+ muốn cắt toàn bộ phía sau thì chỉ cần  dùng tham số đầu 
+ lấy ra phần tử cuối mảng thì đếm phần tử cuối mảng bắt đầu từ 0 
*/

var languager = ["javascript", "php", "nodejs"];
var languager2 = ["php ", "c#"];

// console.log(languager.join());

// console.log(languager.pop());
// console.log(languager.push("dart", "java"));

// console.log(languager.shift());
// console.log(languager.unshift("dart", "java"));
// languager.splice(1, 0, "dart");

// console.log(languager.concat(languager2));

console.log(languager.slice(1, 2));
