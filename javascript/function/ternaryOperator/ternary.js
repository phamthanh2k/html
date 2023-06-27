/* 
toán tử 3 ngôi : tưc là có 3 vế 
 + vế 1 : điều kiện đúng thì lấy giá trị vế 2
 + vế 2 : in ra giá trị nếu vế 1 đúng 
 + vế 3 : in ra giá trị nếu vế 1 không đúng
  ==>vế 1 ? vế 2 : vế 3

bài toán : với coin lớn hơn không in ra giá coin
 coin bằng 0 : inra là miễn phí \

+ khi nào nên sử dụng : 
khi bài toán đơn giản không phức tạp thì sử dụng  trông code sẽ trở lên gọn mắt hơn 

 */

var course = {
  name: "javascrip",
  coin: 250,
};
// if (course.coin > 0) {
//   console.log(`${court.coin} coins`);
// } else {
//   console.log("miễn phí");
// }

var result = course.coin > 0 ? `${course.coin} Coins` : "miễn phí";
console.log(result);

// ví dụ nếu a>b thì lấy giá trị của a còn ngược lại lấy giá trị của b
var a = 1;
var b = 2;
var c = a > b ? a : b;

console.log(c);
