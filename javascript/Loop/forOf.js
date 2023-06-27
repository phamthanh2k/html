/* 
for of  loop
+ có thể sử dụng mảng , string  , object
+ đối với chuỗi mỗi lần lặp sẽ tách ra 1 chữ
+ đối với object  
(
    + khi đưa vào sinh ra lỗi vì nó không phải đối tượng để lặp
    + cách xử lý để lấy giá trị của object của for of
    + sử dụng đối tượng Object.keys(truyền vào biến đối tượng) (hàm keys để lấy key của object)
    sẽ trả về 1 mảng các key 
    + lấy đc key thì có thể index giá trị ra 
    + cách 2 sử dụng  Object.values(truyền vào biến đối tượng) (hàm values để lấy value của object)
    gọi ra là sẽ in values ra 
)
*/
var languages = ["javascript", "php", "html", "css"];
var languages1 = "javascript";
var languages2 = {
  name: "javascrip",
  age: 18,
  address: "hanoi,vn",
};

for (var value of languages) {
  console.log(value);
}
