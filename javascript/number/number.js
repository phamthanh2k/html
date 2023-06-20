/* 
kiểu số (number) trong javascript
1. tạo giá trị Number 
- các cách tạo 
_ dùng cách nào ? tại sao ? 
- kiểm tra data type 
2. làm việc với Number 
- to string : chuyển đổi kiểu số sang dạng chuỗi 
- to fixed : làm tròn số (dưới 0.5 về 0 còn 0.5 trở lên thì về 1)
+ rút gọn số thập phân lại  
+ cách dùng đưa số vào trong dấu ngoặc tròn*/

/* 
+ tránh cái từ khóa new 
*/

// keyword : javascrip number

var age = 18;
var PI = 3.14;

var otherNumber = new Number(9);

console.log(typeof otherNumber);

/*
 hiển thị ra giá trị NaN   
var result = 20 / "avc";
console.log(isNaN(result)); */

console.log(PI.toFixed());
