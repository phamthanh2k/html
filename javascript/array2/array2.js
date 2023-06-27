/*
 
array methods : các phương thức này tham số nhận vào là 1 hàm
forEach() : duyệt qua từng phần tử của mảng 
every(): kiểm tra tất  cả các phần tử phải thỏa mãn 1 điều kiện gì đó
+ nếu tất cả đúng thì trả về true , 1 không đúng thì chả về false
+ kiểu dữ liệu chả về boolean
+ return rất quan trọng với every()
some(): nguyên tắc hoạt động nó cũng giống nhau trả lại phần tử đã duyệt qua và cái index
+ chỉ cần 1 ô trong mảng thỏa mãn điều kiện là đúng
+ ngừng lại cái vòng lặp ngay khi kiểm tra kết quả là đúng
+ muốn thỏa mãn điều kiện ngay thì lên sử dụng  
find(): để tìm kiếm 
+ nguyên tắc hoạt động là lọc qua từng phần tử và nó được function gọi lại 
và trả về cho từng phần tử 
+ phần tử nào return true lấy phần tử đó, dừng lại việc kiểm tra
+ nếu không có phần tử nào thì nó trả về undefined
+ luôn trả về 1 đối tượng thôi 
filter(): tìm kiếm trả về tất cả phần tử thỏa mãn
map()
+ duyệt qua từng phần tử của mảng 
+ mỗi khi duyệt qua phần tử nào thì nó sẽ gọi lại function 
+ lặp cho đến hết array 
+ function có 3 tham số course , index , originArray 
+ thường sử ụng 2 tham số đầu 
+ ứng dụng thực tế
reduce()
+ ứng dụng : muốn nhận về 1 giá trị duy nhất 
+ khái niệm callback : hàm đucợ truyền vào như tham số (tạm gọi la callback)
*/

var courses = [
  {
    id: 1,
    name: "javascript",
    coin: 250,
  },

  {
    id: 2,
    name: "html, css",
    coin: 0,
  },
  {
    id: 3,
    name: "ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "php",
    coin: 400,
  },
  {
    id: 5,
    name: "java",
    coin: 500,
  },
];

/* courses.forEach(function (conrse, index) {
  console.log(index, conrse);
}); */

/* var isFree = courses.every(function (conrse, index) {
  return conrse.coin === 0;
});

console.log(isFree); */

/* var isFree = courses.some(function (conrse, index) {
  return conrse.coin === 0;
});

console.log(isFree); */

/* var isFree = courses.find(function (conrse, index) {
  return conrse.name === "ruby";
});

console.log(isFree); */

var listIsFree = courses.filter(function (conrse, index) {
  return conrse.name === "ruby";
});

console.log(listIsFree);

// ======= map
// function conrseHandler(a, index, originArray) {
//   return `<h2>${a.name}</h2> `;
// return {
//   id: a.id,
//   name: ` ${a.name}`,
//   coin: a.coin,
//   coinText: `Gia: ${a.coin}`,
//   index: index,
//   originArray: a
// };
// }
// var newCourses = courses.map(conrseHandler);

// console.log(newCourses.join());

// ================== function reduct()

/* 
so sánh  for với các hàm trên 
1 . dễ hiểu : for sẽ dễ hiểu hơn vì 2 cũng làm quen nó 
2. ngắn gọn : phương thức trên sẽ ngắn gọn hơn vì nó sinh ra để làm cho code ngắn gọn 
3 .hiệu năng : for sẽ giúp hiệu năng  nhanh hơn

// biến lưu trữ 
// thực hiện lưu trữ 

luồng reduce()
+ bên trong reduce là vòng lặp
+ khi duyệt các phần tử trong mảng sẽ gọi ngược ra function
+ đối số thứ 2 là giá trị khởi tạo : có thể là số , string ,array ,object
và đc gán cho biến lưu trữ
+ đối số thứ nhất là biến lưu trữ 
+ trong function : curentValue nhận đc giá trị mà reduce
curentValue  là chỉ mục của chính thằng curentValue 
*/

// nhận 2 đối số : function là đối số bắt buộc
function coinHandler(accumulator, curentValue,curentIndex) {}
var totalCoin = courses.reduce(coinHandler, 0);
