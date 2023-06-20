/* 
math oject   : không phải là obj contructor
- Math.PI
- Mat.round()
- Math.abs() + trả về giá trị tuyệt đối 
- math.ceil() + làm tròn trên 
-math.floor() + làm tròn dưới 
- math.ramdom() + trả về 1 số ngãu nhiên
- math.min() + lấy về số nhỏ nhất
- Math.max () + lấy về số lớn nhất 
*/
console.log(Math.PI());
console.log(Math.round());
console.log(Math.abs());
console.log(Math.ceil());
console.log(Math.floor());
console.log(Math.random());
console.log(Math.min());
console.log(Math.max());

var ramdom = Math.floor(Math.random() * 5);

var bonus = ["10 coin", "20 coin", "30 coin", "40coin", "50 coin"];

console.log(bonus[ramdom])  ;
