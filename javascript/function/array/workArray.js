/* 
Mngr trong javascript - aray

1. Tạo Mảng
- cách tạo 
+ cách 1 : 
+ cách 2 : sử dụng từ khóa new và đối tượng array đưa các phần tử vào trong dấu ngoặc tròn () 
- sử  dụng khi nào ? Tại sao ? 

- kiểm tra data type ? 
is array () kiểm tra true tức là đúng 

2. truy xuất mảng 
-Độ dài mảng 
_lấy phần tử theo index

lưu ý : Array có thể lưu tất cả kiểu dữ liệu
+ khuyến cáo không sử dụng cách 2 vì tạo ra intance  và thực thi chậm hơn cách 1
*/

var languages = ["php", "html", "ruby", 123, NaN];

var languages2 = new Array();

console.log(typeof languages);

languages[1];

languages.push(languages);
console.log(languages);
