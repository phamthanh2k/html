/* 
các loại function 
1 .declaration function
+ cú pháp : function tên function (){}
+ có thể được gọi trước khi định nghĩa 
2. expression function
+ cú pháp : 
+ định nghĩa 1 biến  = gán ,function không cần đặt tên 
+ hoặc đc định nghĩa dưới dạng tham số
+ hoặc key đc gán value dưới dạng expression function
+ mục đính đặt tên  là cho dễ hiểu
+ khác nhau về thực thi : không thể gọi trước khi định nghĩa  
3. arrow function  */

function myFunction() {}

var expression = function () {};

setTimeout(function () {});

var myObject = {
  myfunction: function () {},
};
