/* 
forIn loop
 + có thể sử dụng cả với object , array hay string 
 + từ khóa In 
 + vòng for chạy bằng key của object đó 
 + gán key dưới dạng chuỗi vào biến key cho chúng ta
 + for In vẫn có thể lấy được số của dạng chuỗi 

 + vòng lặp forIn sẽ gán key của object dưới dạng chuỗi vào biến của vòng lặp
 + chuyền thẳng arr[key] có lấy ra giá trị 
*/
// var myArray = ["sadd", "sadda", "dsadasd", "ẻqwqrwqq"];

// var myInfo = {
//   name: "son dang",
//   age: 18,
//   address: "ha noi , VN",
// };
// for (var key in myInfo) {
//   console.log(Math.random());
// }

// for (var key in myArray) {
//   console.log(myArray[key]);
// }

// var chuoi = "chuoi san pham ";
// for (var key in chuoi) {
//   console.log(key);
// }

// var languages = ["javascript", "php", "ruby", "java"];
// for (var key in languages) {
//   console.log(languages[key]);
// }

function run(object) {
  var mang = [];
  for (var key in object) {
    var full = `thuộc tính ${key} có giá trị ${object[key]}`;
    mang.push(full);
  }
  return mang;
}

// Expected results:
console.log(run({ name: "Nguyen Van A", age: 16 }));
